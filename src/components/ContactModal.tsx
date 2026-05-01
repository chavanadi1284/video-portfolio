import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import { useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 cursor-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1, type: "spring", bounce: 0.2 }}
            className="relative w-full max-w-xl bg-[#0a0a0a] rounded-xl overflow-hidden border border-brand-neon/30 shadow-[0_0_30px_rgba(255,0,60,0.2)] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-white/50 hover:text-brand-neon hover:scale-110 transition-all cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-black uppercase tracking-widest mb-2">
              Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-red">Project</span>
            </h2>
            <p className="text-gray-400 mb-8 font-light tracking-wide text-sm">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-neon font-bold">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-brand-neon font-bold">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-neon font-bold">Project Type</label>
                <select className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors appearance-none cursor-pointer">
                  <option value="short">Short-Form (TikToks, Reels)</option>
                  <option value="long">Long-Form (YouTube, Doc)</option>
                  <option value="commercial">Commercial / Campaign</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-brand-neon font-bold">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-brand-neon focus:bg-white/10 transition-colors resize-none"
                  placeholder="Tell us about your brand and what you're looking for..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-widest transition-all duration-300 bg-brand-red overflow-hidden rounded-md hover:shadow-neon-red cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative flex items-center gap-2">
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 border-2 border-brand-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
