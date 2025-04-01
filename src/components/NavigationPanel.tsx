
import { Link } from "react-router-dom";
import DraggablePanel from "./DraggablePanel";
import { User2, GraduationCap, Building2, Contact } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type ContentType = "about" | "education" | "career" | "contact";

interface NavigationPanelProps {
  onNavigate: (contentType: ContentType) => void;
  activeContent: ContentType;
}

const NavigationPanel = ({ onNavigate, activeContent }: NavigationPanelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, contentType: ContentType) => {
    e.preventDefault();
    onNavigate(contentType);
  };
  
  return (
    <div ref={containerRef} className={isMobile ? 'w-full' : 'w-64'}>
      <DraggablePanel className={`flex flex-col gap-6 ${isMobile ? 'w-full' : 'w-64'}`} constraints={containerRef}>
        <h1 className="text-xl font-semibold mb-4">Arel's Website</h1>
        
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, "about")}
          className={`flex items-center gap-3 transition-colors ${activeContent === "about" ? "text-blue-600" : "hover:text-blue-600"}`}
        >
          <User2 size={20} />
          <span>About Me</span>
        </a>
        
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, "education")}
          className={`flex items-center gap-3 transition-colors ${activeContent === "education" ? "text-blue-600" : "hover:text-blue-600"}`}
        >
          <GraduationCap size={20} />
          <span>Education</span>
        </a>
        
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, "career")}
          className={`flex items-center gap-3 transition-colors ${activeContent === "career" ? "text-blue-600" : "hover:text-blue-600"}`}
        >
          <Building2 size={20} />
          <span>Career</span>
        </a>
        
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, "contact")}
          className={`flex items-center gap-3 transition-colors ${activeContent === "contact" ? "text-blue-600" : "hover:text-blue-600"}`}
        >
          <Contact size={20} />
          <span>Contact Info</span>
        </a>
      </DraggablePanel>
    </div>
  );
};

export default NavigationPanel;
