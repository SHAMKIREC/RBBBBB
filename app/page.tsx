"use client"

import { Button } from "@/components/ui/button"
import { RequestForm } from "@/components/request-form"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ServiceCard } from "@/components/service-card"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, MessageCircle, MessageSquare } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Icon } from '@iconify/react'
import { HeroAnimated } from "./components/HeroAnimated"

// Массив всех услуг
const services = [
  {
    title: "Ремонт",
    description: "Комплексный ремонт квартир, офисов и коммерческих помещений: от косметического до капитального.",
    href: "/services/remont",
    icon: "🛠️",
    category: "construction"
  },
  {
    title: "Инженерные системы",
    description: "Установка и проектирование инженерных систем под ключ: электричество, отопление, водоснабжение и вентиляция",
    href: "/services/engineering",
    icon: "🔌",
    category: "construction"
  },
  {
    title: "Строительство",
    description: "Возводим надёжные жилые дома и коммерческие здания — под ключ, в срок и с гарантией качества.",
    href: "/services/construction",
    icon: "🏗️",
    category: "construction"
  },
  {
    title: "Окна и двери",
    description: "Профессиональный монтаж, установка и ремонт окон и дверей — для уюта, тепла и безопасности вашего дома.",
    href: "/services/windows-doors",
    icon: "🪟",
    category: "construction"
  },
  {
    title: "Кровля и фасады",
    description: "Надёжный монтаж и ремонт кровли, профессиональная отделка фасадов — защита и стиль вашего дома.",
    href: "/services/roof-facade",
    icon: "🏠",
    category: "construction"
  },
  {
    title: "IT-услуги",
    description: "Разработка сайтов, поддержка IT-инфраструктуры, автоматизация процессов — полный спектр IT-услуг для бизнеса и новых клиентов",
    href: "/services/it",
    icon: "💻",
    category: "it-education"
  },
  {
    title: "Академическая поддержка",
    description: "Помогаем студентам с курсами, дипломами и проектами. Академическая поддержка на каждом этапе",
    href: "/services/academic",
    icon: "🎓",
    category: "it-education"
  }
]

export default function HomePage() {
  const [isBlinking, setIsBlinking] = useState(false)
  const [isSOSOpen, setIsSOSOpen] = useState(false)

  useEffect(() => {
    // Анимация мигания для кнопки SOS
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 2000)

    return () => clearInterval(blinkInterval)
  }, [])

  // Фильтрация услуг по категориям
  const constructionServices = services.filter(service => service.category === "construction")
  const itEducationServices = services.filter(service => service.category === "it-education")

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4">
        <HeroAnimated />
        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Наши услуги
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Профессиональные решения ваших задач в строительстве, ремонте и IT-сфере
            </p>

            {/* Строительные услуги */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Строительные услуги
              </h3>
              <div className="flex flex-wrap -mx-2">
                {constructionServices.map((service, index) => (
                  <div key={index} className="w-full px-2 mb-4 sm:w-1/2 lg:w-1/5">
                    <ServiceCard
                      variant="simple"
                      title={service.title}
                      description={service.description}
                      href={service.href}
                      icon={service.icon}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* IT и образовательные услуги */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                IT & Образовательные услуги
              </h3>
              <div className="flex flex-wrap -mx-2">
                {itEducationServices.map((service, index) => (
                  <div key={index} className="w-full px-2 mb-4 sm:w-1/2">
                    <ServiceCard
                      variant="simple"
                      title={service.title}
                      description={service.description}
                      href={service.href}
                      icon={service.icon}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Удаляем весь блок с преимуществами */}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
