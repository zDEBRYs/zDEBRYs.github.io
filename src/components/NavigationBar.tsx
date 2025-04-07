
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-theme-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-theme-purple">zDEBRY</div>
        <div className="hidden md:flex space-x-1">
          <Button variant="ghost" onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-theme-purple">
            Обо мне
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-theme-purple">
            Проекты
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-theme-purple">
            Контакты
          </Button>
        </div>
        <Button 
          onClick={() => scrollToSection('contact')}
          variant="outline" 
          className="bg-transparent border-theme-purple text-theme-purple hover:bg-theme-purple hover:text-theme-black"
        >
          Связаться
        </Button>
      </div>
    </nav>
  );
};

export default NavigationBar;
