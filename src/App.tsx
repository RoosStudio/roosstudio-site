import { JsonLd } from './components/seo/JsonLd'
import { SkipToMain } from './components/ui/SkipToMain'
import { ScrollProgress } from './components/ui/ScrollProgress'
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
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 80% -10%, rgba(79,140,255,0.16), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 30%, rgba(200,245,66,0.07), transparent 50%), #07070c',
        }}
      />
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
