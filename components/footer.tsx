"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Решаем Быстро</h3>
            <p className="text-sm text-muted-foreground">
              Профессиональные услуги в сфере ремонта, строительства и IT-решений
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/remont" className="text-muted-foreground hover:text-primary">
                  Ремонт
                </Link>
              </li>
              <li>
                <Link href="/services/building" className="text-muted-foreground hover:text-primary">
                  Строительство
                </Link>
              </li>
              <li>
                <Link href="/services/it" className="text-muted-foreground hover:text-primary">
                  IT-услуги
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-primary">
                  Партнёрам
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Телефон: <a href="tel:+79001234567" className="hover:text-primary">+7 (900) 123-45-67</a>
              </li>
              <li className="text-muted-foreground">
                Email: <a href="mailto:info@reshaembystro.ru" className="hover:text-primary">info@reshaembystro.ru</a>
              </li>
              <li>
                <Link href="/contacts" className="text-muted-foreground hover:text-primary">
                  Контактная информация
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Решаем Быстро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
