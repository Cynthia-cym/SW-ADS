import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const painPoints = [
  {
    traditional: '每个平台单独搭建，重复工作耗时10+小时',
    swads: '一次输入，AI自动生成所有平台方案，仅需10分钟',
  },
  {
    traditional: '同时管理10+平台账户，切换繁琐易出错',
    swads: '一个后台统一管理所有账户，一键批量操作',
  },
  {
    traditional: '每个平台规则不同，学习成本极高',
    swads: '无需学习平台规则，AI自动适配所有细节',
  },
  {
    traditional: '数据分散在各个平台，无法统一分析',
    swads: '跨平台数据聚合，一个看板看遍全球效果',
  },
  {
    traditional: '新兴市场平台支持差，无自动化工具',
    swads: '深度优化传音、Yandex等新兴高增长平台',
  },
  {
    traditional: '修改无记录，误操作无法挽回',
    swads: '全平台版本化管理，所有修改可追溯可回滚',
  },
];

export default function PainPointComparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-4"
        >
          告别传统广告投放的6大噩梦
        </motion.h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          传统多平台投放的痛点，我们用AI逐一击破
        </p>

        <div className="space-y-3 max-w-5xl mx-auto">
          {painPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4"
            >
              {/* Traditional (left) */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-sm text-slate-300">{item.traditional}</span>
              </div>

              {/* SW ADS (right) */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-sm text-white font-medium">{item.swads}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
