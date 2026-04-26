import { site, type ProofItem } from '../../content/site'
import { SectionReveal } from '../ui/SectionReveal'

function ProofCard({ item, id }: { item: ProofItem; id?: string }) {
  const isEnt = item.variant === 'enterprise'
  return (
    <article
      id={id}
      className={
        isEnt
          ? 'rs-surface-enterprise flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.06] sm:rounded-2xl'
          : 'flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-rs-card/40 sm:rounded-2xl'
      }
    >
      <div
        className={`relative aspect-[16/10] w-full overflow-hidden bg-black/40 ${
          isEnt ? 'ring-1 ring-inset ring-white/[0.04]' : ''
        }`}
      >
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top"
          width={1600}
          height={1000}
        />
      </div>
      <div
        className={
          isEnt
            ? 'border-t border-white/[0.05] px-4 py-3.5 sm:px-5 sm:py-4'
            : 'border-t border-white/[0.04] px-4 py-3.5 sm:px-5 sm:py-4'
        }
      >
        <h3 className="text-base font-semibold text-rs-text sm:text-lg">
          {item.title}
        </h3>
        <p
          className={
            isEnt
              ? 'mt-0.5 text-sm text-rs-wt-body'
              : 'mt-0.5 text-sm text-rs-text-secondary'
          }
        >
          {item.line}
        </p>
      </div>
    </article>
  )
}

export function ProofSection() {
  return (
    <section
      id="proof"
      className="scroll-mt-24 border-t border-rs-border/80 bg-[color-mix(in_srgb,var(--color-rs-surface)_88%,#000_12%)] py-16 sm:scroll-mt-28 sm:py-24 md:py-28"
      aria-labelledby="proof-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rs-primary/90 sm:text-sm">
            {site.proof.sectionEyebrow}
          </p>
          <h2
            id="proof-heading"
            className="mt-2 max-w-2xl font-display text-2xl font-bold leading-tight sm:text-4xl"
          >
            {site.proof.sectionTitle}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-rs-text-secondary sm:mt-4 sm:text-base">
            {site.proof.lede}
          </p>
        </SectionReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:grid-cols-2 lg:gap-5">
          {site.proof.items.map((item, i) => (
            <SectionReveal key={item.id} delay={0.04 * i}>
              <ProofCard
                item={item}
                id={item.id === 'wiretrack' ? 'proof-wiretrack' : undefined}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
