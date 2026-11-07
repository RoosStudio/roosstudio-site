import { site } from '../../content/site'

/** Endloses Namensband — Rhythmus zwischen Hero und Werkstatt. */
export function ProjectMarquee() {
  const names = site.examples.map((e) => e.name)
  const loop = [...names, ...names]

  return (
    <div className="rs-marquee border-y border-rs-border/40 bg-rs-bg/40 py-4 sm:py-5" aria-hidden>
      <div className="rs-marquee-mask overflow-hidden">
        <div className="rs-marquee-track rs-marquee-track--animate flex w-max gap-10 sm:gap-14">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-xl font-semibold tracking-[-0.03em] text-rs-text/35 sm:text-2xl md:text-3xl"
            >
              {name}
              <span className="ml-10 text-rs-primary/50 sm:ml-14">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
