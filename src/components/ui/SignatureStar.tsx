import { motion, useReducedMotion } from 'framer-motion'

/** Ein ruhiger Stern-Akzent — das „geile“ Detail, klar und präzise. */
export function SignatureStar({ className = '' }: { className?: string }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={`rs-signature-star ${className}`}
      aria-hidden
      initial={reduce ? false : { opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
    >
      <span className="rs-signature-star-glow" />
      <span className="rs-signature-star-flare rs-signature-star-flare--h" />
      <span className="rs-signature-star-flare rs-signature-star-flare--v" />
      <span className="rs-signature-star-core" />
    </motion.div>
  )
}
