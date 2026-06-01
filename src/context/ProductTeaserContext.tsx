import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { site, type Example } from '../content/site'

type ProductTeaserContextValue = {
  activeId: Example['id']
  active: Example
  setActiveId: (id: Example['id']) => void
}

const ProductTeaserContext = createContext<ProductTeaserContextValue | null>(null)

export function ProductTeaserProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<Example['id']>(site.hero.flagshipId)

  const active = useMemo(
    () => site.examples.find((e) => e.id === activeId) ?? site.examples[0],
    [activeId],
  )

  return (
    <ProductTeaserContext.Provider value={{ activeId, active, setActiveId }}>
      {children}
    </ProductTeaserContext.Provider>
  )
}

export function useProductTeaser() {
  const ctx = useContext(ProductTeaserContext)
  if (!ctx) throw new Error('useProductTeaser must be used within ProductTeaserProvider')
  return ctx
}
