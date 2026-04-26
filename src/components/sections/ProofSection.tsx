import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { site, type ProofItem } from '../../content/site'
import { EASE, springSoft } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

const gridV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
}

const itemV: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
}

function ProofCard({ item, id }: { item: ProofItem; id?: string }) {
  const reduce = useReducedMotion()
  const isEnt = item.variant === 'enterprise'
  const shell =
    isEnt
      ? 'rs-surface-enterprise flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.06] sm:rounded-2xl'
      : 'flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-rs-card/50 sm:rounded-2xl'

  const inner = (
    <>
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden bg-black/40 ${
          isEnt ? 'ring-1 ring-inset ring-white/[0.04]' : ''
        }`}
      >
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
          width={1600}
          height={1000}
        />
      </div>
      <div
        className={
          isEnt
            ? 'border-t border-white/[0.05] px-4 py-3.5 sm:px-5 sm:py-4'
            : 'border-t border-white/[0.04] px-4 py-3.5 sm:px-5 sm:py-4'
        }
      >
        <h3 className="text-base font-semibold text-rs-text sm:text-lg">{item.title}</h3>
        <p
          className={
            isEnt ? 'mt-0.5 text-sm text-rs-wt-body' : 'mt-0.5 text-sm text-rs-text-secondary'
          }
        >
          {item.line}
        </p>
      </div>
    </>
  )

  if (reduce) {
    return (
      <article id={id} className={shell}>
        {inner}
      </article>
    )
  }

  return (
    <motion.article
      id={id}
      className={shell}
      variants={itemV}
      whileHover={{ y: -3, scale: 1.006 }}
      whileTap={{ scale: 0.997 }}
      transition={springSoft}
    >
      {inner}
    </motion.article>
  )
}

export function ProofSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="proof"
      className="scroll-mt-24 border-t border-rs-border/80 bg-[color-mix(in_srgb,var(--color-rs-surface)_88%,#000_12%)] py-16 sm:scroll-mt-28 sm:py-24 md:py-28"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal strength="bold" useSpring>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rs-primary/90 sm:text-sm">
            {site.proof.sectionEyebrow}
          </p>
          <h2
            id="proof-heading"
            className="mt-2 max-w-2xl font-display text-2xl font-bold leading-tight sm:text-4xl"
          >
            {site.proof.sectionTitle}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-rs-text-secondary sm:mt-4 sm:text-base">
            {site.proof.lede}
          </p>
        </SectionReveal>

        {reduce ? (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:gap-5">
            {site.proof.items.map((item) => (
              <ProofCard
                key={item.id}
                item={item}
                id={item.id === 'wiretrack' ? 'proof-wiretrack' : undefined}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
            variants={gridV}
          >
            {site.proof.items.map((item) => (
              <ProofCard
                key={item.id}
                item={item}
                id={item.id === 'wiretrack' ? 'proof-wiretrack' : undefined}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
