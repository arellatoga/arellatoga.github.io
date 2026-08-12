import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "a purple power rising",
    date: "March 11, 2026",
    description: "Since coming to the UK, feelings of homesickness came in many flavors: longing for friends, family, pets, and even activities. But one thing that’s left me badly wanting is actual physical flavors, specifically, ube.",
    href: "https://medium.com/@realarel/a-purple-power-rising-7c4c61aa02ba",
  },
  {
    title: "A brief update about life",
    date: "August 19, 2023",
    description: "I’ve always found the power of technology interesting. It can make us both superior and subordinate. We control its physical form while it controls the shape of our lives.",
    href: "https://medium.com/@realarel/a-brief-update-about-life-4a9aa1aaa3cf",
  },
  {
    title: "Are Software Engineers Still Human?",
    date: "December 21, 2022",
    description: "It is time to address the lack of social responsibility, moral compasses, and ethics in software engineering.",
    href: "https://medium.com/@realarel/are-software-engineers-still-human-83b906232441",
  },
];

export function BlogSection() {
  return (
    <article>
      <header className="section-opener blog-opener">
        <p className="ui-label">Occasional writing</p>
        <h2>Notes from outside the codebase.</h2>
        <p>Essays about technology, responsibility, life abroad and the inevitable rise of purple yam.</p>
      </header>

      <div className="blog-list">
        {articles.map((article, index) => (
          <a className="blog-entry" href={article.href} target="_blank" rel="noopener noreferrer" key={article.href}>
            <span className="blog-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="blog-date">{article.date}</span>
            <span className="blog-copy">
              <strong>{article.title}</strong>
              <span>{article.description}</span>
            </span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        ))}
      </div>

      <a className="medium-profile-link" href="https://medium.com/@realarel" target="_blank" rel="noopener noreferrer">
        All writing on Medium <ArrowUpRight aria-hidden="true" />
      </a>
    </article>
  );
}
