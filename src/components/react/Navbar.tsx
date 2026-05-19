import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { href: '#features', label: '产品功能' },
  { href: '#platforms', label: '全球平台' },
  { href: '#solutions', label: '解决方案' },
  { href: '#resources', label: '资源中心' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">SW</span>
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            SW ADS
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 hover:text-blue-500 group ${
                scrolled ? 'text-slate-700' : 'text-white/80'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 rounded-full transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="/login"
            className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-200 hover:bg-white/10 ${
              scrolled
                ? 'border-slate-300 text-slate-700'
                : 'border-white/30 text-white'
            }`}
          >
            登录
          </a>
          <a
            href="/signup"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:scale-105"
          >
            免费试用14天
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
          aria-label="Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`w-6 h-0.5 rounded-full transition-colors ${
              scrolled && !mobileOpen ? 'bg-slate-700' : 'bg-white'
            }`}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`w-6 h-0.5 rounded-full transition-colors ${
              scrolled && !mobileOpen ? 'bg-slate-700' : 'bg-white'
            }`}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`w-6 h-0.5 rounded-full transition-colors ${
              scrolled && !mobileOpen ? 'bg-slate-700' : 'bg-white'
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-brand-surface/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-medium text-white/80 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-8 w-64">
              <a
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="text-center text-sm font-medium px-4 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                登录
              </a>
              <a
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="text-center text-sm font-semibold px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white"
              >
                免费试用14天
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
