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
      className={`sticky top-0 z-50 transition-colors duration-300 w-full ${
        scrolled
          ? 'bg-white border-b border-slate-200 shadow-sm'
          : 'bg-white lg:bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-16 lg:px-24 flex flex-row justify-between items-center h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center justify-center gap-2 lg:gap-3 group">
          <img 
            src="/logo.jpg" 
            alt="NextClass Logo" 
            className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg object-cover shadow-sm" 
          />
          <span className="text-lg lg:text-2xl font-black tracking-tight text-slate-900">
            Next<span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">Class</span>
          </span>
        </a>

        {/* Actions */}
        <div className="flex flex-row items-center justify-end gap-3 lg:gap-6">
          <a
            href="#changelog"
            id="btn-changelog"
            className="hidden lg:inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 hover:text-purple-700 transition-colors"
          >
            <FileText className="w-4 h-4" />
            版本日志
          </a>
          <a
            href="/NextClass.apk"
            download="NextClass.apk"
            id="btn-download-nav"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 lg:px-6 lg:py-2.5 text-sm font-bold text-white rounded-lg bg-purple-700 hover:bg-purple-800 shadow-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            立即下载
          </a>
        </div>
      </div>
    </nav>
  )
}
