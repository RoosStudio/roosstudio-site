import { JsonLd } from './components/seo/JsonLd'
import { Atmosphere } from './components/ui/Atmosphere'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { SkipToMain } from './components/ui/SkipToMain'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProductSplitSection } from './components/sections/ProductSplitSection'
import { TestLabSection } from './components/sections/TestLabSection'
import { WorkSection } from './components/sections/WorkSection'

function App() {
  return (
    <div className="relative min-h-dvh bg-rs-bg text-rs-text antialiased">
      <JsonLd />
      <SkipToMain />
      <Atmosphere />
      <ScrollProgress />
      <div className="relative z-10">
        <Header />
        <main id="main" tabIndex={-1} aria-label="Hauptinhalt">
          <HeroSection />
          <TestLabSection />
          <ProductSplitSection />
          <WorkSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
