import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { HomeSection } from "@/components/sections/HomeSection";
import { CareerSection } from "@/components/sections/CareerSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

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
      />

      {/* Mobile Sidebar */}
      <MobileSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen flex justify-center">
        <div className="p-6 md:p-12 pt-20 md:pt-12 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl text-left">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
