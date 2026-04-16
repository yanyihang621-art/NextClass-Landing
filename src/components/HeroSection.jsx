import { Download, Sparkles } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 w-full">
        {/* Strict 50/50 grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ===== LEFT: Copy & CTA ===== */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10">

            {/* H1 */}
            <h1 className="fade-in-up delay-1 space-y-4">
              <span className="block text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-transparent bg-clip-text pb-2 leading-none">
                NextClass
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-slate-800 leading-tight">
                你的专属课表
                <br />
                与教务管家
              </span>
            </h1>

            {/* Subtitle */}
            <p className="fade-in-up delay-2 text-base sm:text-lg text-slate-400 leading-loose max-w-lg">
              告别繁琐的教务系统。一键全自动抓取课表，极其纯净的无广体验，为大学生定制的校园效率神器。
            </p>

            {/* CTA */}
            <div className="fade-in-up delay-3 flex flex-col items-center lg:items-start gap-5 pt-3">
              <a
                href="#download"
                id="btn-download-hero"
                className="glow-btn pulse-ring inline-flex items-center gap-2 px-8 py-3 text-base font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl shadow-purple-500/30 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                下载安卓版 (v1.0.0)
              </a>
              <p className="text-sm text-slate-400/80 tracking-wide font-medium">
                完全免费 · 纯净无广 · 仅需 15MB
              </p>
            </div>
          </div>

          {/* ===== RIGHT: Phone Mockup with Glow ===== */}
          <div className="fade-in-scale delay-4 relative flex items-center justify-center lg:justify-end min-h-[520px] lg:min-h-[640px]">
            {/* Giant gradient glow circles behind phone */}
            <div className="ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-purple-400/30 rounded-full blur-[80px] -z-10" />
            <div className="ambient-glow-2 absolute top-[30%] left-[25%] w-72 h-72 bg-indigo-400/20 rounded-full blur-[60px] -z-10" />
            <div className="ambient-glow-2 absolute bottom-[20%] right-[15%] w-60 h-60 bg-violet-300/25 rounded-full blur-[60px] -z-10" />

            <PhoneMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
