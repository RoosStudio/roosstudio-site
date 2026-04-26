import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProductSplitSection } from './components/sections/ProductSplitSection'
import { ProofSection } from './components/sections/ProofSection'
import { WorkSection } from './components/sections/WorkSection'

function App() {
  return (
    <div className="min-h-dvh bg-rs-bg text-rs-text antialiased">
      <Header />
      <main>
        <HeroSection />
        <ProductSplitSection />
        <ProofSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
