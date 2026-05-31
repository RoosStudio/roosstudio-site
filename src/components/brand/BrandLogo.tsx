import { motion, useReducedMotion } from 'framer-motion'

const ICON_SRC = '/roos-studio-branding/logos/logo-icon-gradient.png'

type BrandLogoProps = {
  placement: 'header' | 'footer'
  className?: string
}

export function BrandLogo({ placement, className = '' }: BrandLogoProps) {
  const reduceMotion = useReducedMotion()

  const iconSizes =
    placement === 'header'
      ? 'h-8 w-8 sm:h-9 sm:w-9'
      : 'h-10 w-10 sm:h-12 sm:w-12'

  const roosClass =
    placement === 'header'
      ? 'block text-base font-semibold leading-none tracking-[-0.02em] text-rs-text sm:text-[1.05rem]'
      : 'block text-xl font-semibold leading-none tracking-[-0.02em] text-rs-text sm:text-2xl'

  const studioClass =
    placement === 'header'
      ? 'block text-[0.625rem] font-medium uppercase leading-none tracking-[0.14em] text-rs-text-secondary sm:text-[0.6875rem]'
      : 'block text-[0.6875rem] font-medium uppercase leading-none tracking-[0.14em] text-rs-text-secondary sm:text-xs'

  const gridClass = `grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-x-2.5 gap-y-0.5 ${className}`

  const content = (
    <>
      <div className="row-span-2 flex items-center">
        <img
          src={ICON_SRC}
          alt=""
          width={128}
          height={128}
          decoding="async"
          className={`object-contain ${iconSizes}`}
        />
      </div>
      <span className={`${roosClass} col-start-2 row-start-1 self-end`}>ROOS</span>
      <span className={`${studioClass} col-start-2 row-start-2 self-start`}>STUDIO</span>
    </>
  )

  if (reduceMotion) {
    return <div className={gridClass}>{content}</div>
  }

  return (
    <motion.div
      className={gridClass}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {content}
    </motion.div>
  )
}
