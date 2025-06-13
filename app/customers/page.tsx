"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Обработка скролла для кнопки "Наверх"
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Обработка свайпов
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe || isRightSwipe) {
      const currentIndex = sections.findIndex(s => s.key === active);
      let newIndex;
      
      if (isLeftSwipe) {
        newIndex = currentIndex + 1 >= sections.length ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex - 1 < 0 ? sections.length - 1 : currentIndex - 1;
      }
      
      setActive(sections[newIndex].key);
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container px-4 py-6 md:py-12 relative">
      {/* Мобильное меню-бургер */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-3 right-3 z-50 w-10 h-10 bg-[#FF7A00] rounded-full flex items-center justify-center shadow-lg"
        aria-label="Меню"
      >
        <div className={`w-5 h-5 relative transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
          <span className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-90 translate-y-0' : '-translate-y-1.5'}`}></span>
          <span className={`absolute w-5 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute w-5 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-90 translate-y-0' : 'translate-y-1.5'}`}></span>
        </div>
      </button>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Меню слева */}
        <AnimatePresence>
          {(isMenuOpen || window.innerWidth >= 768) && (
            <motion.nav
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:w-64 w-full flex flex-col gap-2 md:gap-4 mb-4 md:mb-0 fixed md:relative top-0 left-0 h-full md:h-auto bg-white md:bg-transparent p-4 md:p-0 z-40 overflow-y-auto"
            >
              {sections.map((section) => (
                <button
                  key={section.key}
                  onClick={() => {
                    setActive(section.key);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-3 md:py-4 rounded-lg md:rounded-xl font-medium md:font-semibold text-base md:text-lg transition-colors w-full min-h-[40px] md:min-h-[44px]
                    ${active === section.key
                      ? "bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white shadow"
                      : "bg-white text-gray-800 border border-[#FF7A00] hover:bg-[#FFF3EC]"}
                  `}
                >
                  <span className="text-xl md:text-3xl">{section.icon}</span>
                  <span className="text-sm md:text-base">{section.title}</span>
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Контент справа */}
        <div 
          className="flex-1 bg-[#FFE4D6] rounded-lg md:rounded-xl shadow-lg p-4 md:p-6 min-h-[300px] md:min-h-[400px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
            <span className="text-2xl md:text-3xl">{sections.find((s) => s.key === active)?.icon}</span>
            <span className="text-base md:text-lg">{sections.find((s) => s.key === active)?.title}</span>
          </h2>
          <div className="text-sm md:text-base">
            {sections.find((s) => s.key === active)?.content}
          </div>
        </div>
      </div>

      {/* Кнопка "Наверх" */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-[#FF7A00] text-white rounded-full flex items-center justify-center shadow-lg z-50"
            aria-label="Наверх"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
} 