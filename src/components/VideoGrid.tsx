import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';
import { useState } from 'react';
import { VideoModal } from './VideoModal';

// Mock video data with YouTube embed URLs
const videos = [
  { id: 1, title: 'Music Video Edit', thumbnail: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/jfKfPfyJRdk' },
  { id: 2, title: 'Corporate Documentary', thumbnail: '/corporate_documentary.png', url: 'https://www.youtube.com/embed/9bZkp7q19f0' },
  { id: 3, title: 'Commercial Spot', thumbnail: '/commercial_spot.png', url: 'https://www.youtube.com/embed/LXb3EKWsInQ' },
  { id: 4, title: 'Social Media Reel', thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/1la4h24k07I' },
  { id: 5, title: 'Product Launch', thumbnail: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/jNQXAC9IVRw' },
  { id: 6, title: 'Event Highlight', thumbnail: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=800', url: 'https://www.youtube.com/embed/VvU278bZ2mU' },
];

export function VideoGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-brand-dark relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
              Recent <span className="text-brand-neon">Work</span>
            </h2>
            <p className="text-gray-400">A selection of our latest high-performance edits.</p>
          </div>
          <button className="mt-6 md:mt-0 text-brand-neon uppercase tracking-widest text-sm font-bold hover:text-white transition-colors flex items-center gap-2 group">
            View All <div className="w-8 h-px bg-brand-neon group-hover:bg-white group-hover:w-12 transition-all"></div>
          </button>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(video.url)}
              className="group relative aspect-video rounded-md overflow-hidden bg-black border border-white/10 hover:border-brand-neon transition-colors duration-300 cursor-pointer"
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {video.title}
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-8 transition-all duration-300 mt-2 flex items-center gap-2 text-brand-neon">
                  <Play className="w-4 h-4" fill="currentColor" />
                  <span className="text-sm font-bold tracking-widest uppercase">Watch Now</span>
                </div>
              </div>
              
              {/* Hover Glow Edge */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-neon group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_20px_#FF003C,0_0_40px_#FF003C]"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={() => setSelectedVideo(null)} 
        videoUrl={selectedVideo || ''} 
      />
    </section>
  );
}
