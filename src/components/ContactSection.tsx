
import React, { useEffect, useRef, useState } from "react";
import { Mail, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-4 md:px-10 section-fade-in relative"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-theme-purple/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-20 top-1/2 w-64 h-64 bg-theme-darkPurple/15 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-theme-purple drop-shadow-[0_0_8px_rgba(155,135,245,0.5)] animate-on-scroll">Контакты</h2>
        <div className="glass-card rounded-lg p-6 md:p-8 border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.2)] backdrop-blur-md animate-on-scroll">
          <p className="text-lg mb-6 text-gray-300 animate-on-scroll">
            Не стесняйтесь обращаться для сотрудничества или просто поздороваться.
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:me@zdebry.ru" 
              className="flex items-center p-4 rounded-md transition-all duration-300 hover:bg-theme-purple/10 transform hover:-translate-y-1 animate-on-scroll hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]"
              onMouseEnter={() => setIsHovered('email')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={`bg-theme-purple/20 p-3 rounded-full mr-4 transition-all duration-300 ${isHovered === 'email' ? 'bg-theme-purple/40 shadow-[0_0_10px_rgba(155,135,245,0.7)]' : ''}`}>
                <Mail className="h-5 w-5 text-theme-purple" />
              </div>
              <span className="text-gray-300">me@zdebry.ru</span>
            </a>
            
            <a 
              href="https://github.com/zDEBRY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-md transition-all duration-300 hover:bg-theme-purple/10 transform hover:-translate-y-1 animate-on-scroll hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]"
              onMouseEnter={() => setIsHovered('github')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={`bg-theme-purple/20 p-3 rounded-full mr-4 transition-all duration-300 ${isHovered === 'github' ? 'bg-theme-purple/40 shadow-[0_0_10px_rgba(155,135,245,0.7)]' : ''}`}>
                <Github className="h-5 w-5 text-theme-purple" />
              </div>
              <span className="text-gray-300">zDEBRY</span>
              <ArrowUpRight className="h-4 w-4 ml-2 text-theme-purple" />
            </a>
            
            <a 
              href="https://t.me/WENYYXUS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 rounded-md transition-all duration-300 hover:bg-theme-purple/10 transform hover:-translate-y-1 animate-on-scroll hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]"
              onMouseEnter={() => setIsHovered('telegram')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div className={`bg-theme-purple/20 p-3 rounded-full mr-4 transition-all duration-300 ${isHovered === 'telegram' ? 'bg-theme-purple/40 shadow-[0_0_10px_rgba(155,135,245,0.7)]' : ''}`}>
                <div className="text-theme-purple font-bold">TG</div>
              </div>
              <span className="text-gray-300">@WENYYXUS</span>
              <ArrowUpRight className="h-4 w-4 ml-2 text-theme-purple" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
