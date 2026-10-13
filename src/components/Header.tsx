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
    { name: "WORK", href: "#work", id: "work" },
    { name: "ACHIEVEMENTS", href: "#achievements", id: "achievements" },
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
          ? "bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E6DFD3] shadow-sm py-3"
          : "bg-[#F7F4EF]/85 backdrop-blur-sm border-b border-[#E6DFD3]/60 py-4"
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
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#2B2118] group-hover:text-[#A97F50] transition-colors">
              PORTFOLIO
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-mono tracking-widest text-[#8C7B6A] font-medium">
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
                      ? "text-[#8A6035] bg-[#F0E4D4] border border-[#A97F50]/30 font-semibold shadow-xs"
                      : "text-[#6B5B4B] hover:text-[#2B2118] hover:bg-[#F0E4D4]/40 border border-transparent"
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
              className="p-2 rounded-lg text-[#2B2118] hover:bg-[#F0E4D4]/50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF]/98 backdrop-blur-lg border-b border-[#E6DFD3] px-4 pt-3 pb-5 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-mono tracking-wider transition-colors ${
                  isActive
                    ? "text-[#8A6035] bg-[#F0E4D4] border border-[#A97F50]/30 font-semibold"
                    : "text-[#6B5B4B] hover:bg-[#F0E4D4]/40"
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
