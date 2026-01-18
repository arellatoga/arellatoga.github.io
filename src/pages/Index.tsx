import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { HomeSection } from "@/components/sections/HomeSection";
import { CareerSection } from "@/components/sections/CareerSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sidebarWidth = 256;
      
      // Only track mouse when it's over the main section
      if (e.clientX < sidebarWidth) {
        return;
      }
      
      const windowHeight = window.innerHeight;
      // Nav buttons height: 3 items * ~52px each + spacing ≈ 180px
      const navHeight = 180;
      // Max offset so top item stays at top (0) and bottom item stays at bottom
      const maxOffset = (windowHeight - navHeight) / 2;
      
      // Linear interpolation: map mouse Y from [0, windowHeight] to [-maxOffset, maxOffset]
      const ratio = (e.clientY / windowHeight) * 2 - 1; // -1 to 1
      const offset = ratio * maxOffset;
      
      setMouseY(offset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "career":
        return <CareerSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <AppSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        mouseY={mouseY}
      />

      {/* Mobile Sidebar */}
      <MobileSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen">
        <div className="p-6 md:p-12 pt-20 md:pt-12 max-w-4xl">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
