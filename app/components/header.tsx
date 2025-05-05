"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaShoppingCart, FaWhatsapp, FaTelegram } from 'react-icons/fa'
import { HiSun, HiMoon } from 'react-icons/hi'
import SearchBar from './SearchBar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@radix-ui/react-dropdown-menu'
import { Phone } from 'lucide-react'
import { DialogContent } from '@radix-ui/react-dialog'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSOSOpen, setIsSOSOpen] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <header className="bg-neutral-900 text-neutral-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center flex-shrink-0 -ml-12">
            <div className="h-8 w-8 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm leading-none">RB</span>
            </div>
            <span className="ml-2 text-lg font-bold bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text leading-none">
              РЕШАЕМ БЫСТРО
            </span>
          </Link>

          {/* Поисковая строка */}
          <div className="hidden md:block flex-1 mx-4 lg:mx-8 max-w-xl">
            <SearchBar />
          </div>

          {/* Навигация для десктопов */}
          <nav className="hidden md:flex items-center space-x-6 pr-4">
            {/* Выпадающий список услуг */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="nav-link cursor-pointer flex items-center gap-1 bg-transparent border-none shadow-none px-0 py-0 rounded-none focus:outline-none focus:ring-0 group">
                  <span className="transition-colors group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FF7A00] group-hover:to-[#FF0000] group-data-[state=open]:bg-clip-text group-data-[state=open]:text-transparent group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:from-[#FF7A00] group-data-[state=open]:to-[#FF0000]">Услуги</span>
                  <span className="ml-1">▼</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#FFE4D6] text-black min-w-[260px] shadow-lg border border-[#FF7A00]/30 rounded-xl p-0 z-50">
                {/* Подпись и основные услуги */}
                <div className="px-4 pt-3 pb-1 text-xs font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#C80000]">Основные услуги</div>
                <Link href="/services/remont" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Ремонт</Link>
                <Link href="/services/engineering" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Инженерные системы</Link>
                <Link href="/services/construction" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Строительство</Link>
                <Link href="/services/windows-doors" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Окна и двери</Link>
                <Link href="/services/roofing-facades" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Кровля и фасады</Link>
                <Link href="/services/it" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">IT-услуги</Link>
                <Link href="/services/academic" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Академическая поддержка</Link>
                {/* Градиентная разделительная полоса */}
                <div className="my-4 mx-2 h-[3px] rounded bg-gradient-to-r from-[#FF7A00] to-[#C80000]" />
                <div className="px-4 pb-1 text-xs font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A00] to-[#C80000]">Дополнительные услуги</div>
                <div className="bg-[#FFE4D6] rounded-b-xl">
                  <Link href="/services/callout" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Выезд специалиста</Link>
                  <Link href="/services/delivery" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Доставка стройматериалов</Link>
                  <Link href="/services/garbage" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Вывоз мусора</Link>
                  <Link href="/services/estimate" className="block px-4 py-2 rounded-none transition-colors hover:bg-[#FFD1B3] text-black">Смета на ремонтные работы</Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/calculator" className="nav-link">
              Калькулятор
            </Link>
            <Link href="/reviews" className="nav-link">
              Отзывы
            </Link>
            <Link href="/blog" className="nav-link">
              Блог
            </Link>
            <Link href="/prices" className="nav-link">
              Цены
            </Link>
            <Link href="/shop" className="nav-link flex items-center gap-2">
              <FaShoppingCart className="w-5 h-5" />
              <span>Магазин</span>
            </Link>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-neutral-800 transition-colors text-2xl"
              aria-label="Переключить тему"
            >
              {isDarkMode ? (
                "🌙"
              ) : (
                "☀️"
              )}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-4 py-2 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white font-medium rounded hover:opacity-90 transition-opacity">
                  SOS 24/7
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[320px] p-3 bg-[#FFE4D6] rounded-md border-2 border-[#FF4D00]">
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-semibold text-black">
                    Экстренный вызов сотрудника
                  </div>
                  
                  <button 
                    onClick={() => setIsSOSOpen(!isSOSOpen)} 
                    className="w-full px-4 py-3 mt-1 text-base font-medium text-white relative rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 bg-[#FF4D00]"
                  >
                    <span className="relative z-10 text-lg">▼</span>
                    <span className="relative z-10">Авария? Звоните даже ночью!</span>
                    <span className="relative z-10 text-lg">▼</span>
                  </button>

                  {/* Контакты сразу под кнопкой */}
                  <div className="flex flex-col gap-2 mt-2">
                    <a
                      href="tel:+79085509037"
                      className="flex items-center justify-center gap-2 py-1.5 text-sm font-medium text-black hover:opacity-90"
                    >
                      <Phone className="h-5 w-5 text-black" />
                      +7 908 550 90 37
                    </a>
                    <a
                      href="https://wa.me/79085509037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-1.5 text-sm font-medium text-black hover:opacity-90"
                    >
                      <FaWhatsapp className="h-6 w-6 text-[#25D366]" />
                      WhatsApp
                    </a>
                    <a
                      href="https://t.me/+79085509037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-1.5 text-sm font-medium text-black hover:opacity-90"
                    >
                      <FaTelegram className="h-6 w-6 text-[#229ED9]" />
                      Telegram
                    </a>
                  </div>

                  {/* Нижняя граница после кнопки и контактов */}
                  <div className="border-b border-[#FF3A2D]/20 my-3" />

                  {isSOSOpen && (
                    <div className="space-y-6 mt-4 pt-4">
                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-[#FF3A2D]">Срочно решаем любые проблемы:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-black">
                          <li>Протечки и затопления</li>
                          <li>Поломки оборудования</li>
                          <li>Электрические неисправности</li>
                          <li>Аварийные ситуации</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-[#FF3A2D]">Как мы работаем:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-black">
                          <li>Выезд в течение часа</li>
                          <li>Работаем 24/7 без выходных</li>
                          <li>Оперативное устранение проблем</li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg font-bold text-[#FF3A2D]">Гарантии:</h3>
                        <ul className="list-disc pl-5 space-y-2 text-black">
                          <li>Фиксированная смета</li>
                          <li>Гарантия на работы</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/login"
              className="px-4 py-2 border-2 border-[#FF3A2D] text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FF0000] font-medium rounded hover:bg-gradient-to-r hover:from-[#FF7A00] hover:to-[#FF0000] hover:text-white transition-colors"
            >
              Войти
            </Link>
          </nav>

          {/* Кнопка мобильного меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 mr-4 rounded-md text-neutral-200 hover:bg-neutral-800"
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-700">
          <div className="px-4 pt-2 pb-3 space-y-2 bg-neutral-900 shadow-lg">
            {/* Поисковая строка для мобильных */}
            <div className="py-2">
              <SearchBar />
            </div>
            
            <nav className="flex flex-col space-y-1">
              {/* Выпадающий список услуг для мобильного меню */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="mobile-nav-link cursor-pointer flex items-center gap-1">
                    Услуги
                    <span className="ml-1">▼</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black min-w-[260px] shadow-lg border rounded-lg p-0 z-50">
                  <Link href="/services/remont" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Ремонт</Link>
                  <Link href="/services/engineering" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Инженерные системы</Link>
                  <Link href="/services/construction" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Строительство</Link>
                  <Link href="/services/windows-doors" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Окна и двери</Link>
                  <Link href="/services/roofing-facades" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Кровля и фасады</Link>
                  <Link href="/services/it" className="block px-4 py-2 hover:bg-blue-50 transition-colors">IT-услуги</Link>
                  <Link href="/services/academic" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Академическая поддержка</Link>
                  <div className="my-2 border-t border-gray-200" />
                  <Link href="/services/callout" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Выезд специалиста</Link>
                  <Link href="/services/delivery" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Доставка стройматериалов</Link>
                  <Link href="/services/garbage" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Вывоз мусора</Link>
                  <Link href="/services/estimate" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Смета на ремонтные работы</Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/calculator" className="mobile-nav-link">
                Калькулятор
              </Link>
              <Link href="/reviews" className="mobile-nav-link">
                Отзывы
              </Link>
              <Link href="/blog" className="mobile-nav-link">
                Блог
              </Link>
              <Link href="/prices" className="mobile-nav-link">
                Цены
              </Link>
              <Link href="/shop" className="mobile-nav-link flex items-center gap-2">
                <FaShoppingCart className="w-5 h-5" />
                <span>Магазин</span>
              </Link>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="mobile-nav-link flex items-center gap-2 w-full text-left text-xl"
              >
                {isDarkMode ? (
                  <>
                    <span>🌙</span>
                    <span>Тёмная тема</span>
                  </>
                ) : (
                  <>
                    <span>☀️</span>
                    <span>Светлая тема</span>
                  </>
                )}
              </button>
              <Link href="/emergency" className="mobile-nav-link bg-gradient-to-r from-[#FF7A00] to-[#FF0000] bg-clip-text text-transparent font-medium">
                SOS 24/7
              </Link>
              <Link href="/login" className="mobile-nav-link bg-gradient-to-r from-[#FF7A00] to-[#FF0000] bg-clip-text text-transparent font-medium">
                Войти
              </Link>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          @apply text-neutral-200 hover:text-[#FF3A2D] font-medium transition-colors;
        }
        .mobile-nav-link {
          @apply px-3 py-2 text-base font-medium text-neutral-200 hover:text-[#FF3A2D] rounded-lg hover:bg-neutral-800;
        }
      `}</style>
    </header>
  )
} 