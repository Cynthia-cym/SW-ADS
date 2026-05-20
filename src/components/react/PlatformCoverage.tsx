import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function PlatformCoverage() {
  const { t } = useTranslation();
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

  const platformData = t('platformCoverage.platforms', { returnObjects: true }) as Array<{ name: string; region: string }>;

  const platforms = [
    { category: 'active', ...platformData[0], x: '60.5%', y: '19.0%', color: 'bg-blue-500', active: true },
    { category: 'coming', ...platformData[1], x: '61.5%', y: '21.0%', color: 'bg-blue-400', active: false },
    { category: 'coming', ...platformData[2], x: '50.9%', y: '46.4%', color: 'bg-green-400', active: false },
    { category: 'coming', ...platformData[3], x: '81.7%', y: '37.5%', color: 'bg-red-400', active: false },
    { category: 'coming', ...platformData[4], x: '82.4%', y: '27.8%', color: 'bg-orange-400', active: false },
    { category: 'planned', ...platformData[5], x: '82.8%', y: '29.0%', color: 'bg-slate-500', active: false },
    { category: 'planned', ...platformData[6], x: '16.0%', y: '29.0%', color: 'bg-slate-600', active: false },
    { category: 'planned', ...platformData[7], x: '16.1%', y: '29.2%', color: 'bg-slate-700', active: false },
  ];

  const categories = [
    { key: 'active', label: t('platformCoverage.active'), className: 'text-green-400' },
    { key: 'coming', label: t('platformCoverage.coming'), className: 'text-blue-400' },
    { key: 'planned', label: t('platformCoverage.planned'), className: 'text-slate-500' },
  ];

  return (
    <section ref={sectionRef} id="platforms" className="py-24 bg-brand-surface/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('platformCoverage.title')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('platformCoverage.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative aspect-[2/1] rounded-2xl bg-brand-bg border border-white/[0.05] overflow-hidden"
          >
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

            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <img
                src="/world-map.svg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

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
              {t('platformCoverage.mapLabel')}
            </div>
          </motion.div>

          <div className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.key}>
                <span className={`text-xs font-semibold uppercase tracking-wider ${cat.className}`}>
                  {cat.label}
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {platforms
                    .filter((p) => p.category === cat.key)
                    .map((p, j) => (
                      <motion.span
                        key={p.name}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 + j * 0.05 }}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
                          p.active
                            ? 'bg-blue-500/15 border border-blue-500/30 text-blue-300'
                            : cat.key === 'coming'
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
