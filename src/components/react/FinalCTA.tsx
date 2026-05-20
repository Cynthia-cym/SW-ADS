import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function FinalCTA() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-surface to-brand-bg" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.path
              key={i}
              d={`M${-200 + i * 300} ${200 + i * 100} Q${400 + i * 100} ${100 + i * 150}, ${800 + i * 100} ${400 + i * 80}`}
              stroke="#3B82F6"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ delay: i * 0.3, duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
          ))}
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight"
        >
          {t('cta.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-slate-300 mb-10"
        >
          {t('cta.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://ads.mincode.cn/"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg glow hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-200"
          >
            {t('cta.button')}
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="https://ads.mincode.cn/"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl border border-white/20 text-white font-medium text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-200"
          >
            {t('cta.demo')}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-sm text-slate-500"
        >
          {t('cta.social')}
        </motion.p>
      </div>
    </section>
  );
}
