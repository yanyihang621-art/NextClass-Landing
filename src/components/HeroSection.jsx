import { Download, Sparkles } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-24 w-full">
        {/* Strict 50/50 grid on desktop, single column on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ===== LEFT: Copy & CTA ===== */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-10 w-full">

            {/* H1 */}
            <h1 className="fade-in-up delay-1 space-y-4 lg:space-y-4 w-full">
              <span className="block text-4xl sm:text-5xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-transparent bg-clip-text pb-1 lg:pb-2 leading-normal lg:leading-none mx-auto lg:mx-0">
                NextClass
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-[2.75rem] font-extrabold text-slate-800 leading-[1.6] lg:leading-tight mx-auto lg:mx-0">
                你的专属课表
                <br />
                与教务管家
              </span>
            </h1>

            {/* Subtitle */}
            <p className="fade-in-up delay-2 text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed lg:leading-loose max-w-sm lg:max-w-lg mx-auto lg:mx-0">
              告别繁琐的教务系统。一键全自动抓取课表，极其纯净的无广体验，为大学生定制的校园效率神器。
            </p>

            {/* CTA */}
            <div className="fade-in-up delay-3 flex flex-col items-center lg:items-start gap-4 lg:gap-5 pt-2 lg:pt-3 w-full">
              <a
                href="#download"
                id="btn-download-hero"
                className="glow-btn pulse-ring inline-flex items-center justify-center gap-2 px-6 py-2.5 lg:px-8 lg:py-3 text-sm lg:text-base font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl shadow-purple-500/30 transition-all duration-300 w-auto"
              >
                <Download className="w-4 h-4 lg:w-5 lg:h-5" />
                下载安卓版 (v1.0.0)
              </a>
              <p className="text-xs lg:text-sm text-slate-400/80 tracking-wide font-medium text-center lg:text-left">
                完全免费 · 纯净无广 · 仅需 15MB
              </p>
            </div>
          </div>

          {/* ===== RIGHT: Phone Mockup with Glow ===== */}
          {/* Centered below text on mobile, right aligned on desktop */}
          <div className="fade-in-scale delay-4 relative flex flex-col items-center lg:items-end justify-center w-full mt-4 lg:mt-0">
            {/* Giant gradient glow circles behind phone */}
            <div className="ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[420px] h-[300px] lg:h-[420px] bg-purple-400/30 rounded-full blur-[60px] lg:blur-[80px] -z-10" />
            <div className="ambient-glow-2 absolute top-[20%] left-[10%] lg:left-[25%] w-48 lg:w-72 h-48 lg:h-72 bg-indigo-400/20 rounded-full blur-[40px] lg:blur-[60px] -z-10" />
            <div className="ambient-glow-2 absolute bottom-[10%] right-[10%] lg:right-[15%] w-40 lg:w-60 h-40 lg:h-60 bg-violet-300/25 rounded-full blur-[40px] lg:blur-[60px] -z-10" />

            {/* Wrapper to scale the PhoneMockup on small screens */}
            <div className="transform scale-[0.8] sm:scale-[0.85] md:scale-90 lg:scale-100 origin-top w-full flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
