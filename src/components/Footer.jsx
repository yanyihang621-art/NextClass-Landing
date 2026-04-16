import { GraduationCap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-white/60 backdrop-blur-sm border-t border-gray-200/60" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left – Copyright */}
          <div className="flex items-center gap-2.5 text-gray-500 text-sm">
            <img src="/logo.jpg" alt="logo" className="w-4 h-4 rounded-md object-cover grayscale opacity-70" />
            <span>Copyright © 2026 NextClass. All rights reserved.</span>
          </div>

          {/* Right – ICP */}
          <div className="text-gray-400 text-sm">
            <span>ICP备案号：京ICP备XXXXXXXX号-X</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
