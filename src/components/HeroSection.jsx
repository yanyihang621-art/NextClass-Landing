import { Download, Sparkles } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 md:pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 w-full">
        {/* Responsive grid: 1 column on mobile, 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* ===== LEFT: Copy & CTA ===== */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-10 w-full">

            {/* H1 */}
            <h1 className="fade-in-up delay-1 space-y-4 w-full">
              <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-transparent bg-clip-text pb-1 md:pb-2 leading-normal md:leading-none mx-auto md:mx-0">
                NextClass
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-slate-800 leading-[1.6] md:leading-tight mx-auto md:mx-0">
                你的专属课表
                <br />
                与教务管家
              </span>
            </h1>

            {/* Subtitle */}
            <p className="fade-in-up delay-2 text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed md:leading-loose max-w-sm md:max-w-lg mx-auto md:mx-0">
              告别繁琐的教务系统。一键全自动抓取课表，极其纯净的无广体验，为大学生定制的校园效率神器。
            </p>

            {/* CTA */}
            <div className="fade-in-up delay-3 flex flex-col items-center md:items-start gap-4 md:gap-5 pt-2 md:pt-3 w-full">
              <a
                href="/NextClass.apk"
                download="NextClass.apk"
                id="btn-download-hero"
                className="glow-btn pulse-ring inline-flex items-center justify-center gap-2 px-6 py-2.5 md:px-8 md:py-3 text-sm md:text-base font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl shadow-purple-500/30 transition-all duration-300 w-auto"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                下载安卓版 (v1.0.0)
              </a>
              <p className="text-xs md:text-sm text-slate-400/80 tracking-wide font-medium text-center md:text-left">
                完全免费 · 纯净无广 · 仅需 15MB
              </p>
            </div>
          </div>

          {/* ===== RIGHT: Phone Mockup with Glow ===== */}
          <div className="fade-in-scale delay-4 relative flex flex-col items-center md:items-end justify-center w-full mt-10 md:mt-0">
            {/* Giant gradient glow circles behind phone */}
            <div className="ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-purple-400/30 rounded-full blur-[60px] md:blur-[80px] -z-10" />
            <div className="ambient-glow-2 absolute top-[20%] left-[10%] md:left-[25%] w-48 md:w-72 h-48 md:h-72 bg-indigo-400/20 rounded-full blur-[40px] md:blur-[60px] -z-10" />
            <div className="ambient-glow-2 absolute bottom-[10%] right-[10%] md:right-[15%] w-40 md:w-60 h-40 md:h-60 bg-violet-300/25 rounded-full blur-[40px] md:blur-[60px] -z-10" />

            {/* Wrapper with responsive max-width to prevent overflow */}
            <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto md:mx-0 flex justify-center md:justify-end">
              <div className="transform scale-[0.75] sm:scale-[0.85] md:scale-90 lg:scale-100 origin-top">
                <PhoneMockup className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
