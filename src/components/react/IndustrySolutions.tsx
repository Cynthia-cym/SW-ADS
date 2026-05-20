import { useTranslation } from 'react-i18next';
import { FaGamepad, FaMobileScreen, FaCartShopping, FaCreditCard, FaBookOpen, FaBuilding } from 'react-icons/fa6';
import '../../lib/i18n';

const industryIcons = [
  { icon: FaGamepad, color: 'text-purple-400' },
  { icon: FaMobileScreen, color: 'text-blue-400' },
  { icon: FaCartShopping, color: 'text-orange-400' },
  { icon: FaCreditCard, color: 'text-green-400' },
  { icon: FaBookOpen, color: 'text-cyan-400' },
  { icon: FaBuilding, color: 'text-indigo-400' },
];

export default function IndustrySolutions() {
  const { t } = useTranslation();

  const items = t('industries.items', { returnObjects: true }) as Array<{ name: string; desc: string }>;

  return (
    <section id="solutions" className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          {t('industries.title')}
        </h2>
        <p className="text-center text-slate-400 mb-16">
          {t('industries.subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const { icon: Icon, color } = industryIcons[i];
            return (
              <a
                key={i}
                href={`/solutions/${item.name}`}
                className="group p-6 rounded-2xl glass border-white/[0.04] hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
