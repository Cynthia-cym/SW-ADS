import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

const stats = [
  { value: 300, suffix: '%' },
  { value: 95, suffix: '%' },
  { value: 10, suffix: '+' },
  { value: 80, suffix: '%' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-5xl sm:text-6xl font-extrabold tracking-tight">
      <span className="text-gradient">{count}</span>
      <span className="text-gradient">{suffix}</span>
    </div>
  );
}

export default function CounterSection() {
  const { t } = useTranslation();

  return (
    <section id="stats" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-surface to-brand-bg" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          {t('stats.title')}
        </motion.h2>
        <p className="text-center text-slate-400 mb-4">
          {t('stats.hint')}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-2xl text-center"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-slate-400 mt-3">{t(`stats.labels.${i}`)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
