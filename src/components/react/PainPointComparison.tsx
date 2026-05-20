import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function PainPointComparison() {
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

  const items = t('painPoints.items', { returnObjects: true }) as Array<{ traditional: string; swads: string }>;

  return (
    <section id="pain-points" ref={sectionRef} className="py-24 bg-brand-surface/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          {t('painPoints.title')}
        </motion.h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          {t('painPoints.subtitle')}
        </p>

        <div className="space-y-3 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4"
            >
              <div className="flex items-center gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-sm text-slate-300">{item.traditional}</span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-sm text-white font-medium">{item.swads}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
