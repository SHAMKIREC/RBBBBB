import React from "react";

export default function SupplierPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Верхний блок с градиентом */}
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg flex items-center gap-4">
          <span className="text-5xl">📦</span>
          <div>
            <h1 className="text-4xl font-bold mb-2">Как стать поставщиком</h1>
            <p className="text-xl opacity-90">Поставки материалов и оборудования</p>
          </div>
        </div>
        {/* Основной контент */}
        <div className="bg-[#FFE4D6] rounded-xl shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Приглашаем к сотрудничеству поставщиков строительных, отделочных и инженерных материалов, а также IT-оборудования. Мы работаем с юридическими лицами и самозанятыми предпринимателями и заинтересованы в надёжных, стабильных партнёрах.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>📋</span> Требования к сотрудничеству:
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Регистрация юр. лица (ИНН, ОГРН, расчётный счёт) или статус самозанятого</li>
              <li>Актуальный прайс-лист с позициями и ценами</li>
              <li>Наличие складских запасов или стабильной логистики</li>
              <li>Возможность заключения договора и документооборота</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>🏗</span> В приоритете по поставкам:
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span>🏠</span> Строительные и отделочные материалы:
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Сухие смеси, гипсокартон, шпаклёвка, плитка</li>
                  <li>Краски, грунтовки, лакокрасочная продукция</li>
                  <li>Напольные покрытия: ламинат, плитка, ПВХ</li>
                  <li>Потолочные системы, подвесы и крепёж</li>
                  <li>Крепёж, монтажная пена, герметики</li>
                  <li>Кирпичи</li>
                  <li>Блоки и пеноблоки</li>
                  <li>Доски и пиломатериалы</li>
                  <li>Цемент и сухие смеси</li>
                  <li>Брусчатка и тротуарная плитка</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span>🚪</span> Окна и двери:
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Межкомнатные и входные двери</li>
                  <li>Фурнитура, доборы, замки</li>
                  <li>ПВХ-окна, подоконники, отливы, москитные сетки</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span>🔌</span> Инженерные системы:
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Электрика и кабельная продукция</li>
                  <li>Сантехника и канализация</li>
                  <li>Вентиляционное оборудование, воздуховоды</li>
                  <li>Трубы, фитинги, крепления</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <span>🛠️</span> Инструмент и расходные материалы:
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Электроинструмент</li>
                  <li>Ручной инструмент</li>
                  <li>Расходники и насадки</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>🛒</span> Скоро открытие витрины на сайте
            </h2>
            <p className="text-gray-700 mb-4">
              Мы запускаем мини-маркет на сайте: надёжные партнёры смогут разместить продукцию в открытом доступе — с фото, ценами и описанием. Форматы работы: по комиссии, по заявке, дропшиппинг.
            </p>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span>📝</span> Для размещения продукции потребуется:
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Прайс-лист с описаниями</li>
              <li>Фото товаров (белый или нейтральный фон)</li>
              <li>Условия доставки, самовывоза или сборки</li>
              <li>Информация о вашей компании</li>
            </ul>
            <p className="text-gray-700 mt-2">Работа по счёту с НДС — по запросу.</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>📩</span> Как отправить предложение
            </h2>
            <p className="text-gray-700 mb-2">
              Присылайте коммерческое предложение или прайс-лист на:{" "}
              <a href="mailto:rb.service24@mail.ru" className="text-[#FF4D00] font-semibold hover:text-[#FF7A00] transition-colors">
                rb.service24@mail.ru
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">📌 В теме письма укажите:</span> «Поставщик: [Название вашей компании]»
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">📞 Вопросы по партнёрству:</span>{" "}
                <a href="tel:+79330306949" className="text-[#FF4D00] hover:text-[#FF7A00] transition-colors">+7 933 030 69 49</a>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">📲 Вопросы по IT и витрине:</span>{" "}
                <a href="tel:+79372296949" className="text-[#FF4D00] hover:text-[#FF7A00] transition-colors">+7 937 229 69 49</a>
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span>🤝</span> Мы открыты к новым предложениям и ценим надёжных партнёров!
            </h2>
            <p className="text-gray-700 mb-3">Мы рассматриваем предложения от:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Самозанятых с ИНН</li>
              <li>Небольших производителей</li>
              <li>Универсальных исполнителей, кто может поставить и смонтировать</li>
              <li>Поставщиков с уникальными решениями для узких задач</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Если вы не нашли свою категорию — всё равно пишите. Рассматриваем индивидуально.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 