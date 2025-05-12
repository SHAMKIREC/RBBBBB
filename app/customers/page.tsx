"use client";
import React, { useState } from "react";

const sections = [
  {
    key: "shop",
    icon: "🛒",
    title: "Магазин",
    content: (
      <>
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
      </>
    ),
  },
  {
    key: "loyalty",
    icon: "🎁",
    title: "Программы лояльности",
    content: (
      <>
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
      </>
    ),
  },
  {
    key: "tips",
    icon: "💡",
    title: "Советы",
    content: (
      <>
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
      </>
    ),
  },
  {
    key: "support",
    icon: "📞",
    title: "Клиентская поддержка",
    content: (
      <>
        <p className="text-gray-700 mb-4">
          Если у вас возникли вопросы или проблемы с заказом, наш отдел поддержки всегда готов помочь. Мы обеспечиваем круглосуточную помощь для наших клиентов.
        </p>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Как связаться с нами:</h3>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Телефон:</span>{" "}
              <a href="tel:+79372296949" className="text-[#FF4D00] hover:text-[#FF7A00] transition-colors">+7 937 229 69 49</a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:rb.service24@mail.ru" className="text-[#FF4D00] hover:text-[#FF7A00] transition-colors">rb.service24@mail.ru</a>
            </p>
            <p className="text-gray-700">
              Мы также доступны через WhatsApp для быстрого общения.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    key: "faq",
    icon: "❓",
    title: "Вопросы и ответы (FAQ)",
    content: (
      <>
        <p className="text-gray-700 mb-4">
          Мы собрали самые частые вопросы, чтобы помочь вам быстро найти ответ. Если у вас возникли дополнительные вопросы, не стесняйтесь обращаться в поддержку.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Как сделать заказ?</h3>
            <p className="text-gray-700">Выберите товар, добавьте его в корзину, и пройдите шаги оформления заказа.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Какие способы оплаты доступны?</h3>
            <p className="text-gray-700">Мы принимаем оплату через банковские карты, электронные кошельки и наложенным платежом.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Как отменить заказ?</h3>
            <p className="text-gray-700">Если заказ ещё не был отправлен, вы можете отменить его, связавшись с нашей службой поддержки.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Что делать, если товар оказался повреждён?</h3>
            <p className="text-gray-700">Мы гарантируем возврат или замену товара, если он пришёл в ненадлежащем состоянии. Обратитесь в поддержку.</p>
          </div>
        </div>
      </>
    ),
  },
];

export default function CustomersPage() {
  const [active, setActive] = useState(sections[0].key);

  return (
    <div className="container py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Меню слева */}
        <nav className="md:w-64 w-full flex md:flex-col flex-row gap-2 md:gap-4 mb-4 md:mb-0">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActive(section.key)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-lg transition-colors w-full md:w-auto
                ${active === section.key
                  ? "bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white shadow"
                  : "bg-white text-gray-800 border border-[#FF7A00] hover:bg-[#FFF3EC]"}
              `}
            >
              <span className="text-2xl md:text-3xl">{section.icon}</span>
              <span>{section.title}</span>
            </button>
          ))}
        </nav>
        {/* Контент справа */}
        <div className="flex-1 bg-[#FFE4D6] rounded-xl shadow-lg p-6 min-h-[400px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-3xl">{sections.find((s) => s.key === active)?.icon}</span>
            {sections.find((s) => s.key === active)?.title}
          </h2>
          {sections.find((s) => s.key === active)?.content}
        </div>
      </div>
    </div>
  );
} 