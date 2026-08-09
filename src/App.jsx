import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ChangelogSection from './components/ChangelogSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-200 selection:text-purple-900 relative">

      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ChangelogSection />
      </main>
      {/* Spacer — guaranteed breathing room before footer */}
      <div aria-hidden="true" style={{ height: '4rem' }} />
      <Footer />
    </div>
  )
}

