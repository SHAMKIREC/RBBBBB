"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import SearchBar from './SearchBar'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-neutral-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-[#FF3A2D] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">RB</span>
              </div>
              <span className="ml-2 text-lg font-bold">РЕШАЕМ БЫСТРО</span>
            </div>
          </Link>

          {/* Поисковая строка */}
          <div className="hidden md:block flex-1 mx-4 lg:mx-8 max-w-md">
            <SearchBar />
          </div>

          {/* Навигация для десктопов */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="nav-link">
              Услуги
            </Link>
            <Link href="/calculator" className="nav-link">
              Калькулятор
            </Link>
            <Link href="/reviews" className="nav-link">
              Отзывы
            </Link>
            <Link href="/blog" className="nav-link">
              Блог
            </Link>
            <Link href="/contacts" className="nav-link">
              Контакты
            </Link>
            <Link
              href="/emergency"
              className="px-4 py-2 bg-[#FF3A2D] text-white font-medium rounded hover:bg-[#E62E22] transition-colors"
            >
              SOS 24/7
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 border-2 border-[#FF3A2D] text-[#FF3A2D] font-medium rounded hover:bg-[#FF3A2D] hover:text-white transition-colors"
            >
              Войти
            </Link>
          </nav>

          {/* Кнопка мобильного меню */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Открыть меню"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-700">
          <div className="px-4 pt-2 pb-3 space-y-2 bg-white dark:bg-neutral-900 shadow-lg">
            {/* Поисковая строка для мобильных */}
            <div className="py-2">
              <SearchBar />
            </div>
            
            <nav className="flex flex-col space-y-1">
              <Link href="/services" className="mobile-nav-link">
                Услуги
              </Link>
              <Link href="/calculator" className="mobile-nav-link">
                Калькулятор
              </Link>
              <Link href="/reviews" className="mobile-nav-link">
                Отзывы
              </Link>
              <Link href="/blog" className="mobile-nav-link">
                Блог
              </Link>
              <Link href="/contacts" className="mobile-nav-link">
                Контакты
              </Link>
              <Link href="/emergency" className="mobile-nav-link text-[#FF3A2D] font-medium">
                SOS 24/7
              </Link>
              <Link href="/login" className="mobile-nav-link text-[#FF3A2D] font-medium">
                Войти
              </Link>
            </nav>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-link {
          @apply text-neutral-700 hover:text-[#FF3A2D] font-medium transition-colors;
        }
        .mobile-nav-link {
          @apply px-3 py-2 text-base font-medium text-neutral-700 hover:text-[#FF3A2D] rounded-lg hover:bg-neutral-100;
        }
      `}</style>
    </header>
  )
} 