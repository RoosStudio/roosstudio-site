import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { Example } from '../../content/site'
import { useProductTeaser } from '../../context/ProductTeaserContext'
import { ProductCinemaFrame } from './ProductCinemaFrame'

type ProductScrollChapterProps = {
  product: Example
  index: number
  total: number
  onOpen: (product: Example) => void
}

export function ProductScrollChapter({
  product,
  index,
  total,
  onOpen,
}: ProductScrollChapterProps) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { setActiveId } = useProductTeaser()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.42, 0.58, 1], [0.9, 1.06, 1.06, 0.92])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1, 0.35])
  const copyOpacity = useTransform(scrollYProgress, [0.06, 0.22, 0.78, 0.94], [0, 1, 1, 0])
  const copyY = useTransform(scrollYProgress, [0.06, 0.28], [32, 0])
  const lineScale = useTransform(scrollYProgress, [0.1, 0.45, 0.55, 0.9], [0, 1, 1, 0])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActiveId(product.id)
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [product.id, setActiveId])

  const chapterLabel = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`

  return (
    <article
      ref={ref}
      id={`product-${product.id}`}
      className="rs-cinema-chapter"
      aria-label={product.name}
    >
      <div className="rs-cinema-chapter-sticky">
        <motion.img
          src={product.image}
          alt=""
          aria-hidden
          className="rs-cinema-chapter-bg"
          style={{ opacity: reduce ? 0.25 : glowOpacity }}
        />
        <div className="rs-cinema-chapter-bg-scrim" aria-hidden />

        <div className="rs-cinema-chapter-layout">
          <motion.div
            className="rs-cinema-chapter-copy"
            style={reduce ? undefined : { opacity: copyOpacity, y: copyY }}
          >
            <p className="rs-cinema-chapter-index">{chapterLabel}</p>
            <div className="mt-4 flex items-center gap-3">
              {product.logo ? (
                <img
                  src={product.logo}
                  alt=""
                  className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                  width={48}
                  height={48}
                />
              ) : null}
              <h3 className="font-display text-3xl font-bold tracking-[-0.04em] text-rs-text sm:text-4xl md:text-5xl">
                {product.name}
              </h3>
            </div>
            <p className="mt-3 max-w-xl text-lg text-rs-text-secondary sm:text-xl md:text-2xl">
              {product.pitch}
            </p>

            <dl className="mt-6 space-y-3">
              {(
                [
                  ['Was', product.details.was],
                  ['Wie', product.details.wie],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="rs-chapter-detail-row">
                  <dt className="rs-chapter-detail-label">{label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-rs-muted sm:text-base">{value}</dd>
                </div>
              ))}
            </dl>

            <motion.div
              className="mt-5 h-px max-w-xs origin-left bg-gradient-to-r from-rs-primary to-transparent"
              style={reduce ? undefined : { scaleX: lineScale }}
              aria-hidden
            />
            <button
              type="button"
              onClick={() => onOpen(product)}
              className="rs-cinema-detail-link rs-cinema-detail-link--lg mt-6"
            >
              Mehr erfahren
              <span aria-hidden>⊕</span>
            </button>
          </motion.div>

          <ProductCinemaFrame
            src={product.image}
            alt={product.alt}
            onClick={() => onOpen(product)}
            className="rs-cinema-chapter-frame"
            imageStyle={reduce ? undefined : { scale: imageScale }}
          />
        </div>
      </div>
    </article>
  )
}
