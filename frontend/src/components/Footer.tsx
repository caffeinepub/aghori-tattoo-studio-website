import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-8 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025. Built with</span>
            <Heart className="h-4 w-4 fill-accent text-accent" />
            <span>using</span>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent transition-colors hover:text-accent/80"
            >
              caffeine.ai
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Aghori Tattoo Studio - Where Art Meets Skin
          </p>
        </div>
      </div>
    </footer>
  );
}
