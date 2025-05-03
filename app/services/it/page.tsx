"use client"

import { useState } from "react"
import { ServiceHeader } from "@/components/service-header"
import { ServiceCard } from "@/components/service-card-new"
import { ServiceFAQ } from "@/components/service-faq"
import { ServiceOrderForm } from "@/components/service-order-form"

const services = [
  {
    title: "Разработка",
    options: [
      { id: "web-1", label: "Создание сайтов" },
      { id: "web-2", label: "Веб-приложения" },
      { id: "web-3", label: "Интернет-магазины" },
      { id: "mobile-1", label: "iOS приложения" },
      { id: "mobile-2", label: "Android приложения" },
      { id: "mobile-3", label: "Кроссплатформенные приложения" }
    ]
  },
  {
    title: "Поддержка",
    options: [
      { id: "support-1", label: "24/7 поддержка" },
      { id: "support-2", label: "Удаленная помощь" },
      { id: "support-3", label: "Консультации" },
      { id: "maintenance-1", label: "Регулярное обслуживание" },
      { id: "maintenance-2", label: "Мониторинг" },
      { id: "maintenance-3", label: "Резервное копирование" }
    ]
  },
  {
    title: "Консалтинг",
    options: [
      { id: "consulting-1", label: "Стратегия развития" },
      { id: "consulting-2", label: "Оптимизация процессов" },
      { id: "consulting-3", label: "Внедрение решений" },
      { id: "audit-1", label: "Безопасность" },
      { id: "audit-2", label: "Производительность" },
      { id: "audit-3", label: "Соответствие стандартам" }
    ]
  }
]

const faqItems = [
  {
    question: "Сколько времени занимает разработка проекта?",
    answer: "Сроки зависят от сложности проекта. Простой сайт может быть создан за 2-4 недели, сложное приложение - за 3-6 месяцев."
  },
  {
    question: "Как организована техническая поддержка?",
    answer: "Мы предоставляем круглосуточную поддержку через различные каналы связи: телефон, email, чат. Время реакции на критичные проблемы - до 1 часа."
  },
  {
    question: "Какие технологии вы используете?",
    answer: "Мы работаем с современными технологиями: React, Node.js, Python, Java, Swift, Kotlin и другими. Выбор технологий зависит от требований проекта."
  },
  {
    question: "Как проходит процесс разработки?",
    answer: "Мы используем гибкие методологии разработки (Agile, Scrum). Процесс включает планирование, разработку, тестирование и внедрение."
  },
  {
    question: "Как формируется стоимость услуг?",
    answer: "Стоимость зависит от объема работ, сложности проекта и выбранных технологий. Мы предоставляем детальную смету после анализа требований."
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы гарантируем качество работ, соблюдение сроков и конфиденциальность данных. Все работы выполняются по договору."
  }
]

export default function ITServicesPage() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <ServiceHeader
        title="IT-услуги"
        description="Профессиональная разработка, поддержка и IT-консалтинг для вашего бизнеса"
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
        service="IT-услуги"
      />
    </div>
  )
}
