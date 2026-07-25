import { Mail, Phone, MapPin, Linkedin, Github, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactSection() {
  return (
    <div className="space-y-8">
      <Card className="bg-white border-border shadow-sm relative z-10">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Contact Me</h1>
            <p className="text-xl text-muted-foreground">
              Let's get in touch! Feel free to reach out for collaborations or just a friendly chat.
            </p>
          </div>

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
              <a href="https://www.linkedin.com/in/arellatoga/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 bg-secondary rounded-lg hover:bg-muted transition-colors">
                <Linkedin className="h-5 w-5 text-secondary-foreground" />
              </a>
              <a href="https://github.com/arellatoga" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-secondary rounded-lg hover:bg-muted transition-colors">
                <Github className="h-5 w-5 text-secondary-foreground" />
              </a>
              <a href="https://medium.com/@realarel" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="p-3 bg-secondary rounded-lg hover:bg-muted transition-colors">
                <BookOpen className="h-5 w-5 text-secondary-foreground" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
