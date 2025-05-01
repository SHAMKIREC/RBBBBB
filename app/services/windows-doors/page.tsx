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
import Footer from "@/app/components/footer"
import { PageHeader } from "@/components/page-header"

const services = [
  {
    title: "Окна",
    items: [
      "Установка пластиковых окон",
      "Монтаж деревянных окон",
      "Установка алюминиевых окон",
      "Остекление балконов и лоджий",
      "Регулировка и ремонт окон",
      "Замена стеклопакетов",
      "Установка москитных сеток",
      "Монтаж подоконников"
    ]
  },
  {
    title: "Двери",
    items: [
      "Установка входных дверей",
      "Монтаж межкомнатных дверей",
      "Установка раздвижных дверей",
      "Монтаж металлических дверей",
      "Установка дверей-купе",
      "Ремонт и регулировка дверей",
      "Замена замков и фурнитуры",
      "Установка доводчиков"
    ]
  },
  {
    title: "Дополнительные услуги",
    items: [
      "Утепление откосов",
      "Отделка откосов",
      "Герметизация швов",
      "Установка жалюзи и рольставней",
      "Тонировка стекол",
      "Декоративная раскладка на стеклопакетах"
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
          <section className="text-center">
            <div className="w-24 h-24 rounded-[20px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center mb-6 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              <span className="text-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">🪟</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
              Окна и двери
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold mb-2">
              Профессиональный монтаж, установка и ремонт окон и дверей — для уюта, тепла и безопасности вашего дома.
            </p>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text font-bold">
              Гарантия 3 года!
            </p>
          </section>
        </div>
      </div>

      {/* Services Section */}
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
              <AnimatePresence>
                {openCategories.includes(category.title) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-4 pl-8 bg-white dark:bg-gray-800 p-6 rounded-lg">
                      {category.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <Checkbox
                            id={`${category.title}-${index}`}
                            checked={selectedServices.includes(item)}
                            onCheckedChange={() => toggleService(item)}
                            className="mt-1.5"
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

          <div className="text-center mt-10">
            <Button
              onClick={handleOpenDialog}
              className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-16 py-4 rounded-[10px] font-medium hover:opacity-90 transition-all text-lg"
            >
              Заказать услугу
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-[1000px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text font-bold text-2xl">?</span>
                  <span className="flex-1 text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#FF7A00] transition-transform duration-300 ${
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
                      <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-100">
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
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text font-bold">Решаем Быстро</span>
            </div>
            
            <h2 className="text-xl font-medium mb-2">Заказать услугу</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
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
                <Label htmlFor="address">Адрес</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleFormChange('address', e.target.value)}
                  placeholder="г. Москва, ул. Примерная, д. 1"
                />
              </div>
              <div>
                <Label htmlFor="comment">Комментарий</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => handleFormChange('comment', e.target.value)}
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
