import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SiVk, SiTiktok, SiMeta, SiHuawei, SiXiaomi } from 'react-icons/si';
import { FaYandex } from 'react-icons/fa6';
import '../../lib/i18n';
import TypewriterText from './TypewriterText';

const brandColors: Record<string, string> = {
  VK: '#0077FF',
  Yandex: '#FC3F1D',
  TikTok: '#000000',
  Meta: '#0866FF',
  Huawei: '#CF0A2C',
  Xiaomi: '#FF6900',
  Transsion: '#6C2BD9',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  VK: SiVk,
  Yandex: FaYandex,
  TikTok: SiTiktok,
  Meta: SiMeta,
  Huawei: SiHuawei,
  Xiaomi: SiXiaomi,
};

const PlatformLogo = ({ name, className = '' }: { name: string; className?: string }) => {
  const Icon = iconMap[name];
  if (Icon) {
    return (
      <span className={`${className} flex items-center justify-center rounded-xl`} style={{ backgroundColor: brandColors[name] }}>
        <Icon className="w-[58%] h-[58%] text-white" />
      </span>
    );
  }
  // Transsion — custom: aurora purple, T with three-step motif (no library icon exists)
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <defs>
        <linearGradient id="transsionGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#6D28D9" />
          <stop offset="100%" stopColor="#4C1D95" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#transsionGrad)" />
      <g transform="translate(11.5,10)" fill="white">
        {/* T vertical stem */}
        <rect x="10.5" y="8" width="4" height="20" rx="2" />
        {/* Three ascending steps — Transsion's "Step" brand symbol */}
        <rect x="0" y="12" width="10" height="3.5" rx="1.5" />
        <rect x="2.5" y="6" width="11" height="3.5" rx="1.5" />
        <rect x="5.5" y="0" width="11" height="3.5" rx="1.5" />
      </g>
    </svg>
  );
};

// Orbit distribution — icons surround the device on all sides
const platforms = [
  { name: 'Meta', x: '6%', y: '30%', active: true, tier: 'lg' },
  { name: 'Xiaomi', x: '12%', y: '68%', active: false, tier: 'md' },
  { name: 'Transsion', x: '30%', y: '6%', active: false, tier: 'md' },
  { name: 'Huawei', x: '58%', y: 'calc(5% + 20px)', active: true, tier: 'lg' },
  { name: 'Yandex', x: '86%', y: '22%', active: false, tier: 'md' },
  { name: 'VK', x: '90%', y: '55%', active: true, tier: 'lg' },
  { name: 'TikTok', x: '82%', y: '75%', active: false, tier: 'md' },
];

const tierConfig: Record<string, { scale: number; sizeClass: string; glowClass: string }> = {
  lg: { scale: 1.5, sizeClass: 'w-12 h-12', glowClass: 'shadow-[0_0_24px_rgba(59,130,246,0.55),0_0_48px_rgba(59,130,246,0.2)] ring-1 ring-white/10' },
  md: { scale: 1.15, sizeClass: 'w-10 h-10', glowClass: 'shadow-[0_0_14px_rgba(59,130,246,0.35)] ring-1 ring-white/5' },
};

