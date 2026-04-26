import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { site } from '../../content/site'
import { springReveal } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

const parentV: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
}

const childV: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springReveal,
  },
}

export function ProductSplitSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="angebot"
      className="scroll-mt-24 border-t border-rs-border/80 bg-rs-bg py-20 sm:scroll-mt-28 sm:py-28 md:py-32"
      aria-labelledby="angebot-title"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal strength="bold" useSpring>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rs-primary/90 sm:text-sm">
            {site.split.sectionEyebrow}
          </p>
          <h2
            id="angebot-title"
            className="mt-2 max-w-2xl font-display text-2xl font-bold leading-tight tracking-tight text-rs-text sm:mt-3 sm:text-4xl md:text-[2.35rem] md:leading-[1.15]"
          >
            {site.split.sectionTitle}
          </h2>
        </SectionReveal>

        {reduce ? (
          <div className="mt-12 grid gap-5 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:items-stretch lg:gap-8">
            <FunCard />
            <WTCard />
          </div>
        ) : (
          <motion.div
            className="mt-12 grid gap-5 sm:mt-16 lg:mt-20 lg:grid-cols-2 lg:items-stretch lg:gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15, margin: '0px 0px -10% 0px' }}
            variants={parentV}
          >
            <motion.div variants={childV} className="min-h-0">
              <FunCard />
            </motion.div>
            <motion.div variants={childV} className="min-h-0">
              <WTCard />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function FunCard() {
  return (
    <article className="rs-surface-fun flex h-full min-h-[min(22rem,70vh)] flex-col rounded-2xl border border-white/10 p-7 sm:rounded-3xl sm:p-9">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-rs-primary">
        {site.split.fun.kicker}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold text-rs-text sm:text-3xl">
        {site.split.fun.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
        {site.split.fun.lede}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2" role="list">
        {site.split.fun.products.map((p) => (
          <li
            key={p.name}
            className="inline-flex items-baseline gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5"
          >
            <span className="text-sm font-semibold text-rs-text">{p.name}</span>
            <span className="text-xs text-rs-text-secondary">{p.note}</span>
          </li>
        ))}
      </ul>
      <a
        href="#proof"
        className="mt-auto inline-flex w-fit items-center pt-7 text-sm font-semibold text-rs-primary transition hover:text-white"
      >
        Projekte
        <span className="ml-1" aria-hidden>
          →
        </span>
      </a>
    </article>
  )
}

function WTCard() {
  return (
    <article className="rs-surface-enterprise relative flex h-full min-h-[min(22rem,70vh)] flex-col overflow-hidden rounded-2xl p-7 sm:rounded-3xl sm:p-9">
      <div
        className="rs-wt-beam-line pointer-events-none absolute left-0 right-0 top-0 z-10 h-px sm:left-0 sm:right-0"
        aria-hidden
      />
      <div className="mt-0 flex min-h-0 flex-1 flex-col">
        <div className="flex gap-3 sm:gap-4">
          <div className="shrink-0">
            <img
              src="/roos-studio-branding/logos/logo-icon-blue.png"
              alt=""
              className="h-11 w-11 object-contain"
              width={44}
              height={44}
            />
          </div>
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rs-wt-muted">
              {site.split.enterprise.kicker} · {site.split.enterprise.tagline}
            </p>
            <h3 className="mt-0.5 font-display text-2xl font-bold tracking-tight text-rs-text sm:text-[1.75rem]">
              {site.split.enterprise.title}
            </h3>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-rs-wt-body sm:mt-4 sm:text-base">
          {site.split.enterprise.lede}
        </p>
        <ul className="mt-4 min-h-0 space-y-2.5 border-t border-white/[0.05] pt-4 sm:mt-5" role="list">
          {site.split.enterprise.pillars.map((row) => (
            <li key={row.t} className="flex gap-2 text-sm sm:text-base">
              <span className="w-[5.5rem] shrink-0 font-medium text-rs-text sm:w-32">
                {row.t}
              </span>
              <span className="text-[0.8125rem] leading-relaxed text-rs-wt-body sm:text-sm sm:leading-normal">
                {row.b}
              </span>
            </li>
          ))}
        </ul>
        <a
          href="#proof-wiretrack"
          className="mt-auto inline-flex w-fit items-center pt-5 text-sm font-medium text-white/90 transition hover:text-white"
        >
          Im Überblick
          <span className="ml-1 text-rs-primary" aria-hidden>
            →
          </span>
        </a>
      </div>
    </article>
  )
}
