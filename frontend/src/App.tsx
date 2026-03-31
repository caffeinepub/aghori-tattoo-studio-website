import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from 'next-themes';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <div className="min-h-screen bg-background text-foreground">
        <Hero />
        <About />
        <Gallery />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
