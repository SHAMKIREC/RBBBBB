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

const services: ServiceCategory[] = [
  {
    title: "Электрические системы",
    items: [
      "Проектирование электрических систем",
      "Монтаж электропроводки",
      "Установка электрощитов и автоматики",
      "Подключение силового оборудования",
      "Монтаж систем освещения",
      "Установка розеток и выключателей",
      "Заземление и молниезащита",
      "Подключение бытовой техники"
    ]
  },
  {
    title: "Отопление и вентиляция",
    items: [
      "Проектирование систем отопления",
      "Монтаж радиаторов отопления",
      "Установка котельного оборудования",
      "Монтаж теплых полов",
      "Установка систем вентиляции",
      "Монтаж кондиционеров",
      "Установка рекуператоров",
      "Пусконаладка систем"
    ]
  },
  {
    title: "Водоснабжение",
    items: [
      "Проектирование водоснабжения",
      "Монтаж водопровода",
      "Установка фильтров очистки",
      "Монтаж канализации",
      "Установка сантехники",
      "Монтаж насосного оборудования",
      "Гидроизоляция помещений",
      "Установка водонагревателей"
    ]
  },
  {
    title: "Системы безопасности",
    items: [
      "Установка видеонаблюдения",
      "Монтаж пожарной сигнализации",
      "Установка систем контроля доступа",
      "Монтаж охранной сигнализации",
      "Установка домофонов",
      "Системы умного дома",
      "Автоматизация процессов",
      "Диспетчеризация"
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
    answer: "Сроки зависят от типа и сложности систем: монтаж электрики - от 5 дней, отопления - от 7 дней, водоснабжения - от 4 дней. Точные сроки определяются после осмотра объекта."
  },
  {
    question: "Предоставляете ли вы гарантию на работы?",
    answer: "Да, мы предоставляем гарантию 3 года на все виды инженерных работ. Гарантийные обязательства прописываются в договоре."
  },
  {
    question: "Работаете ли вы с определенными производителями оборудования?",
    answer: "Мы работаем с проверенными производителями инженерного оборудования и можем порекомендовать оптимальные варианты под ваш бюджет. Также возможна установка оборудования, предоставленного заказчиком."
  },
  {
    question: "Как происходит оплата?",
    answer: "Работа выполняется поэтапно. Оплата разбивается на части: предоплата 30%, промежуточные платежи по завершению монтажа каждой системы, финальный расчет после тестирования и запуска."
  },
  {
    question: "Нужны ли разрешения и согласования?",
    answer: "Да, для некоторых видов работ требуются согласования. Мы помогаем в получении всей необходимой документации и работаем только в соответствии с нормативами."
  },
  {
    question: "Осуществляете ли вы обслуживание после монтажа?",
    answer: "Да, мы предлагаем сервисное обслуживание установленных систем. Также проводим регулярные проверки и настройку оборудования по желанию клиента."
  }
]

export default function EngineeringPage() {
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [openFaqs, setOpenFaqs] = useState<number[]>([])
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
              <span className="text-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">🔌</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
              Инженерные системы
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold">
              Установка и проектирование инженерных систем под ключ: электричество, отопление, водоснабжение и вентиляция.
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text"> Гарантия 3 года!</span>
            </p>
          </section>
        </div>
      </div>

      {/* Services List */}
      <section className="max-w-4xl mx-auto px-4 -mt-24">
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
              
              {openCategories.includes(category.title) && (
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
              )}
            </div>
          ))}

          {/* Order Button */}
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
      <section className="max-w-4xl mx-auto mt-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-4">
          {faqQuestions.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white/60 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/80 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                  <span className="text-[#FF4D00]">❓</span>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#FF4D00] transition-transform duration-300 ${
                    openFaqs.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openFaqs.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 dark:text-gray-300 pt-2 border-t border-gray-200 dark:border-gray-700">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Order Dialog */}
      <Dialog open={isOrderDialogOpen} onOpenChange={handleCloseDialog}>
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
            
            <h2 className="text-xl font-medium mb-2">Заказать монтаж</h2>
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
                  placeholder="Адрес для монтажа систем"
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