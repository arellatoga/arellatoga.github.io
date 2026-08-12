import { cn } from "@/lib/utils";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", number: "01", title: "Profile", note: "A short introduction" },
  { id: "career", number: "02", title: "Career", note: "Work and education" },
  { id: "blog", number: "03", title: "Blog", note: "Essays and observations" },
  { id: "contact", number: "04", title: "Contact", note: "Say hello" },
];

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  return (
    <aside className="editorial-sidebar" aria-label="Site index">
      <div className="sidebar-masthead">
        <button className="wordmark" onClick={() => onSectionChange("home")}>
          Arel Latoga
        </button>
        <p className="sidebar-kicker">Backend engineer · London</p>
      </div>

      <div className="sidebar-rule" aria-hidden="true"><span /></div>

      <nav className="issue-index" aria-label="In this portfolio">
        <p className="ui-label">In this portfolio</p>
        <ol>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn("index-link", activeSection === item.id && "is-active")}
                aria-current={activeSection === item.id ? "location" : undefined}
              >
                <span className="index-number">{item.number}</span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.note}</small>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="sidebar-footer">
        <p className="ui-label">Currently</p>
        <p>Building useful systems at DoorFeed.</p>
        <span>London, United Kingdom</span>
      </div>
    </aside>
  );
}
