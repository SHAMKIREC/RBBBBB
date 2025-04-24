"use client"

import { useState } from "react";
import { FaVk, FaTelegramPlane, FaWhatsapp, FaBuilding } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import Link from "next/link";

export default function Footer() {
  const [isPolicyOpen, setPolicyOpen] = useState(false);

  return (
    <footer className="bg-neutral-900 text-neutral-200 px-6 py-12">
      {/* Логотип и название */}
      <div className="max-w-7xl mx-auto mb-12 flex items-center gap-3">
        <FaBuilding className="text-4xl text-orange-500" />
        <span className="text-2xl font-bold tracking-tight">РЕШАЕМ БЫСТРО</span>
      </div>

      {/* Основная сетка */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* 1. Наши услуги */}
        <div>
          <h4 className="text-lg font-bold mb-4">Наши услуги</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium mb-2 text-orange-500">Строительные услуги</h5>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>🔨</span>
                  <Link href="/services/remont" className="hover:text-white transition-colors">Ремонт</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>⚡</span>
                  <Link href="/services/engineering" className="hover:text-white transition-colors">Инженерные системы</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>🏗️</span>
                  <Link href="/services/building" className="hover:text-white transition-colors">Строительство</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>🚪</span>
                  <Link href="/services/windows-doors" className="hover:text-white transition-colors">Окна и двери</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>🏠</span>
                  <Link href="/services/roof-facade" className="hover:text-white transition-colors">Кровля и фасады</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2 text-orange-500">IT и образовательные услуги</h5>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>💻</span>
                  <Link href="/services/it" className="hover:text-white transition-colors">IT-услуги</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>📚</span>
                  <Link href="/services/academic" className="hover:text-white transition-colors">Академическая поддержка</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Для бизнеса */}
        <div>
          <h4 className="text-lg font-bold mb-4">Для бизнеса</h4>
          <ul className="space-y-2">
            <li><Link href="/business/corporate" className="hover:text-white transition-colors">Корпоративным клиентам</Link></li>
            <li><Link href="/business/partnership" className="hover:text-white transition-colors">Партнерская программа</Link></li>
            <li><Link href="/business/supplier" className="hover:text-white transition-colors">Как стать поставщиком</Link></li>
            <li><Link href="/business/service-partner" className="hover:text-white transition-colors">Как стать партнёром по услугам</Link></li>
          </ul>
        </div>

        {/* 3. Для покупателей */}
        <div>
          <h4 className="text-lg font-bold mb-4">Для покупателей</h4>
          <ul className="space-y-2">
            <li><Link href="/customers/services" className="hover:text-white transition-colors">Услуги</Link></li>
            <li><Link href="/customers/loyalty" className="hover:text-white transition-colors">Программы лояльности</Link></li>
            <li><Link href="/customers/tips" className="hover:text-white transition-colors">Советы</Link></li>
            <li><Link href="/customers/support" className="hover:text-white transition-colors">Клиентская поддержка</Link></li>
            <li><Link href="/customers/faq" className="hover:text-white transition-colors">Вопросы и ответы (FAQ)</Link></li>
          </ul>
        </div>

        {/* 4. О компании */}
        <div>
          <h4 className="text-lg font-bold mb-4">О компании</h4>
          <ul className="space-y-2">
            <li><Link href="/about/careers" className="hover:text-white transition-colors">Наши вакансии</Link></li>
            <li><Link href="/about/brands" className="hover:text-white transition-colors">Бренды</Link></li>
            <li><Link href="/about/company" className="hover:text-white transition-colors">Наша компания</Link></li>
            <li><Link href="/about/sustainability" className="hover:text-white transition-colors">Устойчивое развитие</Link></li>
            <li><Link href="/about/reviews" className="hover:text-white transition-colors">Отзывы</Link></li>
          </ul>
        </div>

        {/* 5. Контакты */}
        <div>
          <h4 className="text-lg font-bold mb-4">Контакты</h4>
          <div className="space-y-3">
            <p>
              <span className="block text-neutral-400">Email:</span>
              <a href="mailto:rb.service24@mail.ru" className="text-white hover:text-orange-500 transition-colors">
                rb.service24@mail.ru
              </a>
            </p>
            <p>
              <span className="block text-neutral-400">IT и академическая поддержка:</span>
              <a href="tel:+79372296949" className="text-white hover:text-orange-500 transition-colors">
                +7 937 229 69 49
              </a>
            </p>
            <p>
              <span className="block text-neutral-400">Номер компании:</span>
              <a href="tel:+73330306949" className="text-white hover:text-orange-500 transition-colors">
                +7 333 030 69 49
              </a>
            </p>
            <p>
              <span className="block text-neutral-400">Строительство и ремонт:</span>
              <a href="tel:+79085509037" className="text-white hover:text-orange-500 transition-colors">
                +7 908 550 90 37
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Соцсети */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <h4 className="text-2xl font-bold mb-6">Мы в соцсетях</h4>
        <div className="flex justify-center space-x-8">
          <a 
            href="https://vk.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl hover:scale-110 transition duration-200"
          >
            <FaVk className="text-orange-500" />
          </a>
          <a 
            href="https://t.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl hover:scale-110 transition duration-200"
          >
            <FaTelegramPlane className="text-orange-600" />
          </a>
          <a 
            href="https://whatsapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl hover:scale-110 transition duration-200"
          >
            <FaWhatsapp className="text-red-500" />
          </a>
        </div>
      </div>

      {/* Подписка */}
      <div className="max-w-xl mx-auto mt-12 text-center">
        <h4 className="text-2xl font-bold mb-6">Будьте в курсе новостей</h4>
        <form className="flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="email"
            placeholder="Введите ваш email"
            className="flex-1 px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="button"
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-md hover:from-red-500 hover:to-orange-500 transition-all duration-300"
            onClick={() => setPolicyOpen(true)}
          >
            Подписаться
          </button>
        </form>
        <div className="mt-4 text-sm text-neutral-400 max-w-lg mx-auto">
          <p className="mb-2">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных и получение информационных сообщений.
          </p>
          <p>
            Сайт защищен reCAPTCHA и применяются Политика конфиденциальности и Условия использования Google.
          </p>
        </div>
      </div>

      {/* Копирайт */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
        © 2010 Решаем Быстро. Все права защищены.
      </div>

      {/* Модалка политики */}
      <Dialog open={isPolicyOpen} onClose={() => setPolicyOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-lg w-full rounded-xl p-6">
            <Dialog.Title className="text-xl font-bold mb-4 text-neutral-900">Политика конфиденциальности</Dialog.Title>
            <Dialog.Description className="text-neutral-700 space-y-4">
              <p>
                Мы обрабатываем ваши персональные данные в соответствии с Федеральным законом «О персональных данных» №152-ФЗ.
                При подписке на рассылку вы соглашаетесь получать информационные сообщения о наших услугах, акциях и новостях.
              </p>
              <p>
                Мы гарантируем конфиденциальность предоставленных данных и обязуемся не передавать их третьим лицам без вашего согласия.
                Вы можете отписаться от рассылки в любой момент, перейдя по соответствующей ссылке в письме.
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