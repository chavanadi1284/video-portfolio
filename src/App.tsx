import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { VideoGrid } from './components/VideoGrid';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-brand-neon selection:text-white relative">
      <div className="grain-overlay"></div>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Showreel />
        <VideoGrid />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
