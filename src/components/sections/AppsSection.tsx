import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { site, type Example } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

const cardV: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * i, duration: 0.5, ease: EASE },
  }),
}

export function AppsSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="beispiele"
      className="rs-section-scroll-mt rs-section-border bg-rs-surface/20 rs-section-y"
      aria-labelledby="beispiele-heading"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{site.work.sectionEyebrow}</p>
          <h2 id="beispiele-heading" className="rs-section-title max-w-3xl">
            {site.work.sectionTitle}
          </h2>
          <p className="rs-section-lede max-w-2xl">{site.work.lede}</p>
        </SectionReveal>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {site.examples.map((example, i) => (
            <motion.div
              key={example.id}
              custom={i}
              initial={reduce ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardV}
              className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : undefined}
            >
              <ExampleCard example={example} featured={i === 0} />
            </motion.div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-rs-muted sm:text-base">
          {site.work.footnote}
        </p>
      </div>
    </section>
  )
}

function ExampleCard({ example, featured }: { example: Example; featured?: boolean }) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className="rs-app-card rs-app-card--enterprise group h-full"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      <div className="rs-app-card-media">
        <img
          src={example.image}
          alt={example.alt}
          loading="lazy"
          decoding="async"
          width={featured ? 1200 : 800}
          height={featured ? 680 : 500}
          className={`w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] ${
            featured ? 'aspect-[16/9] min-h-[14rem]' : 'aspect-[16/10]'
          }`}
        />
        {example.logo ? (
          <img
            src={example.logo}
            alt=""
            className="absolute left-4 top-4 h-9 w-9 object-contain"
            width={36}
            height={36}
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-[0.6875rem] font-semibold uppercase tracking-wider text-rs-muted">
          {example.category}
        </span>
        <h3 className="mt-2 font-display text-lg font-bold tracking-[-0.03em] text-rs-text sm:text-xl">
          {example.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-rs-text-secondary">{example.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-rs-muted">{example.description}</p>
      </div>
    </motion.article>
  )
}
