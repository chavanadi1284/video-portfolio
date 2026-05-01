import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Base Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_100%)] z-20 opacity-90" /> {/* Vignette */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          {/* Using a placeholder high-quality abstract video */}
          <source src="https://cdn.coverr.co/videos/coverr-abstract-neon-lights-5244/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-neon/50 bg-brand-neon/10 backdrop-blur-sm"
        >
          <span className="text-brand-neon font-semibold tracking-widest text-sm uppercase">Premium Video Production</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-6"
        >
          We Edit <br/>
          <motion.span 
            initial={{ filter: 'blur(10px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-brand-red to-brand-neon bg-[length:200%_auto] animate-glow-pulse drop-shadow-[0_0_25px_rgba(255,0,60,0.6)]"
          >
            Masterpieces
          </motion.span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-gray-300 max-w-3xl font-light tracking-wide"
        >
          High-impact, edgy, and conversion-focused video editing for brands that refuse to blend in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="mt-14"
        >
          <a href="#showreel" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-widest transition-all duration-300 bg-brand-red overflow-hidden rounded-sm hover:shadow-neon-red">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative">View Showreel</span>
            <div className="absolute inset-0 border-2 border-brand-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"></div>
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-0.5 h-12 bg-gradient-to-b from-brand-neon to-transparent"
        />
      </motion.div>
    </section>
  );
}
