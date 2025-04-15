"use client"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { RequestForm } from "@/components/request-form"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  link: string;
}

export default function Home() {
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    // Анимация мигания для кнопки SOS
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 2000)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#FFF8F5] dark:bg-[#111827] text-gray-800 dark:text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-r from-[#FF5722] to-[#f44336] rounded-lg p-6 inline-block">
              <span className="text-white text-4xl font-bold">RB</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF5722] to-[#f44336] text-transparent bg-clip-text">
            РЕШАЕМ БЫСТРО
          </h1>
          <p className="text-2xl mb-8 text-gray-800 dark:text-white">Строим будущее, ремонтируем настоящее!</p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-[#007bff] hover:bg-blue-600 text-white px-8 py-6 text-lg">
              <a href="#contact-form">Узнать условия</a>
            </Button>
            <Button
              asChild
              className={cn(
                "bg-[#f44336] hover:bg-[#d32f2f] text-white px-8 py-6 text-lg transition-all duration-300",
                isBlinking && "animate-pulse",
              )}
            >
              <a href="tel:+79085509037">SOS 24/7</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Наши услуги</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Профессиональные решения ваших задач в строительстве, ремонте и IT-сфере
          </p>

          {/* Строительные услуги */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <ServiceCard
              title="Ремонт"
              icon="🔨"
              description="Комплексный ремонт квартир, офисов и коммерческих помещений"
              link="/services/repair"
            />
            <ServiceCard
              title="Инженерные системы"
              icon="⚡"
              description="Проектирование и монтаж инженерных систем"
              link="/services/engineering"
            />
            <ServiceCard
              title="Строительство"
              icon="🏗️"
              description="Строительство жилых и коммерческих объектов"
              link="/services/construction"
            />
            <ServiceCard
              title="Окна и двери"
              icon="🚪"
              description="Монтаж, установка и ремонт окон и дверей"
              link="/services/windows-doors"
            />
            <ServiceCard
              title="Кровля и фасады"
              icon="🏠"
              description="Услуги по монтажу и ремонту кровли, фасадные работы"
              link="/services/roofing-facades"
            />
          </div>

          {/* Не строительные услуги */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">IT и образовательные услуги</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ServiceCard
                title="IT-услуги"
                icon="💻"
                description="Широкий спектр IT-услуг для бизнеса и частных лиц"
                link="/services/it"
              />
              <ServiceCard
                title="Академическая поддержка"
                icon="📚"
                description="Полный спектр услуг по академической поддержке"
                link="/services/academic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Узнать условия</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Заполните форму, и мы свяжемся с вами для обсуждения деталей
          </p>
          <div className="max-w-md mx-auto">
            <RequestForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ServiceCard({ title, icon, description, link }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 text-3xl text-[#FF5722]">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link href={link} className="mt-auto text-blue-600 hover:text-blue-800 inline-flex items-center">
            Подробнее →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
