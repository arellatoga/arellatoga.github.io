import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <div className="space-y-8">
      {/* Title Card */}
      <Card className="bg-white border-border shadow-sm relative z-10">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Contact Me</h1>
          <p className="text-xl text-muted-foreground">
            Let's get in touch! Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <Card className="bg-white border-border shadow-sm relative z-10">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Mail className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">arel.latoga@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <Phone className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">07824314890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary rounded-lg">
                  <MapPin className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">London, UK and Manila, PH</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Social Links</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-3 bg-secondary rounded-lg hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-secondary-foreground" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-secondary rounded-lg hover:bg-muted transition-colors"
                >
                  <Github className="h-5 w-5 text-secondary-foreground" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card className="bg-white border-border shadow-sm relative z-10">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Send a Message</h2>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
