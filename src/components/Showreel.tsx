import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { VideoModal } from './VideoModal';

export function Showreel() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="showreel" className="py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            The <span className="text-brand-neon">Showreel</span>
          </h2>
          <div className="w-24 h-1 bg-brand-neon mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          onClick={() => setIsModalOpen(true)}
          className="relative group rounded-xl overflow-hidden shadow-neon-red-subtle hover:shadow-neon-red transition-all duration-700 bg-brand-dark border border-brand-neon/20"
        >
          <div className="aspect-video relative w-full cursor-pointer flex items-center justify-center">
            {/* Fallback image or iframe placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2000" 
              alt="Showreel Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            {/* Play Button */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-brand-neon/20 backdrop-blur-sm border border-brand-neon flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-brand-neon flex items-center justify-center shadow-[0_0_15px_#FF003C]">
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </div>
            </div>
            
            {/* Overlay border effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-neon/50 transition-colors duration-500"></div>
          </div>
        </motion.div>
      </div>

      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Dummy URL, replace with actual showreel
      />
    </section>
  );
}
