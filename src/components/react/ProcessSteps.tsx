import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

const stepColors = [
  'from-blue-500 to-cyan-400',
  'from-cyan-400 to-blue-500',
  'from-blue-500 to-purple-500',
];

export default function ProcessSteps() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string; desc: string; detail: string }>;

  return (
    <section id="process" ref={sectionRef} className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-16"
        >
          {t('process.title')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-blue-500/40 via-blue-400/60 to-blue-500/40" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative"
            >
              <div className="flex justify-center mb-6">
                <div className="relative z-10 w-24 h-24 rounded-full bg-brand-surface border border-blue-500/20 flex items-center justify-center glow">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${stepColors[i]} bg-clip-text text-transparent`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl text-center">
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{step.desc}</p>
                <p className="text-xs text-slate-500">{step.detail}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -translate-y-1/2 -right-4 z-10">
                  <svg className="w-6 h-6 text-blue-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
