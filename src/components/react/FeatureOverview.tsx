import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaEarthAsia } from 'react-icons/fa6';
import '../../lib/i18n';

const featureCards = [
  {
    id: 'pain-points',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    color: 'red',
  },
  {
    id: 'process',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 0l4.5-4.5m-4.5 4.5l4.5 4.5" />
      </svg>
    ),
    color: 'blue',
  },
  {
    id: 'capabilities',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    color: 'purple',
  },
  {
    id: 'platforms',
    icon: <FaEarthAsia className="w-6 h-6" />,
    color: 'cyan',
  },
  {
    id: 'stats',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: 'green',
  },
  {
    id: 'solutions',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    color: 'yellow',
  },
  {
    id: 'security',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: 'indigo',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glowColor: string }> = {
  red:    { bg: 'bg-red-500/10',    border: 'border-red-500/20',    text: 'text-red-400',    glowColor: 'rgba(239,68,68,0.25)' },
  blue:   { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   text: 'text-blue-400',   glowColor: 'rgba(59,130,246,0.25)' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', glowColor: 'rgba(168,85,247,0.25)' },
  cyan:   { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   text: 'text-cyan-400',   glowColor: 'rgba(6,182,212,0.25)' },
  green:  { bg: 'bg-green-500/10',  border: 'border-green-500/20',  text: 'text-green-400',  glowColor: 'rgba(34,197,94,0.25)' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', text: 'text-yellow-400', glowColor: 'rgba(234,179,8,0.25)' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', glowColor: 'rgba(99,102,241,0.25)' },
};

export default function FeatureOverview() {
  const { t } = useTranslation();

  const cards = t('featureOverview.cards', { returnObjects: true }) as Array<{
    title: string;
    desc?: string;
    bullets?: string[];
  }>;

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="feature-overview" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-surface to-brand-bg" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          {t('featureOverview.title')}
        </motion.h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          {t('featureOverview.subtitle')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.slice(0, 4).map((card, i) => {
            const colors = colorMap[featureCards[i].color];
            return (
              <motion.div
                key={featureCards[i].id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ '--glow-color': colors.glowColor } as React.CSSProperties}
                onClick={() => handleClick(featureCards[i].id)}
                className={`group p-6 rounded-2xl glass card-hover-glow ${colors.border} cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center shrink-0 ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                    {featureCards[i].icon}
                  </div>
                  <h3 className="font-semibold text-white text-base">{card.title}</h3>
                </div>
                {card.bullets ? (
                  <ul className="text-sm text-slate-400 leading-relaxed space-y-1">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-1.5">
                        <span className={`${colors.text} shrink-0`}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{card.desc}</p>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5 max-w-[1064px] mx-auto">
          {cards.slice(4).map((card, i) => {
            const idx = i + 4;
            const colors = colorMap[featureCards[idx].color];
            return (
              <motion.div
                key={featureCards[idx].id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                style={{ '--glow-color': colors.glowColor } as React.CSSProperties}
                onClick={() => handleClick(featureCards[idx].id)}
                className={`group p-6 rounded-2xl glass card-hover-glow ${colors.border} cursor-pointer`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center shrink-0 ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                    {featureCards[idx].icon}
                  </div>
                  <h3 className="font-semibold text-white text-base">{card.title}</h3>
                </div>
                {card.bullets ? (
                  <ul className="text-sm text-slate-400 leading-relaxed space-y-1">
                    {card.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-1.5">
                        <span className={`${colors.text} shrink-0`}>•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{card.desc}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
