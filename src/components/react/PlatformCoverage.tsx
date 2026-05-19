import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const platforms = [
  { name: 'VK', category: '已上线', region: '俄语区', x: '62%', y: '18%', color: 'bg-blue-500', active: true },
  { name: 'Yandex', category: '即将上线', region: '俄语区', x: '55%', y: '25%', color: 'bg-blue-400', active: false },
  { name: '传音', category: '即将上线', region: '非洲', x: '52%', y: '55%', color: 'bg-green-400', active: false },
  { name: '华为', category: '即将上线', region: '东南亚/欧洲', x: '70%', y: '40%', color: 'bg-red-400', active: false },
  { name: '小米', category: '即将上线', region: '东南亚/欧洲', x: '68%', y: '48%', color: 'bg-orange-400', active: false },
  { name: 'TikTok', category: '规划中', region: '全球', x: '45%', y: '30%', color: 'bg-slate-500', active: false },
  { name: 'Meta', category: '规划中', region: '全球', x: '35%', y: '35%', color: 'bg-slate-600', active: false },
  { name: 'Google', category: '规划中', region: '全球', x: '40%', y: '42%', color: 'bg-slate-700', active: false },
];

export default function PlatformCoverage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="platforms" className="py-24 bg-brand-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            一键覆盖全球高增长市场
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            深度优化新兴市场，同时支持全球主流平台。每个平台均实现深度API对接与规则适配，支持完整的一键自动化投放流程。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* World map area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative aspect-[4/3] rounded-2xl bg-brand-bg border border-white/[0.05] overflow-hidden"
          >
            {/* Stylized world map dot grid */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-blue-400 rounded-full"
                  style={{
                    left: `${Math.random() * 95}%`,
                    top: `${Math.random() * 95}%`,
                  }}
                />
              ))}
            </div>

            {/* Continent silhouettes (approximate) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-15" fill="none">
                {/* Simplistic continent shapes */}
                <ellipse cx="200" cy="120" rx="60" ry="80" stroke="#3B82F6" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
                <ellipse cx="350" cy="180" rx="80" ry="50" stroke="#3B82F6" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
                <ellipse cx="550" cy="130" rx="100" ry="90" stroke="#3B82F6" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
                <ellipse cx="600" cy="300" rx="40" ry="30" stroke="#3B82F6" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
                <ellipse cx="650" cy="220" rx="30" ry="50" stroke="#3B82F6" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
                <ellipse cx="300" cy="300" rx="50" ry="40" stroke="#3B82F6" strokeWidth="2" fill="rgba(59,130,246,0.05)" />
              </svg>
            </div>

            {/* Platform dots on map */}
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className={`absolute w-3 h-3 rounded-full ${p.color} ${
                  p.active ? 'animate-pulse-glow shadow-lg shadow-blue-500/50' : 'opacity-60'
                }`}
                style={{ left: p.x, top: p.y }}
              />
            ))}

            <div className="absolute bottom-3 left-3 text-[10px] text-slate-600">
              全球平台覆盖示意
            </div>
          </motion.div>

          {/* Platform list */}
          <div className="space-y-4">
            {['已上线', '即将上线', '规划中'].map((cat) => (
              <div key={cat}>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  cat === '已上线' ? 'text-green-400' : cat === '即将上线' ? 'text-blue-400' : 'text-slate-500'
                }`}>
                  {cat}
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {platforms
                    .filter((p) => p.category === cat)
                    .map((p, j) => (
                      <motion.span
                        key={p.name}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 + j * 0.05 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                          p.active
                            ? 'bg-blue-500/15 border border-blue-500/30 text-blue-300'
                            : cat === '即将上线'
                              ? 'bg-slate-500/10 border border-slate-500/20 text-slate-400'
                              : 'bg-slate-500/5 border border-dashed border-slate-500/15 text-slate-500'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${p.color}`} />
                        {p.name}
                        <span className="opacity-50">· {p.region}</span>
                      </motion.span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
