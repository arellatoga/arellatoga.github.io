import { useState, useEffect, useCallback } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sectionIds[i]);
        return;
      }
    }

    // Default to first section if we're at the top
    setActiveSection(sectionIds[0] || "");
  }, [sectionIds, offset]);

  useEffect(() => {
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.offsetTop - offset + 20;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [offset]);

  return { activeSection, scrollToSection };
}
