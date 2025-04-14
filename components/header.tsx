"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, User, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Search } from "@/components/search"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const pathname = usePathname()

  // Используем useEffect для предотвращения гидратации
  useEffect(() => {
    setMounted(true)

    // Анимация мигания для кнопки SOS
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 2000)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <header className="bg-[#111827] dark:bg-[#111827] text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-[#FF5722] to-[#f44336] rounded-lg p-2 mr-2">
                <span className="text-white font-bold">RB</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline-block text-white">РЕШАЕМ БЫСТРО</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-gray-300 flex items-center gap-1">
                  Услуги <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/services/repair" className="w-full">
                    Ремонт
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/engineering" className="w-full">
                    Инженерные системы
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/construction" className="w-full">
                    Строительство
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/it" className="w-full">
                    IT-услуги
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/windows-doors" className="w-full">
                    Окна и двери
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/roofing-facades" className="w-full">
                    Кровля и фасады
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/academic" className="w-full">
                    Академическая поддержка
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/calculator"
              className={cn("text-white hover:text-gray-300", pathname === "/calculator" && "text-[#FF5722]")}
            >
              Калькулятор
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            {/* Поиск по сайту */}
            <Search />

            {/* SOS Button */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className={cn(
                    "bg-[#f44336] hover:bg-[#d32f2f] text-white text-sm rounded-md transition-all duration-300",
                    isBlinking && "animate-pulse",
                  )}
                >
                  SOS 24/7
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-white dark:bg-white text-gray-800">
                <div className="px-4 py-3 text-sm font-medium text-gray-700">
                  Экстренный вызов сотрудника во время ЧС
                </div>
                <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gray-100">
                  <a href="tel:+79085509037" className="flex items-center w-full text-gray-700">
                    <svg
                      className="mr-2 h-4 w-4 text-gray-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>+7 908 550 90 37</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gray-100">
                  <a
                    href="https://wa.me/79085509037"
                    className="flex items-center w-full text-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="mr-2 h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 0.16 5.334 0.157 11.892c0 2.096.546 4.142 1.588 5.946L0.057 24l6.304-1.654a11.882 11.882 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.24-6.165-3.48-8.413zm-8.413 18.306h-.004a9.866 9.866 0 01-5.031-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.904 9.904 0 01-1.51-5.272c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.993c-.003 5.45-4.437 9.897-9.886 9.897zm5.43-7.403c-.3-.15-1.767-.872-2.04-.971-.272-.099-.47-.15-.669.15-.198.3-.767.97-.94 1.17-.173.198-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.49-1.768-1.663-2.066-.173-.3-.019-.46.13-.61.134-.133.297-.347.446-.52.148-.174.198-.3.297-.496.1-.198.05-.371-.025-.52-.074-.148-.668-1.61-.916-2.206-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center cursor-pointer hover:bg-gray-100">
                  <a
                    href="https://t.me/+79085509037"
                    className="flex items-center w-full text-gray-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="mr-2 h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    <span>Telegram</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Переключатель темы */}
            {mounted && (
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative border-0 bg-transparent hover:bg-transparent"
              >
                <Sun
                  className={`h-5 w-5 transition-all text-white ${
                    theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <Moon
                  className={`absolute h-5 w-5 transition-all text-white ${
                    theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                />
                <span className="sr-only">Переключить тему</span>
              </Button>
            )}

            {/* Кнопка авторизации */}
            <Button variant="outline" size="icon" className="border-0 bg-transparent hover:bg-transparent" asChild>
              <Link href="/auth">
                <User className="h-5 w-5 text-white" />
                <span className="sr-only">Авторизация</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden ml-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-gray-800">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              {/* Поиск для мобильных устройств */}
              <Search isMobile onClose={() => setIsMenuOpen(false)} />

              <div className="py-2">
                <div className="font-medium text-white mb-2">Услуги:</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/services/repair"
                    className="text-white hover:text-gray-300 block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ремонт
                  </Link>
                  <Link
                    href="/services/engineering"
                    className="text-white hover:text-gray-300 block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Инженерные системы
                  </Link>
                  <Link
                    href="/services/construction"
                    className="text-white hover:text-gray-300 block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Строительство
                  </Link>
                  <Link
                    href="/services/it"
                    className="text-white hover:text-gray-300 block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    IT-услуги
                  </Link>
                  <Link
                    href="/services/windows-doors"
                    className="text-white hover:text-gray-300 block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Окна и двери
                  </Link>
                  <Link
                    href="/services/roofing-facades"
                    className="text-white hover:text-gray-300 block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Кровля и фасады
                  </Link>
                  <Link
                    href="/services/academic"
                    className="text-white hover:text-gray-300 block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Академическая поддержка
                  </Link>
                </div>
              </div>
              <Link
                href="/calculator"
                className="text-white hover:text-gray-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Калькулятор
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
