#!/usr/bin/env bash
set -Eeuo pipefail

APP_NAME="${APP_NAME:-roosstudio-site}"
BRANCH="${BRANCH:-main}"
HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-4173}"
SYSTEMD_SCOPE="${SYSTEMD_SCOPE:-user}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
STATE_DIR="$ROOT_DIR/.deploy"
PID_FILE="$STATE_DIR/$APP_NAME.pid"
LOG_FILE="$STATE_DIR/$APP_NAME.log"
SERVICE_NAME="$APP_NAME.service"

cd "$ROOT_DIR"
mkdir -p "$STATE_DIR"

log() {
  printf '\n[%s] %s\n' "$(date '+%H:%M:%S')" "$*"
}

need_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Fehlt: $1"
    exit 1
  fi
}

node_major="$(node -p "Number(process.versions.node.split('.')[0])" 2>/dev/null || echo 0)"

need_command git
need_command node
need_command npm

if [ "$node_major" -lt 20 ]; then
  echo "Node.js >= 20 wird benötigt. Aktuell: $(node -v 2>/dev/null || echo unbekannt)"
  exit 1
fi

log "Synchronisiere $BRANCH"
git fetch origin "$BRANCH"

if ! git diff --quiet || ! git diff --cached --quiet || [ -n "$(git ls-files --others --exclude-standard)" ]; then
  backup_name="deploy-backup-$(date '+%Y%m%d-%H%M%S')"
  log "Lokale Änderungen gefunden, lege Sicherheits-Stash an: $backup_name"
  git stash push -u -m "$backup_name" >/dev/null
fi

git reset --hard "origin/$BRANCH"

log "Installiere Pakete"
if [ -f package-lock.json ]; then
  npm ci --include=dev
else
  npm install --include=dev
fi

log "Baue Production-Version"
npm run build

write_service_file() {
  local service_path="$1"
  local run_user="${2:-}"
  local wanted_by="${3:-default.target}"
  local user_line=""

  if [ -n "$run_user" ]; then
    user_line="User=$run_user"
  fi

  cat > "$service_path" <<SERVICE
[Unit]
Description=Roos Studio Homepage
After=network.target

[Service]
Type=simple
$user_line
WorkingDirectory=$ROOT_DIR
Environment=NODE_ENV=production
Environment=HOST=$HOST
Environment=PORT=$PORT
ExecStart=/usr/bin/env bash -lc 'exec npm run preview -- --host "\$HOST" --port "\$PORT"'
Restart=always
RestartSec=5

[Install]
WantedBy=$wanted_by
SERVICE
}

systemd_user_available() {
  command -v systemctl >/dev/null 2>&1 && systemctl --user show-environment >/dev/null 2>&1
}

enable_linger_if_possible() {
  if ! command -v loginctl >/dev/null 2>&1; then
    return
  fi

  if loginctl show-user "$USER" -p Linger 2>/dev/null | grep -q 'Linger=yes'; then
    return
  fi

  if command -v sudo >/dev/null 2>&1 && sudo -n true >/dev/null 2>&1; then
    sudo loginctl enable-linger "$USER" >/dev/null 2>&1 || true
  else
    echo "Hinweis: Für Autostart nach Logout einmal ausführen: sudo loginctl enable-linger $USER"
  fi
}

start_with_systemd_user() {
  local service_dir="${XDG_CONFIG_HOME:-$HOME/.config}/systemd/user"
  local service_path="$service_dir/$SERVICE_NAME"

  log "Konfiguriere systemd User-Service: $SERVICE_NAME"
  mkdir -p "$service_dir"
  write_service_file "$service_path"

  systemctl --user daemon-reload
  systemctl --user enable "$SERVICE_NAME" >/dev/null
  systemctl --user restart "$SERVICE_NAME"
  enable_linger_if_possible
}

start_with_systemd_system() {
  local tmp_service="$STATE_DIR/$SERVICE_NAME"
  local service_path="/etc/systemd/system/$SERVICE_NAME"
  local run_user="${SERVICE_USER:-$(id -un)}"

  log "Konfiguriere systemd Service: $SERVICE_NAME"
  write_service_file "$tmp_service" "$run_user" "multi-user.target"

  if [ "$(id -u)" -eq 0 ]; then
    install -m 0644 "$tmp_service" "$service_path"
    systemctl daemon-reload
    systemctl enable "$SERVICE_NAME" >/dev/null
    systemctl restart "$SERVICE_NAME"
  elif command -v sudo >/dev/null 2>&1 && sudo -n true >/dev/null 2>&1; then
    sudo install -m 0644 "$tmp_service" "$service_path"
    sudo systemctl daemon-reload
    sudo systemctl enable "$SERVICE_NAME" >/dev/null
    sudo systemctl restart "$SERVICE_NAME"
  else
    echo "Kein sudo ohne Passwort verfügbar. Nutze User-systemd oder Fallback."
    return 1
  fi
}

start_with_pid() {
  log "Starte im Hintergrund auf $HOST:$PORT"
  if [ -f "$PID_FILE" ]; then
    old_pid="$(cat "$PID_FILE" 2>/dev/null || true)"
    if [ -n "$old_pid" ] && kill -0 "$old_pid" >/dev/null 2>&1; then
      kill "$old_pid" >/dev/null 2>&1 || true
      sleep 1
    fi
  fi

  nohup npm run preview -- --host "$HOST" --port "$PORT" >"$LOG_FILE" 2>&1 &
  echo "$!" > "$PID_FILE"
}

if [ "$SYSTEMD_SCOPE" = "system" ]; then
  start_with_systemd_system || start_with_pid
elif systemd_user_available; then
  start_with_systemd_user
else
  echo "systemd --user ist in dieser SSH-Session nicht verfügbar. Starte mit Fallback."
  start_with_pid
fi

log "Fertig"
echo "Lokal erreichbar: http://$HOST:$PORT"
if command -v systemctl >/dev/null 2>&1 && systemctl --user is-active "$SERVICE_NAME" >/dev/null 2>&1; then
  echo "Status: systemctl --user status $SERVICE_NAME"
  echo "Logs:   journalctl --user -u $SERVICE_NAME -f"
else
  echo "Log: $LOG_FILE"
fi
