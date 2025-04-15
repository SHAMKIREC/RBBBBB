"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const TELEGRAM_BOT_TOKEN = '7878534922:AAHWpXq9VJPXE8BCvzJv_dneJoapw4rprH0';
const TELEGRAM_CHAT_ID = -1002503860470;
const TELEGRAM_THREAD_ID = 17;

export function RequestForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [showPlaceholder, setShowPlaceholder] = useState(true)
  const [phoneError, setPhoneError] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [sendMethod, setSendMethod] = useState("system")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  const services = [
    "Ремонт",
    "Инженерные системы",
    "Строительство",
    "Окна и двери",
    "Кровля и фасады",
    "IT-услуги",
    "Академическая поддержка"
  ]

  const formatPhoneNumber = (numbers: string) => {
    if (numbers.length === 0) return "+7 ___ ___ __ __"
    
    // Убираем + если он есть
    const cleanNumbers = numbers.replace('+', '')
    
    // Если номер начинается с 8, заменяем на 7
    if (cleanNumbers.startsWith('8')) {
      numbers = '7' + cleanNumbers.slice(1)
    }
    
    // Если номер не начинается с 7, показываем ошибку
    if (!cleanNumbers.startsWith('7')) {
      return "+7 ___ ___ __ __"
    }
    
    // Форматируем номер с точными пробелами
    const formattedNumber = numbers.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
    return `+7 ${formattedNumber}`
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, nextFieldId: string) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const nextField = document.getElementById(nextFieldId)
      if (nextField) {
        nextField.focus()
      }
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Разрешаем ввод + в начале
    if (value === '+') {
      setPhone('+')
      return
    }
    
    // Если начинается с +, сохраняем его
    const hasPlus = value.startsWith('+')
    let numbers = value.replace(/\D/g, '')
    
    // Если номер начинается с 8, заменяем на 7
    if (numbers.startsWith('8')) {
      numbers = '7' + numbers.slice(1)
    }
    
    // Если номер не начинается с 7, показываем ошибку
    if (numbers.length > 0 && !numbers.startsWith('7')) {
      setPhoneError("Номер должен начинаться с +7")
      return
    }
    
    if (numbers.length > 11) {
      setPhoneError("Номер телефона не может содержать более 11 цифр")
      return
    }

    if (numbers.length > 0) {
      setShowPlaceholder(false)
    } else {
      setShowPlaceholder(true)
    }

    // Форматируем номер с пробелами сразу при вводе
    let formattedNumber = '+7'
    if (numbers.length > 1) {
      formattedNumber += ' ' + numbers.slice(1, 4)
      if (numbers.length > 4) {
        formattedNumber += ' ' + numbers.slice(4, 7)
        if (numbers.length > 7) {
          formattedNumber += ' ' + numbers.slice(7, 9)
          if (numbers.length > 9) {
            formattedNumber += ' ' + numbers.slice(9, 11)
          }
        }
      }
    }
    
    setPhone(formattedNumber)
    setPhoneError("")
  }

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      const newPhone = phone.slice(0, -1)
      
      if (newPhone.length === 0) {
        setShowPlaceholder(true)
      }
      
      setPhone(newPhone)
      setPhoneError("")
    } else if (e.key === 'Enter') {
      handleKeyDown(e, 'email')
    } else if (!/^[\d+]$/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
      e.preventDefault()
      setPhoneError("Разрешены только цифры и символ +")
    }
  }

  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')
    let numbers = pastedText.replace(/\D/g, '')
    
    // Обработка префиксов при вставке
    if (numbers.startsWith('8')) {
      numbers = '7' + numbers.slice(1)
    }
    
    if (numbers.startsWith('7')) {
      numbers = numbers.slice(1)
    }
    
    if (numbers.length > 10) {
      numbers = numbers.slice(0, 10)
    }
    
    if (numbers.length > 0) {
      setShowPlaceholder(false)
    }
    
    setPhone(numbers)
    setPhoneError("")
  }

  const handleServiceChange = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Разрешаем только буквы и пробелы
    const filteredValue = value.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g, '')
    setName(filteredValue)
    
    // Проверяем на наличие цифр
    if (/\d/.test(value)) {
      setErrors(prev => ({ ...prev, name: "Имя не должно содержать цифры" }))
    } else {
      setErrors(prev => ({ ...prev, name: validateName(filteredValue) }))
    }
  }

  const validateName = (name: string) => {
    const nameRegex = /^[а-яА-ЯёЁa-zA-Z\s]+$/
    if (!nameRegex.test(name)) {
      return "Имя и фамилия должны содержать только буквы"
    }
    if (name.trim().split(/\s+/).length < 2) {
      return "Пожалуйста, введите имя и фамилию"
    }
    return ""
  }

  const validatePhone = (phone: string) => {
    if (phone.length === 0) return "Пожалуйста, введите номер телефона"
    
    // Убираем все пробелы для проверки
    const cleanPhone = phone.replace(/\s/g, '')
    
    if (cleanPhone.startsWith('+7')) {
      // Проверяем, что после +7 идет 10 цифр
      const digits = cleanPhone.slice(2).replace(/\D/g, '')
      if (digits.length !== 10) {
        return "Номер должен содержать 10 цифр после +7"
      }
    } else if (cleanPhone.startsWith('8')) {
      // Проверяем, что после 8 идет 10 цифр
      const digits = cleanPhone.slice(1).replace(/\D/g, '')
      if (digits.length !== 10) {
        return "Номер должен содержать 10 цифр после 8"
      }
    } else {
      return "Номер должен начинаться с +7 или 8"
    }
    
    return ""
  }

  const validateEmail = (email: string) => {
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Пожалуйста, введите корректный адрес электронной почты"
    }
    return ""
  }

  const validateComment = (comment: string) => {
    if (!comment.trim()) {
      return "Пожалуйста, введите комментарий"
    }
    // Проверка на SQL-инъекции и специальные символы
    const sqlInjectionRegex = /['";\\]/
    if (sqlInjectionRegex.test(comment)) {
      return "Комментарий содержит недопустимые символы"
    }
    return ""
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setErrors(prev => ({ ...prev, email: validateEmail(value) }))
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setComment(value)
    setErrors(prev => ({ ...prev, comment: validateComment(value) }))
  }

  const sendToTelegram = async () => {
    const message = `
__________________________
📩 **Новая заявка:** ${name}
📞 **Телефон:** ${phone}
💬 **Комментарий:** ${comment}
__________________________
    `

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          message_thread_id: TELEGRAM_THREAD_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      })

      if (!response.ok) {
        throw new Error('Ошибка отправки в Telegram')
      }
    } catch (error) {
      console.error('Ошибка при отправке в Telegram:', error)
    }
  }

  const saveToDatabase = async () => {
    try {
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          comment,
          services: selectedServices,
          createdAt: new Date().toISOString()
        })
      })

      if (!response.ok) {
        throw new Error('Ошибка сохранения заявки')
      }
    } catch (error) {
      console.error('Ошибка при сохранении заявки:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newErrors: Record<string, string> = {}
    newErrors.name = validateName(name)
    newErrors.phone = validatePhone(phone)
    newErrors.email = validateEmail(email)
    newErrors.comment = validateComment(comment)

    setErrors(newErrors)

    if (Object.values(newErrors).every(error => !error)) {
      setIsSubmitting(true)
      
      if (sendMethod === 'telegram') {
        await sendToTelegram()
      } else if (sendMethod === 'system') {
        await saveToDatabase()
      } else if (sendMethod === 'whatsapp') {
        const message = `Новая заявка от ${name}%0AТелефон: ${phone}%0AКомментарий: ${comment}`
        window.location.href = `https://chat.whatsapp.com/HKfzvr2o33OEhU1gZPwJ33?text=${message}`
      }
      
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitted(true)
      }, 1500)
    }
  }

  return (
    <div className="bg-white/90 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border-2 border-gradient-to-r from-[#FF7A00] to-[#FF0000] font-['Roboto',system-ui]">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="rb-gradient" x1="0" y1="0" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF7A00" />
                <stop offset="100%" stopColor="#FF0000" />
              </linearGradient>
            </defs>
            <rect width="24" height="24" rx="6" fill="url(#rb-gradient)"/>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Roboto">
              RB
            </text>
          </svg>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">Решаем Быстро</h1>
        </div>
        <h2 className="text-2xl font-semibold text-[#333] mb-4">Узнайте наши условия</h2>
        <p className="text-[#333] text-lg font-medium">
          Мы готовы обсудить детали и предложить оптимальное решение. Заполните форму — и мы свяжемся с вами.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8 animate-fadeIn">
          <div className="text-green-500 text-5xl mb-4">✅</div>
          <h4 className="text-xl font-medium mb-2 text-[#333]">Запрос отправлен</h4>
          <p className="text-[#333]">Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-[#333] font-bold">
              Имя & Фамилия
            </Label>
            <Input
              id="name"
              value={name}
              onChange={handleNameChange}
              onKeyDown={(e) => handleKeyDown(e, 'phone')}
              placeholder="Введите ваше имя и фамилию"
              required
              className={`w-full p-3 bg-white/50 border-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all duration-200 ${errors.name ? 'border-red-500' : ''} [&>input]:text-[#333] [&>input]:placeholder:text-[#333]/20`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="phone" className="text-[#333] font-bold">
              Телефон
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              onKeyDown={handlePhoneKeyDown}
              onPaste={handlePhonePaste}
              placeholder={showPlaceholder ? "Введите ваш номер телефона" : ""}
              required
              className={`w-full p-3 bg-white/50 border-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all duration-200 ${errors.phone ? 'border-red-500' : ''} [&>input]:text-[#333] [&>input]:placeholder:text-[#333]/20`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="text-[#333] font-bold">
              Почта (необязательно)
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              onKeyDown={(e) => handleKeyDown(e, 'comment')}
              placeholder="Укажите вашу почту"
              className={`w-full p-3 bg-white/50 border-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : ''} [&>input]:text-[#333] [&>input]:placeholder:text-[#333]/20`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="comment" className="text-[#333] font-bold">
              Комментарий
            </Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={handleCommentChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement
                  if (submitButton) {
                    submitButton.focus()
                  }
                }
              }}
              placeholder="Опишите ваш запрос или задайте вопрос"
              required
              className={`w-full p-3 bg-white/50 border-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded-xl focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent h-32 transition-all duration-200 ${errors.comment ? 'border-red-500' : ''} [&>textarea]:text-[#333] [&>textarea]:placeholder:text-[#333]/20`}
            />
            {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment}</p>}
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services">
              <AccordionTrigger className="text-[#333] font-medium">
                Выберите услуги
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {services.map((service) => (
                    <div key={service} className="flex items-center space-x-2">
                      <Checkbox
                        id={service}
                        checked={selectedServices.includes(service)}
                        onCheckedChange={() => handleServiceChange(service)}
                        className="border-[#FF7A00] data-[state=checked]:bg-gradient-to-r from-[#FF7A00] to-[#FF0000]"
                      />
                      <Label htmlFor={service} className="text-[#333] text-base">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="space-y-4">
            <Label className="text-[#333] font-medium">Куда отправить запрос?</Label>
            <RadioGroup
              value={sendMethod}
              onValueChange={setSendMethod}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system" className="border-[#FF7A00] text-[#FF7A00] data-[state=checked]:bg-gradient-to-r from-[#FF7A00] to-[#FF0000]" />
                <Label htmlFor="system" className="text-[#333] flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-transparent">
                    <defs>
                      <linearGradient id="icon-gradient" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF7A00" />
                        <stop offset="100%" stopColor="#FF0000" />
                      </linearGradient>
                    </defs>
                    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" fill="url(#icon-gradient)"/>
                  </svg>
                  В систему заказов
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="telegram" id="telegram" className="border-[#FF7A00] text-[#FF7A00] data-[state=checked]:bg-gradient-to-r from-[#FF7A00] to-[#FF0000]" />
                <Label htmlFor="telegram" className="text-[#333] flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-transparent">
                    <defs>
                      <linearGradient id="telegram-gradient" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF7A00" />
                        <stop offset="100%" stopColor="#FF0000" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.08-.2-.09-.06-.22-.04-.31-.02-.13.02-2.21 1.41-6.25 4.14-.59.41-1.13.61-1.61.6-.53-.01-1.54-.3-2.3-.54-.93-.3-1.67-.46-1.61-.97.03-.27.4-.55 1.1-.84 4.12-1.79 6.87-2.97 8.26-3.54 3.93-1.6 4.75-1.88 5.27-1.88.11 0 .36.03.52.18.14.15.18.35.2.58z" fill="url(#telegram-gradient)"/>
                  </svg>
                  Telegram
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="whatsapp" id="whatsapp" className="border-[#FF7A00] text-[#FF7A00] data-[state=checked]:bg-gradient-to-r from-[#FF7A00] to-[#FF0000]" />
                <Label htmlFor="whatsapp" className="text-[#333] flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-transparent">
                    <defs>
                      <linearGradient id="whatsapp-gradient" x1="0" y1="0" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF7A00" />
                        <stop offset="100%" stopColor="#FF0000" />
                      </linearGradient>
                    </defs>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="url(#whatsapp-gradient)"/>
                  </svg>
                  WhatsApp
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              required
              className="border-[#FF7A00] data-[state=checked]:bg-gradient-to-r from-[#FF7A00] to-[#FF0000]"
            />
            <Label htmlFor="terms" className="text-sm text-[#333]">
              Нажимая на кнопку, вы подтверждаете согласие с{" "}
              <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
                <DialogTrigger asChild>
                  <button 
                    className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text hover:underline font-medium cursor-pointer"
                    onClick={() => setIsPrivacyOpen(true)}
                  >
                    Политикой конфиденциальности
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-4">Политика конфиденциальности</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 text-[#333]">
                    <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации, которую пользователь предоставляет при использовании сайта "РЕШАЕМ БЫСТРО" (https://r-bservice.vercel.app).</p>
                    
                    <h3 className="font-bold">1. Оператор</h3>
                    <p>Оператор — сервис "РЕШАЕМ БЫСТРО", предоставляющий услуги по строительству и IT-поддержке. Осуществляет сбор и обработку персональных данных, предоставленных пользователями через формы на сайте.</p>
                    
                    <h3 className="font-bold">2. Какие данные мы собираем</h3>
                    <p>Мы можем собирать следующие данные:</p>
                    <ul className="list-disc pl-5">
                      <li>Имя пользователя</li>
                      <li>Номер телефона</li>
                      <li>Электронную почту (если указывается)</li>
                      <li>Сообщение/комментарий</li>
                    </ul>
                    
                    <h3 className="font-bold">3. Цель сбора данных</h3>
                    <p>Данные собираются исключительно для:</p>
                    <ul className="list-disc pl-5">
                      <li>обратной связи с пользователем;</li>
                      <li>обработки заявок и предоставления услуг;</li>
                      <li>улучшения качества сервиса.</li>
                    </ul>
                    
                    <h3 className="font-bold">4. Хранение и безопасность</h3>
                    <p>Мы принимаем все необходимые меры для защиты данных от несанкционированного доступа и обязуемся не передавать ваши данные третьим лицам без вашего согласия.</p>
                    
                    <h3 className="font-bold">5. Согласие на обработку</h3>
                    <p>Отправляя любую форму на сайте, пользователь соглашается с данной политикой и дает согласие на обработку своих персональных данных в соответствии с Федеральным законом РФ № 152-ФЗ «О персональных данных».</p>
                    
                    <h3 className="font-bold">6. Связь с нами</h3>
                    <p>Если у вас есть вопросы по обработке данных, вы можете связаться с нами:</p>
                    <p>📧 rb.service24@mail.ru</p>
                    <p>📞 +7 933 030 69 49</p>
                    
                    <h3 className="font-bold">7. Изменения политики</h3>
                    <p>Мы оставляем за собой право изменять данную политику. Актуальная версия всегда доступна по адресу: https://r-bservice.vercel.app/privacy-policy</p>
                  </div>
                </DialogContent>
              </Dialog>
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !agreed}
            className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF0000] hover:from-[#FF7A00]/90 hover:to-[#FF0000]/90 text-white font-medium py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:from-[#FF7A00]/80 active:to-[#FF0000]/80 active:translate-y-0"
          >
            {isSubmitting ? "Отправка..." : "Отправить запрос"}
          </Button>
        </form>
      )}
    </div>
  )
} 