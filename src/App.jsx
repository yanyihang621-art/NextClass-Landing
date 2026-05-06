import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-200 selection:text-purple-900 grid-texture relative">
      {/* Ambient background decorations */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-indigo-200/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-200/10 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      <main className="pt-28 lg:pt-20">
        <HeroSection />
        <FeaturesSection />
      </main>
      {/* Spacer — guaranteed breathing room before footer */}
      <div aria-hidden="true" style={{ height: '4rem' }} />
      <Footer />
    </div>
  )
}
