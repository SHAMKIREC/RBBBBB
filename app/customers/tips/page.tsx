import React from "react";

export default function TipsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg flex items-center gap-4">
          <span className="text-5xl">💡</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Советы</h1>
            <p className="text-xl opacity-90">Рекомендации и лайфхаки для покупателей</p>
          </div>
        </div>
        <div className="bg-[#FFE4D6] rounded-xl shadow-lg p-6">
          <p className="text-gray-700 mb-4">
            Не уверены, как выбрать материалы или какие инструменты вам понадобятся? В этом разделе мы делимся полезными рекомендациями и лайфхаками:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Как выбрать правильные строительные материалы?</li>
            <li>Какие инструменты нужны для ремонта?</li>
            <li>Рекомендации по установке IT-систем.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Наши советы помогут вам сэкономить время и деньги!
          </p>
        </div>
      </div>
    </div>
  );
} 