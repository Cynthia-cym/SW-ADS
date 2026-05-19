import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: '输入需求',
    desc: '用普通话告诉AI你要投什么、投哪里',
    detail: 'AI自动识别所有平台需求，统一补全缺失信息',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    num: '02',
    title: '一键确认',
    desc: '检查核心信息，一键推送到所有目标平台',
    detail: '全平台自动校验，版本锁定，安全可靠',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    num: '03',
    title: '自动增长',
    desc: '演程全程监控优化，让增长自动发生',
    detail: '自动分配预算，异常预警，效果对比分析',
    color: 'from-blue-500 to-purple-500',
  },
];

export default function ProcessSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
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
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-16"
        >
          只需3步，AI一键完成全球投放
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-blue-500/40 via-blue-400/60 to-blue-500/40" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Step number circle */}
              <div className="flex justify-center mb-6">
                <div className="relative z-10 w-24 h-24 rounded-full bg-brand-surface border border-blue-500/20 flex items-center justify-center glow">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="glass p-6 rounded-2xl text-center">
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{step.desc}</p>
                <p className="text-xs text-slate-500">{step.detail}</p>
              </div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 z-10">
                  <svg className="w-6 h-6 text-blue-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
