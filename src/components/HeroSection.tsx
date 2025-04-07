
import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const parallaxStyle = {
    transform: `translate(${mousePosition.x / 100}px, ${mousePosition.y / 100}px)`,
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/4 w-72 h-72 bg-theme-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-theme-darkPurple/30 rounded-full filter blur-3xl"></div>
      </div>
      
      <div 
        className={`text-center transition-all duration-1000 relative z-10 ${visible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        style={parallaxStyle}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-theme-purple via-theme-purple to-theme-darkPurple drop-shadow-[0_5px_20px_rgba(155,135,245,0.3)]">
          zDEBRY
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-md mx-auto animate-fade-in backdrop-blur-sm bg-theme-black/10 p-3 rounded-lg shadow-inner">
          Python разработчик | Создатель Telegram-ботов
        </p>
        <div className="mt-10 animate-fade-in-delayed">
          <Button 
            onClick={() => scrollToSection('about')}
            variant="ghost" 
            className="rounded-full border-2 border-theme-purple hover:bg-theme-purple/20 text-theme-purple shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(155,135,245,0.8)]"
          >
            Узнать больше <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-fade-in-delayed z-10">
        <div 
          onClick={() => scrollToSection('about')} 
          className="cursor-pointer p-2 rounded-full hover:bg-theme-purple/20 transition-all hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]"
        >
          <ArrowDown className="h-6 w-6 text-theme-purple animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
