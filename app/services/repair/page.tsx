"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { ServiceCard } from "@/components/service-card-new"
import { ServiceHeader } from "@/components/service-header"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceOrderForm } from "@/components/service-order-form"

const services = [
  {
    title: "Косметический ремонт",
    options: [
      { id: "painting", label: "Покраска стен" },
      { id: "wallpaper", label: "Оклейка обоями" },
      { id: "flooring", label: "Замена напольного покрытия" },
      { id: "baseboards", label: "Установка плинтусов" },
      { id: "sockets", label: "Замена розеток и выключателей" }
    ]
  },
  {
    title: "Капитальный ремонт",
    options: [
      { id: "replanning", label: "Полная перепланировка" },
      { id: "systems", label: "Замена инженерных систем" },
      { id: "leveling", label: "Выравнивание стен и полов" },
      { id: "windows", label: "Замена окон и дверей" },
      { id: "turnkey", label: "Отделка под ключ" }
    ]
  },
  {
    title: "Отделка под ключ",
    options: [
      { id: "design", label: "Дизайн-проект" },
      { id: "rough", label: "Черновая отделка" },
      { id: "finish", label: "Чистовая отделка" },
      { id: "plumbing", label: "Установка сантехники" },
      { id: "lighting", label: "Монтаж освещения" }
    ]
  }
]

const faqItems = [
  {
    question: "Сколько времени занимает ремонт?",
    answer: "Сроки зависят от объема работ. Косметический ремонт - 2-3 недели, капитальный - от 1 до 3 месяцев."
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы предоставляем гарантию 3 года на все виды ремонтных работ."
  },
  {
    question: "Можно ли сделать ремонт под ключ?",
    answer: "Да, мы предлагаем комплексный ремонт под ключ, включая дизайн-проект и все этапы работ."
  }
]

export default function RepairPage() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <ServiceHeader
        title="Ремонт"
        description="Профессиональный ремонт квартир, домов и офисов"
        icon={null}
        warranty="Гарантия 3 года!"
      />

      <ServiceCard
        categories={services}
        onOrderClick={() => setIsOrderFormOpen(true)}
      />

      <ServiceFAQ items={faqItems} />

      <ServiceOrderForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        service="Ремонт"
      />
    </div>
  )
}
