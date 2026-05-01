import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const AnimatedNumber = ({ end, duration = 2, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { id: 1, value: 150, suffix: '+', label: 'Videos Edited' },
    { id: 2, value: 50, suffix: 'M+', label: 'Views Generated' },
    { id: 3, value: 10, suffix: 'X', label: 'Average Client ROI' },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-black relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center p-8 glass rounded-2xl relative group overflow-hidden hover:border-brand-neon/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-brand-neon/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-2xl" />
              
              <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-4 group-hover:from-brand-neon group-hover:to-brand-red transition-all duration-500">
                <AnimatedNumber end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base uppercase tracking-widest text-gray-400 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
