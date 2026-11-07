import { motion, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { site } from '../../content/site'

/** Desktop-Seitennavigation für die Sticky-Projekte. */
export function WorkRail() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', () => {
    const nodes = site.examples
      .map((e) => document.getElementById(`work-${e.id}`))
      .filter(Boolean) as HTMLElement[]
    if (!nodes.length) return

    const arbeit = document.getElementById('arbeit')
    const studio = document.getElementById('studio')
    const y = window.scrollY + window.innerHeight * 0.45
    const inWork =
      arbeit && studio ? y >= arbeit.offsetTop + 200 && y < studio.offsetTop - 80 : false
    setVisible(Boolean(inWork))

    let idx = 0
    nodes.forEach((node, i) => {
      if (y >= node.offsetTop) idx = i
    })
    setActive(idx)
  })

  if (reduce) return null

  return (
    <nav
      className={`pointer-events-none fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col gap-3 transition-opacity duration-300 lg:flex ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Projekte"
    >
      {site.examples.map((example, i) => (
        <a
          key={example.id}
          href={`#work-${example.id}`}
          className="pointer-events-auto group flex items-center justify-end gap-3 outline-none"
          aria-current={active === i ? 'true' : undefined}
        >
          <span
            className={`max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium text-rs-text-secondary opacity-0 transition-all duration-300 group-hover:max-w-[8rem] group-hover:opacity-100 ${
              active === i ? 'max-w-[8rem] text-rs-text opacity-100' : ''
            }`}
          >
            {example.name}
          </span>
          <motion.span
            className={`block w-[2px] rounded-full transition-all duration-300 ${
              active === i ? 'h-10 bg-rs-primary shadow-[0_0_16px_rgba(79,140,255,0.55)]' : 'h-6 bg-rs-border'
            }`}
            layout
          />
        </a>
      ))}
    </nav>
  )
}
