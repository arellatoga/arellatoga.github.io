import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MobileSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", number: "01", title: "Profile" },
  { id: "career", number: "02", title: "Career" },
  { id: "blog", number: "03", title: "Blog" },
  { id: "contact", number: "04", title: "Contact" },
];

export function MobileSidebar({ activeSection, onSectionChange }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectSection = (section: string) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <>
      <header className="mobile-masthead">
        <button className="mobile-wordmark" onClick={() => selectSection("home")}>
          Arel Latoga
        </button>
        <span>Portfolio · 2026</span>
        <button
          className="menu-button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <div
        className={cn("mobile-overlay", isOpen && "is-visible")}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-navigation"
        className={cn("mobile-navigation", isOpen && "is-open")}
        aria-label="Site index"
        aria-hidden={!isOpen}
      >
        <p className="ui-label">In this portfolio</p>
        <ol>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={cn("mobile-index-link", activeSection === item.id && "is-active")}
                onClick={() => selectSection(item.id)}
                tabIndex={isOpen ? 0 : -1}
              >
                <span>{item.number}</span>
                <strong>{item.title}</strong>
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
