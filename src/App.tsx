import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Achievements } from "./components/Achievements";
import { Positions } from "./components/Positions";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = ["about", "work", "achievements", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F7F4EF] text-[#2B2118] selection:bg-[#F0E4D4] selection:text-[#2B2118]">
      <Header activeSection={activeSection} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Achievements />
        <Positions />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
