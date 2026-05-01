import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
          onClick={onClose}
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-brand-neon hover:scale-110 transition-all z-[110]"
          >
            <X className="w-10 h-10" />
          </button>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden border border-brand-neon/30 shadow-neon-red-subtle"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Adding '?autoplay=1' makes it play automatically when the modal opens */}
            <iframe
              src={`${videoUrl}?autoplay=1&rel=0`}
              title="Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
