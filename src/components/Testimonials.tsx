import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Marketing Director",
      company: "TechNova",
      text: "The editing quality completely transformed our ad campaigns. We saw a 3x increase in engagement within the first week of launching the new videos."
    },
    {
      id: 2,
      name: "Marcus Aurelius",
      role: "Content Creator",
      company: "7M+ YouTube Subs",
      text: "I've worked with many editors, but none understand pacing and retention like this team. Absolute game changers for my channel's growth."
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Founder",
      company: "FitLife Apparel",
      text: "Our brand looks 10x more premium now. The cinematic feel they brought to our product launches was exactly what we needed to stand out."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-red">Feedback</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
            Don't just take our word for it. See what top creators and brands have to say about our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
              className="glass p-8 rounded-xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-4 -left-4 text-brand-neon/20 group-hover:text-brand-neon/40 transition-colors duration-300">
                <Quote size={48} fill="currentColor" />
              </div>
              <p className="text-gray-300 mb-6 relative z-10 font-light leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-neon to-brand-red p-0.5">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-lg font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm">{testimonial.name}</h4>
                  <p className="text-brand-neon text-xs font-medium tracking-widest">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
