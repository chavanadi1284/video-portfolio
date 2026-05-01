import { motion } from 'framer-motion';

export function Marquee() {
  const words = [
    "PREMIUM EDITING", "FAST TURNAROUND", "HIGH IMPACT", "CINEMATIC QUALITY",
    "PREMIUM EDITING", "FAST TURNAROUND", "HIGH IMPACT", "CINEMATIC QUALITY",
    "PREMIUM EDITING", "FAST TURNAROUND", "HIGH IMPACT", "CINEMATIC QUALITY"
  ];

  return (
    <div className="w-full bg-brand-neon py-3 overflow-hidden flex whitespace-nowrap border-y border-white/10 relative z-20 shadow-[0_0_20px_rgba(255,0,60,0.3)]">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          },
        }}
        className="flex gap-10 items-center"
      >
        {words.map((word, index) => (
          <div key={index} className="flex items-center gap-10">
            <span className="text-black font-black uppercase tracking-widest text-lg md:text-xl shrink-0">
              {word}
            </span>
            <span className="text-black/50 text-xl shrink-0">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
