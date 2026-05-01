import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from './ContactModal';

export function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 glass border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <Video className="w-8 h-8 text-brand-neon" />
        <span className="text-xl font-bold tracking-wider uppercase">Video<span className="text-brand-neon">Pro</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
        <a href="#showreel" className="hover:text-brand-neon transition-colors duration-300">Showreel</a>
        <a href="#portfolio" className="hover:text-brand-neon transition-colors duration-300">Portfolio</a>
        <a href="#services" className="hover:text-brand-neon transition-colors duration-300">Services</a>
      </div>
      <button 
        onClick={() => setIsContactModalOpen(true)}
        className="bg-brand-neon text-white px-6 py-2 rounded-sm font-bold uppercase tracking-wider text-sm hover:shadow-neon-red transition-all duration-300 cursor-pointer"
      >
        Hire Us
      </button>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </motion.nav>
  );
}
