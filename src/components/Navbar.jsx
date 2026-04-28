import { useState, useEffect } from 'react'
import { GraduationCap, Download, FileText } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm shadow-slate-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row justify-center lg:justify-between items-center py-3 lg:py-0 lg:h-20 gap-3 lg:gap-0">
        {/* Logo */}
        <a href="#" className="flex items-center justify-center gap-2 lg:gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="NextClass Logo" 
            className="w-7 h-7 lg:w-11 lg:h-11 rounded-[0.6rem] lg:rounded-2xl object-cover shadow-md shadow-purple-500/20 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-105" 
          />
          <span className="text-lg lg:text-2xl font-black tracking-tight text-slate-900">
            Next<span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">Class</span>
          </span>
        </a>

        {/* Actions - Vertically stacked on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 mt-1 lg:mt-0">
          <a
            href="#changelog"
            id="btn-changelog"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 lg:px-4 lg:py-2 text-[11px] lg:text-sm font-medium text-slate-500 hover:text-purple-600 rounded-full bg-slate-50 lg:bg-transparent hover:bg-purple-50 transition-all duration-300 w-full lg:w-auto"
          >
            <FileText className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            版本日志
          </a>
          <a
            href="/NextClass.apk"
            download="NextClass.apk"
            id="btn-download-nav"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2 lg:px-6 lg:py-2.5 text-[11px] lg:text-sm font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 transition-all duration-300 hover:-translate-y-0.5 w-full lg:w-auto"
          >
            <Download className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
            立即下载
          </a>
        </div>
      </div>
    </nav>
  )
}
