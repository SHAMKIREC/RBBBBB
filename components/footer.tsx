"use client"

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaTools } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Наши услуги</h3>
            <nav className="space-y-2">
              <Link href="/services/repair" className="block hover:text-[#FF3A2D] transition-colors">🛠️ Ремонт</Link>
              <Link href="/services/engineering" className="block hover:text-[#FF3A2D] transition-colors">🔧 Инженерные системы</Link>
              <Link href="/services/construction" className="block hover:text-[#FF3A2D] transition-colors">🏗️ Строительство</Link>
              <Link href="/services/windows-doors" className="block hover:text-[#FF3A2D] transition-colors">🚪 Окна и двери</Link>
              <Link href="/services/roofing-facades" className="block hover:text-[#FF3A2D] transition-colors">🏠 Кровля и фасады</Link>
              <Link href="/services/it" className="block hover:text-[#FF3A2D] transition-colors">💻 IT-услуги</Link>
              <Link href="/services/academic" className="block hover:text-[#FF3A2D] transition-colors">📚 Академическая поддержка</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Для бизнеса</h3>
            <nav className="space-y-2">
              <Link href="/business/corporate" className="block hover:text-[#FF3A2D] transition-colors">💼 Корпоративным клиентам</Link>
              <Link href="/business/partner" className="block hover:text-[#FF3A2D] transition-colors">🤝 Партнёрская программа</Link>
              <Link href="/business/supplier" className="block hover:text-[#FF3A2D] transition-colors">📦 Как стать поставщиком</Link>
              <Link href="/business/service-partner" className="block hover:text-[#FF3A2D] transition-colors">🛠️ Как стать партнёром по услугам</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Для покупателей</h3>
            <nav className="space-y-2">
              <Link href="/shop" className="block hover:text-[#FF3A2D] transition-colors">🛍️ Магазин</Link>
              <Link href="/loyalty" className="block hover:text-[#FF3A2D] transition-colors">🎁 Программы лояльности</Link>
              <Link href="/tips" className="block hover:text-[#FF3A2D] transition-colors">💡 Советы</Link>
              <Link href="/support" className="block hover:text-[#FF3A2D] transition-colors">📞 Клиентская поддержка</Link>
              <Link href="/faq" className="block hover:text-[#FF3A2D] transition-colors">❓ Вопросы и ответы (FAQ)</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">О компании</h3>
            <nav className="space-y-2">
              <Link href="/about" className="block hover:text-[#FF3A2D] transition-colors">🏢 Наша компания</Link>
              <Link href="/reviews" className="block hover:text-[#FF3A2D] transition-colors">⭐ Отзывы</Link>
              <Link href="/news" className="block hover:text-[#FF3A2D] transition-colors">📰 Новости</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-400">Email:</p>
                <a href="mailto:rb.service24@mail.ru" className="hover:text-[#FF3A2D] transition-colors">
                  rb.service24@mail.ru
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400">IT:</p>
                <a href="tel:+79330306949" className="hover:text-[#FF3A2D] transition-colors">
                  +7 933 030 69 49
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400">Номер компании:</p>
                <a href="tel:+79372296949" className="hover:text-[#FF3A2D] transition-colors">
                  +7 937 229 69 49
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400">Строительство:</p>
                <a href="tel:+79085509037" className="hover:text-[#FF3A2D] transition-colors">
                  +7 908 550 90 37
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 