import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import type { Example } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { ProductCinemaFrame } from './ProductCinemaFrame'

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
          className="rs-product-modal fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/85 backdrop-blur-lg"
            aria-label="Schliessen"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="rs-product-modal-panel relative z-[1] flex max-h-[94dvh] w-full max-w-6xl flex-col overflow-y-auto rounded-2xl border border-rs-border bg-rs-bg shadow-2xl"
            initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg text-white backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary"
              aria-label="Schliessen"
            >
              ×
            </button>

            <ProductCinemaFrame
              src={product.image}
              alt={product.alt}
              className="rounded-t-2xl border-0"
              frameClassName="min-h-[40dvh] sm:min-h-[50dvh] md:min-h-[58dvh]"
              loading="eager"
            />

            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex items-start gap-4">
                {product.logo ? (
                  <img
                    src={product.logo}
                    alt=""
                    className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                    width={56}
                    height={56}
                  />
                ) : null}
                <div className="min-w-0 flex-1">
                  <h2
                    id="product-modal-title"
                    className="font-display text-3xl font-bold tracking-[-0.03em] text-rs-text sm:text-4xl"
                  >
                    {product.name}
                  </h2>
                  <p className="mt-2 text-lg font-medium text-rs-text-secondary sm:text-xl">
                    {product.pitch}
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-rs-muted sm:text-lg">
                {product.description}
              </p>
              <a
                href="#kontakt-email"
                onClick={onClose}
                className="rs-cta rs-cta--shine mt-8 inline-flex focus-visible:outline-none"
              >
                Ähnliche App anfragen
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
