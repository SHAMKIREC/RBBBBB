import React from "react";

export default function FAQPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg flex items-center gap-4">
          <span className="text-5xl">❓</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Вопросы и ответы (FAQ)</h1>
            <p className="text-xl opacity-90">Ответы на самые частые вопросы</p>
          </div>
        </div>
        <div className="bg-[#FFE4D6] rounded-xl shadow-lg p-6">
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
        </div>
      </div>
    </div>
  );
} 