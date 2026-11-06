import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { site, type Example } from '../../content/site'
import { ProductModal } from '../ui/ProductModal'
import { SectionReveal } from '../ui/SectionReveal'
import { WorkProject } from './WorkProject'

export function WorkSection() {
  const [modalProduct, setModalProduct] = useState<Example | null>(null)

  const openModal = useCallback((product: Example) => {
    setModalProduct(product)
  }, [])
  const closeModal = useCallback(() => setModalProduct(null), [])

  const modal =
    typeof document !== 'undefined'
      ? createPortal(<ProductModal product={modalProduct} onClose={closeModal} />, document.body)
      : null

  return (
    <>
      <section
        id="arbeit"
        className="rs-section-scroll-mt relative"
        aria-labelledby="arbeit-heading"
      >
        <div className="rs-section-inner rs-section-inner--wide rs-section-y pb-10 sm:pb-14">
          <SectionReveal strength="bold">
            <p className="rs-eyebrow">{site.work.sectionEyebrow}</p>
            <h2 id="arbeit-heading" className="rs-section-title rs-section-title--xl max-w-3xl">
              {site.work.sectionTitle}
            </h2>
            <p className="rs-section-lede rs-section-lede--lg max-w-2xl">{site.work.lede}</p>
          </SectionReveal>
        </div>

        <ul className="relative" role="list">
          {site.examples.map((product, index) => (
            <WorkProject
              key={product.id}
              product={product}
              index={index}
              openLabel={site.work.openLabel}
              onOpen={openModal}
            />
          ))}
        </ul>
      </section>

      {modal}
    </>
  )
}
