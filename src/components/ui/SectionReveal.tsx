import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE, springReveal } from '../../lib/motionPresets'

type Strength = 'default' | 'bold'

function makeVariants(
  strength: Strength,
  useSpring: boolean,
  delay: number,
): Variants {
  const y = strength === 'bold' ? 32 : 20
  if (useSpring) {
    return {
      hidden: { opacity: 0, y, scale: strength === 'bold' ? 0.98 : 1 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { ...springReveal, delay },
      },
    }
  }
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, delay, ease: EASE },
    },
  }
}

type SectionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  strength?: 'default' | 'bold'
  useSpring?: boolean
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  strength = 'default',
  useSpring = true,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -10% 0px' }}
      variants={makeVariants(strength, useSpring, delay)}
      className={className}
    >
      {children}
    </motion.div>
  )
}
