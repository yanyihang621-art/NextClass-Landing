import { Download, Sparkles } from 'lucide-react'
import PhoneMockup from './PhoneMockup'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100dvh-7rem)] lg:min-h-[calc(100dvh-5rem)] flex items-center justify-center overflow-hidden py-12"
    >
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 lg:px-8 gap-12 lg:gap-20 w-full z-10">

        {/* ===== LEFT: Copy & CTA ===== */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-6">

          {/* H1 */}
          <h1 className="fade-in-up delay-1 space-y-4 w-full">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-transparent bg-clip-text pb-2 leading-tight">
              NextClass
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-snug">
              你的专属课表
              <br />
              与教务管家
            </span>
          </h1>

          {/* Subtitle */}
          <p className="fade-in-up delay-2 text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-md lg:max-w-lg">
            告别繁琐的教务系统。一键全自动抓取课表，极其纯净的无广体验，专为大学生定制。
          </p>

          {/* CTA */}
          <div className="fade-in-up delay-3 flex flex-col items-center lg:items-start gap-4 pt-4 w-full">
            <a
              href="/NextClass.apk"
              download="NextClass.apk"
              id="btn-download-hero"
              className="glow-btn pulse-ring inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-xl shadow-purple-500/30 transition-all hover:scale-105 active:scale-95 duration-300 w-auto"
            >
              <Download className="w-5 h-5" />
              下载安卓版 (v1.0.0)
            </a>
            <p className="text-sm text-slate-400 font-medium">
              完全免费 · 纯净无广 · 仅需 15MB
            </p>
          </div>
        </div>

        {/* ===== RIGHT: Phone Mockup with Glow ===== */}
        <div className="fade-in-scale delay-4 relative w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
          {/* Ambient Glows */}
          <div className="ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] lg:w-[400px] h-[250px] sm:h-[300px] lg:h-[400px] bg-purple-400/30 rounded-full blur-[60px] lg:blur-[80px] -z-10" />
          <div className="ambient-glow-2 absolute top-[20%] left-[10%] lg:left-[20%] w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 bg-indigo-400/20 rounded-full blur-[40px] lg:blur-[60px] -z-10" />

          {/* Phone Mockup wrapper strictly constrained */}
          <div className="max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] w-full h-auto">
            <PhoneMockup className="w-full h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>

      </div>
    </section>
  )
}
