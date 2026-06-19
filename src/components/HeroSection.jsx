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
          <h1 className="space-y-4 w-full">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-purple-700 pb-2 leading-tight">
              NextClass
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-snug">
              你的专属课表
              <br />
              与教务管家
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-md lg:max-w-lg">
            告别繁琐的教务系统。一键全自动抓取课表，极其纯净的无广体验，专为大学生定制。
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center lg:items-start gap-4 pt-4 w-full">
            <a
              href="/NextClass.apk"
              download="NextClass.apk"
              id="btn-download-hero"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-white rounded-lg bg-purple-700 hover:bg-purple-800 shadow-sm transition-colors w-64 lg:w-auto lg:px-10"
            >
              <Download className="w-5 h-5" />
              下载安卓版 (v1.0.0)
            </a>
            <p className="text-sm text-slate-400 font-medium">
              完全免费 · 纯净无广
            </p>
          </div>
        </div>

        {/* ===== RIGHT: Phone Mockup ===== */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
          {/* Phone Mockup wrapper scaled & centered */}
          <div className="w-[360px] h-[780px] scale-[0.75] sm:scale-90 lg:scale-100 origin-center lg:origin-right my-[-90px] sm:my-[-40px] lg:my-0 flex-shrink-0">
            <PhoneMockup className="w-full h-auto object-contain" />
          </div>
        </div>

      </div>
    </section>
  )
}
