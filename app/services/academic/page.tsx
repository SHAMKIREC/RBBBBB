"use client"

import { useState } from "react"
import { ServiceHeader } from "@/components/service-header"
import { ServiceCard } from "@/components/service-card-new"
import { ServiceFAQ } from "@/components/service-faq"
import { ModalForm } from '@/components/ModalForm'

const services = [
  {
    title: "Написание работ",
    options: [
      { id: "course-1", label: "Курсовые работы" },
      { id: "diploma-1", label: "Дипломные работы" },
      { id: "dissertation", label: "Диссертации" },
      { id: "article", label: "Научные статьи" },
      { id: "essay", label: "Эссе и рефераты" }
    ]
  },
  {
    title: "Консультации",
    options: [
      { id: "consult-1", label: "Методология исследования" },
      { id: "consult-2", label: "Структура работы" },
      { id: "consult-3", label: "Оформление по ГОСТ" },
      { id: "defense-1", label: "Подготовка к защите" },
      { id: "defense-2", label: "Презентация" }
    ]
  },
  {
    title: "Редактура",
    options: [
      { id: "edit-1", label: "Научный стиль" },
      { id: "edit-2", label: "Логическая структура" },
      { id: "edit-3", label: "Стилистика" },
      { id: "proof-1", label: "Орфография и пунктуация" },
      { id: "proof-2", label: "Антиплагиат" }
    ]
  }
]

const faqItems = [
  {
    question: "Какие гарантии вы предоставляете?",
    answer: "Мы гарантируем уникальность работ, соблюдение сроков и конфиденциальность. Все работы проверяются на плагиат и соответствие требованиям."
  },
  {
    question: "Как проходит работа над заказом?",
    answer: "После оформления заказа мы назначаем исполнителя, который согласовывает с вами план работы и сроки. Вы получаете возможность вносить корректировки на всех этапах."
  },
  {
    question: "Сколько времени занимает выполнение работы?",
    answer: "Сроки зависят от объема и сложности работы. Курсовая работа может быть выполнена за 5-7 дней, дипломная - за 2-3 недели. Возможно срочное выполнение."
  },
  {
    question: "Как обеспечивается уникальность текста?",
    answer: "Все работы проходят проверку на плагиат с помощью специализированных программ. Мы гарантируем уникальность не менее 85%."
  },
  {
    question: "Возможно ли срочное выполнение заказа?",
    answer: "Да, мы выполняем срочные заказы. Стоимость при этом может быть выше стандартной. Минимальный срок выполнения - 24 часа."
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата производится поэтапно: 30% предоплата, 40% после выполнения половины работы, 30% после полного выполнения и проверки."
  },
  {
    question: "Предоставляете ли вы консультации после сдачи работы?",
    answer: "Да, мы предоставляем бесплатные консультации в течение 30 дней после сдачи работы. При необходимости можем помочь с доработками."
  }
]

export default function AcademicServicesPage() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  // Формируем комментарий для формы
  const commentText = selectedServices.length
    ? `Услуга: Академическая поддержка\nВыбрано:\n${selectedServices.map(s => `- ${s}`).join('\n')}`
    : 'Услуга: Академическая поддержка'

  return (
    <div className="min-h-screen bg-white">
      <ServiceHeader
        title="Академическая поддержка"
        description="Профессиональная помощь в написании и оформлении учебных работ"
        icon={null}
        warranty="Гарантия 3 года!"
      />

      <ServiceCard
        categories={services}
        onOrderClick={() => setIsOrderFormOpen(true)}
        setSelectedServices={setSelectedServices}
        selectedServices={selectedServices}
      />

      <ServiceFAQ items={faqItems} />

      <ModalForm
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        initialComment={commentText}
        title="Академическая поддержка"
      />
    </div>
  )
}
