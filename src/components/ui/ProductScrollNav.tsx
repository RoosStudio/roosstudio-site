import { useEffect, useState } from 'react'
import { site, type Example } from '../../content/site'

export function ProductScrollNav() {
  const [activeId, setActiveId] = useState<Example['id']>(site.examples[0].id)

  useEffect(() => {
    const sections = site.examples
      .map((e) => document.getElementById(`product-${e.id}`))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) {
          setActiveId(visible.target.id.replace('product-', '') as Example['id'])
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="rs-cinema-scroll-nav hidden lg:flex"
      aria-label="Produkt-Fortschritt"
    >
      <ul className="flex flex-col gap-3" role="list">
        {site.examples.map((example) => {
          const isActive = example.id === activeId
          return (
            <li key={example.id}>
              <a
                href={`#product-${example.id}`}
                className={`rs-cinema-scroll-dot ${isActive ? 'rs-cinema-scroll-dot--active' : ''}`}
                aria-label={example.name}
                aria-current={isActive ? 'true' : undefined}
              >
                <span className="rs-cinema-scroll-dot-bar" aria-hidden />
                <span className="rs-cinema-scroll-dot-label">{example.name}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
