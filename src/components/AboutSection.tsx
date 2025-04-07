
import React, { useEffect, useRef } from "react";

const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 px-4 md:px-10 section-fade-in relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-theme-purple">Обо мне</h2>
        <div className="glass-card rounded-lg p-6 md:p-8">
          <p className="text-lg mb-6 text-gray-300">
            Я разработчик, увлеченный созданием элегантных решений с помощью кода. Моя основная специализация — 
            разработка телеграм-ботов на Python. Создаю эффективные и функциональные боты для автоматизации 
            задач, управления сообществами и бизнес-процессами.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-theme-purple">Навыки</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-theme-black bg-opacity-50 p-4 rounded-md border border-theme-purple/30 hover:border-theme-purple/70 transition-all">
              <h4 className="font-medium text-theme-purple mb-2">Python</h4>
              <p className="text-gray-400">Бэкенд разработка, телеграм боты, автоматизация</p>
            </div>
            <div className="bg-theme-black bg-opacity-50 p-4 rounded-md border border-theme-purple/30 hover:border-theme-purple/70 transition-all">
              <h4 className="font-medium text-theme-purple mb-2">HTML</h4>
              <p className="text-gray-400">Структура и семантика фронтенда</p>
            </div>
            <div className="bg-theme-black bg-opacity-50 p-4 rounded-md border border-theme-purple/30 hover:border-theme-purple/70 transition-all">
              <h4 className="font-medium text-theme-purple mb-2">CSS</h4>
              <p className="text-gray-400">Стили и адаптивный дизайн</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
