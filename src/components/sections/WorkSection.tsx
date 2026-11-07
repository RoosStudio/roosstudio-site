import { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import { site, type Example } from '../../content/site'
import { ProductModal } from '../ui/ProductModal'
import { ProjectMarquee } from '../ui/ProjectMarquee'
import { WorkRail } from '../ui/WorkRail'
import { WorkIntro } from './WorkIntro'
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
      <ProjectMarquee />
      <section
        id="arbeit"
        className="rs-section-scroll-mt relative"
        aria-labelledby="arbeit-heading"
      >
        <WorkIntro />
        <WorkRail />

        <ul className="relative" role="list">
          {site.examples.map((product, index) => (
            <WorkProject
              key={product.id}
              product={product}
              index={index}
              total={site.examples.length}
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
