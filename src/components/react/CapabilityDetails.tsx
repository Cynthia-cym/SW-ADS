import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

const colorKeys = ['blue', 'cyan', 'purple', 'green'] as const;

const colorClasses: Record<string, { border: string; hoverGlow: string; bg: string; text: string }> = {
  blue: { border: 'border-blue-500/20', hoverGlow: 'hover:shadow-[0_20px_25px_-5px_rgba(59,130,246,0.25)]', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  cyan: { border: 'border-cyan-500/20', hoverGlow: 'hover:shadow-[0_20px_25px_-5px_rgba(6,182,212,0.25)]', bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
  purple: { border: 'border-purple-500/20', hoverGlow: 'hover:shadow-[0_20px_25px_-5px_rgba(168,85,247,0.25)]', bg: 'bg-purple-500/10', text: 'text-purple-400' },
  green: { border: 'border-green-500/20', hoverGlow: 'hover:shadow-[0_20px_25px_-5px_rgba(34,197,94,0.25)]', bg: 'bg-green-500/10', text: 'text-green-400' },
};

export default function CapabilityDetails() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const capabilities = t('capabilities.cards', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    details: Array<{ label: string; desc: string }>;
  }>;

  const cardIds = ['ai-build', 'unified', 'analytics', 'coverage'];

  return (
    <section id="capabilities" ref={sectionRef} className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          {t('capabilities.title')}
        </motion.h2>
        <p className="text-center text-slate-400 mb-16">
          {t('capabilities.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => {
            const colors = colorClasses[colorKeys[i]];
            return (
              <motion.div
                key={i}
                id={cardIds[i]}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group p-8 rounded-2xl glass ${colors.border} hover:shadow-xl ${colors.hoverGlow} hover:-translate-y-1 transition-all duration-300 scroll-mt-24`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-300 mb-6">{cap.subtitle}</p>
                <div className="space-y-3">
                  {cap.details.map((d, j) => (
                    <div key={j} className="flex gap-3">
                      <div className={`w-5 h-5 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center shrink-0 mt-0.5`}>
                        <svg className={`w-3 h-3 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-white">{d.label}</span>
                        <span className="text-xs text-slate-500 ml-2">{d.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
