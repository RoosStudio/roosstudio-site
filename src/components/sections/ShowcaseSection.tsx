import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { site, type ProofItem } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

const cardV: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: EASE },
  }),
}

export function ShowcaseSection() {
  const reduce = useReducedMotion()
  const [featured, ...rest] = site.proof.items

  return (
    <section
      id="screens"
      className="rs-section-scroll-mt rs-section-border rs-section-y"
      aria-labelledby="screens-heading"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{site.proof.sectionEyebrow}</p>
          <h2 id="screens-heading" className="rs-section-title">
            {site.proof.sectionTitle}
          </h2>
          <p className="rs-section-lede max-w-3xl">{site.proof.lede}</p>
        </SectionReveal>

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:gap-5">
          <motion.div
            custom={0}
            initial={reduce ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardV}
            className="lg:row-span-2"
          >
            <ShowcaseCard item={featured} featured />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-start-2 lg:gap-5">
            {rest.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i + 1}
                initial={reduce ? { opacity: 1, y: 0 } : 'hidden'}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardV}
              >
                <ShowcaseCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ShowcaseCard({ item, featured }: { item: ProofItem; featured?: boolean }) {
  const reduce = useReducedMotion()

  return (
    <motion.article
      className={`rs-surface-card group flex h-full flex-col overflow-hidden ${
        featured ? 'min-h-[28rem]' : 'min-h-[14rem]'
      }`}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          width={featured ? 1200 : 640}
          height={featured ? 760 : 480}
          className={`w-full object-cover transition duration-700 group-hover:scale-[1.02] ${
            featured ? 'aspect-[16/10]' : 'aspect-[4/3]'
          } ${item.id === 'foto' ? 'object-[70%_center]' : 'object-top'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rs-surface/90 via-transparent to-transparent opacity-80" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-2 py-0.5 text-[0.6875rem] font-medium uppercase tracking-wider ${
              item.variant === 'enterprise'
                ? 'bg-rs-primary/10 text-rs-primary'
                : 'bg-white/[0.06] text-rs-text-secondary'
            }`}
          >
            {item.variant === 'enterprise' ? 'Produkt' : 'Live App'}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-rs-text sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
          {item.line}
        </p>
      </div>
    </motion.article>
  )
}
