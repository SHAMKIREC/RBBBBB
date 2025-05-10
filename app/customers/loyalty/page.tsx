import React from "react";

export default function LoyaltyPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg flex items-center gap-4">
          <span className="text-5xl">🎁</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Программы лояльности</h1>
            <p className="text-xl opacity-90">Бонусы и скидки для постоянных клиентов</p>
          </div>
        </div>
        <div className="bg-[#FFE4D6] rounded-xl shadow-lg p-6">
          <p className="text-gray-700 mb-4">
            Для наших постоянных клиентов мы предлагаем специальные условия и бонусы:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Скидки на повторные покупки.</li>
            <li>Бонусы за рекомендации новых клиентов.</li>
            <li>Акции и распродажи, доступные только участникам программы.</li>
          </ul>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Как стать участником:</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-1">
              <li>Зарегистрируйтесь на сайте.</li>
              <li>Начните делать покупки — бонусы начисляются автоматически.</li>
              <li>Получайте скидки и специальные предложения!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
} 