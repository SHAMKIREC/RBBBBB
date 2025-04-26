"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, ChevronDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"

interface ServiceCategory {
  title: string
  items: string[]
}

const services: ServiceCategory[] = [
  {
    title: "Косметический ремонт",
    items: [
      "Покраска стен и потолков (акриловые, латексные составы)",
      "Оклейка обоями (бумажные, флизелиновые, виниловые)",
      "Укладка напольных покрытий (ламинат, паркет, линолеум)",
      "Замена розеток и выключателей",
      "Установка межкомнатных дверей",
      "Монтаж декоративных панелей",
      "Обновление сантехнических приборов",
      "Установка плинтусов и галтелей",
      "Покрытие лаком деревянных поверхностей",
      "Монтаж карнизов для штор"
    ]
  },
  {
    title: "Капитальный ремонт",
    items: [
      "Полный демонтаж перегородок и конструкций",
      "Перепланировка помещений (согласование в БТИ)",
      "Замена электропроводки и щитков",
      "Монтаж систем вентиляции и кондиционирования",
      "Установка новых окон и дверных блоков",
      "Гидроизоляция ванных комнат и санузлов",
      "Выравнивание стен штукатуркой и шпаклевкой",
      "Заливка стяжки пола с нивелированием",
      "Устройство звукоизоляции стен и потолков",
      "Установка встроенных систем хранения"
    ]
  },
  {
    title: "Спецработы",
    items: [
      "Укладка плитки (керамическая, керамогранит, клинкер)",
      "Затирка и герметизация швов плитки",
      "Монтаж натяжных и гипсокартонных потолков",
      "Установка теплых полов (электрические, водяные)",
      "Декоративная штукатурка (венецианская, фактурная)",
      "Монтаж встроенных шкафов и ниш"
    ]
  },
  {
    title: "Дополнительные услуги",
    items: [
      "Вывоз строительного мусора",
      "Химчистка мягкой мебели после ремонта",
      "Установка декоративных лестниц"
    ]
  }
]

const faqQuestions = [
  {
    question: "Сколько времени занимает ремонт?",
    answer: "Сроки зависят от типа ремонта: косметический ремонт квартиры - от 2 недель, капитальный - от 1.5 месяцев. Точные сроки определяются после осмотра объекта."
  },
  {
    question: "Предоставляете ли вы гарантию на работы?",
    answer: "Да, мы предоставляем гарантию 3 года на все виды работ. Гарантийные обязательства прописываются в договоре."
  },
  {
    question: "Работаете ли вы со своим материалом?",
    answer: "Да, мы можем взять на себя закупку всех необходимых материалов. Также вы можете предоставить свои материалы - мы проверим их качество и применимость."
  },
  {
    question: "Как происходит оплата?",
    answer: "Работа выполняется поэтапно. Оплата разбивается на части: предоплата 30%, промежуточные платежи по завершению этапов, финальный расчет после приемки работ."
  },
  {
    question: "Заключаете ли вы договор?",
    answer: "Обязательно. Мы заключаем официальный договор, где прописываются все виды работ, сроки, стоимость и гарантийные обязательства."
  },
  {
    question: "Убираете ли вы за собой мусор?",
    answer: "Да, уборка и вывоз строительного мусора включены в стоимость работ. Мы оставляем объект полностью готовым к эксплуатации."
  }
]

export default function RemontPage() {
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

  // Обработчик изменения формы
  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Обработчик открытия модального окна
  const handleOpenDialog = () => {
    setIsOrderDialogOpen(true)
    // Автоматически заполняем комментарий выбранными услугами
    setFormData(prev => ({
      ...prev,
      comment: selectedServices.join('\n')
    }))
  }

  // Обработчик закрытия модального окна
  const handleCloseDialog = () => {
    setIsOrderDialogOpen(false)
    // Сбрасываем выбранные услуги
    setSelectedServices([])
    // Очищаем форму
    setFormData({
      name: "",
      phone: "",
      address: "",
      comment: ""
    })
  }

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData)
    handleCloseDialog()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="w-24 h-24 rounded-[20px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center mb-6 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              <span className="text-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">🛠️</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
              Ремонтные работы
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-8 font-bold">
              Комплексный ремонт квартир, офисов и коммерческих помещений: от косметического до капитального. 
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text"> Гарантия 3 года!</span>
            </p>
          </section>
        </main>
      </div>

      {/* Services List */}
      <main className="container mx-auto px-4 -mt-16">
        <section className="max-w-4xl mx-auto bg-[#FFE4D6] dark:bg-gray-900 rounded-lg shadow-lg p-8">
          {services.map((category) => (
            <div key={category.title} className="mb-8">
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
                <div className="mt-4 space-y-4 pl-6 bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg">
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
        </section>

        {/* Order Button */}
        <div className="text-center mt-16">
          <Button
            onClick={handleOpenDialog}
            className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all text-lg"
          >
            Заказать услугу
          </Button>
        </div>

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
                    className={`w-6 h-6 text-[#FF4D00] transition-transform ${
                      openFaqs.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {openFaqs.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-700 dark:text-gray-300 pt-2 border-t border-gray-200 dark:border-gray-700">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

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
            
            <h2 className="text-xl font-medium mb-2">Заказать ремонт</h2>
            <p className="text-sm text-gray-600 mb-6">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей ремонта в течение <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">5 минут</span>
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
                  placeholder="Адрес помещения для ремонта"
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