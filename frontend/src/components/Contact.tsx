import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useSubmitContactForm } from '@/hooks/useQueries';

export function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const submitMutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitMutation.mutateAsync({ name: name.trim(), message: message.trim() });
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setName('');
      setMessage('');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative bg-background py-20 px-4 sm:py-32">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl">
            GET IN TOUCH
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 bg-accent" />
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Ready to start your tattoo journey? Contact us today to discuss your ideas and book an appointment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-card-foreground">Phone</p>
                    <a
                      href="tel:8091694910"
                      className="text-lg text-accent transition-colors hover:text-accent/80"
                    >
                      8091694910
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-accent/10 p-3">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Chhota Shimla, Himachal Pradesh</p>
                  </div>
                </div>

                <div className="mt-8 rounded-lg border border-accent/20 bg-accent/5 p-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground">Studio Hours</h3>
                  <p className="text-muted-foreground">
                    Open by appointment. Call us to schedule your session.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-input bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your tattoo idea..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={6}
                    className="resize-none border-input bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitMutation.isPending}
                  className="w-full bg-accent text-accent-foreground transition-all hover:bg-accent/90 hover:scale-105"
                >
                  {submitMutation.isPending ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
