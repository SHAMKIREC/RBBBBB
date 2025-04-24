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

// Массив всех услуг
const services = [
  {
    title: "Ремонт",
    description: "Комплексный ремонт квартир, офисов и коммерческих помещений",
    href: "/services/remont",
    icon: "🔨",
    category: "construction"
  },
  {
    title: "Инженерные системы",
    description: "Проектирование и монтаж инженерных систем",
    href: "/services/engineering",
    icon: "⚡",
    category: "construction"
  },
  {
    title: "Строительство",
    description: "Строительство жилых и коммерческих объектов",
    href: "/services/building",
    icon: "🏗️",
    category: "construction"
  },
  {
    title: "Окна и двери",
    description: "Монтаж, установка и ремонт окон и дверей",
    href: "/services/windows-doors",
    icon: "🚪",
    category: "construction"
  },
  {
    title: "Кровля и фасады",
    description: "Услуги по монтажу и ремонту кровли, фасадные работы",
    href: "/services/roof-facade",
    icon: "🏠",
    category: "construction"
  },
  {
    title: "IT-услуги",
    description: "Широкий спектр IT-услуг для бизнеса и частных лиц",
    href: "/services/it",
    icon: "💻",
    category: "it-education"
  },
  {
    title: "Академическая поддержка",
    description: "Полный спектр услуг по академической поддержке",
    href: "/services/academic",
    icon: "📚",
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
        <section className="py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-24 h-24 rounded-[20px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center mb-6 mx-auto">
              <span className="text-4xl font-bold text-white">RB</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
              РЕШАЕМ БЫСТРО
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 font-semibold tracking-wide">
              Строим будущее-ремонтируем настоящее!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="w-[160px] h-[48px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-600 hover:to-blue-800"
                  >
                    Узнать условия
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[480px] p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-[#FF4D00] flex items-center justify-center">
                      <span className="text-white font-bold">RB</span>
                    </div>
                    <span className="text-[#FF4D00] font-bold">Решаем Быстро</span>
                  </div>
                  
                  <h2 className="text-xl font-medium mb-2">Узнайте наши условия</h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Мы готовы обсудить детали и предложить оптимальное решение. Заполните форму — и мы свяжемся с вами.
                  </p>

                  <form className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-1">Имя & Фамилия</Label>
                      <Input 
                        placeholder="Введите ваше имя и фамилию"
                        className="border-[#FF4D00] focus:border-[#FF4D00] rounded"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium mb-1">Телефон</Label>
                      <Input 
                        placeholder="Введите ваш номер телефона"
                        className="border-[#FF4D00] focus:border-[#FF4D00] rounded"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-1">Почта (необязательно)</Label>
                      <Input 
                        placeholder="Укажите вашу почту"
                        className="border-[#FF4D00] focus:border-[#FF4D00] rounded"
                      />
                    </div>

                    <div>
                      <Label className="text-sm font-medium mb-1">Комментарий</Label>
                      <Textarea 
                        placeholder="Опишите ваш запрос или задайте вопрос"
                        className="border-[#FF4D00] focus:border-[#FF4D00] rounded min-h-[100px]"
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="service">Выберите услуги</Label>
                      <Select>
                        <SelectTrigger className="border-[#FF7A00] focus:ring-[#FF7A00] focus:border-[#FF7A00] focus:ring-0">
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="repair">Ремонт</SelectItem>
                          <SelectItem value="engineering">Инженерные системы</SelectItem>
                          <SelectItem value="construction">Строительство</SelectItem>
                          <SelectItem value="windows">Окна и двери</SelectItem>
                          <SelectItem value="roof">Кровля и фасады</SelectItem>
                          <SelectItem value="it">IT-услуги</SelectItem>
                          <SelectItem value="academic">Академическая поддержка</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Куда отправить запрос?</Label>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="sendMethod" 
                            value="system" 
                            className="w-4 h-4 text-[#FF4D00] border-[#FF4D00] focus:ring-[#FF4D00]" 
                            defaultChecked 
                          />
                          <div className="w-6 h-6 rounded bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center">
                            <span className="text-xs text-white font-bold">RB</span>
                          </div>
                          <span className="text-sm">В систему заказов</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="sendMethod" 
                            value="telegram" 
                            className="w-4 h-4 text-[#FF4D00] border-[#FF4D00] focus:ring-[#FF4D00]" 
                          />
                          <Icon icon="mdi:telegram" className="w-6 h-6 text-[#229ED9]" />
                          <span className="text-sm">Telegram</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <input 
                            type="radio" 
                            name="sendMethod" 
                            value="whatsapp" 
                            className="w-4 h-4 text-[#FF4D00] border-[#FF4D00] focus:ring-[#FF4D00]" 
                          />
                          <Icon icon="fa-brands:whatsapp" className="w-6 h-6 text-[#25D366]" />
                          <span className="text-sm">WhatsApp</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <input 
                        type="checkbox" 
                        className="mt-1 w-4 h-4 rounded border-[#FF7A00] text-[#FF7A00] focus:ring-[#FF7A00] focus:ring-offset-0 checked:bg-gradient-to-r checked:from-[#FF7A00] checked:to-[#FF0000]" 
                      />
                      <span className="text-xs text-gray-500">
                        Нажимая на кнопку, вы подтверждаете согласие с{" "}
                        <a href="#" className="text-[#FF4D00] hover:underline">
                          Политикой конфиденциальности
                        </a>
                      </span>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white hover:opacity-90"
                    >
                      Отправить запрос
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Dialog open={isSOSOpen} onOpenChange={setIsSOSOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="w-[160px] h-[48px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white font-medium hover:opacity-90"
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
            </div>
          </div>
        </section>

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
                IT и образовательные услуги
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
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Быстрое решение</h3>
                <p className="text-muted-foreground">
                  Выполняем работы в кратчайшие сроки без потери качества
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2">Доступные цены</h3>
                <p className="text-muted-foreground">
                  Предлагаем оптимальные цены и гибкую систему скидок
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  Даём гарантию на все виды работ и используемые материалы
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
