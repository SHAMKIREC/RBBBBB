import React from "react";

export default function CorporatePage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Верхний блок с градиентом */}
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg flex items-center gap-4">
          <span className="text-5xl">💼</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Для бизнеса</h1>
            <p className="text-xl opacity-90">Решения для юридических лиц</p>
          </div>
        </div>
        {/* Основной контент */}
        <div className="bg-[#FFE4D6] rounded-xl shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Мы работаем с компаниями, организациями и государственными учреждениями. Оказываем строительные, инженерные и IT-услуги в рамках договорных отношений. Предоставляем закрывающие документы, соблюдаем сроки и условия.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Ремонт и отделка коммерческих помещений</li>
            <li>Монтаж инженерных сетей (электрика, водоснабжение, вентиляция)</li>
            <li>Подряд на IT-разработку и обслуживание</li>
            <li>Долгосрочное сопровождение объектов</li>
          </ul>
          <div className="mb-6 text-gray-700">
            <span className="inline-block mr-2">📄 Договор.</span>
            <span className="inline-block mr-2">📦 Смета.</span>
            <span className="inline-block">📅 Сроки.</span>
          </div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <span role="img" aria-label="Корпоративным клиентам">🤝</span> Корпоративным клиентам
          </h2>
          <p className="text-gray-700 mb-4">
            Работаем с бизнесом на условиях аутсорса. Поддержка бизнес-процессов в строительстве и IT. Закрываем задачи без привлечения внутреннего ресурса заказчика. Предоставляем штат специалистов под нужды проекта.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Офисы и коммерческая недвижимость</li>
            <li>ЖКХ и управляющие компании</li>
            <li>Ритейл, общепит, коворкинги</li>
            <li>B2B SaaS и IT-команды</li>
          </ul>
          <div className="mt-8 text-sm text-gray-500">
            Для консультации и индивидуального предложения — <a href="mailto:rb.service24@mail.ru" className="text-[#FF4D00] underline">rb.service24@mail.ru</a>
          </div>
        </div>
      </div>
    </div>
  );
} 