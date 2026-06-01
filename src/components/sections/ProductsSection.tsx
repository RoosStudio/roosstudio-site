import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { site, type Example } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { ProductCinemaFrame } from '../ui/ProductCinemaFrame'
import { ProductModal } from '../ui/ProductModal'
import { SectionReveal } from '../ui/SectionReveal'

export function ProductsSection() {
  const reduce = useReducedMotion()
  const [activeId, setActiveId] = useState<Example['id']>(site.examples[0].id)
  const [modalProduct, setModalProduct] = useState<Example | null>(null)

  const active = site.examples.find((e) => e.id === activeId) ?? site.examples[0]

  const openModal = useCallback((product: Example) => setModalProduct(product), [])
  const closeModal = useCallback(() => setModalProduct(null), [])

  return (
    <>
      <section
        id="produkte"
        className="rs-section-scroll-mt rs-section-border rs-section-y"
        aria-labelledby="produkte-heading"
      >
        <div className="rs-section-inner rs-section-inner--wide">
          <SectionReveal>
            <p className="rs-eyebrow">{site.products.sectionEyebrow}</p>
            <h2 id="produkte-heading" className="rs-section-title max-w-2xl">
              {site.products.sectionTitle}
            </h2>
            <p className="rs-section-lede max-w-xl">{site.products.lede}</p>
          </SectionReveal>

          <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,16rem)_minmax(0,1fr)]">
            <nav className="lg:sticky lg:top-28 lg:self-start" aria-label="Produkte">
              <ul
                className="flex gap-1 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0"
                role="list"
              >
                {site.examples.map((product) => {
                  const isActive = product.id === activeId
                  return (
                    <li key={product.id} className="shrink-0 lg:shrink">
                      <button
                        type="button"
                        onClick={() => setActiveId(product.id)}
                        className={`rs-product-tab ${isActive ? 'rs-product-tab--active' : ''}`}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        <span className="rs-product-tab-name">{product.name}</span>
                        <span className="rs-product-tab-cat">{product.category}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.28, ease: EASE }}
                className="min-w-0"
              >
                <ProductCinemaFrame
                  src={active.image}
                  alt={active.alt}
                  onClick={() => openModal(active)}
                  className="rs-cinema-frame--showcase"
                  loading="lazy"
                >
                  <span className="rs-cinema-open-hint">{site.products.openLabel}</span>
                </ProductCinemaFrame>

                <div className="mt-5 flex items-center gap-3 sm:mt-6">
                  {active.logo ? (
                    <img
                      src={active.logo}
                      alt=""
                      className="h-8 w-8 object-contain opacity-90"
                      width={32}
                      height={32}
                    />
                  ) : null}
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-rs-muted">
                      {active.category}
                    </p>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-rs-text sm:text-2xl">
                      {active.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ProductModal product={modalProduct} onClose={closeModal} />
    </>
  )
}
