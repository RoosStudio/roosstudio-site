import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const variants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

type SectionRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px 0px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
