"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RequestForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [comment, setComment] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [sendMethod, setSendMethod] = useState("system")

  const services = [
    "Ремонт",
    "Инженерные системы",
    "Строительство",
    "Окна и двери",
    "Кровля и фасады",
    "IT-услуги",
    "Академическая поддержка"
  ]

  const handleServiceChange = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setName("")
      setPhone("")
      setComment("")
      setAgreed(false)
      setSelectedServices([])
      setSendMethod("system")

      // Сбросить сообщение об успешной отправке через 3 секунды
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="bg-[#FAEDE2] p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#333] mb-2">Решаем Быстро</h1>
        <h2 className="text-2xl font-semibold text-[#333] mb-4">Узнайте наши условия</h2>
        <p className="text-[#333] text-lg">
          Мы готовы обсудить детали и предложить оптимальное решение. Заполните форму — и мы свяжемся с вами.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h4 className="text-xl font-medium mb-2 text-[#333]">Запрос отправлен</h4>
          <p className="text-[#333]">Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-[#333]">
              Имя и фамилия
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя и фамилию"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-[#333]">
              Телефон
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Укажите номер для связи"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent"
            />
          </div>

          <div>
            <Label htmlFor="comment" className="text-[#333]">
              Комментарий
            </Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Опишите ваш запрос или задайте вопрос"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent h-32"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-[#333] font-medium">Выберите услугу/услуги</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service) => (
                <div key={service} className="flex items-center space-x-2">
                  <Checkbox
                    id={service}
                    checked={selectedServices.includes(service)}
                    onCheckedChange={() => handleServiceChange(service)}
                  />
                  <Label htmlFor={service} className="text-[#333]">
                    {service}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-[#333] font-medium">Куда отправить запрос?</Label>
            <RadioGroup
              value={sendMethod}
              onValueChange={setSendMethod}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="system" id="system" />
                <Label htmlFor="system" className="text-[#333]">В систему</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="telegram" id="telegram" />
                <Label htmlFor="telegram" className="text-[#333]">Telegram</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="whatsapp" id="whatsapp" />
                <Label htmlFor="whatsapp" className="text-[#333]">WhatsApp</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              required
            />
            <Label htmlFor="terms" className="text-sm text-[#333]">
              Нажимая на кнопку, вы подтверждаете согласие с{" "}
              <a href="/privacy" className="text-[#FF7A00] hover:underline">
                Политикой конфиденциальности
              </a>
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !agreed}
            className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white font-medium py-3 rounded-lg transition-all duration-200 hover:scale-[1.02]"
          >
            {isSubmitting ? "Отправка..." : "Отправить запрос"}
          </Button>
        </form>
      )}
    </div>
  )
} 