"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ServiceHeader } from "@/components/service-header"
import { ServiceCard } from "@/components/service-card-new"
import { ServiceFAQ } from "@/components/service-faq"
import { ModalForm } from '@/components/ModalForm'

const services = [
  {
    title: "Окна",
    options: [
      { id: "plastic", label: "Установка пластиковых окон" },
      { id: "wooden", label: "Монтаж деревянных окон" },
      { id: "aluminum", label: "Установка алюминиевых окон" },
      { id: "balcony", label: "Остекление балконов и лоджий" },
      { id: "repair", label: "Регулировка и ремонт окон" },
      { id: "glass", label: "Замена стеклопакетов" },
      { id: "nets", label: "Установка москитных сеток" },
      { id: "sills", label: "Монтаж подоконников" }
    ]
  },
  {
    title: "Двери",
    options: [
      { id: "entrance", label: "Установка входных дверей" },
      { id: "interior", label: "Монтаж межкомнатных дверей" },
      { id: "sliding", label: "Установка раздвижных дверей" },
      { id: "metal", label: "Монтаж металлических дверей" },
      { id: "wardrobe", label: "Установка дверей-купе" },
      { id: "repair", label: "Ремонт и регулировка дверей" },
      { id: "locks", label: "Замена замков и фурнитуры" },
      { id: "closers", label: "Установка доводчиков" }
    ]
  },
  {
    title: "Дополнительные услуги",
    options: [
      { id: "insulation", label: "Утепление откосов" },
      { id: "finishing", label: "Отделка откосов" },
      { id: "sealing", label: "Герметизация швов" },
      { id: "blinds", label: "Установка жалюзи и рольставней" },
      { id: "tinting", label: "Тонировка стекол" },
      { id: "decoration", label: "Декоративная раскладка на стеклопакетах" }
    ]
  }
]

const faqItems = [
  {
    question: "Сколько времени занимает установка окон и дверей?",
    answer: "Установка окон обычно занимает 1-2 дня, монтаж дверей - от 2 часов до 1 дня в зависимости от сложности работ."
  },
  {
    question: "Предоставляете ли вы гарантию на работы?",
    answer: "Да, мы предоставляем гарантию 3 года на все монтажные работы и дополнительную гарантию от производителей на материалы."
  },
  {
    question: "С какими производителями вы работаете?",
    answer: "Мы работаем с ведущими производителями окон и дверей, такими как Rehau, KBE, Veka для окон и Torex, Волховец для дверей. Также возможна установка изделий от других производителей по желанию клиента."
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата производится в два этапа: предоплата 50% при заключении договора и окончательный расчет после завершения монтажных работ."
  },
  {
    question: "Делаете ли вы замеры?",
    answer: "Да, мы предоставляем бесплатный выезд замерщика в удобное для вас время. Это необходимо для точного расчета стоимости и подготовки проекта."
  },
  {
    question: "Убираете ли вы за собой мусор?",
    answer: "Да, уборка и вывоз строительного мусора включены в стоимость работ. Мы оставляем помещение в чистом состоянии."
  }
]

export default function WindowsDoorsPage() {
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    comment: ""
  })

  const toggleCategory = (title: string) => {
    setOpenCategories(prev =>
      prev.includes(title)
        ? prev.filter(cat => cat !== title)
        : [...prev, title]
    )
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleOpenDialog = () => {
    setIsOrderFormOpen(true)
  }

  const handleCloseDialog = () => {
    setIsOrderFormOpen(false)
    setSelectedServices([])
    setFormData({
      name: "",
      phone: "",
      address: "",
      comment: ""
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    handleCloseDialog()
  }

  // Формируем комментарий для формы
  const commentText = selectedServices.length
    ? `Услуга: Окна и двери\nВыбрано:\n${selectedServices.map(s => `- ${s}`).join('\n')}`
    : 'Услуга: Окна и двери'

  return (
    <div className="min-h-screen bg-white">
      <ServiceHeader
        title="Окна и двери"
        description="Профессиональный монтаж и установка окон и дверей"
        icon={null}
        warranty="Гарантия 3 года!"
      />

      <ServiceCard
        categories={services}
        onOrderClick={handleOpenDialog}
        selectedServices={selectedServices}
        setSelectedServices={setSelectedServices}
      />

      <ServiceFAQ items={faqItems} />

      <ModalForm
        isOpen={isOrderFormOpen}
        onClose={handleCloseDialog}
        initialComment={commentText}
        title="Окна и двери"
      />
    </div>
  )
}
