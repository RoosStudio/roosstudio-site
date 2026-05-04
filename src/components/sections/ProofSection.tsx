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

function ProofCard({
  item,
  id,
  sizes,
}: {
  item: ProofItem
  id?: string
  sizes: string
}) {
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
          sizes={sizes}
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

const proofImgSizes = '(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 34rem'

export function ProofSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="proof"
      className="rs-section-scroll-mt rs-section-border bg-[color-mix(in_srgb,var(--color-rs-surface)_88%,#000_12%)] rs-section-y"
      aria-labelledby="proof-heading"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold" useSpring>
          <p className="rs-eyebrow">{site.proof.sectionEyebrow}</p>
          <h2 id="proof-heading" className="rs-section-title">
            {site.proof.sectionTitle}
          </h2>
          <p className="rs-section-lede">{site.proof.lede}</p>
        </SectionReveal>

        {reduce ? (
          <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 md:mt-16 lg:gap-6">
            {site.proof.items.map((item) => (
              <ProofCard
                key={item.id}
                item={item}
                sizes={proofImgSizes}
                id={item.id === 'wiretrack' ? 'proof-wiretrack' : undefined}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 md:mt-16 lg:gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
            variants={gridV}
          >
            {site.proof.items.map((item) => (
              <ProofCard
                key={item.id}
                item={item}
                sizes={proofImgSizes}
                id={item.id === 'wiretrack' ? 'proof-wiretrack' : undefined}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
