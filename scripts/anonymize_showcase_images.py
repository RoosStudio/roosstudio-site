"""
Entpersonalisierung der Showcase-Screenshots (lokaler Batch vor Deploy).
WireTrack: Kopfzeile mit Namen + Kachel «Mein Profil».
Kristall Arena: Podest-Namen + untere Rangliste.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
WEB = ROOT / "roos-studio-branding" / "website"


def blur_region(im: Image.Image, box: tuple[int, int, int, int], radius: int = 16) -> None:
    x0, y0, x1, y1 = box
    x0, y0 = max(0, x0), max(0, y0)
    x1, y1 = min(im.width, x1), min(im.height, y1)
    if x1 <= x0 or y1 <= y0:
        return
    crop = im.crop((x0, y0, x1, y1))
    blurred = crop.filter(ImageFilter.GaussianBlur(radius=radius))
    im.paste(blurred, (x0, y0))


def anonymize_wiretrack(path: Path) -> None:
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    # Begrüssung, Suche, Benachrichtigungen (oben)
    blur_region(im, (0, 0, w, int(h * 0.26)), radius=22)
    # Status-Pills unter dem Header
    blur_region(im, (0, int(h * 0.24), w, int(h * 0.34)), radius=14)
    # «Mein Profil» ~ 2. Spalte, untere Reihe im Schnellzugriff
    blur_region(
        im,
        (int(w * 0.24), int(h * 0.70), int(w * 0.50), int(h * 0.88)),
        radius=18,
    )
    im.save(path, "PNG", optimize=True)


def anonymize_kristall(path: Path) -> None:
    im = Image.open(path).convert("RGBA")
    w, h = im.size
    # Scanner-Zeile kann Geräte-/Session-Hinweise haben
    blur_region(im, (0, int(h * 0.14), w, int(h * 0.24)), radius=12)
    # Podest: drei Team-Bereiche (Mitte der Karten)
    blur_region(im, (int(w * 0.06), int(h * 0.36), int(w * 0.34), int(h * 0.58)), radius=14)
    blur_region(im, (int(w * 0.34), int(h * 0.30), int(w * 0.66), int(h * 0.62)), radius=14)
    blur_region(im, (int(w * 0.66), int(h * 0.38), int(w * 0.94), int(h * 0.58)), radius=14)
    # Liste ab Platz 4 (nur mittlerer Block, Footer bleibt lesbar)
    blur_region(im, (0, int(h * 0.70), w, int(h * 0.94)), radius=12)
    im.save(path, "PNG", optimize=True)


def main() -> None:
    wt = WEB / "wiretrack-dashboard.png"
    ka = WEB / "kristall-arena.png"
    if wt.is_file():
        anonymize_wiretrack(wt)
        print("OK wiretrack-dashboard.png")
    else:
        print("Skip wiretrack (fehlt)")
    if ka.is_file():
        anonymize_kristall(ka)
        print("OK kristall-arena.png")
    else:
        print("Skip kristall (fehlt)")


if __name__ == "__main__":
    main()
