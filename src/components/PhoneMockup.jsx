import { Calendar, CloudDownload, User, CalendarDays, Plus, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Phone mockup faithfully recreating the real NextClass app UI.
 * Optimized for: no corner clipping, readable text, matching UI style.
 */
export default function PhoneMockup() {
  const colors = [
    { bg: '#F3E8FF', text: '#6B21A8' },   // purple
    { bg: '#D1FAE5', text: '#065F46' },   // emerald
    { bg: '#DBEAFE', text: '#1E40AF' },   // sky/blue
    { bg: '#FEF3C7', text: '#92400E' },   // amber/orange
    { bg: '#FCE7F3', text: '#9D174D' },   // pink
    { bg: '#E0E7FF', text: '#3730A3' },   // indigo
  ]

  // [col, row, span, colorIndex, courseName, location, teacher]
  // All names are pseudonymous
  const courses = [
    [0, 0, 2, 0, '文献查阅\n与科技写作', '教学楼A\n102室', '李华'],
    [0, 2, 4, 0, '高等数\n学A(II)', '教学楼A\n201室', '常青'],
    [0, 6, 2, 4, '数据结构\n与算法', '教学楼B\n305室', '王磊'],
    [1, 2, 2, 2, '大学物理\nB(I)', '教学楼D\n阶-101', '邱明红'],
    [1, 6, 2, 3, '体育(II)', '体育馆\n篮球场', '柴志龙'],
    [1, 8, 2, 0, '近代史\n纲要', '教学楼A\n108室', '周文'],
    [2, 2, 2, 0, '高等数\n学A(II)', '教学楼A\n201室', '常青'],
    [2, 8, 2, 0, '物理实\n验(I)', '实验楼\n203室', '张颖'],
    [3, 2, 2, 4, '大学英\n语3', '教学楼D\n310室', '许梦圆'],
    [3, 6, 2, 2, 'C语言程\n序设计', '教学楼B\n305室', '刘颖冰'],
    [4, 2, 2, 1, '大学物\n理B(I)', '教学楼D\n阶-101', '邱明红'],
    [5, 2, 3, 5, '人工智能\n导论', '网络\n课程', '赵远'],
  ]

  const days = ['一', '二', '三', '四', '五', '六', '日']
  const dates = [13, 14, 15, 16, 17, 18, 19]

  const times = [
    ['1', '08:00', '08:45'],
    ['2', '08:50', '09:35'],
    ['3', '09:50', '10:35'],
    ['4', '10:45', '11:30'],
    ['5', '11:35', '12:20'],
    ['6', '13:00', '13:45'],
    ['7', '13:50', '14:35'],
    ['8', '14:45', '15:30'],
    ['9', '15:40', '16:25'],
  ]

  // Cell height — tuned to fit 9 periods in the visible area
  const cellH = 52

  return (
    <div className="phone-float relative">
      {/* Phone shell */}
      <div
        className="relative bg-white border border-gray-200/80 shadow-2xl overflow-hidden flex flex-col"
        style={{
          width: 360,
          height: 780,
          borderRadius: '2.5rem',
          boxShadow:
            '0 30px 80px -20px rgba(139, 92, 246, 0.25), 0 15px 35px -10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(139, 92, 246, 0.05)',
        }}
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[25px] bg-black rounded-b-2xl z-30" />

        {/* ===== TOP HEADER ===== */}
        <div className="pt-10 px-5 pb-2 z-20 bg-white flex-shrink-0">
          <div className="flex items-center justify-between mb-1">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
            <div className="flex items-center gap-2">
              <h2 className="text-[17px] font-bold text-slate-900 tracking-tight">
                第3周
              </h2>
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </div>
            <Plus className="w-5 h-5 text-slate-500" />
          </div>
          <div className="text-[10.5px] text-slate-400 font-medium flex items-center gap-1 pl-0.5">
            <span>2026/04/14</span>
            <span className="text-purple-500 font-semibold">· 本周</span>
          </div>
        </div>

        {/* ===== DAY HEADERS ===== */}
        <div className="flex px-1.5 bg-white pb-2 z-20 border-b border-slate-100/80 flex-shrink-0">
          <div className="flex-shrink-0 flex items-end justify-center pb-1" style={{ width: 42 }}>
            <span className="text-[12px] font-bold text-slate-700">4月</span>
          </div>
          <div className="flex-1 grid grid-cols-7">
            {days.map((d, i) => {
              const isToday = i === 1  // Tuesday = 14
              const isWeekend = i >= 5
              return (
                <div key={d} className="flex flex-col items-center gap-0.5 py-0.5">
                  <span
                    className={`text-[10px] font-medium ${
                      isToday ? 'text-purple-600' : isWeekend ? 'text-rose-400' : 'text-slate-400'
                    }`}
                  >
                    {d}
                  </span>
                  <div
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-[12px] font-bold ${
                      isToday
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-300'
                        : isWeekend
                          ? 'text-rose-400'
                          : 'text-slate-600'
                    }`}
                  >
                    {dates[i]}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ===== TIMETABLE BODY ===== */}
        {/* Inner padding keeps content away from the phone shell's rounded corners */}
        <div className="flex-1 overflow-hidden relative flex bg-white" style={{ padding: '0 4px' }}>
          {/* Time column */}
          <div className="flex-shrink-0 flex flex-col" style={{ width: 38 }}>
            {times.map(([p, s, e]) => (
              <div
                key={p}
                className="flex flex-col items-center justify-center border-r border-slate-50/80"
                style={{ height: cellH }}
              >
                <span className="text-[12px] font-bold text-slate-700 leading-none">{p}</span>
                <span className="text-[7px] text-slate-400 mt-0.5">{s}</span>
                <span className="text-[7px] text-slate-400">{e}</span>
              </div>
            ))}
          </div>

          {/* Grid area */}
          <div className="flex-1 relative">
            {/* Row lines */}
            {times.map((_, i) => (
              <div
                key={`row-${i}`}
                className="absolute left-0 right-0 border-b border-slate-100/50"
                style={{ top: (i + 1) * cellH }}
              />
            ))}

            {/* Course blocks — pill-shaped like the real app */}
            {courses.map(([col, row, span, ci, name, loc, teacher], i) => {
              const color = colors[ci]
              return (
                <div
                  key={i}
                  className="absolute flex flex-col justify-start overflow-hidden"
                  style={{
                    left: `calc(${col} * (100% / 7) + 1.5px)`,
                    top: row * cellH + 1.5,
                    width: `calc(100% / 7 - 3px)`,
                    height: span * cellH - 3,
                    backgroundColor: color.bg,
                    color: color.text,
                    borderRadius: 10,
                    padding: '3px 3px 2px',
                  }}
                >
                  <span
                    className="font-bold whitespace-pre-line"
                    style={{ fontSize: 8, lineHeight: 1.2 }}
                  >
                    {name}
                  </span>
                  <div className="mt-auto" style={{ opacity: 0.55 }}>
                    <span
                      className="whitespace-pre-line block"
                      style={{ fontSize: 6.5, lineHeight: 1.1 }}
                    >
                      {loc}
                    </span>
                    <span
                      className="block"
                      style={{ fontSize: 6.5, lineHeight: 1.1 }}
                    >
                      {teacher}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ===== BOTTOM NAV — matching real app style ===== */}
        <div className="bg-white border-t border-slate-100 flex items-center justify-around z-20 flex-shrink-0" style={{ height: 60, paddingBottom: 6 }}>
          <div className="flex flex-col items-center gap-0.5 text-slate-400">
            <CalendarDays className="w-[19px] h-[19px]" />
            <span className="text-[9.5px]">日程</span>
          </div>
          {/* Active tab — raised pill to mimic real app */}
          <div className="flex flex-col items-center relative" style={{ top: -6 }}>
            <div
              className="flex flex-col items-center border border-purple-200/60 shadow-sm"
              style={{
                backgroundColor: '#FAF5FF',
                borderRadius: 20,
                padding: '6px 16px 4px',
              }}
            >
              <Calendar className="w-[19px] h-[19px] text-purple-600" />
              <span className="text-[9.5px] text-purple-700 font-bold">课表</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-slate-400">
            <CloudDownload className="w-[19px] h-[19px]" />
            <span className="text-[9.5px]">导入</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-slate-400">
            <User className="w-[19px] h-[19px]" />
            <span className="text-[9.5px]">我的</span>
          </div>
        </div>
      </div>
    </div>
  )
}
