import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { FunApps } from './components/FunApps'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Philosophy } from './components/Philosophy'
import { WireTrackSection } from './components/WireTrackSection'

function App() {
  return (
    <div className="min-h-dvh bg-rs-bg text-rs-text antialiased">
      <Header />
      <main>
        <Hero />
        <FunApps />
        <WireTrackSection />
        <Philosophy />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App