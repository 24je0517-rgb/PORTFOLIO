import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "JOURNEY", href: "#journey", id: "journey" },
    { name: "WORK", href: "#work", id: "work" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0c0c0c]/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-[#0c0c0c]/60 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Brand */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#top")}
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              PORTFOLIO
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-mono tracking-widest text-slate-400 font-medium">
              {portfolioData.personalInfo.roleTagline}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wider transition-all duration-200 relative ${
                    isActive
                      ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111014]/95 backdrop-blur-lg border-b border-white/10 px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-mono tracking-wider transition-colors ${
                  isActive
                    ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 font-semibold"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={16} className="opacity-50" />
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
