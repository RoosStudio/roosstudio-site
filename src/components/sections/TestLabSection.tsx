import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { site, type TestEnvironment } from '../../content/site'
import { EASE, springSoft } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

const cardV: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.99 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.08 * i, duration: 0.55, ease: EASE },
  }),
}

export function TestLabSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="tests"
      className="rs-section-scroll-mt rs-section-border bg-[linear-gradient(180deg,#050505_0%,#08100d_52%,#050505_100%)] rs-section-y"
      aria-labelledby="tests-heading"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold" useSpring>
          <p className="rs-eyebrow">{site.testlab.sectionEyebrow}</p>
          <h2 id="tests-heading" className="rs-section-title">
            {site.testlab.sectionTitle}
          </h2>
          <p className="rs-section-lede max-w-3xl">{site.testlab.lede}</p>
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch lg:gap-6">
          {site.testlab.environments.map((env, index) => (
            <motion.div
              key={env.id}
              custom={index}
              initial={reduce ? { opacity: 1, y: 0, scale: 1 } : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.22, margin: '0px 0px -10% 0px' }}
              variants={cardV}
              className={index === 0 ? 'lg:row-span-2' : undefined}
            >
              <EnvironmentCard env={env} featured={index === 0} />
            </motion.div>
          ))}

          <motion.div
            custom={2}
            initial={reduce ? { opacity: 1, y: 0, scale: 1 } : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.28, margin: '0px 0px -10% 0px' }}
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
      className={`relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-lg border bg-black/35 p-5 shadow-[0_28px_90px_-58px_rgba(0,0,0,0.92)] sm:p-6 ${
        featured
          ? 'border-rs-primary/24'
          : 'border-white/[0.1] bg-[linear-gradient(155deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015))]'
      }`}
      whileHover={reduce ? undefined : { y: featured ? -6 : -4 }}
      whileTap={reduce ? undefined : { scale: 0.997 }}
      transition={springSoft}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(142,230,201,0.55),transparent)]"
        aria-hidden
      />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-rs-primary/90">{env.kicker}</p>
          <h3 className="mt-1 font-display text-2xl font-bold text-rs-text sm:text-3xl">
            {env.name}
          </h3>
        </div>
        <span className="rounded-md border border-rs-primary/24 bg-rs-primary/10 px-2.5 py-1 text-xs font-semibold text-rs-primary">
          {env.status}
        </span>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-rs-text-secondary sm:text-base">
        {env.description}
      </p>

      <div className="mt-5 rounded-lg border border-white/[0.09] bg-white/[0.035] px-3 py-2 font-mono text-xs text-zinc-300 sm:text-sm">
        {env.urlLabel}
      </div>

      <div className="mt-5 min-h-0 flex-1">
        {env.image ? <TestImage env={env} /> : <NexPlayPreview />}
      </div>

      <ul className="mt-5 grid gap-2 text-sm text-zinc-300 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3" role="list">
        {env.bullets.map((bullet) => (
          <li
            key={bullet}
            className="rounded-md border border-white/[0.08] bg-white/[0.035] px-3 py-2"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

function TestImage({ env }: { env: Extract<TestEnvironment, { image: string }> | TestEnvironment }) {
  if (!env.image) return null

  return (
    <figure className="h-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#06080d]">
      <img
        src={env.image}
        alt={env.alt}
        loading="lazy"
        decoding="async"
        width={1200}
        height={760}
        className="aspect-[16/9] h-full w-full object-cover object-top opacity-[0.88]"
      />
    </figure>
  )
}

function NexPlayPreview() {
  return (
    <div className="relative flex h-full min-h-64 overflow-hidden rounded-lg border border-white/[0.08] bg-[linear-gradient(135deg,#0b0d14_0%,#13100b_55%,#050505_100%)] p-4">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:36px_36px]"
        aria-hidden
      />
      <div className="relative z-10 flex w-full flex-col">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div>
            <p className="font-mono text-[0.65rem] uppercase text-rs-primary">Preview Slot</p>
            <p className="mt-1 font-display text-xl font-bold text-white">NexPlay</p>
          </div>
          <span className="rounded-md bg-[#f6c766]/15 px-2 py-1 text-xs font-semibold text-[#f6c766]">
            geplant
          </span>
        </div>

        <div className="mt-5 grid flex-1 grid-cols-2 gap-3">
          {['Lobby', 'Content', 'Score', 'Live'].map((label, index) => (
            <div
              key={label}
              className="flex min-h-20 flex-col justify-between rounded-lg border border-white/[0.08] bg-black/26 p-3"
            >
              <span className="font-mono text-[0.65rem] text-zinc-500">0{index + 1}</span>
              <span className="text-sm font-semibold text-zinc-200">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.08]">
          <div className="h-full w-[62%] rounded-full bg-[linear-gradient(90deg,var(--color-rs-primary),#f6c766)]" />
        </div>
      </div>
    </div>
  )
}

function DeployPanel() {
  return (
    <aside className="h-full rounded-lg border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase text-rs-primary">Server-Logik</p>
      <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
        Eine klare Linie vom Test zur Live-Seite.
      </h3>
      <dl className="mt-6 space-y-3">
        {site.testlab.rules.map((rule) => (
          <div
            key={rule.label}
            className="grid gap-1 rounded-lg border border-white/[0.07] bg-black/24 px-4 py-3 sm:grid-cols-[8rem_1fr] sm:items-center"
          >
            <dt className="text-sm font-semibold text-white">{rule.label}</dt>
            <dd className="text-sm leading-relaxed text-rs-text-secondary">{rule.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
