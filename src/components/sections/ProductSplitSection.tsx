import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { site } from '../../content/site'
import { springReveal } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

const liveScreens = site.proof.items.filter((item) => item.variant === 'playful')
const wireTrackScreen = site.proof.items.find((item) => item.id === 'wiretrack')

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
      className="rs-section-scroll-mt rs-section-border bg-rs-bg rs-section-y"
      aria-labelledby="angebot-title"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold" useSpring>
          <p className="rs-eyebrow">{site.split.sectionEyebrow}</p>
          <h2 id="angebot-title" className="rs-section-title">
            {site.split.sectionTitle}
          </h2>
        </SectionReveal>

        {reduce ? (
          <div className="mt-12 grid gap-5 sm:mt-14 md:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-8">
            <FunCard />
            <WTCard />
          </div>
        ) : (
          <motion.div
            className="mt-12 grid gap-5 sm:mt-14 md:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-8"
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
    <article className="rs-surface-fun flex h-full min-h-[min(28rem,78vh)] flex-col rounded-lg border border-white/12 p-5 sm:p-7 max-md:hover:translate-y-0 md:hover:-translate-y-2 motion-reduce:md:hover:translate-y-0">
      <p className="text-xs font-semibold uppercase text-rs-primary">
        {site.split.fun.kicker}
      </p>
      <h3 className="mt-2 font-display text-2xl font-bold text-rs-text sm:text-3xl">
        {site.split.fun.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
        {site.split.fun.lede}
      </p>
      <div className="mt-6 grid grid-cols-3 gap-2" aria-label="Live-App Screens">
        {liveScreens.map((item) => (
          <figure
            key={item.id}
            className="group overflow-hidden rounded-lg border border-white/[0.08] bg-black/35"
          >
            <img
              src={item.image}
              alt=""
              role="presentation"
              loading="lazy"
              decoding="async"
              width={640}
              height={400}
              className={`aspect-[4/5] h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.05] group-hover:opacity-100 ${
                item.id === 'foto' ? 'object-[70%_center]' : 'object-center'
              }`}
            />
            <figcaption className="border-t border-white/[0.06] px-2 py-1.5 text-xs font-medium text-zinc-300">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
      <ul className="mt-6 flex flex-wrap gap-2" role="list">
        {site.split.fun.products.map((p) => (
          <li
            key={p.name}
            className="inline-flex items-baseline gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.05] px-2.5 py-1.5 transition-all duration-300 hover:border-rs-primary/35 hover:bg-white/[0.09] hover:shadow-[0_0_20px_-6px_rgba(79,140,255,0.35)]"
          >
            <span className="text-sm font-semibold text-rs-text">{p.name}</span>
            <span className="text-xs text-rs-text-secondary">{p.note}</span>
          </li>
        ))}
      </ul>
      <a
        href="#tests"
        className="rs-link-ghost mt-auto inline-flex w-fit items-center rounded-sm pt-7 text-sm font-semibold text-rs-primary ring-offset-rs-bg transition hover:text-white"
      >
        Testumgebungen ansehen
        <span className="ml-1" aria-hidden>
          →
        </span>
      </a>
    </article>
  )
}

function WTCard() {
  return (
    <article className="rs-surface-enterprise relative flex h-full min-h-[min(28rem,78vh)] flex-col overflow-hidden rounded-lg p-5 sm:p-7 max-md:hover:translate-y-0 md:hover:-translate-y-1.5 motion-reduce:md:hover:translate-y-0">
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
            <p className="text-xs font-semibold uppercase text-rs-wt-muted">
              {site.split.enterprise.kicker} · {site.split.enterprise.tagline}
            </p>
            <h3 className="mt-0.5 font-display text-2xl font-bold tracking-normal text-rs-text sm:text-[1.75rem]">
              {site.split.enterprise.title}
            </h3>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-rs-wt-body sm:mt-4 sm:text-base">
          {site.split.enterprise.lede}
        </p>
        {wireTrackScreen ? (
          <div className="mt-6 overflow-hidden rounded-lg border border-white/[0.07] bg-black/40">
            <img
              src={wireTrackScreen.image}
              alt=""
              role="presentation"
              loading="lazy"
              decoding="async"
              width={960}
              height={540}
              className="aspect-[16/8.4] w-full object-cover object-top opacity-85"
            />
          </div>
        ) : null}
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
          href="#tests"
          className="rs-link-ghost mt-auto inline-flex w-fit items-center rounded-sm pt-5 text-sm font-medium text-white/90 ring-offset-[#08080d] transition hover:text-white"
        >
          WireTrack Test ansehen
          <span className="ml-1 text-rs-primary" aria-hidden>
            →
          </span>
        </a>
      </div>
    </article>
  )
}
