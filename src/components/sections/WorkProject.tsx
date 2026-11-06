import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useRef } from 'react'
import type { Example } from '../../content/site'
import { EASE } from '../../lib/motionPresets'

type WorkProjectProps = {
  product: Example
  index: number
  openLabel: string
  onOpen: (product: Example) => void
}

function useProjectMotion(progress: MotionValue<number>, reduce: boolean | null) {
  const scale = useTransform(progress, [0, 0.35, 0.75, 1], reduce ? [1, 1, 1, 1] : [1.18, 1, 1, 1.06])
  const imgOpacity = useTransform(progress, [0, 0.15, 0.85, 1], [0.55, 1, 1, 0.7])
  const copyY = useTransform(progress, [0.1, 0.35, 0.8, 1], reduce ? [0, 0, 0, 0] : [48, 0, 0, -24])
  const copyOpacity = useTransform(progress, [0.08, 0.28, 0.78, 0.95], [0, 1, 1, 0])
  const glow = useTransform(progress, [0.2, 0.45], [0.15, 0.55])
  return { scale, imgOpacity, copyY, copyOpacity, glow }
}

export function WorkProject({ product, index, openLabel, onOpen }: WorkProjectProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLLIElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const { scale, imgOpacity, copyY, copyOpacity, glow } = useProjectMotion(
    scrollYProgress,
    reduce,
  )
  const hasImage = Boolean(product.image)

  return (
    <li ref={ref} className="rs-work-pin relative h-[145svh] sm:h-[155svh] lg:h-[165svh]">
      <div className="sticky top-0 flex h-[100svh] items-end overflow-hidden">
        <motion.button
          type="button"
          className="absolute inset-0 block h-full w-full cursor-pointer border-0 bg-[#07070b] p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rs-primary"
          onClick={() => onOpen(product)}
          aria-label={`${product.name} — ${openLabel}`}
        >
          {hasImage ? (
            <motion.img
              src={product.image!}
              alt={product.alt}
              className="h-full w-full object-cover object-center will-change-transform"
              style={{ scale, opacity: imgOpacity }}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              width={1672}
              height={941}
              draggable={false}
            />
          ) : (
            <div className="rs-work-placeholder h-full w-full justify-center px-6 sm:px-10">
              <span className="font-display text-5xl font-bold tracking-[-0.05em] text-rs-text sm:text-7xl">
                {product.name}
              </span>
              <span className="mt-4 text-sm uppercase tracking-[0.18em] text-rs-primary">
                {product.category}
              </span>
            </div>
          )}
          <div className="rs-work-pin-scrim pointer-events-none absolute inset-0" />
          <motion.div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(79,140,255,0.28),transparent_70%)]"
            style={{ opacity: glow }}
            aria-hidden
          />
        </motion.button>

        <motion.div
          className="rs-work-pin-copy pointer-events-none relative z-10 w-full px-5 pb-28 pt-28 sm:px-8 sm:pb-14 md:pb-16"
          style={{ y: copyY, opacity: copyOpacity }}
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="max-w-xl">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-rs-primary sm:text-xs">
                {String(index + 1).padStart(2, '0')} · {product.category}
              </p>
              <div className="mt-3 flex items-center gap-3">
                {product.logo ? (
                  <img
                    src={product.logo}
                    alt=""
                    className="h-9 w-9 object-contain opacity-95 sm:h-10 sm:w-10"
                    width={40}
                    height={40}
                  />
                ) : null}
                <h3 className="font-display text-3xl font-bold tracking-[-0.04em] text-rs-text sm:text-4xl md:text-5xl">
                  {product.name}
                </h3>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-rs-text-secondary sm:mt-4 sm:text-base md:text-lg">
                {product.pitch}
              </p>
            </div>

            <button
              type="button"
              className="pointer-events-auto rs-work-link self-start sm:self-auto"
              onClick={() => onOpen(product)}
            >
              {openLabel}
              <span aria-hidden> →</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Prefetch hint for reduced motion fallback layout measurement */}
      <span className="sr-only">{product.alt}</span>
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rs-primary/40 to-transparent"
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE }}
        aria-hidden
      />
    </li>
  )
}
