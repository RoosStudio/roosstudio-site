import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { site, type TestEnvironment } from '../../content/site'
import { EASE, springSoft } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

const cardV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.5, ease: EASE },
  }),
}

export function TestLabSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="tests"
      className="rs-section-scroll-mt rs-section-border bg-rs-surface/30 rs-section-y"
      aria-labelledby="tests-heading"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{site.testlab.sectionEyebrow}</p>
          <h2 id="tests-heading" className="rs-section-title">
            {site.testlab.sectionTitle}
          </h2>
          <p className="rs-section-lede max-w-3xl">{site.testlab.lede}</p>
        </SectionReveal>

        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-6">
          {site.testlab.environments.map((env, index) => (
            <motion.div
              key={env.id}
              custom={index}
              initial={reduce ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.22 }}
              variants={cardV}
              className={index === 0 ? 'lg:row-span-2' : undefined}
            >
              <EnvironmentCard env={env} featured={index === 0} />
            </motion.div>
          ))}

          <motion.div
            custom={2}
            initial={reduce ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.28 }}
            variants={cardV}
          >
            <DeployPanel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function EnvironmentCard({ env, featured }: { env: TestEnvironment; featured?: boolean }) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className={`rs-surface-card flex h-full flex-col p-6 sm:p-7 ${
        featured ? 'border-rs-primary/25' : ''
      }`}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={springSoft}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-rs-primary">
            {env.kicker}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-rs-text sm:text-3xl">
            {env.name}
          </h3>
        </div>
        <span className="rounded-full border border-rs-primary/20 bg-rs-primary/8 px-3 py-1 text-xs font-medium text-rs-primary">
          {env.status}
        </span>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-rs-text-secondary sm:text-base">
        {env.description}
      </p>

      <div className="mt-5 rounded-lg border border-rs-border bg-rs-bg/60 px-3.5 py-2.5 font-mono text-xs text-rs-text-secondary sm:text-sm">
        {env.urlLabel}
      </div>

      <div className="mt-5 min-h-0 flex-1">
        {env.image ? <TestImage env={env} /> : <NexPlayPreview />}
      </div>

      <ul className="mt-5 flex flex-wrap gap-2" role="list">
        {env.bullets.map((bullet) => (
          <li
            key={bullet}
            className="rounded-full border border-rs-border bg-rs-bg/40 px-3 py-1.5 text-sm text-rs-text-secondary"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

function TestImage({ env }: { env: TestEnvironment }) {
  if (!env.image) return null

  return (
    <figure className="overflow-hidden rounded-lg border border-rs-border bg-rs-card">
      <img
        src={env.image}
        alt={env.alt}
        loading="lazy"
        decoding="async"
        width={1200}
        height={760}
        className="aspect-[16/9] w-full object-cover object-top"
      />
    </figure>
  )
}

function NexPlayPreview() {
  return (
    <div className="relative flex min-h-56 overflow-hidden rounded-lg border border-rs-border bg-rs-card p-5">
      <div className="relative z-10 flex w-full flex-col">
        <div className="flex items-center justify-between border-b border-rs-border pb-4">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-rs-primary">
              Preview Slot
            </p>
            <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-rs-text">NexPlay</p>
          </div>
          <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-rs-text-secondary">
            geplant
          </span>
        </div>

        <div className="mt-5 grid flex-1 grid-cols-2 gap-3">
          {['Lobby', 'Content', 'Score', 'Live'].map((label, index) => (
            <div
              key={label}
              className="flex min-h-16 flex-col justify-between rounded-lg border border-rs-border bg-rs-bg/50 p-3"
            >
              <span className="font-mono text-[0.65rem] text-rs-muted">0{index + 1}</span>
              <span className="text-sm font-medium text-rs-text-secondary">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 h-1 overflow-hidden rounded-full bg-rs-border">
          <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-rs-primary to-rs-accent" />
        </div>
      </div>
    </div>
  )
}

function DeployPanel() {
  return (
    <aside className="rs-surface-card h-full p-6 sm:p-7">
      <p className="text-xs font-medium uppercase tracking-[0.1em] text-rs-primary">
        Server-Logik
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-rs-text sm:text-2xl">
        Eine klare Linie vom Test zur Live-Seite.
      </h3>
      <dl className="mt-6 space-y-3">
        {site.testlab.rules.map((rule) => (
          <div
            key={rule.label}
            className="rounded-lg border border-rs-border bg-rs-bg/40 px-4 py-3.5"
          >
            <dt className="text-sm font-semibold text-rs-text">{rule.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-rs-text-secondary">{rule.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
