"use client";

import React from "react";

const services = [
  {
    icon: "🛠️",
    title: "Ремонт",
    description: "Комплексный ремонт квартир, офисов и коммерческих помещений",
  },
  {
    icon: "🔌",
    title: "Инженерные системы",
    description: "Проектирование и монтаж инженерных систем",
  },
  {
    icon: "🏗️",
    title: "Строительство",
    description: "Строительство жилых и коммерческих объектов",
  },
  {
    icon: "🚪",
    title: "Окна и двери",
    description: "Монтаж, установка и ремонт окон и дверей",
  },
  {
    icon: "🏠",
    title: "Кровля и фасады",
    description: "Услуги по монтажу и ремонту кровли, фасадные работы",
  },
  {
    icon: "💻",
    title: "IT-услуги",
    description: "Широкий спектр IT-услуг для бизнеса и частных лиц",
  },
  {
    icon: "🎓",
    title: "Академическая поддержка",
    description: "Полный спектр услуг по академической поддержке",
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Наши услуги</h2>
        <p className="text-gray-600 mb-10">
          Профессиональные решения ваших задач в строительстве, ремонте и IT-сфере
        </p>
        <h3 className="text-2xl font-bold mb-6">Строительные услуги</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.slice(0, 5).map((service, index) => (
            <div
              key={index}
              className="bg-[#fef6f0] rounded-xl shadow-md p-4 md:p-6 flex flex-col justify-between h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <a href="#" className="text-orange-600 mt-4 font-semibold inline-flex items-center">
                Подробнее →
              </a>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold mb-6 mt-12">IT и образовательные услуги</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.slice(5).map((service, index) => (
            <div
              key={index}
              className="bg-[#fef6f0] rounded-xl shadow-md p-4 md:p-6 flex flex-col justify-between h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <a href="#" className="text-orange-600 mt-4 font-semibold inline-flex items-center">
                Подробнее →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 