export default function HeroSection() {
  const { t } = useTranslation();
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
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Meteor lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { x1: '10%', y1: '0%', x2: '30%', y2: '60%', d: 3 },
          { x1: '85%', y1: '10%', x2: '60%', y2: '80%', d: 2.5 },
          { x1: '40%', y1: '0%', x2: '70%', y2: '40%', d: 2 },
          { x1: '5%', y1: '30%', x2: '25%', y2: '90%', d: 4 },
          { x1: '70%', y1: '0%', x2: '90%', y2: '50%', d: 1.8 },
        ].map((m, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
            style={{
              left: m.x1,
              top: m.y1,
              width: '200px',
              transform: `rotate(${30 + i * 5}deg)`,
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: [0, 0.6, 0], x: [0, 300] }}
            transition={{
              duration: m.d,
              repeat: Infinity,
              delay: i * 1.5 + Math.random(),
              repeatDelay: 2 + Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: Math.random() > 0.5 ? '#3B82F6' : '#00E5FF',
              opacity: 0.3 + Math.random() * 0.4,
              boxShadow: '0 0 4px currentColor',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
      {/* Center AI glow — positioned over the right visual area */}
      <div className="absolute top-1/2 right-[25%] -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/6 rounded-full blur-[140px]" />

      <div className="relative max-w-[90rem] mx-auto px-6 sm:px-8 w-full py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div className="z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              <span
                className="text-transparent"
                style={{
                  background: 'linear-gradient(to right, #3B82F6, #818CF8, #C084FC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >AI</span>
              <TypewriterText
                text={t('hero.title')}
                speed={70}
                className="text-white"
                onComplete={handleTypeComplete}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={showSubtitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showCTAs ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="https://ads.mincode.cn/"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200"
              >
                {t('hero.ctaPrimary')}
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://ads.mincode.cn/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-medium text-base hover:bg-white/5 hover:border-white/40 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                {t('hero.ctaSecondary')}
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
                {t('hero.tagPlatforms')}
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                {t('hero.tagVK')}
              </span>
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-400">
                {t('hero.tagComing')}
              </span>
            </motion.div>
          </div>

          {/* Right: Enhanced Visual — Tablet at bottom-center, icons fanning upward */}
          <div className="relative h-[500px] lg:h-[680px] flex items-end justify-center pb-6 lg:pb-10">
            {/* Orbit rings SVG — solid rings with breathing particles, enter last */}
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
              viewBox="0 0 400 540"
            >
              <defs>
                <filter id="orbitGlow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer ring — r=235, 0.6px thin, slow */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="0 200 270" to="360 200 270" dur="55s" repeatCount="indefinite" />
                <circle cx="200" cy="270" r="240" fill="none" stroke="rgba(59,130,246,0.09)" strokeWidth="0.6" />
                {[0, 60, 120, 180, 240, 300].map((angle, j) => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = 200 + 240 * Math.cos(rad);
                  const cy = 270 + 240 * Math.sin(rad);
                  return (
                    <circle key={j} cx={cx} cy={cy} r="1.6" fill="#60A5FA" filter="url(#orbitGlow)">
                      <animate attributeName="opacity" values="0.05;0.45;0.05" dur={`${4.5 + j * 0.35}s`} repeatCount="indefinite" />
                    </circle>
                  );
                })}
              </g>

              {/* Middle ring — r=210, 1.2px + 1px glow, hero */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="360 200 270" to="0 200 270" dur="40s" repeatCount="indefinite" />
                <circle cx="200" cy="270" r="210" fill="none" stroke="rgba(59,130,246,0.14)" strokeWidth="1.2" />
                <circle cx="200" cy="270" r="210" fill="none" stroke="rgba(96,165,250,0.05)" strokeWidth="2.2" />
                {[30, 90, 150, 210, 270, 330].map((angle, j) => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = 200 + 210 * Math.cos(rad);
                  const cy = 270 + 210 * Math.sin(rad);
                  return (
                    <circle key={j} cx={cx} cy={cy} r="2" fill="white" filter="url(#orbitGlow)">
                      <animate attributeName="opacity" values="0.05;0.7;0.05" dur={`${3.2 + j * 0.25}s`} repeatCount="indefinite" />
                    </circle>
                  );
                })}
              </g>

              {/* Inner ring — r=180, 0.8px thin, fast */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="0 200 270" to="360 200 270" dur="28s" repeatCount="indefinite" />
                <circle cx="200" cy="270" r="180" fill="none" stroke="rgba(0,229,255,0.07)" strokeWidth="0.8" />
                {[15, 75, 135, 195, 255, 315].map((angle, j) => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = 200 + 180 * Math.cos(rad);
                  const cy = 270 + 180 * Math.sin(rad);
                  return (
                    <circle key={j} cx={cx} cy={cy} r="1.4" fill="#67E8F9" filter="url(#orbitGlow)">
                      <animate attributeName="opacity" values="0.04;0.55;0.04" dur={`${2.5 + j * 0.2}s`} repeatCount="indefinite" />
                    </circle>
                  );
                })}
              </g>
            </motion.svg>

            {/* Main AI Tablet/Device */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative z-10"
            >
              {/* Glow rings around tablet */}
              <div className="absolute inset-0 w-[300px] h-[420px] rounded-[36px] bg-blue-500/10 blur-2xl -z-10" />
              <div className="absolute -inset-2 rounded-[38px] border border-blue-400/20 animate-pulse-glow" />

              {/* Tablet body */}
              <div className="relative w-72 h-[400px] sm:w-80 sm:h-[440px] rounded-[32px] bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-blue-400/20 shadow-2xl shadow-blue-500/10 overflow-hidden backdrop-blur-sm">
                {/* Tablet camera notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-slate-700/60 rounded-b-full z-20" />

                {/* Dashboard screen */}
                <div className="absolute inset-3 rounded-[24px] bg-brand-surface/80 border border-white/[0.06] overflow-hidden">
                  {/* Screen header */}
                  <div className="px-4 pt-4 pb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px] shadow-blue-400/50" />
                      <span className="text-[10px] font-semibold text-blue-300 tracking-wide">SW ADS</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_4px] shadow-green-400/50" />
                      <span className="text-[9px] text-green-400/80">Live</span>
                    </div>
                  </div>

                  {/* Screen content - Dashboard mockup */}
                  <div className="px-3 space-y-2.5">
                    {/* Mini stat cards */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-blue-500/5 border border-blue-500/10 p-2.5">
                        <div className="text-[8px] text-slate-500 mb-0.5">Active Campaigns</div>
                        <div className="text-lg font-bold text-blue-400">24</div>
                        <div className="text-[8px] text-green-400/80">↑ 12%</div>
                      </div>
                      <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/10 p-2.5">
                        <div className="text-[8px] text-slate-500 mb-0.5">Avg ROI</div>
                        <div className="text-lg font-bold text-cyan-400">+320%</div>
                        <div className="text-[8px] text-green-400/80">↑ 8.5%</div>
                      </div>
                    </div>

                    {/* Chart area — smooth curve sparkline + breathing */}
                    <motion.div
                      className="h-20 rounded-xl bg-white/[0.02] border border-white/[0.05] p-2.5 overflow-hidden"
                      animate={{ borderColor: ['rgba(255,255,255,0.05)', 'rgba(59,130,246,0.2)', 'rgba(255,255,255,0.05)'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[8px] text-slate-500">Cross-Platform Performance</span>
                        <motion.span
                          className="text-[8px] text-green-400/80"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
                        >
                          +23.5%
                        </motion.span>
                      </div>
                      <div className="relative h-11">
                        <svg className="w-full h-full" viewBox="0 0 240 44" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="sparkArea" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                            </linearGradient>
                            <filter id="sparkGlow">
                              <feGaussianBlur stdDeviation="1.2" result="blur" />
                              <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>
                          {/* Grid lines */}
                          <line x1="0" y1="11" x2="240" y2="11" stroke="white" strokeOpacity="0.04" strokeDasharray="2 4" />
                          <line x1="0" y1="22" x2="240" y2="22" stroke="white" strokeOpacity="0.04" strokeDasharray="2 4" />
                          <line x1="0" y1="33" x2="240" y2="33" stroke="white" strokeOpacity="0.04" strokeDasharray="2 4" />
                          {/* Area fill — smooth curve with breathing */}
                          <motion.path
                            d="M0,36 C7,36 13,32 20,32 C27,32 33,34 40,34 C47,34 53,22 60,22 C67,22 73,26 80,26 C87,26 93,14 100,14 C107,14 113,19 120,19 C127,19 133,10 140,10 C147,10 153,17 160,17 C167,17 173,8 180,8 C187,8 193,12 200,12 C207,12 213,4 220,4 C227,4 233,6 240,6 L240,44 L0,44 Z"
                            fill="url(#sparkArea)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ delay: 1.2, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                          />
                          {/* Glow line — smooth curve */}
                          <motion.path
                            d="M0,36 C7,36 13,32 20,32 C27,32 33,34 40,34 C47,34 53,22 60,22 C67,22 73,26 80,26 C87,26 93,14 100,14 C107,14 113,19 120,19 C127,19 133,10 140,10 C147,10 153,17 160,17 C167,17 173,8 180,8 C187,8 193,12 200,12 C207,12 213,4 220,4 C227,4 233,6 240,6"
                            fill="none"
                            stroke="#60A5FA"
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.35"
                            filter="url(#sparkGlow)"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1.2, duration: 1.5, ease: 'easeInOut' }}
                          />
                          {/* Main line — smooth curve */}
                          <motion.path
                            d="M0,36 C7,36 13,32 20,32 C27,32 33,34 40,34 C47,34 53,22 60,22 C67,22 73,26 80,26 C87,26 93,14 100,14 C107,14 113,19 120,19 C127,19 133,10 140,10 C147,10 153,17 160,17 C167,17 173,8 180,8 C187,8 193,12 200,12 C207,12 213,4 220,4 C227,4 233,6 240,6"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 1.2, duration: 1.5, ease: 'easeInOut' }}
                          />
                          {/* Endpoint dot */}
                          <motion.circle
                            cx="240" cy="6" r="2.5"
                            fill="#3B82F6"
                            filter="url(#sparkGlow)"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
                            transition={{ delay: 2.2, duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                          />
                          {/* Data point pulses */}
                          {[
                            { cx: 100, cy: 14, delay: 2.6 },
                            { cx: 140, cy: 10, delay: 2.8 },
                            { cx: 220, cy: 4, delay: 3.0 },
                          ].map((pt, i) => (
                            <motion.circle
                              key={i}
                              cx={pt.cx} cy={pt.cy} r="1.8"
                              fill="white"
                              opacity="0.9"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                              transition={{
                                delay: pt.delay,
                                duration: 1.8,
                                repeat: Infinity,
                                repeatDelay: 3 + i * 0.7,
                              }}
                            />
                          ))}
                        </svg>
                      </div>
                    </motion.div>

                    {/* Platform status rows */}
                    <div className="space-y-1.5">
                      {[
                        { name: 'VK', status: 'Active', color: 'text-green-400', bar: 85 },
                        { name: 'Yandex', status: 'Setup', color: 'text-yellow-400', bar: 45 },
                        { name: 'TikTok', status: 'Pending', color: 'text-slate-400', bar: 20 },
                      ].map((p) => (
                        <div key={p.name} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/[0.02]">
                          <span className="text-[10px] font-medium text-slate-300 w-14">{p.name}</span>
                          <div className="flex-1 h-1 bg-white/[0.04] rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${
                                p.bar > 60 ? 'from-blue-500 to-cyan-400' : p.bar > 30 ? 'from-yellow-500/60 to-yellow-400/40' : 'from-slate-600 to-slate-500'
                              }`}
                              initial={{ width: 0 }}
                              animate={{ width: `${p.bar}%` }}
                              transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
                            />
                          </div>
                          <span className={`text-[9px] ${p.color}`}>{p.status}</span>
                        </div>
                      ))}
                    </div>

                    {/* AI processing indicator */}
                    <div className="rounded-xl bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/10 p-2.5 flex items-center gap-2">
                      <motion.div
                        className="w-5 h-5 rounded-lg bg-blue-500/20 flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                        </svg>
                      </motion.div>
                      <div>
                        <div className="text-[9px] text-blue-300">AI Optimizing</div>
                        <div className="flex gap-0.5 mt-0.5">
                          {[0, 1, 2].map((j) => (
                            <motion.div
                              key={j}
                              className="w-1 h-1 rounded-full bg-blue-400"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1.2, repeat: Infinity, delay: j * 0.4 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow border edge */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-blue-400/5 via-transparent to-transparent pointer-events-none" />
              </div>

            </motion.div>

            {/* Platform logos orbiting */}
            {platforms.map((p, i) => {
              const tier = tierConfig[p.tier];
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: tier.scale }}
                  transition={{ delay: 1 + i * 0.12, duration: 0.5 }}
                  className={`absolute z-20 ${tier.sizeClass} ${tier.glowClass} ${p.active ? 'glow ring-1 ring-blue-400/30' : ''} rounded-xl`}
                  style={{ left: p.x, top: p.y, transform: 'translate(-50%, -50%)' }}
                  whileHover={{ scale: tier.scale * 1.2, transition: { duration: 0.2 } }}
                >
                  <PlatformLogo name={p.name} className="w-full h-full rounded-xl" />
                  {/* Label below */}
                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className={`text-[9px] font-medium ${p.active ? 'text-blue-300' : 'text-slate-500'}`}>
                      {p.name}
                      {p.name === 'VK' && <span className="ml-1 text-green-400">●</span>}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Downward scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById('feature-overview')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs text-slate-500">{t('hero.scrollHint')}</span>
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
    </section>
  );
}
