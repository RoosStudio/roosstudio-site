import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import type { Example } from '../../content/site'
import { EASE } from '../../lib/motionPresets'

type ProductModalProps = {
  product: Example | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!product) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [product, onClose])

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="rs-product-modal fixed inset-0 z-[250]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.button
            type="button"
            className="absolute inset-0"
            aria-label="Schliessen"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.img
            src={product.image}
            alt=""
            aria-hidden
            className="rs-product-modal-bg"
            initial={reduce ? { scale: 1.1, opacity: 0.3 } : { scale: 1.2, opacity: 0 }}
            animate={{ scale: 1.12, opacity: 0.55 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          />
          <div className="rs-product-modal-scrim" aria-hidden />

          <div className="rs-product-modal-content">
            <button
              type="button"
              onClick={onClose}
              className="rs-product-modal-close"
              aria-label="Schliessen"
            >
              ×
            </button>

            <motion.div
              className="rs-product-modal-hero"
              initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
            >
              <img
                src={product.image}
                alt={product.alt}
                className="rs-product-modal-img"
                width={1920}
                height={1080}
              />
            </motion.div>

            <motion.div
              className="rs-product-modal-panel"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
            >
              <div className="flex flex-wrap items-start gap-4">
                {product.logo ? (
                  <img
                    src={product.logo}
                    alt=""
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                    width={56}
                    height={56}
                  />
                ) : null}
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-rs-muted">
                    {product.category}
                  </p>
                  <h2
                    id="product-modal-title"
                    className="font-display text-3xl font-bold tracking-[-0.04em] text-rs-text sm:text-4xl"
                  >
                    {product.name}
                  </h2>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-rs-text-secondary sm:text-lg">
                {product.description}
              </p>

              <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                {(
                  [
                    ['Was', product.details.was],
                    ['Wie', product.details.wie],
                    ['Wo', product.details.wo],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label} className="rs-product-detail-card">
                    <dt className="rs-product-detail-label">{label}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href="#kontakt-email"
                onClick={onClose}
                className="rs-cta rs-cta--shine mt-8 inline-flex focus-visible:outline-none"
              >
                Ähnliche App anfragen
              </a>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
