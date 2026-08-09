import { useState, useEffect } from 'react'
import { GitCommit, ArrowDownCircle, RefreshCw } from 'lucide-react'

export default function ChangelogSection() {
  const [changelog, setChangelog] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zipiuxnvltsjwriwmmor.supabase.co';
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_0f539DcDi0OlHldSXmq9uw_sb6ofLbk';

    const fetchUrl = import.meta.env.DEV 
      ? `${supabaseUrl}/rest/v1/changelogs?select=*` 
      : `/sb/rest/v1/changelogs?select=*`;

    const headers = {
      'apikey': supabaseAnonKey,
      'Authorization': `Bearer ${supabaseAnonKey}`
    };

    const sortData = (data) => {
      return data.sort((a, b) => {
        const parseVer = (v) => v.split('.').map(Number);
        const av = parseVer(a.version);
        const bv = parseVer(b.version);
        for (let i = 0; i < Math.max(av.length, bv.length); i++) {
          const aVal = av[i] || 0;
          const bVal = bv[i] || 0;
          if (aVal !== bVal) return bVal - aVal;
        }
        return 0;
      });
    };

    fetch(fetchUrl, { headers })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch changelog');
        return res.json();
      })
      .then((data) => {
        setChangelog(sortData(data));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch via proxy/env failed, trying direct direct database URL...', err);
        // Fallback to direct URL if proxy or relative route failed
        fetch(`${supabaseUrl}/rest/v1/changelogs?select=*`, { headers })
          .then((res) => {
            if (!res.ok) throw new Error('Failed to fetch changelog direct');
            return res.json();
          })
          .then((data) => {
            setChangelog(sortData(data));
            setLoading(false);
          })
          .catch((err2) => {
            console.error('All fetch attempts failed:', err2);
            // Last resort: static fallback in case of database unavailability
            setChangelog([
              {
                version: "1.0.1",
                date: "2026-06-29",
                changes: [
                  { type: "style", content: "移除课表左右滑动切换周次时的果冻弹性动画效果" },
                  { type: "fix", content: "修复国内网络环境下 Supabase 域名被墙导致的无法登录问题（通过 Vercel 反向代理）" },
                  { type: "fix", content: "恢复本地资源加载并添加离线会话支持，实现无网环境下的流畅使用" }
                ]
              }
            ]);
            setLoading(false);
          });
      });
  }, [])

  const getTagStyle = (type) => {
    switch (type) {
      case 'feat':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200'
      case 'fix':
        return 'bg-rose-50 text-rose-700 border-rose-200'
      case 'style':
      case 'perf':
      case 'refactor':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200'
    }
  }

  const getTagLabel = (type) => {
    switch (type) {
      case 'feat': return '新增'
      case 'fix': return '修复'
      case 'style':
      case 'perf':
      case 'refactor':
        return '优化'
      default: return '更新'
    }
  }

  const displayedLogs = showAll ? changelog : changelog.slice(0, 3)

  if (loading) {
    return (
      <section id="changelog" className="w-full py-16 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 text-slate-400">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span>正在加载版本日志...</span>
        </div>
      </section>
    )
  }

  return (
    <section id="changelog" className="relative w-full flex flex-col items-center py-20 bg-slate-50">
      <div className="section-divider w-full max-w-xs mx-auto mb-16" />
      
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center">
        {/* Section Title */}
        <div className="w-full flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            更新 <span className="text-purple-700">版本日志</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            持续迭代，追求极致。在此查看 NextClass 的最新改进与历史版本。
          </p>
        </div>

        {/* Timeline */}
        <div className="w-full relative border-l-2 border-slate-200/80 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
          {displayedLogs.map((log, index) => (
            <div key={log.version} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-purple-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                <GitCommit className="w-3.5 h-3.5 text-purple-600" />
              </div>

              {/* Version & Date Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  v{log.version}
                </h3>
                <span className="text-sm font-semibold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full inline-block w-fit">
                  {log.date}
                </span>
              </div>

              {/* Change List Card */}
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-300 w-full">
                <ul className="space-y-3.5">
                  {log.changes.map((change, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                      <span className={`inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold rounded-md border shrink-0 mt-0.5 ${getTagStyle(change.type)}`}>
                        {getTagLabel(change.type)}
                      </span>
                      <span className="leading-relaxed">{change.content}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Show More button */}
        {changelog.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-12 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 hover:text-purple-700 hover:border-purple-200 shadow-sm transition-all cursor-pointer"
          >
            {showAll ? '收起日志' : '查看更多历史版本'}
            <ArrowDownCircle className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </section>
  )
}
