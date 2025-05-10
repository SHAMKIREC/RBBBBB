import React from "react";

export default function SupportPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg flex items-center gap-4">
          <span className="text-5xl">📞</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Клиентская поддержка</h1>
            <p className="text-xl opacity-90">Помощь и консультации 24/7</p>
          </div>
        </div>
        <div className="bg-[#FFE4D6] rounded-xl shadow-lg p-6">
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
        </div>
      </div>
    </div>
  );
} 