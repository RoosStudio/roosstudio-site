import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { site, type Example } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { ProductModal } from '../ui/ProductModal'
import { SectionReveal } from '../ui/SectionReveal'

export function WorkSection() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState<Example | null>(null)
  const open = useCallback((p: Example) => setActive(p), [])
  const close = useCallback(() => setActive(null), [])

  const modal =
    typeof document !== 'undefined'
      ? createPortal(<ProductModal product={active} onClose={close} />, document.body)
      : null

  return (
    <>
      <section id="arbeit" className="rs-section-scroll-mt rs-section-y border-t border-white/10" aria-labelledby="arbeit-heading">
        <div className="rs-section-inner rs-section-inner--wide">
          <SectionReveal strength="bold">
            <p className="rs-eyebrow">{site.work.eyebrow}</p>
            <h2 id="arbeit-heading" className="rs-title max-w-3xl">
              {site.work.title}
            </h2>
            <p className="rs-lede">{site.work.lede}</p>
          </SectionReveal>

          <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-6" role="list">
            {site.examples.map((product, i) => (
              <motion.li
                key={product.id}
                className={i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
                initial={reduce ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.05 * i, duration: 0.45, ease: EASE }}
              >
                <button
                  type="button"
                  className="rs-work-tile group outline-none focus-visible:ring-2 focus-visible:ring-rs-primary"
                  onClick={() => open(product)}
                  aria-label={`${product.name} — ${site.work.openLabel}`}
                >
                  <img
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                    decoding="async"
                    width={1672}
                    height={941}
                  />
                  <div className="rs-work-tile-scrim" />
                  <div className="absolute inset-x-0 bottom-0 z-[1] p-4 sm:p-5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-rs-primary">
                      {product.category}
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold tracking-[-0.02em] text-rs-text sm:text-xl">
                      {product.name}
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm text-rs-text-secondary">{product.pitch}</p>
                  </div>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      {modal}
    </>
  )
}
