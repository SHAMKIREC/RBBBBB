"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'
import { HiSun, HiMoon } from 'react-icons/hi'
import SearchBar from './SearchBar'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <header className="bg-neutral-900 text-neutral-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link href="/" className="flex items-center flex-shrink-0 pl-4">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">RB</span>
              </div>
              <span className="ml-2 text-lg font-bold bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text leading-none">
                РЕШАЕМ БЫСТРО
              </span>
            </div>
          </Link>

          {/* Поисковая строка */}
          <div className="hidden md:block flex-1 mx-4 lg:mx-8 max-w-xl">
            <SearchBar />
          </div>

          {/* Навигация для десктопов */}
          <nav className="hidden md:flex items-center space-x-6 pr-4">
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
            <Link
              href="/emergency"
              className="px-4 py-2 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white font-medium rounded hover:opacity-90 transition-opacity"
            >
              SOS 24/7
            </Link>
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