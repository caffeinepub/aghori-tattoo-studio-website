import { Button } from '@/components/ui/button';
import { Skull } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.jpg"
          alt="Tattoo Studio Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 flex items-center justify-center">
          <Skull className="h-16 w-16 text-accent animate-pulse" strokeWidth={1.5} />
        </div>
        
        <h1 className="mb-4 text-6xl font-black tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          AGHORI
        </h1>
        
        <div className="mb-6 h-1 w-32 bg-accent" />
        
        <h2 className="mb-8 text-2xl font-light tracking-widest text-muted-foreground sm:text-3xl md:text-4xl">
          TATTOO STUDIO
        </h2>
        
        <p className="mb-12 max-w-2xl text-lg text-muted-foreground/90 sm:text-xl">
          Where art meets skin. Premium tattoo artistry in the heart of Chhota Shimla.
        </p>
        
        <Button
          onClick={scrollToContact}
          size="lg"
          className="group relative overflow-hidden bg-accent px-8 py-6 text-lg font-bold tracking-wide text-accent-foreground transition-all hover:bg-accent/90 hover:scale-105"
        >
          <span className="relative z-10">BOOK YOUR INK</span>
          <div className="absolute inset-0 -z-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 opacity-0 transition-opacity group-hover:opacity-100" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="h-12 w-[2px] bg-accent/50" />
          <div className="h-2 w-2 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
