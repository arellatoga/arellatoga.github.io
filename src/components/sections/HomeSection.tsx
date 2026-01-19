import { Card, CardContent } from "@/components/ui/card";

export function HomeSection() {
  return (
    <div className="space-y-8">
      {/* Title + Subtitle Card */}
      <Card className="bg-white border-border shadow-sm relative z-10">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Hi, I am Arel</h1>
            <p className="text-xl text-muted-foreground">
              A product-driven Backend Engineer who wants to do tech for good.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Who? Card */}
      <Card className="bg-white border-border shadow-sm relative z-10">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Who?</h2>
          <p className="text-foreground leading-relaxed">
            I have a strong desire for creating technologies for social good.
            Technologies that are beneficial to everyone.
            Technologies that aren't evil.
            And aren't known to pull rugs.
            Or steal information without consent.
            Or exacerbate an existing digital, physical or socio-economic divide.
          </p>
          <p className="text-foreground leading-relaxed">
            I have shown this commitment in my previous works, where I worked towards code for financial inclusion.
            I am hoping to show this further in other domains, too.
          </p>
          <p className="text-foreground leading-relaxed">
            I started programming as a hobby. I wanted to make games, just like any other ordinary school boy out there.
            Career choices were very limited, however. So I did the next best thing: product-oriented software
            engineering.
            I do wish that in the things I code, I am also crafting stories, personal and intimate.
          </p>
          <p className="text-foreground leading-relaxed">
            So, if you would like to reach out, please do so.
            Let's make something that goes beyond code itself.
          </p>
        </CardContent>
      </Card>

      {/* Skills and Buzzwords Card */}
      <Card className="bg-white border-border shadow-sm relative z-10">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Skills and Buzzwords</h2>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "GCP", "Git", "Docker", "Backend", "Test-driven development", "Behaviour-driven develpoment", "Street Fighter", "Dota 2"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </CardContent>
      </Card>

      {/* What I Do Card */}
      <Card className="bg-white border-border shadow-sm relative z-10">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Backend Development</h3>
              <p className="text-muted-foreground text-sm">
                I make codebases that are easy to follow, easy to modify, and easy to extend.
                APIs, Architecture, Events, Rules Engines, Data, etc. Backend. Yeah.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Quality Engineering</h3>
              <p className="text-muted-foreground text-sm">
                I test my own code. Wow!
                I prefer using Cucumber but anything works.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Database Design</h3>
              <p className="text-muted-foreground text-sm">
                Databases are difficult but I do my best.
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">DevOps</h3>
              <p className="text-muted-foreground text-sm">
                I don't want to wait for the devops guy to set up the infrastructure for me.
                I own all the work when possible :)
              </p>
            </div>
            <div className="p-4 border border-border rounded-lg">
              <h3 className="font-semibold text-foreground mb-2">Prompt Engineering</h3>
              <p className="text-muted-foreground text-sm">
                
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
