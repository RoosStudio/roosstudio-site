import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE, springTap } from '../../lib/motionPresets'

const mailtoHref = `mailto:${site.meta.email}?subject=${encodeURIComponent(
  site.contact.mailtoSubject,
)}`

export function ContactSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="kontakt"
      className="rs-section-scroll-mt rs-section-border relative overflow-hidden bg-[#050505] py-20 sm:py-28"
      aria-labelledby="kontakt-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <img
          src="/showcase/wiretrack-dashboard.png"
          alt=""
          role="presentation"
          loading="lazy"
          decoding="async"
          width={1600}
          height={900}
          className="absolute right-[-12%] top-8 hidden h-[82%] w-[58rem] object-cover object-top opacity-[0.16] blur-[1px] saturate-75 lg:block"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.9)_46%,rgba(5,5,5,0.64)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(142,230,201,0.52),transparent)]" />
      </div>

      <div className="rs-section-inner relative z-10">
        <motion.div
          className="grid gap-8 lg:grid-cols-[1fr_27rem] lg:items-stretch"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          {...(reduce
            ? {}
            : {
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.32, margin: '0px 0px -8% 0px' },
                transition: { duration: 0.55, ease: EASE },
              })}
        >
          <div className="flex min-h-[26rem] flex-col justify-between border-y border-white/[0.08] py-8 sm:py-10">
            <div className="max-w-3xl">
              <p className="rs-eyebrow">Kontakt</p>
              <h2
                id="kontakt-heading"
                className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-normal text-rs-text sm:text-4xl md:text-5xl"
              >
                {site.contact.sectionTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-rs-text-secondary sm:text-lg">
                {site.contact.lede}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href={mailtoHref}
                className="rs-cta rs-cta--shine inline-flex min-w-56 justify-center focus-visible:outline-none"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springTap}
              >
                <span className="rs-cta-text-rest">{site.contact.cta}</span>
              </motion.a>
              <a
                id="kontakt-email"
                href={mailtoHref}
                className="rs-link-ghost scroll-mt-32 rounded-sm font-mono text-sm text-rs-primary/95 transition-colors ring-offset-rs-bg hover:text-white sm:scroll-mt-40 sm:text-base"
              >
                {site.meta.email}
              </a>
            </div>
          </div>

          <ContactPanel />
        </motion.div>

        <ul
          className="mt-5 grid gap-3 text-sm text-rs-text-secondary sm:grid-cols-3"
          role="list"
        >
          {site.contact.facts.map((fact) => (
            <li
              key={fact}
              className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-rs-primary" aria-hidden />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ContactPanel() {
  return (
    <aside className="relative overflow-hidden rounded-lg border border-rs-primary/20 bg-[linear-gradient(180deg,rgba(142,230,201,0.08),rgba(255,255,255,0.025))] p-5 sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
        aria-hidden
      />
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase text-rs-primary">
          {site.contact.panel.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-2xl font-bold text-white">
          {site.contact.panel.title}
        </h3>

        <dl className="mt-8 space-y-3">
          {site.contact.panel.rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[2.25rem_1fr] items-center gap-3 rounded-lg border border-white/[0.08] bg-black/24 p-3"
            >
              <dt className="flex h-9 w-9 items-center justify-center rounded-md bg-rs-primary/10 font-mono text-xs text-rs-primary">
                {row.label}
              </dt>
              <dd className="text-sm font-medium text-zinc-200">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 rounded-lg border border-white/[0.08] bg-black/26 p-4">
          <p className="font-mono text-[0.7rem] uppercase text-zinc-500">Status</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/[0.08]">
            <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,var(--color-rs-primary),#f6c766)]" />
          </div>
          <p className="mt-3 text-sm text-rs-text-secondary">Testumgebung zuerst. Livebetrieb danach.</p>
        </div>
      </div>
    </aside>
  )
}
