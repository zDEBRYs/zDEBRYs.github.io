
import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "LogXylos",
    description: "Мой телеграм-канал о программировании, где делюсь полезными материалами и опытом.",
    link: "https://t.me/LogXylos",
    type: "Телеграм канал",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 md:px-10 bg-theme-black/30 section-fade-in relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-theme-purple">Проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="glass-card overflow-hidden border-theme-purple/20 hover:border-theme-purple/50 hover:shadow-lg hover:shadow-theme-purple/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="text-sm text-theme-purple/70 mb-2">{project.type}</div>
                <h3 className="text-xl font-semibold mb-2 text-theme-purple">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-theme-purple hover:text-theme-darkPurple transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Посмотреть проект <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
