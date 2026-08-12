import { useState } from "react";

const skills = [
  "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", "GCP", "Git", "Docker",
  "Microservices", "Monoliths", "Domain-driven design", "Event sourcing", "CQRS",
  "Behaviour-driven development", "Test-driven development", "Distributed systems",
  "Kubernetes", "Terraform", "Observability", "Kafka", "RabbitMQ", "REST", "GraphQL",
  "Serverless", "Clean architecture", "Hexagonal architecture", "Rules engines", "Data pipelines",
  "LLMs", "Prompt engineering", "Vector databases", "Vibe coding", "Street Fighter", "Dota 2",
  "Spiking neural P-systems", "Financial inclusion", "Tech for good",
];

function shuffleSkills(items: string[]) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

const capabilities = [
  {
    number: "01",
    title: "Backend development",
    description: "APIs, architecture, events, rules engines and data systems designed to stay understandable as they grow.",
  },
  {
    number: "02",
    title: "Quality engineering",
    description: "I test my own code and favour behaviour-led checks that describe useful outcomes rather than implementation details.",
  },
  {
    number: "03",
    title: "Database design",
    description: "Pragmatic data models, careful migrations and queries that make the system easier to reason about.",
  },
  {
    number: "04",
    title: "DevOps",
    description: "I like owning the whole path to production when possible: infrastructure, delivery, observability and operations.",
  },
  {
    number: "05",
    title: "Applied AI",
    description: "Using AI where it solves a real problem, augments a real workflow and earns its place in the product.",
  },
];

export function HomeSection() {
  const [shuffledSkills] = useState(() => shuffleSkills(skills));

  return (
    <article>
      <header className="article-header">
        <div className="article-running-head">
          <span>Arel Latoga · Portfolio</span>
          <span>Product-minded backend engineering</span>
        </div>
        <p className="article-type">A personal introduction</p>
        <h1>Technology should be useful, humane and built to last.</h1>
        <p className="article-deck">
          I’m Arel, a product-driven backend engineer who wants to do tech for good.
        </p>
        <p className="article-byline">Based in London · Working across backend, infrastructure and applied AI</p>
      </header>

      <div className="article-body">
        <p className="lead-paragraph">
          I have a strong desire to create technologies for social good: technologies that are beneficial to everyone,
          respect consent and help close existing digital, physical and socio-economic divides.
        </p>
        <p>
          I have shown this commitment in previous work, where I helped build products for financial inclusion. I hope
          to carry it into other domains too—where good engineering can make complicated systems clearer, fairer and
          more useful.
        </p>
        <p>
          I started programming as a hobby because I wanted to make games, just like any ordinary schoolboy. Career
          choices were limited, so I did the next best thing: product-oriented software engineering. I still want the
          things I code to tell stories that feel personal and intimate.
        </p>
        <p>
          If that sounds like the kind of work you care about, please reach out. Let’s make something that goes beyond
          code itself.
        </p>
      </div>

      <section className="article-subsection" aria-labelledby="capabilities-title">
        <div className="section-heading-row">
          <p className="ui-label">The work</p>
          <h2 id="capabilities-title">What I do</h2>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability-row" key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="article-subsection skills-section" aria-labelledby="skills-title">
        <div className="section-heading-row">
          <p className="ui-label">The toolkit</p>
          <h2 id="skills-title">Skills &amp; buzzwords</h2>
        </div>
        <ul className="buzzword-dump" aria-label="Skills, technologies, interests and assorted buzzwords">
          {shuffledSkills.map((skill) => <li key={skill}>{skill}</li>)}
        </ul>
      </section>
    </article>
  );
}
