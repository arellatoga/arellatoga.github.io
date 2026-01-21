import { AppSidebar } from "@/components/AppSidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { HomeSection } from "@/components/sections/HomeSection";
import { CareerSection } from "@/components/sections/CareerSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const sectionIds = ["home", "career", "contact"];

const Index = () => {
  const { activeSection, scrollToSection } = useScrollSpy(sectionIds, 120);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <AppSidebar
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />

      {/* Mobile Sidebar */}
      <MobileSidebar
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen flex justify-center relative">
        <ParticleBackground />
        <div className="p-6 md:p-12 pt-20 md:pt-12 w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl text-left relative z-10">
          <section id="home">
            <HomeSection />
          </section>
          
          <section id="career" className="mt-16">
            <CareerSection />
          </section>
          
          <section id="contact" className="mt-16 pb-16">
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
