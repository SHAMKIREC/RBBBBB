"use client"

import { useState } from "react";
import { FaVk, FaTelegramPlane, FaWhatsapp, FaBuilding } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

export default function Footer() {
  const [isPolicyOpen, setPolicyOpen] = useState(false);

  return (
    <footer className="bg-neutral-900 text-neutral-200 py-8 sm:py-12">
      {/* Логотип и название */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
        <div className="flex items-center pl-4">
          <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm leading-none">RB</span>
          </div>
          <span className="ml-2 text-base sm:text-lg font-bold bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text leading-none">
            РЕШАЕМ БЫСТРО
          </span>
        </div>
      </div>

      {/* Основная сетка */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* 1. Наши услуги */}
        <div>
          <h4 className="text-lg font-bold mb-4">Наши услуги</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>🛠️</span>
              <Link href="/services/remont" className="hover:text-white transition-colors">Ремонт</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🔌</span>
              <Link href="/services/engineering" className="hover:text-white transition-colors">Инженерные системы</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🪟</span>
              <Link href="/services/building" className="hover:text-white transition-colors">Строительство</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🏠</span>
              <Link href="/services/windows-doors" className="hover:text-white transition-colors">Окна и двери</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🏗️</span>
              <Link href="/services/roof-facade" className="hover:text-white transition-colors">Кровля и фасады</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>💻</span>
              <Link href="/services/it" className="hover:text-white transition-colors">IT-услуги</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🎓</span>
              <Link href="/services/academic" className="hover:text-white transition-colors">Академическая поддержка</Link>
            </li>
          </ul>
        </div>

        {/* 2. Для бизнеса */}
        <div>
          <h4 className="text-lg font-bold mb-4">Для бизнеса</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>💼</span>
              <Link href="/business/corporate" className="hover:text-white transition-colors">Корпоративным клиентам</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🤝</span>
              <Link href="/business/partnership" className="hover:text-white transition-colors">Партнёрская программа</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>📦</span>
              <Link href="/business/supplier" className="hover:text-white transition-colors">Как стать поставщиком</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🛠️</span>
              <Link href="/business/service-partner" className="hover:text-white transition-colors">Как стать партнёром по услугам</Link>
            </li>
          </ul>
        </div>

        {/* 3. Для покупателей */}
        <div>
          <h4 className="text-lg font-bold mb-4">Для покупателей</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>🛒</span>
              <Link href="/customers/shop" className="hover:text-white transition-colors">Магазин</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🎁</span>
              <Link href="/customers/loyalty" className="hover:text-white transition-colors">Программы лояльности</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>💡</span>
              <Link href="/customers/tips" className="hover:text-white transition-colors">Советы</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <Link href="/customers/support" className="hover:text-white transition-colors">Клиентская поддержка</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>❓</span>
              <Link href="/customers/faq" className="hover:text-white transition-colors">Вопросы и ответы (FAQ)</Link>
            </li>
          </ul>
        </div>

        {/* 4. О компании */}
        <div>
          <h4 className="text-lg font-bold mb-4">О компании</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span>🏛️</span>
              <Link href="/about/company" className="hover:text-white transition-colors">Наша компания</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>🌟</span>
              <Link href="/about/reviews" className="hover:text-white transition-colors">Отзывы</Link>
            </li>
            <li className="flex items-center gap-2">
              <span>📝</span>
              <Link href="/about/news" className="hover:text-white transition-colors">Новости</Link>
            </li>
          </ul>
        </div>

        {/* 5. Контакты */}
        <div>
          <h4 className="text-lg font-bold mb-4">Контакты</h4>
          <div className="space-y-3">
            <p>
              <span className="block text-neutral-400">✉️ Email:</span>
              <a href="mailto:rb.service24@mail.ru" className="text-white hover:text-orange-500 transition-colors">
                rb.service24@mail.ru
              </a>
            </p>
            <p>
              <span className="block text-neutral-400">💻 IT:</span>
              <a href="tel:+79330306949" className="text-white hover:text-orange-500 transition-colors">
                +7 933 030 69 49
              </a>
            </p>
            <p>
              <span className="block text-neutral-400">🏛️ Номер компании:</span>
              <a href="tel:+79372296949" className="text-white hover:text-orange-500 transition-colors">
                +7 937 229 69 49
              </a>
            </p>
            <p>
              <span className="block text-neutral-400">🛠️ Строительство:</span>
              <a href="tel:+79085509037" className="text-white hover:text-orange-500 transition-colors">
                +7 908 550 90 37
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Соцсети */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 text-center">
        <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Мы в соцсетях</h4>
        <div className="flex justify-center space-x-6 sm:space-x-8">
          <a 
            href="https://vk.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:scale-110 transition duration-200"
          >
            <FaVk className="text-orange-500" />
          </a>
          <a 
            href="https://t.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:scale-110 transition duration-200"
          >
            <FaTelegramPlane className="text-orange-600" />
          </a>
          <a 
            href="https://whatsapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:scale-110 transition duration-200"
          >
            <FaWhatsapp className="text-red-500" />
          </a>
        </div>
      </div>

      {/* Подписка */}
      <div className="max-w-xl mx-auto mt-8 sm:mt-12 text-center px-4">
        <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Будьте в курсе новостей</h4>
        <form className="flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Введите ваш email"
            className="w-full sm:flex-1 px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-md hover:from-red-500 hover:to-orange-500 transition-all duration-300"
            onClick={() => setPolicyOpen(true)}
          >
            Подписаться
          </button>
        </form>
        <div className="mt-4 text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
          <p className="mb-2">
            Подписываясь на рассылку, я даю <a href="#" onClick={(e: React.MouseEvent) => { e.preventDefault(); setPolicyOpen(true); }} className="text-[#FF3A2D] hover:underline">согласие</a> на обработку персональных данных и на получение рекламных сообщений и новостей о товарах и услугах. Сайт защищён системой reCAPTCHA, к нему применяется <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#FF3A2D] hover:underline">политика конфиденциальности</a> и <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#FF3A2D] hover:underline">условия использования Google</a>.
          </p>
        </div>
      </div>

      {/* Копирайт */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-neutral-800 text-center text-xs sm:text-sm text-neutral-500">
        © 2010 Решаем Быстро. Все права защищены.
      </div>

      {/* Модалка политики */}
      <Dialog open={isPolicyOpen} onClose={() => setPolicyOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-lg w-full rounded-xl p-6">
            <Dialog.Title className="text-xl font-bold mb-4 text-neutral-900">Согласие на обработку персональных данных</Dialog.Title>
            <Dialog.Description className="text-neutral-700 space-y-4">
              <p>
                В соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» я свободно, своей волей и в своём интересе даю конкретное, информированное и сознательное согласие оператору персональных данных — компании «Решаем Быстро» (адрес электронной почты: rb.service24@mail.ru) — на обработку моих персональных данных в целях:
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>приёма заявок, связи со мной и предоставления консультаций;</li>
                <li>отправки информационных и рекламных рассылок;</li>
                <li>предоставления справочной информации по услугам;</li>
                <li>улучшения качества обслуживания и анализа интересов пользователей;</li>
                <li>персонализации предложений, связанных с товарами и услугами компании;</li>
                <li>исполнения обязательств по договору оказания услуг (например, для заключения и выполнения договоров на оказание строительных, IT-услуг и прочих услуг, указанных на сайте);</li>
                <li>а также иных действий, необходимых для эффективного взаимодействия между мной и компанией.</li>
              </ul>
              <p>
                Персональные данные, которые могут быть обработаны:
              </p>
              <ul className="list-disc pl-4 space-y-2">
                <li>имя, номер телефона, адрес электронной почты;</li>
                <li>комментарии, содержащиеся в заявке;</li>
                <li>история обращений, заказов и взаимодействий с сайтом;</li>
                <li>техническая информация: IP-адрес, cookies, данные о браузере и устройстве.</li>
              </ul>
              <p>
                Обработка может включать: сбор, хранение, уточнение, использование, обезличивание, передачу (в случаях, предусмотренных законом), удаление и уничтожение данных. Обработка может вестись как автоматизированными, так и неавтоматизированными средствами.
              </p>
              <p>
                Срок действия согласия — 20 лет, или до момента его отзыва по заявлению, направленному на указанный выше адрес электронной почты. После отзыва согласия некоторые функции сайта и услуги могут быть недоступны.
              </p>
              <p>
                Я подтверждаю, что ознакомлен(а) с политикой в отношении обработки персональных данных и осознаю возможные последствия отзыва согласия.
              </p>
            </Dialog.Description>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setPolicyOpen(false)}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-md hover:from-red-500 hover:to-orange-500 transition-all duration-300"
              >
                Закрыть
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </footer>
  );
} 