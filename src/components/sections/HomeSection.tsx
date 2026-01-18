export function HomeSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Hello, I'm John Doe</h1>
        <p className="text-xl text-muted-foreground">
          A passionate Full Stack Developer based in San Francisco, CA
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">About Me</h2>
        <p className="text-foreground leading-relaxed">
          I'm a software developer with over 5 years of experience building web applications. 
          I specialize in React, TypeScript, and Node.js, and I'm passionate about creating 
          clean, efficient, and user-friendly solutions.
        </p>
        <p className="text-foreground leading-relaxed">
          When I'm not coding, you can find me hiking in the mountains, reading tech blogs, 
          or experimenting with new technologies. I believe in continuous learning and 
          staying up-to-date with the latest industry trends.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Git"].map(
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
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Frontend Development</h3>
            <p className="text-muted-foreground text-sm">
              Building responsive and interactive user interfaces with modern frameworks.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Backend Development</h3>
            <p className="text-muted-foreground text-sm">
              Creating robust APIs and server-side applications with scalable architecture.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">Database Design</h3>
            <p className="text-muted-foreground text-sm">
              Designing efficient database schemas and optimizing query performance.
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-semibold text-foreground mb-2">DevOps</h3>
            <p className="text-muted-foreground text-sm">
              Setting up CI/CD pipelines and managing cloud infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
