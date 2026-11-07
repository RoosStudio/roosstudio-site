import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

const mailto = (plan: string) =>
  `mailto:${site.meta.email}?subject=${encodeURIComponent(`${plan} — Roos Studio`)}`

export function PricingSection() {
  const reduce = useReducedMotion()

  return (
    <section id="preise" className="rs-section-scroll-mt rs-section-y border-t border-white/10" aria-labelledby="preise-heading">
      <div className="rs-section-inner rs-section-inner--wide">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{site.pricing.eyebrow}</p>
          <h2 id="preise-heading" className="rs-title max-w-3xl">
            {site.pricing.title}
          </h2>
          <p className="rs-lede">{site.pricing.lede}</p>
        </SectionReveal>

        <ul className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" role="list">
          {site.pricing.plans.map((plan, i) => (
            <motion.li
              key={plan.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 * i, duration: 0.45, ease: EASE }}
            >
              <article className={`rs-price-card ${plan.featured ? 'rs-price-card--featured' : ''}`}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-rs-muted">{plan.tag}</p>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.03em] text-rs-text sm:text-3xl">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm font-semibold text-rs-text-secondary">{plan.period}</span>
                  <span className="font-display text-4xl font-extrabold tracking-[-0.04em] text-rs-text sm:text-5xl">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold text-rs-muted">CHF</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary">{plan.pitch}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-2" role="list">
                  {plan.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-rs-text-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rs-lime" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={mailto(plan.name)}
                  className={`rs-cta mt-8 w-full justify-center ${plan.featured ? 'rs-cta--shine' : 'rs-cta--ghost'}`}
                >
                  {plan.cta}
                </a>
              </article>
            </motion.li>
          ))}
        </ul>

        <motion.p
          className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm leading-relaxed text-rs-text-secondary sm:mt-10 sm:px-6"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <strong className="font-semibold text-rs-text">{site.pricing.hosting.title}</strong>{' '}
          {site.pricing.hosting.line}
          <span className="mt-2 block text-rs-muted">{site.pricing.note}</span>
        </motion.p>
      </div>
    </section>
  )
}
