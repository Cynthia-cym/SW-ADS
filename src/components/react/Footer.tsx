import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

const socialLinks = [
  { icon: 'X', href: '#' },
  { icon: 'in', href: '#' },
  { icon: '▶', href: '#' },
];

export default function Footer() {
  const { t } = useTranslation();

  const productLinks = t('footer.productLinks', { returnObjects: true }) as Array<{ href: string; label: string }>;
  const resourceLinks = t('footer.resourceLinks', { returnObjects: true }) as Array<{ href: string; label: string }>;
  const companyLinks = t('footer.companyLinks', { returnObjects: true }) as Array<{ href: string; label: string }>;

  return (
    <footer className="border-t border-white/[0.06] bg-brand-bg py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">SW</span>
              </div>
              <span className="font-bold text-lg text-white">SW ADS</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-colors text-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">{t('footer.privacy')}</a>
            <a href="/terms" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
