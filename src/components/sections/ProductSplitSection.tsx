import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { site } from '../../content/site'
import { springReveal } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

const liveScreens = site.proof.items.filter((item) => item.variant === 'playful')
const wireTrackScreen = site.proof.items.find((item) => item.id === 'wiretrack')

const parentV: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const childV: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: springReveal,
  },
}

export function ProductSplitSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="angebot"
      className="rs-section-scroll-mt rs-section-border rs-section-y"
      aria-labelledby="angebot-title"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{site.split.sectionEyebrow}</p>
          <h2 id="angebot-title" className="rs-section-title">
            {site.split.sectionTitle}
          </h2>
        </SectionReveal>

        {reduce ? (
          <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-6">
            <FunCard />
            <WTCard />
          </div>
        ) : (
          <motion.div
            className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
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
    <article className="rs-surface-card flex h-full min-h-[26rem] flex-col p-6 sm:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.1em] text-rs-primary">
        {site.split.fun.kicker}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-rs-text sm:text-3xl">
        {site.split.fun.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
        {site.split.fun.lede}
      </p>
      <div className="mt-6 grid grid-cols-3 gap-2.5" aria-label="Live-App Screens">
        {liveScreens.map((item) => (
          <figure
            key={item.id}
            className="group overflow-hidden rounded-lg border border-rs-border bg-rs-card"
          >
            <img
              src={item.image}
              alt=""
              role="presentation"
              loading="lazy"
              decoding="async"
              width={640}
              height={400}
              className={`aspect-[4/5] w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] ${
                item.id === 'foto' ? 'object-[70%_center]' : 'object-center'
              }`}
            />
            <figcaption className="border-t border-rs-border px-2 py-2 text-xs font-medium text-rs-text-secondary">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </div>
      <ul className="mt-6 flex flex-wrap gap-2" role="list">
        {site.split.fun.products.map((p) => (
          <li
            key={p.name}
            className="inline-flex items-baseline gap-1.5 rounded-full border border-rs-border bg-rs-bg/50 px-3 py-1.5"
          >
            <span className="text-sm font-medium text-rs-text">{p.name}</span>
            <span className="text-xs text-rs-muted">{p.note}</span>
          </li>
        ))}
      </ul>
      <a
        href="#tests"
        className="rs-link-ghost mt-auto inline-flex w-fit items-center pt-8 text-sm font-medium text-rs-primary transition hover:text-rs-text"
      >
        Testumgebungen ansehen
        <span className="ml-1.5" aria-hidden>
          →
        </span>
      </a>
    </article>
  )
}

function WTCard() {
  return (
    <article className="rs-surface-enterprise flex h-full min-h-[26rem] flex-col p-6 sm:p-8">
      <div className="flex gap-4">
        <img
          src="/roos-studio-branding/logos/logo-icon-blue.png"
          alt=""
          className="h-10 w-10 object-contain"
          width={40}
          height={40}
        />
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-rs-wt-muted">
            {site.split.enterprise.kicker} · {site.split.enterprise.tagline}
          </p>
          <h3 className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-rs-text sm:text-[1.75rem]">
            {site.split.enterprise.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-rs-wt-body sm:text-base">
        {site.split.enterprise.lede}
      </p>
      {wireTrackScreen ? (
        <div className="mt-6 overflow-hidden rounded-lg border border-rs-border">
          <img
            src={wireTrackScreen.image}
            alt=""
            role="presentation"
            loading="lazy"
            decoding="async"
            width={960}
            height={540}
            className="aspect-[16/8.4] w-full object-cover object-top"
          />
        </div>
      ) : null}
      <ul className="mt-5 space-y-3 border-t border-rs-border pt-5" role="list">
        {site.split.enterprise.pillars.map((row) => (
          <li key={row.t} className="flex gap-3 text-sm sm:text-base">
            <span className="w-24 shrink-0 font-medium text-rs-text sm:w-28">{row.t}</span>
            <span className="text-rs-wt-body">{row.b}</span>
          </li>
        ))}
      </ul>
      <a
        href="#tests"
        className="rs-link-ghost mt-auto inline-flex w-fit items-center pt-6 text-sm font-medium text-rs-text transition hover:text-rs-primary"
      >
        WireTrack Test ansehen
        <span className="ml-1.5 text-rs-primary" aria-hidden>
          →
        </span>
      </a>
    </article>
  )
}
