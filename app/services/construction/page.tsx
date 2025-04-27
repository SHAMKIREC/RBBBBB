"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"

interface ServiceCategory {
  title: string
  items: string[]
}

const services: ServiceCategory[] = [
  {
    title: "Жилое строительство",
    items: [
      "Частные дома",
      "Коттеджи",
      "Таунхаусы",
    ]
  },
  {
    title: "Коммерческое строительство",
    items: [
      "Офисные здания",
      "Торговые центры",
      "Склады",
    ]
  },
  {
    title: "Проектирование",
    items: [
      "Архитектурные решения",
      "Конструктивные решения",
      "Дизайн-проекты",
    ]
  }
]

const faqItems = [
  {
    question: "Сколько времени занимает строительство частного дома?",
    answer: "В среднем строительство частного дома занимает от 4 до 8 месяцев, в зависимости от сложности проекта и площади здания."
  },
  {
    question: "Предоставляете ли вы гарантию на работы?",
    answer: "Да, мы предоставляем гарантию 3 года на все строительные работы. В течение гарантийного срока мы устраняем любые выявленные недостатки за свой счет."
  },
  {
    question: "Работаете ли вы с определенными производителями материалов?",
    answer: "Мы сотрудничаем с проверенными производителями и поставщиками строительных материалов, но также готовы работать с материалами, предоставленными заказчиком при условии их соответствия нормам."
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата производится поэтапно согласно графику работ. Первый платеж - после подписания договора, последующие - по завершении определенных этапов строительства."
  },
  {
    question: "Нужны ли разрешения и согласования?",
    answer: "Да, для строительства требуются различные разрешения и согласования. Мы помогаем в подготовке и получении всей необходимой документации."
  },
  {
    question: "Осуществляете ли вы обслуживание после завершения строительства?",
    answer: "Да, мы предоставляем послестроительное обслуживание и техническую поддержку. В течение гарантийного срока все работы по обслуживанию проводятся бесплатно."
  }
]

export default function ConstructionPage() {
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false)
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
    setIsOrderDialogOpen(true)
    setFormData(prev => ({
      ...prev,
      comment: selectedServices.join('\n')
    }))
  }

  const handleCloseDialog = () => {
    setIsOrderDialogOpen(false)
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white pb-32">
        <div className="container mx-auto px-4 pt-12">
          {/* Hero Section */}
          <section className="text-center">
            <div className="w-24 h-24 rounded-[20px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center mb-6 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              <span className="text-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">🏗️</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
              Строительство
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold mb-2">
              Возводим надёжные жилые дома и коммерческие здания — под ключ, в срок.
            </p>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text font-bold">
              Гарантия 3 года!
            </p>
          </section>
        </div>
      </div>

      {/* Services Section */}
      <section className="max-w-4xl mx-auto -mt-24 px-4 relative z-10">
        <div className="bg-[#FFE4D6] dark:bg-gray-900 rounded-lg shadow-lg p-6">
          {services.map((category) => (
            <div key={category.title} className="mb-4">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full flex items-center justify-between text-left p-4 bg-white/60 dark:bg-gray-800 rounded-lg hover:bg-white/90 dark:hover:bg-gray-700 transition-colors"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h2>
                <ChevronDown
                  className={`w-6 h-6 transition-transform ${
                    openCategories.includes(category.title) ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openCategories.includes(category.title) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 space-y-3 pl-6 bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg">
                      {category.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Checkbox
                            id={`${category.title}-${index}`}
                            checked={selectedServices.includes(item)}
                            onCheckedChange={() => toggleService(item)}
                            className="mt-1"
                          />
                          <label
                            htmlFor={`${category.title}-${index}`}
                            className="text-lg text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors"
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
              className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all text-lg"
            >
              Заказать услугу
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mt-12 px-4 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#FF4D00]">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center gap-4 p-4 text-left"
              >
                <span className="text-[#FF4D00] font-bold text-xl">?</span>
                <span className="text-lg font-medium text-gray-900">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ml-auto ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pl-12 text-gray-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Order Dialog */}
      <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <DialogContent className="sm:max-w-[480px] p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded bg-[#FF4D00] flex items-center justify-center">
                <span className="text-white font-bold">RB</span>
              </div>
              <span className="text-[#FF4D00] font-bold">Решаем Быстро</span>
            </div>
            
            <h2 className="text-xl font-medium mb-2">Заказать строительство</h2>
            <p className="text-sm text-gray-600 mb-6">
              Оставьте заявку, и мы свяжемся с вами для обсуждения проекта в течение <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">5 минут</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Имя</Label>
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => handleFormChange('name', e.target.value)}
                  className="border-[#FF4D00] focus:border-[#FF4D00]"
                />
              </div>
              
              <div>
                <Label>Телефон</Label>
                <Input 
                  placeholder="Ваш номер телефона"
                  value={formData.phone}
                  onChange={(e) => handleFormChange('phone', e.target.value)}
                  className="border-[#FF4D00] focus:border-[#FF4D00]"
                />
              </div>

              <div>
                <Label>Адрес объекта</Label>
                <Input 
                  placeholder="Адрес для строительства"
                  value={formData.address}
                  onChange={(e) => handleFormChange('address', e.target.value)}
                  className="border-[#FF4D00] focus:border-[#FF4D00]"
                />
              </div>

              <div>
                <Label>Комментарий</Label>
                <Textarea 
                  placeholder="Опишите ваши пожелания или задайте вопрос"
                  value={formData.comment}
                  onChange={(e) => handleFormChange('comment', e.target.value)}
                  className="border-[#FF4D00] focus:border-[#FF4D00] min-h-[100px]"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white hover:opacity-90"
              >
                Отправить заявку
              </Button>
            </form>
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
