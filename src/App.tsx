import { JsonLd } from './components/seo/JsonLd'
import { SkipToMain } from './components/ui/SkipToMain'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { StarField } from './components/ui/StarField'
import { Header } from './components/layout/Header'
import { MobileDock } from './components/layout/MobileDock'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { WorkSection } from './components/sections/WorkSection'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  return (
    <div className="relative min-h-dvh bg-rs-bg text-rs-text antialiased">
      <JsonLd />
      <SkipToMain />
      <ScrollProgress />
      <div className="rs-page-bg pointer-events-none fixed inset-0 z-0" aria-hidden />
      <StarField />
      <div className="relative z-10">
        <Header />
        <main id="main" tabIndex={-1} aria-label="Hauptinhalt">
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
        <MobileDock />
      </div>
    </div>
  )
}

export default App
