import { AppSidebar } from "@/components/AppSidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { CareerSection } from "@/components/sections/CareerSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomeSection } from "@/components/sections/HomeSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const sectionIds = ["home", "career", "blog", "contact"];

const Index = () => {
  const { activeSection, scrollToSection } = useScrollSpy(sectionIds, 112);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#home">Skip to content</a>
      <ParticleBackground />

      <AppSidebar
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />
      <MobileSidebar
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />

      <main className="reader-shell">
        <div className="reader-column">
          <section id="home" className="reader-section reader-section--first">
            <HomeSection />
          </section>
          <section id="career" className="reader-section">
            <CareerSection />
          </section>
          <section id="blog" className="reader-section">
            <BlogSection />
          </section>
          <section id="contact" className="reader-section reader-section--last">
            <ContactSection />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
