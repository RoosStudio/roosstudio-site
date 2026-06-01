import { useCallback, useState } from 'react'
import { site, type Example } from '../../content/site'
import { ProductModal } from '../ui/ProductModal'
import { ProductScrollChapter } from '../ui/ProductScrollChapter'
import { ProductScrollNav } from '../ui/ProductScrollNav'
import { SectionReveal } from '../ui/SectionReveal'

export function AppsSection() {
  const [modalProduct, setModalProduct] = useState<Example | null>(null)
  const total = site.examples.length

  const openModal = useCallback((product: Example) => {
    setModalProduct(product)
  }, [])

  const closeModal = useCallback(() => {
    setModalProduct(null)
  }, [])

  return (
    <>
      <section
        id="beispiele"
        className="rs-section-scroll-mt rs-cinema-showcase relative"
        aria-labelledby="beispiele-heading"
      >
        <div className="rs-section-inner rs-section-inner--wide rs-cinema-intro">
          <SectionReveal strength="bold">
            <p className="rs-eyebrow">{site.work.sectionEyebrow}</p>
            <h2 id="beispiele-heading" className="rs-section-title rs-section-title--xl max-w-4xl">
              {site.work.sectionTitle}
            </h2>
            <p className="rs-section-lede rs-section-lede--lg max-w-2xl">{site.work.lede}</p>
          </SectionReveal>
        </div>

        <ProductScrollNav />

        <div className="rs-cinema-chapters">
          {site.examples.map((example, index) => (
            <ProductScrollChapter
              key={example.id}
              product={example}
              index={index}
              total={total}
              onOpen={openModal}
            />
          ))}
        </div>
      </section>

      <ProductModal product={modalProduct} onClose={closeModal} />
    </>
  )
}
