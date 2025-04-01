
import { useRef, useState } from "react";
import NavigationPanel from "@/components/NavigationPanel";
import { useIsMobile } from "@/hooks/use-mobile";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContentPanel from "@/components/ContentPanel";
import AboutContent from "@/components/content/AboutContent";
import EducationContent from "@/components/content/EducationContent";
import CareerContent from "@/components/content/CareerContent";
import ContactContent from "@/components/content/ContactContent"; 

type ContentType = "about" | "education" | "career" | "contact";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentAreaRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [activeContent, setActiveContent] = useState<ContentType>("about");
  
  const handleNavigation = (contentType: ContentType) => {
    setActiveContent(contentType);
  };
  
  const renderContent = () => {
    switch (activeContent) {
      case "about":
        return <AboutContent />;
      case "education":
        return <EducationContent />;
      case "career":
        return <CareerContent />;
      case "contact":
        return <ContactContent />
      default:
        return <AboutContent />;
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="min-h-screen p-8 flex items-center justify-center relative overflow-hidden"
    >
      <AnimatedBackground />

      <div className={`w-full max-w-6xl flex ${isMobile ? 'flex-col' : 'flex-row'} justify-center ${isMobile ? 'gap-4' : 'gap-3'} relative z-10`}>
        <div ref={contentAreaRef} className={`${isMobile ? 'w-full' : ''} flex justify-center`}>
          <NavigationPanel onNavigate={handleNavigation} activeContent={activeContent} />
        </div>
        
        <ContentPanel 
          title={activeContent === "about" ? "Who is Arel" : activeContent.charAt(0).toUpperCase() + activeContent.slice(1)}
          className={`${isMobile ? 'w-full' : 'max-w-3xl'}`}
        >
          {renderContent()}
        </ContentPanel>
      </div>
    </div>
  );
};

export default Index;
