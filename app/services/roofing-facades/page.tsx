"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"

interface ServiceCategory {
  title: string
  items: string[]
}

const services: ServiceCategory[] = [
                {
                  title: "Кровельные работы",
    items: [
      "Монтаж новой кровли",
      "Ремонт и восстановление кровли",
      "Укладка черепицы (металлочерепица, гибкая черепица и др.)",
      "Устройство скатной и плоской кровли",
      "Устройство мансардной кровли",
      "Гидроизоляция кровельных конструкций",
      "Утепление кровли",
      "Установка водосточных систем",
      "Монтаж снегозадержателей",
      "Очистка кровли от снега и наледи"
                  ]
                },
                {
                  title: "Фасадные работы",
    items: [
      "Монтаж вентилируемых фасадов",
      "Обшивка фасадов сайдингом",
      "Облицовка фасадов кирпичом и камнем",
      "Штукатурные фасады",
      "Ремонт и реставрация фасадов",
      "Теплоизоляция фасадов (мокрый фасад)",
      "Покраска фасадов",
      "Очистка и обработка фасадов",
      "Установка фасадных панелей",
      "Защита фасадов от грибка и влаги"
    ]
  }
]

const faqQuestions = [
  {
    question: "Сколько времени занимает монтаж кровли или фасада?",
    answer: "Сроки выполнения работ зависят от площади и сложности объекта. В среднем монтаж кровли занимает 2-3 недели, фасадные работы - от 2 недель до 1 месяца. Точные сроки определяются после осмотра объекта."
  },
  {
    question: "Предоставляете ли вы гарантию на работы?",
    answer: "Да, мы предоставляем гарантию 3 года на все виды работ. Гарантия распространяется как на используемые материалы, так и на качество монтажа."
  },
  {
    question: "С какими материалами вы работаете?",
    answer: "Мы работаем со всеми современными кровельными и фасадными материалами от проверенных производителей. Можем как предложить оптимальные материалы, так и работать с материалами заказчика при их соответствии нормам."
  },
  {
    question: "Как происходит оплата?",
    answer: "Оплата производится поэтапно: предоплата 40% после подписания договора, промежуточные платежи по завершении этапов работ, окончательный расчет после приемки работ."
  },
  {
    question: "Делаете ли вы замеры и расчеты?",
    answer: "Да, мы предоставляем бесплатный выезд специалиста для замеров и составления сметы. Это необходимо для точного расчета стоимости материалов и работ."
                },
                {
    question: "Убираете ли вы за собой мусор?",
    answer: "Да, уборка и вывоз строительного мусора включены в стоимость работ. Мы оставляем объект в чистом состоянии после завершения всех работ."
  }
]

export default function RoofingFacadesPage() {
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
    setFormData(prev => ({
      ...prev,
      message: selectedServices.join('\n')
    }))
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white pb-32">
        <div className="container mx-auto px-4 pt-12">
          <section className="text-center">
            <div className="w-24 h-24 rounded-[20px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center mb-6 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              <span className="text-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">🏠</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
              Кровля и фасады
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold">
              Надёжный монтаж и ремонт кровли, профессиональная отделка фасадов — защита и стиль вашего дома.
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
      <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <DialogContent className="sm:max-w-[480px] p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center">
                <span className="text-white font-bold">RB</span>
              </div>
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text font-bold">
                Решаем Быстро
              </span>
            </div>
            
            <h2 className="text-xl font-medium mb-2">Заказать услугу</h2>
            <p className="text-sm text-gray-600 mb-6">
              Оставьте заявку, и мы свяжемся с вами для обсуждения проекта в течение <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">5 минут</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleFormChange('name', e.target.value)}
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleFormChange('phone', e.target.value)}
                  placeholder="+7 (999) 999-99-99"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleFormChange('email', e.target.value)}
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message">Комментарий</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  placeholder="Опишите ваши пожелания"
                  className="min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white"
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
