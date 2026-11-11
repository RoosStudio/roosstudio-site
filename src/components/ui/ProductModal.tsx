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
          key={product.id}
          className="fixed inset-0 z-[400]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.28 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            aria-label="Schliessen"
            onClick={onClose}
          />

          {product.image ? (
            <img
              src={product.image}
              alt=""
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 blur-3xl"
            />
          ) : null}

          <div className="relative z-10 flex h-full flex-col overflow-y-auto px-4 py-6 sm:px-8 sm:py-10">
            <button
              type="button"
              onClick={onClose}
              className="fixed right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-xl text-white backdrop-blur-md transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary sm:right-8 sm:top-8"
              aria-label="Schliessen"
            >
              ×
            </button>

            {product.image ? (
              <motion.div
                className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center py-4 sm:py-8"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  className="max-h-[min(52vh,32rem)] w-auto max-w-full object-contain drop-shadow-2xl"
                  width={1920}
                  height={1080}
                />
              </motion.div>
            ) : null}

            <motion.div
              className="mx-auto w-full max-w-6xl rounded-2xl border border-rs-border/60 bg-rs-surface/90 p-6 backdrop-blur-xl sm:p-8 md:p-10"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE, delay: reduce ? 0 : 0.05 }}
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
                    className="font-display text-3xl font-semibold tracking-[-0.03em] text-rs-text sm:text-4xl"
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
                  <div key={label} className="rounded-xl border border-rs-border/70 bg-rs-bg/50 p-4 sm:p-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-rs-primary">
                      {label}
                    </dt>
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
                Ähnliches anfragen
              </a>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
