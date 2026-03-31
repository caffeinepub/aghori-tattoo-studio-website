import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function Gallery() {
  const tattoos = [
    {
      src: '/assets/generated/tattoo-skull.dim_400x400.jpg',
      alt: 'Skull Tattoo Design',
      title: 'Skull Art',
    },
    {
      src: '/assets/generated/tattoo-dragon.dim_400x400.jpg',
      alt: 'Dragon Tattoo Design',
      title: 'Dragon',
    },
    {
      src: '/assets/generated/tattoo-mandala.dim_400x400.jpg',
      alt: 'Mandala Tattoo Design',
      title: 'Mandala',
    },
    {
      src: '/assets/generated/tattoo-rose.dim_400x400.jpg',
      alt: 'Rose Tattoo Design',
      title: 'Rose',
    },
    {
      src: '/assets/generated/tattoo-phoenix.dim_400x400.jpg',
      alt: 'Phoenix Tattoo Design',
      title: 'Phoenix',
    },
    {
      src: '/assets/generated/tattoo-portrait.dim_400x400.jpg',
      alt: 'Portrait Tattoo Design',
      title: 'Portrait',
    },
  ];

  return (
    <section id="gallery" className="relative bg-secondary py-20 px-4 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl">
            GALLERY
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-accent" />
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Explore our collection of stunning tattoo designs. Each piece is a testament to our
            artists' skill and creativity.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tattoos.map((tattoo, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/20">
                  <AspectRatio ratio={1}>
                    <img
                      src={tattoo.src}
                      alt={tattoo.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="text-2xl font-bold text-white">{tattoo.title}</h3>
                    </div>
                  </AspectRatio>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl border-accent/50 bg-card p-0">
                <div className="relative">
                  <img
                    src={tattoo.src}
                    alt={tattoo.alt}
                    className="h-auto w-full rounded-lg"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <h3 className="text-3xl font-bold text-white">{tattoo.title}</h3>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
