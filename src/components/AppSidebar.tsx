import { Home, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", title: "Home", icon: Home },
  { id: "career", title: "Career", icon: Briefcase },
  { id: "contact", title: "Contact me", icon: Mail },
];

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-primary border-r border-primary/20 z-50 hidden md:flex flex-col">
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors",
                  activeSection === item.id
                    ? "bg-white text-primary"
                    : "text-primary-foreground hover:bg-white/20"
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
