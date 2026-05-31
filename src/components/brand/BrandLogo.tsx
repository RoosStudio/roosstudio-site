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
      ? 'h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11'
      : 'h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16'

  const roosClass =
    placement === 'header'
      ? 'block text-[1.05rem] font-bold leading-none tracking-normal text-rs-text sm:text-lg'
      : 'block text-xl font-bold leading-none tracking-normal text-rs-text sm:text-2xl md:text-3xl'

  const studioClass =
    placement === 'header'
      ? 'block text-[0.6rem] font-medium uppercase leading-none tracking-normal text-rs-text-secondary sm:text-xs'
      : 'block text-[0.7rem] font-medium uppercase leading-none tracking-normal text-rs-text-secondary sm:text-sm'

  const entrance = reduceMotion
    ? {}
    : placement === 'header'
      ? { initial: 'hidden' as const, animate: 'show' as const }
      : {
          initial: 'hidden' as const,
          whileInView: 'show' as const,
          viewport: { once: true, margin: '-32px -32px -32px -32px' },
        }

  if (reduceMotion) {
    return (
      <div
        className={`grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-2.5 gap-y-1 sm:gap-x-3 ${className}`}
      >
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
      <motion.div variants={fadeUp} className="row-span-2 flex items-center">
        <img
          src={ICON_SRC}
          alt=""
          width={128}
          height={128}
          decoding="async"
          className={`object-contain ${iconSizes} drop-shadow-[0_0_10px_rgba(79,140,255,0.2)]`}
        />
      </motion.div>
      <motion.span
        className={`${roosClass} col-start-2 row-start-1 self-end`}
        variants={fadeUp}
      >
        ROOS
      </motion.span>
      <motion.span
        className={`${studioClass} col-start-2 row-start-2 self-start`}
        variants={fadeUp}
      >
        STUDIO
      </motion.span>
    </motion.div>
  )
}
