import React from "react";

export default function ShopPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg flex items-center gap-4">
          <span className="text-5xl">🛒</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Магазин</h1>
            <p className="text-xl opacity-90">Всё для ремонта, строительства и IT</p>
          </div>
        </div>
        <div className="bg-[#FFE4D6] rounded-xl shadow-lg p-6">
          <p className="text-gray-700 mb-4">
            В нашем магазине представлены товары, необходимые для вашего ремонта и строительства, а также для реализации IT-проектов. Мы предлагаем только качественные товары от проверенных поставщиков.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">Что можно найти:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Строительные материалы</li>
              <li>Оборудование и инструменты</li>
              <li>IT-решения и программное обеспечение</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Как оформить заказ:</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-1">
              <li>Выберите нужный товар.</li>
              <li>Добавьте его в корзину.</li>
              <li>Перейдите в оформление заказа, заполнив все необходимые данные.</li>
              <li>Выберите способ оплаты и доставки.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
} 