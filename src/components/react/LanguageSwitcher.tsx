import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

const languages = [
  { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
];

export default function LanguageSwitcher({ scrolled = false }: { scrolled?: boolean }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const switchLang = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
    // Update URL path if needed
    const path = code === 'zh-CN' ? '/' : `/${code}/`;
    window.history.pushState({}, '', path);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm transition-colors ${
          scrolled
            ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <span>{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.label}</span>
        <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className={`absolute right-0 top-full mt-1 w-48 rounded-xl py-1 shadow-2xl z-50 border ${
          scrolled
            ? 'bg-white border-slate-200'
            : 'glass border-blue-500/20'
        }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLang(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                lang.code === i18n.language
                  ? 'text-blue-400 bg-blue-500/10'
                  : scrolled
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
              {lang.code === i18n.language && (
                <svg className="w-4 h-4 ml-auto text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
