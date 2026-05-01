import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Showreel } from './components/Showreel';
import { Stats } from './components/Stats';
import { VideoGrid } from './components/VideoGrid';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-neon selection:text-white relative">
      <div className="grain-overlay"></div>
      
      {/* Background Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[150px] mix-blend-screen animate-glow-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-brand-neon/5 rounded-full blur-[150px] mix-blend-screen animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Cursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Showreel />
        <Stats />
        <Services />
        <VideoGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
