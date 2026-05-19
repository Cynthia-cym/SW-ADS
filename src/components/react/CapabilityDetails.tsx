import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    id: 'ai-build',
    title: 'AI智能搭建',
    subtitle: '一次需求输入，AI自动生成全平台方案',
    details: [
      { label: '自然语言输入', desc: '用中文描述投放需求，无需学习平台规则' },
      { label: '自动素材适配', desc: 'AI按各平台规格自动调整素材尺寸与格式' },
      { label: '智能定向推荐', desc: '基于目标市场自动推荐最佳受众定向策略' },
    ],
    color: 'blue' as const,
  },
  {
    id: 'unified',
    title: '全平台统一管理',
    subtitle: '一个后台管理所有平台账户',
    details: [
      { label: '跨平台统一后台', desc: '所有平台账户集中管理，告别多标签切换' },
      { label: '批量操作', desc: '一次编辑，一键批量推送到所有目标平台' },
      { label: '账户统一管理', desc: '统一权限、统一计费、统一报表' },
    ],
    color: 'cyan' as const,
  },
  {
    id: 'analytics',
    title: '演程智能决策',
    subtitle: '聚合所有平台数据，自动对比效果',
    details: [
      { label: '跨平台数据聚合', desc: '一个看板看遍全球投放效果，实时更新' },
      { label: '智能预算分配', desc: 'AI根据ROI自动优化各平台预算配置' },
      { label: '异常预警', desc: '效果异常自动报警，减少人为失误' },
    ],
    color: 'purple' as const,
  },
  {
    id: 'coverage',
    title: '全球平台覆盖',
    subtitle: '支持10+全球主流广告平台',
    details: [
      { label: '深度API对接', desc: '每个平台均实现完整API对接与规则适配' },
      { label: '规则完整适配', desc: '自动适配各平台广告政策与审核规则' },
      { label: '一键自动化投放', desc: '全流程自动化，真正实现一键投全球' },
    ],
    color: 'green' as const,
  },
];

const colorClasses: Record<string, { border: string; glow: string; bg: string; text: string }> = {
  blue: { border: 'border-blue-500/20', glow: 'shadow-blue-500/25', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  cyan: { border: 'border-cyan-500/20', glow: 'shadow-cyan-500/25', bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
  purple: { border: 'border-purple-500/20', glow: 'shadow-purple-500/25', bg: 'bg-purple-500/10', text: 'text-purple-400' },
  green: { border: 'border-green-500/20', glow: 'shadow-green-500/25', bg: 'bg-green-500/10', text: 'text-green-400' },
};

export default function CapabilityDetails() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          四大核心能力，打造真正的一键投放
        </motion.h2>
        <p className="text-center text-slate-400 mb-16">
          从搭建到优化，全链路AI赋能全球广告投放
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => {
            const colors = colorClasses[cap.color];
            return (
              <motion.div
                key={i}
                id={cap.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group p-8 rounded-2xl glass ${colors.border} hover:shadow-xl hover:${colors.glow} hover:-translate-y-1 transition-all duration-300 scroll-mt-24`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-300 mb-6">{cap.subtitle}</p>
                <div className="space-y-3">
                  {cap.details.map((d, j) => (
                    <div key={j} className="flex gap-3">
                      <div className={`w-5 h-5 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center shrink-0 mt-0.5`}>
                        <svg className={`w-3 h-3 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-white">{d.label}</span>
                        <span className="text-xs text-slate-500 ml-2">{d.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
