import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { site, type Example } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { ProductModal } from '../ui/ProductModal'
import { SectionReveal } from '../ui/SectionReveal'

export function WorkSection() {
  const reduce = useReducedMotion()
  const [modalProduct, setModalProduct] = useState<Example | null>(null)

  const openModal = useCallback((product: Example) => {
    setModalProduct(product)
  }, [])
  const closeModal = useCallback(() => setModalProduct(null), [])

  const modal =
    typeof document !== 'undefined'
      ? createPortal(<ProductModal product={modalProduct} onClose={closeModal} />, document.body)
      : null

  return (
    <>
      <section
        id="arbeit"
        className="rs-section-scroll-mt rs-section-border"
        aria-labelledby="arbeit-heading"
      >
        <div className="rs-section-inner rs-section-inner--wide rs-section-y pb-12 sm:pb-16">
          <SectionReveal>
            <p className="rs-eyebrow">{site.work.sectionEyebrow}</p>
            <h2 id="arbeit-heading" className="rs-section-title max-w-2xl">
              {site.work.sectionTitle}
            </h2>
            <p className="rs-section-lede max-w-xl">{site.work.lede}</p>
          </SectionReveal>
        </div>

        <ul className="flex flex-col" role="list">
          {site.examples.map((product, index) => {
            const hasImage = Boolean(product.image)
            const reverse = index % 2 === 1

            return (
              <li key={product.id} className="border-t border-rs-border/50">
                <motion.article
                  className={`rs-work-row ${reverse ? 'rs-work-row--reverse' : ''}`}
                  initial={reduce ? false : { opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <button
                    type="button"
                    className="rs-work-media group"
                    onClick={() => openModal(product)}
                    aria-label={`${product.name} — ${site.work.openLabel}`}
                  >
                    {hasImage ? (
                      <>
                        <img
                          src={product.image!}
                          alt={product.alt}
                          className="rs-work-img"
                          loading={index === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                          width={1672}
                          height={941}
                        />
                        <span className="rs-work-open-hint">{site.work.openLabel}</span>
                      </>
                    ) : (
                      <div className="rs-work-placeholder">
                        <span className="font-display text-4xl font-bold tracking-[-0.04em] text-rs-text/90 sm:text-5xl">
                          {product.name}
                        </span>
                        <span className="mt-3 text-sm uppercase tracking-[0.16em] text-rs-primary">
                          {product.category}
                        </span>
                      </div>
                    )}
                  </button>

                  <div className="rs-work-copy">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rs-primary">
                      {product.category}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      {product.logo ? (
                        <img
                          src={product.logo}
                          alt=""
                          className="h-9 w-9 object-contain opacity-90"
                          width={36}
                          height={36}
                        />
                      ) : null}
                      <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-rs-text sm:text-3xl">
                        {product.name}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-rs-text-secondary">
                      {product.pitch}
                    </p>
                    <button
                      type="button"
                      className="rs-work-link mt-6"
                      onClick={() => openModal(product)}
                    >
                      Mehr erfahren
                      <span aria-hidden> →</span>
                    </button>
                  </div>
                </motion.article>
              </li>
            )
          })}
        </ul>
      </section>

      {modal}
    </>
  )
}
