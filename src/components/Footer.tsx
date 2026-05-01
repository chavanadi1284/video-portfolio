import { Video } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-12 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Video className="w-6 h-6 text-brand-neon" />
          <span className="text-lg font-bold tracking-wider uppercase">Video<span className="text-brand-neon">Pro</span></span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-gray-500 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </div>
        
        <div className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} VideoPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
