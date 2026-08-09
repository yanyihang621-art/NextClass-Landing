const features = [
  {
    title: '自动导入课程',
    description: '登录教务系统后，整学期课程一次导入。',
  },
  {
    title: '只保留课程相关',
    description: '无广告、无社交，打开就是当天安排。',
  },
  {
    title: '适应日常使用',
    description: '为常见手机屏幕和手势操作做好适配。',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            只做课表该做的事
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            导入课程、查看安排，不被无关信息打扰。
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-1 divide-y divide-slate-200 border-y border-slate-200 sm:mt-12 md:grid-cols-3 md:divide-x md:divide-y-0">
          {features.map(({ title, description }) => (
            <div
              key={title}
              className="py-8 md:px-8 md:py-9 md:first:pl-0 md:last:pr-0"
            >
              <dt className="text-lg font-semibold tracking-tight text-slate-900">
                {title}
              </dt>
              <dd className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
