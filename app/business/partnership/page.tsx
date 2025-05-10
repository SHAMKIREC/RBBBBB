import React from "react";

export default function PartnershipPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Верхний блок с градиентом */}
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg flex items-center gap-4">
          <span className="text-5xl">🤝</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Партнёрская программа</h1>
            <p className="text-xl opacity-90">Привлекайте клиентов — получайте доход</p>
          </div>
        </div>
        {/* Основной контент */}
        <div className="bg-[#FFE4D6] rounded-xl shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Программа для физических и юридических лиц. За каждого приведённого клиента выплачивается вознаграждение.
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>% от сделки</li>
            <li>Прозрачная система отчётов</li>
            <li>Без привязки к региону</li>
          </ul>
          <div className="mb-6 text-gray-700">
            <span className="inline-block">📬 Заявки принимаются на почту: <a href="mailto:rb.service24@mail.ru" className="text-[#FF4D00] underline">rb.service24@mail.ru</a></span>
          </div>
          <p className="text-gray-600 text-sm">
            Мы открыты к сотрудничеству с агентствами, фрилансерами, компаниями и частными лицами. Присоединяйтесь и зарабатывайте вместе с нами!
          </p>
        </div>
      </div>
    </div>
  );
} 