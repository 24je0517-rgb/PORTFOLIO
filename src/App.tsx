import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Achievements } from "./components/Achievements";
import { Positions } from "./components/Positions";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = ["about", "journey", "work", "contact"];
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
    <div className="min-h-screen flex flex-col justify-between bg-[#0c0c0c] text-[#D7E2EA] selection:bg-cyan-500 selection:text-black">
      <Header activeSection={activeSection} />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
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
