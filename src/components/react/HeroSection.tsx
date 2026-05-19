import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

const platforms = [
  { name: 'VK', x: '30%', y: '20%', active: true },
  { name: 'Yandex', x: '65%', y: '15%', active: false },
  { name: '传音', x: '80%', y: '45%', active: false },
  { name: '华为', x: '65%', y: '80%', active: false },
  { name: '小米', x: '30%', y: '85%', active: false },
  { name: 'TikTok', x: '12%', y: '55%', active: false },
  { name: 'Meta', x: '45%', y: '8%', active: false },
];

const previewCards = [
  {
    id: 'ai-build',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'AI智能搭建',
    desc: '一次输入需求，AI自动生成全平台广告方案',
  },
  {
    id: 'unified',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
      </svg>
    ),
    title: '全平台统一管理',
    desc: '一个后台掌控所有平台，批量编辑推送',
  },
  {
    id: 'analytics',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: '演程智能决策',
    desc: '数据驱动，跨平台智能对比与预算分配',
  },
  {
    id: 'coverage',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: '全球平台覆盖',
    desc: '10+全球平台深度对接，持续扩展新兴市场',
  },
];

export default function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);

  const handleTypeComplete = useCallback(() => {
    setShowSubtitle(true);
  }, []);

  useEffect(() => {
    if (showSubtitle) {
      const timer = setTimeout(() => setShowCTAs(true), 400);
      return () => clearTimeout(timer);
    }
  }, [showSubtitle]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-brand-bg" />
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              <TypewriterText
                text="AI一键广告投放，让增长自动发生"
                speed={50}
                className="text-white"
                onComplete={handleTypeComplete}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={showSubtitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              全球首个"需求驱动型"多平台出海广告投放平台。无需学习复杂规则，用自然语言描述需求，AI自动适配VK、Yandex、TikTok、Meta等全球主流平台。
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showCTAs ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-base hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-200"
              >
                立即免费试用
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-medium text-base hover:bg-white/5 hover:border-white/40 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                预约产品演示
              </a>
            </motion.div>

            {/* Platform tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={showCTAs ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                一键覆盖10+全球广告平台
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                已支持VK
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400">
                即将上线Yandex·传音·华为·小米
              </span>
            </motion.div>
          </div>

          {/* Right: Visual focal point */}
          <div className="relative h-[400px] lg:h-[550px] flex items-center justify-center">
            {/* Glowing tablet / AI core */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative z-10"
            >
              {/* Main AI tablet */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl glass border-blue-500/30 glow flex flex-col items-center justify-center overflow-hidden">
                {/* Dashboard mockup inside tablet */}
                <div className="absolute inset-4 rounded-2xl bg-brand-surface/80 overflow-hidden">
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-blue-400">SW ADS Dashboard</span>
                      <span className="text-[8px] text-green-400">● Live</span>
                    </div>
                    <div className="h-16 rounded-lg bg-blue-500/10 border border-blue-500/20 p-2">
                      <div className="flex justify-between items-end h-full">
                        {[40, 70, 55, 90, 60, 80, 50].map((h, i) => (
                          <div
                            key={i}
                            className="w-[10%] bg-gradient-to-t from-blue-500/60 to-blue-400/40 rounded-sm"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-10 rounded-lg bg-green-500/10 border border-green-500/20 p-1.5 flex items-center justify-between">
                        <span className="text-[9px] text-green-300">ROI</span>
                        <span className="text-[11px] font-bold text-green-400">+320%</span>
                      </div>
                      <div className="h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 p-1.5 flex items-center justify-between">
                        <span className="text-[9px] text-blue-300">Active</span>
                        <span className="text-[11px] font-bold text-blue-400">12</span>
                      </div>
                    </div>
                    <div className="h-10 rounded-lg bg-slate-500/10 border border-slate-500/20 p-2 flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500/30 flex-shrink-0" />
                      <div className="flex-1 h-1.5 bg-slate-500/20 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow ring */}
                <div className="absolute inset-0 rounded-3xl border border-blue-400/20 animate-pulse-glow" />
              </div>

              {/* Radiating light lines */}
              <div className="absolute inset-0 -z-10">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <div
                    key={deg}
                    className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-blue-400/40 to-transparent origin-bottom"
                    style={{ transform: `translate(-50%, -100%) rotate(${deg}deg)` }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Platform logos orbiting */}
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                className={`absolute z-20 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  p.active
                    ? 'bg-blue-500/20 border border-blue-400/30 text-blue-300'
                    : 'bg-slate-500/10 border border-slate-500/20 text-slate-400'
                }`}
                style={{ left: p.x, top: p.y, transform: 'translate(-50%, -50%)' }}
                whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
              >
                {p.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Downward scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById('preview-cards')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs text-slate-500">向下滚动</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* 4×1 Preview cards below hero */}
      <div
        id="preview-cards"
        className="absolute bottom-[-240px] left-0 right-0 z-20 hidden lg:block"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-4">
            {previewCards.map((card, i) => (
              <motion.a
                key={card.id}
                href={`#${card.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-5 rounded-2xl glass glass-hover cursor-pointer"
              >
                <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-sm text-white mb-1.5">{card.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {card.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  了解更多
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
