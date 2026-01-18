import { Home, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  mouseY: number;
}

const navItems = [
  { id: "home", title: "Home", icon: Home },
  { id: "career", title: "Career", icon: Briefcase },
  { id: "contact", title: "Contact me", icon: Mail },
];

export function AppSidebar({ activeSection, onSectionChange, mouseY }: AppSidebarProps) {
  return (
    <aside
      className="fixed left-0 w-64 h-screen bg-background border-r border-border z-50 transition-transform duration-100 ease-out hidden md:flex flex-col justify-center"
      style={{
        transform: `translateY(${mouseY}px)`,
      }}
    >
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
