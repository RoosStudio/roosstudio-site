import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'
import { springTap } from '../../lib/motionPresets'

type MagneticButtonProps = {
  href: string
  className?: string
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  'aria-label'?: string
}

/** Leichter Magnet-Effekt auf Desktop — subtil, kein Spielzeug. */
export function MagneticButton({
  href,
  className = '',
  children,
  onClick,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 280, damping: 22, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 280, damping: 22, mass: 0.4 })

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduce) return
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.22)
    y.set(dy * 0.22)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { x: sx, y: sy }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={springTap}
    >
      {children}
    </motion.a>
  )
}
