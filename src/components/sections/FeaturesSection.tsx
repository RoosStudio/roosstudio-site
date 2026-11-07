import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function FeaturesSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="features"
      className="rs-section-scroll-mt rs-section-y border-t border-white/10"
      aria-labelledby="features-heading"
    >
      <div className="rs-section-inner rs-section-inner--wide">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{site.features.eyebrow}</p>
          <h2 id="features-heading" className="rs-title max-w-3xl">
            {site.features.title}
          </h2>
          <p className="rs-lede">{site.features.lede}</p>
        </SectionReveal>

        <ul className="mt-12 grid gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-8" role="list">
          {site.features.items.map((item, i) => (
            <motion.li
              key={item.title}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.06 * i, duration: 0.5, ease: EASE }}
            >
              <article>
                <div className="rs-feature-shot">
                  <img src={item.image} alt="" loading="lazy" decoding="async" width={1672} height={941} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.03em] text-rs-text sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-rs-text-secondary sm:text-base">
                  {item.line}
                </p>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
