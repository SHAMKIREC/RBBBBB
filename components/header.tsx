"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, User, ChevronDown, Phone } from "lucide-react"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Search } from "@/components/search"
import { ThemeSwitcher } from './ThemeSwitcher'
import { RequestForm } from "@/components/request-form"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false)
  const [isSOSOpen, setIsSOSOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)

    // Анимация мигания для кнопки SOS
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 2000)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center">
            <span className="text-sm font-bold text-white">RB</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
            РЕШАЕМ БЫСТРО
          </span>
        </Link>
        
        <nav className="flex items-center space-x-6 ml-6">
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Услуги
                  </Link>
          <Link href="/calculator" className="text-sm font-medium transition-colors hover:text-primary">
            Калькулятор
                  </Link>
          <Link href="/reviews" className="text-sm font-medium transition-colors hover:text-primary">
            Отзывы
                  </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Блог
                  </Link>
          <Link href="/contacts" className="text-sm font-medium transition-colors hover:text-primary">
            Контакты
            </Link>
          </nav>

        <div className="flex items-center space-x-4 ml-auto">
          <ThemeSwitcher />

          {/* Кнопка SOS с модальным окном */}
          <Dialog open={isSOSOpen} onOpenChange={setIsSOSOpen}>
            <DialogTrigger asChild>
                <Button
                  className={cn(
                  "bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded",
                  isBlinking && "animate-pulse"
                  )}
                >
                  SOS 24/7
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <div className="text-center p-4">
                <h2 className="text-2xl font-bold mb-4 text-red-500">
                  🆘 Экстренный вызов сотрудника
                </h2>
                <p className="text-lg font-semibold mb-6">
                  во время ЧС
                </p>
                
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <a 
                    href="tel:+79085509037"
                    className="text-xl font-semibold hover:text-blue-600"
                  >
                    +7 908 550 90 37
                  </a>
                </div>

                <div className="flex justify-center gap-4">
                  <a
                    href="https://wa.me/79085509037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E]"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://t.me/+79085509037"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#229ED9] text-white rounded-lg hover:bg-[#1E96C8]"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>

              <Link
            href="/auth"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
              >
            Войти
              </Link>
        </div>
      </div>
    </header>
  )
}
