import { Zap, ShieldCheck, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '魔法抓取',
    description:
      '摒弃繁琐的手动录入。内置智能引擎，自动登录教务处，一秒提取全学期课表。',
  },
  {
    icon: ShieldCheck,
    title: '纯粹至极',
    description:
      '拒绝开屏广告，拒绝花哨社交。只做纯粹的工具，打开即用，用完即走。',
  },
  {
    icon: Smartphone,
    title: '完美适配',
    description:
      '极致沉浸体验，完美适配各类全面屏与刘海屏手势，操作如丝般顺滑。',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="relative w-full flex flex-col items-center" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      {/* Decorative divider */}
      <div className="section-divider w-full max-w-xs mx-auto mb-20 lg:mb-24" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Section header — strictly centered */}
        <div className="w-full flex flex-col items-center text-center mb-16 lg:mb-20" style={{ marginBottom: '6.5rem' }}>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-slate-900 leading-tight">
            为什么选择{' '}
            <span className="text-purple-700">NextClass</span>
          </h2>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            极致简洁，只为高效。三大核心能力，重新定义校园课表体验。
          </p>
        </div>

        {/* Feature cards — 3 column grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="w-full h-full bg-white rounded-xl px-6 py-12 lg:px-8 lg:py-16 shadow-sm border border-slate-200 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-purple-50 text-purple-700 p-3 rounded-lg flex items-center justify-center mb-6">
                <Icon className="w-8 h-8" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
