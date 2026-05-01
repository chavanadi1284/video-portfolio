import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, MonitorPlay, Palette, Zap } from 'lucide-react';

const services = [
  {
    id: 'short-form',
    title: 'Short-Form Content',
    description: 'High-retention TikToks, Reels, and Shorts designed for viral reach.',
    icon: Smartphone,
  },
  {
    id: 'long-form',
    title: 'Long-Form YouTube',
    description: 'Engaging, story-driven edits that keep viewers hooked till the end.',
    icon: MonitorPlay,
  },
  {
    id: 'color-grading',
    title: 'Color Grading',
    description: 'Cinematic color correction to give your footage a premium look.',
    icon: Palette,
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics',
    description: 'Dynamic text, 3D elements, and VFX that elevate production value.',
    icon: Zap,
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-background relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-neon/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Our <span className="text-brand-neon">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We don't just cut clips. We engineer attention.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative p-8 glass rounded-xl border-white/5 hover:border-brand-neon hover:shadow-[0_0_30px_rgba(255,0,60,0.2)] transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-lg bg-black border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-neon group-hover:shadow-[0_0_15px_rgba(255,0,60,0.5)] transition-all duration-300">
                    <Icon className="w-8 h-8 text-white group-hover:text-brand-neon transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 group-hover:text-brand-neon transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Animated corner border */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-brand-neon transition-colors duration-500 delay-100"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-transparent group-hover:border-brand-neon transition-colors duration-500 delay-100"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
