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
      const windowHeight = window.innerHeight;
      const sidebarHeight = windowHeight;
      
      // Calculate offset based on mouse position
      // Only move sidebar when mouse is near top or bottom edges
      const edgeThreshold = 100;
      const maxOffset = 50;
      
      if (e.clientY < edgeThreshold) {
        // Mouse near top - move sidebar up
        const ratio = (edgeThreshold - e.clientY) / edgeThreshold;
        setMouseY(-ratio * maxOffset);
      } else if (e.clientY > windowHeight - edgeThreshold) {
        // Mouse near bottom - move sidebar down
        const ratio = (e.clientY - (windowHeight - edgeThreshold)) / edgeThreshold;
        setMouseY(ratio * maxOffset);
      } else {
        // Mouse in middle - reset position
        setMouseY(0);
      }
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
