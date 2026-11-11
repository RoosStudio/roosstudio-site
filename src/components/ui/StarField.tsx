import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useMemo } from 'react'

type Star = { x: number; y: number; r: number; o: number; twinkle: number }

function makeStars(count: number, seed: number): Star[] {
  const stars: Star[] = []
  let s = seed
  const rand = () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
  for (let i = 0; i < count; i++) {
    stars.push({
      x: rand() * 100,
      y: rand() * 100,
      r: 0.4 + rand() * 1.4,
      o: 0.18 + rand() * 0.55,
      twinkle: 2.5 + rand() * 5,
    })
  }
  return stars
}

export function StarField() {
  const reduce = useReducedMotion()
  const near = useMemo(() => makeStars(48, 17), [])
  const far = useMemo(() => makeStars(90, 91), [])
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 50, damping: 30 })
  const yNear = useTransform(smooth, [0, 1], [0, reduce ? 0 : -120])
  const yFar = useTransform(smooth, [0, 1], [0, reduce ? 0 : -50])

  return (
    <div className="rs-starfield pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <motion.svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ y: yFar }}>
        {far.map((st, i) => (
          <circle
            key={`f-${i}`}
            cx={st.x}
            cy={st.y}
            r={st.r * 0.35}
            fill="white"
            opacity={st.o * 0.45}
            style={
              reduce
                ? undefined
                : { animation: `rs-twinkle ${st.twinkle}s ease-in-out ${i * 0.13}s infinite` }
            }
          />
        ))}
      </motion.svg>
      <motion.svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ y: yNear }}>
        {near.map((st, i) => (
          <circle
            key={`n-${i}`}
            className={i % 11 === 0 ? 'rs-star-bright' : undefined}
            cx={st.x}
            cy={st.y}
            r={st.r * 0.45}
            fill={i % 11 === 0 ? '#c8f542' : i % 7 === 0 ? '#4f8cff' : 'white'}
            opacity={st.o}
            style={
              reduce
                ? undefined
                : { animation: `rs-twinkle ${st.twinkle}s ease-in-out ${i * 0.21}s infinite` }
            }
          />
        ))}
      </motion.svg>
    </div>
  )
}
