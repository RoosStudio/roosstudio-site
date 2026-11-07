import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { EASE } from '../../lib/motionPresets'

/** Kurzer Studio-Einstieg — schwarz → Marke → Seite. */
export function IntroCurtain() {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState<'boot' | 'brand' | 'done'>(reduce ? 'done' : 'boot')

  useEffect(() => {
    if (reduce) return
    const t1 = window.setTimeout(() => setPhase('brand'), 180)
    const t2 = window.setTimeout(() => setPhase('done'), 1450)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [reduce])

  return (
    <AnimatePresence>
      {phase !== 'done' ? (
        <motion.div
          className="fixed inset-0 z-[500] flex items-center justify-center bg-[#050508]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          aria-hidden
        >
          <motion.p
            className="font-display text-[clamp(2rem,8vw,4.5rem)] font-extrabold tracking-[-0.05em] text-rs-text"
            initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
            animate={
              phase === 'brand'
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : { opacity: 0, y: 18, filter: 'blur(10px)' }
            }
            transition={{ duration: 0.55, ease: EASE }}
          >
            Roos Studio
          </motion.p>
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-rs-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === 'brand' ? 1 : 0 }}
            transition={{ duration: 1.05, ease: EASE }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
