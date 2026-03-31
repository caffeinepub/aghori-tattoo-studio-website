import { MapPin, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Expert Artists',
      description: 'Skilled tattoo artists with years of experience',
    },
    {
      icon: Users,
      title: 'Custom Designs',
      description: 'Personalized artwork tailored to your vision',
    },
    {
      icon: Clock,
      title: 'Professional Service',
      description: 'Quality work in a clean, safe environment',
    },
  ];

  return (
    <section id="about" className="relative bg-background py-20 px-4 sm:py-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl">
            ABOUT US
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-accent" />
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Aghori Tattoo Studio is a premier tattoo destination located in the scenic hills of Chhota Shimla.
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded with a passion for transforming skin into canvas, Aghori Tattoo Studio has become
              a trusted name in the art of tattooing. Our studio combines traditional techniques with
              modern innovation to create stunning, lasting artwork.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Every tattoo tells a story, and we're here to help you tell yours. From intricate mandalas
              to bold portraits, our artists bring your vision to life with precision and care.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Location</h3>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-6">
              <MapPin className="h-8 w-8 flex-shrink-0 text-accent" />
              <div>
                <p className="mb-2 text-xl font-semibold text-card-foreground">Chhota Shimla</p>
                <p className="text-muted-foreground">
                  Nestled in the beautiful hills of Shimla, our studio offers a serene and inspiring
                  environment for your tattoo experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border bg-card transition-all hover:border-accent hover:shadow-lg hover:shadow-accent/20"
            >
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="mb-4 rounded-full bg-accent/10 p-4 transition-all group-hover:bg-accent/20">
                  <feature.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
                </div>
                <h4 className="mb-2 text-xl font-bold text-card-foreground">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
