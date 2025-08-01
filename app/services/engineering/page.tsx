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
import { ModalForm } from '@/components/ModalForm'

const services: ServiceCategory[] = [
  {
    title: "Электрика",
    items: [
      "Монтаж электропроводки",
      "Установка электрощитов",
      "Подключение электроприборов",
      "Замена розеток и выключателей",
      "Установка светильников",
      "Монтаж систем освещения",
      "Электрическая диагностика",
      "Устранение неисправностей",
      "Подключение бытовой техники",
      "Монтаж систем защиты"
    ]
  },
  {
    title: "Отопление",
    items: [
      "Монтаж радиаторов отопления",
      "Установка котлов",
      "Теплый пол",
      "Обслуживание систем отопления",
      "Замена труб отопления",
      "Балансировка системы",
      "Установка термостатов",
      "Ремонт котлов",
      "Промывка системы отопления",
      "Установка бойлеров"
    ]
  },
  {
    title: "Водоснабжение",
    items: [
      "Монтаж водопровода",
      "Установка сантехники",
      "Канализационные системы",
      "Замена труб",
      "Установка фильтров",
      "Монтаж насосов",
      "Установка счетчиков",
      "Ремонт сантехники",
      "Устранение протечек",
      "Водоподготовка"
    ]
  },
  {
    title: "Вентиляция",
    items: [
      "Монтаж приточной вентиляции",
      "Установка вытяжной вентиляции",
      "Монтаж вентиляционных каналов",
      "Установка рекуператоров",
      "Монтаж систем кондиционирования",
      "Установка воздуховодов",
      "Монтаж вентиляционных решеток",
      "Установка вентиляторов",
      "Обслуживание вентиляционных систем",
      "Чистка вентиляционных каналов"
    ]
  }
]

interface ServiceCategory {
  title: string
  items: string[]
}

const faqQuestions = [
  {
    question: "Сколько времени занимает монтаж инженерных систем?",
    answer: "Сроки выполнения работ зависят от площади и сложности объекта. В среднем монтаж занимает от 1 до 3 недель. Точные сроки определяются после осмотра объекта и составления проекта."
  },
  {
    question: "Предоставляете ли вы гарантию на работы?",
    answer: "Да, мы предоставляем гарантию 3 года на все виды работ. Гарантия распространяется как на используемые материалы, так и на качество монтажа."
  },
  {
    question: "Работаете ли вы с определенными производителями оборудования?",
    answer: "Мы работаем со всеми ведущими производителями инженерного оборудования. Можем как предложить оптимальные варианты, так и установить оборудование по выбору заказчика при его соответствии нормам."
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата производится поэтапно: предоплата 40% после подписания договора, промежуточные платежи по завершении этапов работ, окончательный расчет после приемки работ."
  },
  {
    question: "Нужны ли разрешения и согласования?",
    answer: "Да, для некоторых видов работ требуются разрешения и согласования. Мы помогаем в получении всей необходимой документации и работаем только в соответствии с нормативами."
  },
  {
    question: "Осуществляете ли вы обслуживание после монтажа?",
    answer: "Да, мы предоставляем услуги по техническому обслуживанию установленных систем. Это включает регулярные проверки, настройку и профилактические работы."
  }
]

export default function EngineeringPage() {
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [openFaqs, setOpenFaqs] = useState<number[]>([])
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const toggleCategory = (title: string) => {
    setOpenCategories(prev =>
      prev.includes(title)
        ? prev.filter(cat => cat !== title)
        : [...prev, title]
    )
  }

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleOpenDialog = () => {
    setIsOrderDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsOrderDialogOpen(false)
    setSelectedServices([])
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    handleCloseDialog()
  }

  // Формируем комментарий для формы
  const commentText = selectedServices.length
    ? `Услуга: Инженерные системы\nВыбрано:\n${selectedServices.map(s => `- ${s}`).join('\n')}`
    : 'Услуга: Инженерные системы'

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white pb-32">
        <div className="container mx-auto px-4 pt-12">
          {/* Hero Section */}
          <section className="text-center">
            <div className="w-24 h-24 rounded-[20px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center mb-6 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              <span className="text-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">🔌</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
              Инженерные системы
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold">
              Профессиональный монтаж и обслуживание всех типов инженерных систем для вашего комфорта.
            </p>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text font-bold mt-2">
              Гарантия 3 года!
            </p>
          </section>
        </div>
      </div>

      {/* Services List */}
      <section className="max-w-4xl mx-auto px-4 -mt-24">
        <div className="bg-[#FFE4D6] dark:bg-gray-900 rounded-lg shadow-lg p-6">
          {services.map((category) => (
            <div key={category.title} className="mb-8">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-xl font-medium text-gray-900 dark:text-white">
                  {category.title}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    openCategories.includes(category.title) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence mode="wait">
                {openCategories.includes(category.title) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-4 pl-8">
                      {category.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <Checkbox
                            id={`${category.title}-${index}`}
                            checked={selectedServices.includes(item)}
                            onCheckedChange={() => toggleService(item)}
                            className="mt-1"
                          />
                          <label
                            htmlFor={`${category.title}-${index}`}
                            className="text-lg text-gray-700 dark:text-gray-300 cursor-pointer"
                          >
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="text-center mt-8">
            <Button
              onClick={handleOpenDialog}
              className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-8 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Заказать услугу
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-6">
            {faqQuestions.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text font-bold text-2xl">
                    ?
                  </span>
                  <span className="flex-1 text-lg font-medium text-gray-900 dark:text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                      openFaqs.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence mode="wait">
                  {openFaqs.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Dialog */}
      <ModalForm
        isOpen={isOrderDialogOpen}
        onClose={handleCloseDialog}
        initialComment={commentText}
        title="Инженерные системы"
      />
    </div>
  )
} 