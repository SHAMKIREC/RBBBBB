import React from "react";

export default function ServicePartnerPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Верхний блок с градиентом */}
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg flex items-center gap-4">
          <span className="text-5xl">🤝</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Как стать партнёром по услугам</h1>
            <p className="text-xl opacity-90">Ищем исполнителей и подрядчиков</p>
          </div>
        </div>
        {/* Основной контент */}
        <div className="bg-[#FFE4D6] rounded-xl shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Мы открыты к сотрудничеству с частными мастерами, профильными специалистами и подрядными организациями. Предлагаем как разовые, так и долгосрочные форматы сотрудничества, в зависимости от объёмов и специализации.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>🏢</span> О компании
            </h2>
            <p className="text-gray-700">
              Наша компания зарекомендовала себя на рынке как надёжный партнёр с большим опытом в строительстве и IT-услугах. Мы работаем с крупными проектами, гарантируя высокий уровень выполнения работ и соблюдение всех стандартов качества.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>👥</span> Кого ищем:
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Мастеров по ремонту и отделке</li>
              <li>Электриков, сантехников, вентиляционщиков</li>
              <li>IT-специалистов, разработчиков, системных администраторов</li>
              <li>Строительные бригады и подрядные компании с опытом</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>✅</span> Что важно:
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Опыт выполнения работ по ТЗ</li>
              <li>Портфолио или ссылки на завершённые проекты</li>
              <li>Соблюдение сроков и стандартов качества</li>
              <li>Регистрация (для юрлиц и ИП)</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Работаем по Саратову и области (IT-услуги — удалённо)
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>💎</span> Что мы предоставляем:
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Чёткие условия оплаты с прозрачной системой расчётов — без задержек (поэтапная оплата, фиксированные ставки или бонусы за своевременное выполнение)</li>
              <li>Привлечение заказов с гарантированными объёмами</li>
              <li>Долгосрочные проекты с возможностью расширения сотрудничества</li>
              <li>Регулярные обратные связи и поддержку партнёров</li>
              <li>Рекламные возможности для партнёров (если есть)</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>⭐</span> Предпочтения:
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Опыт работы с крупными проектами</li>
              <li>Гибкость в выполнении работ и соблюдении сроков</li>
              <li>Отзывы от предыдущих заказчиков</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>⚙</span> Как работает сотрудничество:
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Все заявки проходят предварительный отбор</li>
              <li>Для начала сотрудничества необходимо предоставить пакет документов, включая ИНН, лицензии (если есть), примеры работ и отзывы</li>
              <li>Заключение договора и согласование условий, включая оплату и сроки выполнения (процесс подписания договора: электронно или лично)</li>
              <li>Мы поддерживаем регулярную коммуникацию для качественного выполнения работ</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>🔄</span> Процесс взаимодействия:
            </h2>
            <p className="text-gray-700">
              Мы назначаем менеджера для каждого партнёра, с которым будет происходить координация всех этапов проекта, включая начало работ, сроки, качество и отчётность.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>🛡️</span> Гарантии и ответственность:
            </h2>
            <p className="text-gray-700">
              Компания гарантирует выполнение обязательств в установленные сроки, а также соблюдение всех стандартов качества. В случае нарушения условий договора с нашей стороны, мы компенсируем все возможные убытки.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>🎁</span> Дополнительные возможности для партнёров:
            </h2>
            <p className="text-gray-700">
              Мы также предлагаем нашим партнёрам программу бонусов за привлечение новых подрядчиков и рекомендацию наших услуг своим клиентам. Это возможность расширить сотрудничество и получить дополнительные выгоды.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>📩</span> Как подать заявку:
            </h2>
            <p className="text-gray-700 mb-2">
              Отправьте заявку с ФИО, специализацией, опытом и ссылками на завершённые проекты на:{" "}
              <a href="mailto:rb.service24@mail.ru" className="text-[#FF4D00] font-semibold hover:text-[#FF7A00] transition-colors">
                rb.service24@mail.ru
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">📌 В теме письма укажите:</span> «Партнёр по услугам: [Ваша специализация]»
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">📞 Контакт для оперативных вопросов:</span>{" "}
                <a href="tel:+79372296949" className="text-[#FF4D00] hover:text-[#FF7A00] transition-colors">+7 937 229 69 49</a>
                <span className="text-gray-600 text-sm"> (Также доступен через WhatsApp)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 