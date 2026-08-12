import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arellatoga/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/arellatoga", icon: Github },
  { label: "Medium", href: "https://medium.com/@realarel", icon: ArrowUpRight },
];

export function ContactSection() {
  return (
    <article>
      <header className="contact-opener">
        <p className="ui-label">The final page</p>
        <h2>Let’s make something useful.</h2>
        <p>
          I’m happy to talk about backend systems, thoughtful product work, responsible AI or an interesting problem
          that does not fit neatly into a job title.
        </p>
      </header>

      <a className="email-link" href="mailto:arel.latoga@hotmail.com">
        <Mail aria-hidden="true" />
        <span>
          <small>Email</small>
          arel.latoga@hotmail.com
        </span>
        <ArrowUpRight aria-hidden="true" />
      </a>

      <div className="contact-details">
        <div>
          <p className="ui-label">Based between</p>
          <p>
            London, United Kingdom<br />
            Manila, Philippines<br />
            <a className="telephone-link" href="tel:+447824314890">+44 7824 314890</a>
          </p>
        </div>
        <div>
          <p className="ui-label">Elsewhere</p>
          <ul className="social-links">
            {links.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon aria-hidden="true" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="article-footer">
        <span>Arel Latoga · Backend Engineer</span>
        <a href="#home">Back to the beginning ↑</a>
      </footer>
    </article>
  );
}
