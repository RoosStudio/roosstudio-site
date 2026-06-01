import { motion, useReducedMotion } from 'framer-motion'
import { site, type Example } from '../../content/site'
import { useProductTeaser } from '../../context/ProductTeaserContext'
import { EASE } from '../../lib/motionPresets'

export function HeaderAppTeasers() {
  const reduce = useReducedMotion()
  const { activeId, setActiveId } = useProductTeaser()

  return (
    <div className="rs-header-teasers border-t border-rs-border/40 px-3 py-2 sm:px-5">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto sm:gap-2.5">
        <span className="hidden shrink-0 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-rs-muted sm:inline">
          Apps
        </span>
        {site.examples.map((app) => (
          <TeaserChip
            key={app.id}
            app={app}
            active={app.id === activeId}
            onSelect={() => setActiveId(app.id)}
            reduce={reduce}
          />
        ))}
      </div>
    </div>
  )
}

function TeaserChip({
  app,
  active,
  onSelect,
  reduce,
}: {
  app: Example
  active: boolean
  onSelect: () => void
  reduce: boolean | null
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      className={`rs-header-teaser ${active ? 'rs-header-teaser--active' : ''}`}
      whileHover={reduce ? undefined : { y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      aria-pressed={active}
      aria-label={`${app.name} anzeigen`}
    >
      <img
        src={app.image}
        alt=""
        className="rs-header-teaser-img"
        width={64}
        height={40}
        loading="lazy"
        decoding="async"
      />
      <span className="rs-header-teaser-name">{app.name}</span>
    </motion.button>
  )
}

export function HeroAppBackdrop() {
  const reduce = useReducedMotion()
  const { active } = useProductTeaser()

  return (
    <div className="rs-hero-app-backdrop pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.img
        key={active.id}
        src={active.image}
        alt=""
        className="rs-hero-app-backdrop-img"
        initial={reduce ? { opacity: 0.35 } : { opacity: 0, scale: 1.15 }}
        animate={{ opacity: 0.42, scale: 1.08 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.85, ease: EASE }}
      />
      <div className="rs-hero-app-backdrop-scrim" />
    </div>
  )
}
