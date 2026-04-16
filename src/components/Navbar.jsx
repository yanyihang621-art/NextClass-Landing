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
          ? 'bg-white/70 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm shadow-slate-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group ml-2 sm:ml-6">
          <img 
            src="/logo.jpg" 
            alt="NextClass Logo" 
            className="w-11 h-11 rounded-2xl object-cover shadow-md shadow-purple-500/20 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-105" 
          />
          <span className="text-2xl font-black tracking-tight text-slate-900">
            Next<span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">Class</span>
          </span>
        </a>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#changelog"
            id="btn-changelog"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:text-purple-600 rounded-full hover:bg-purple-50 transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            版本日志
          </a>
          <a
            href="#download"
            id="btn-download-nav"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            立即下载
          </a>
        </div>
      </div>
    </nav>
  )
}
