import { useState, useEffect } from 'react'
import { Download, FileText } from 'lucide-react'

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
      <div className="mx-auto flex h-16 w-full max-w-[1536px] items-center justify-between px-4 sm:px-6 md:px-8 lg:h-20 lg:px-12 xl:px-16">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center justify-center gap-2 lg:gap-3 group">
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
          <a
            href="#changelog"
            id="btn-changelog"
            className="hidden h-10 shrink-0 whitespace-nowrap lg:inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-purple-700 lg:px-4"
          >
            <FileText className="w-4 h-4" />
            版本日志
          </a>
          <a
            href="/NextClass.apk"
            download="NextClass.apk"
            id="btn-download-nav"
            className="inline-flex h-10 shrink-0 whitespace-nowrap items-center justify-center gap-1.5 rounded-lg bg-purple-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-purple-800 lg:px-5 lg:py-2.5"
          >
            <Download className="w-4 h-4" />
            立即下载
          </a>
        </div>
      </div>
    </nav>
  )
}
