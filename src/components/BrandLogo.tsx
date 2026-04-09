import { motion, useReducedMotion } from 'framer-motion'

const ICON_SRC = '/roos-studio-branding/logos/logo-icon-gradient.png'

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
  },
}

type BrandLogoProps = {
  placement: 'header' | 'footer'
  className?: string
}

export function BrandLogo({ placement, className = '' }: BrandLogoProps) {
  const reduceMotion = useReducedMotion()

  const iconSizes =
    placement === 'header'
      ? 'h-10 w-10 sm:h-11 sm:w-11 md:h-[3.35rem] md:w-[3.35rem]'
      : 'h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16'

  const roosClass =
    placement === 'header'
      ? 'block text-[1.05rem] font-bold leading-none tracking-tight text-rs-text sm:text-lg md:text-xl'
      : 'block text-xl font-bold leading-none tracking-tight text-rs-text sm:text-2xl md:text-3xl'

  const studioClass =
    placement === 'header'
      ? 'block text-[0.58rem] font-medium uppercase leading-none tracking-[0.32em] text-rs-text-secondary sm:text-[0.62rem] md:text-xs'
      : 'block text-[0.65rem] font-medium uppercase leading-none tracking-[0.34em] text-rs-text-secondary sm:text-xs md:text-sm'

  const entrance =
    reduceMotion
      ? {}
      : placement === 'header'
        ? { initial: 'hidden' as const, animate: 'show' as const }
        : {
            initial: 'hidden' as const,
            whileInView: 'show' as const,
            viewport: { once: true, margin: '-32px' },
          }

  if (reduceMotion) {
    return (
      <div className={`grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-2.5 gap-y-1 sm:gap-x-3 ${className}`}>
        <div className="row-span-2 flex items-center">
          <img
            src={ICON_SRC}
            alt=""
            width={128}
            height={128}
            decoding="async"
            className={`object-contain ${iconSizes} drop-shadow-[0_0_12px_rgba(79,140,255,0.25)]`}
          />
        </div>
        <span className={`${roosClass} col-start-2 row-start-1 self-end`}>ROOS</span>
        <span className={`${studioClass} col-start-2 row-start-2 self-start`}>STUDIO</span>
      </div>
    )
  }

  return (
    <motion.div
      className={`grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-2.5 gap-y-1 sm:gap-x-3 ${className}`}
      variants={list}
      {...entrance}
    >
      <motion.div
        variants={fadeUp}
        className="row-span-2 flex items-center"
        whileHover={{
          scale: 1.06,
          transition: { type: 'spring', stiffness: 420, damping: 20 },
        }}
      >
        <span className="relative inline-flex">
          <span
            className="pointer-events-none absolute inset-[-8px] rounded-2xl opacity-60 blur-xl"
            style={{
              background:
                'radial-gradient(circle, rgba(79,140,255,0.4) 0%, rgba(157,77,255,0.18) 55%, transparent 72%)',
            }}
            aria-hidden
          />
          <img
            src={ICON_SRC}
            alt=""
            width={128}
            height={128}
            decoding="async"
            className={`relative z-10 object-contain ${iconSizes} motion-safe:animate-[rs-logo-glow_5s_ease-in-out_infinite]`}
          />
        </span>
      </motion.div>
      <motion.span className={`${roosClass} col-start-2 row-start-1 self-end`} variants={fadeUp}>
        ROOS
      </motion.span>
      <motion.span className={`${studioClass} col-start-2 row-start-2 self-start`} variants={fadeUp}>
        STUDIO
      </motion.span>
    </motion.div>
  )
}
