"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ModalFormProps {
  isOpen: boolean
  onClose: () => void
  initialComment?: string
  title?: string
}

export function ModalForm({ isOpen, onClose, initialComment = "", title = "Заказать услугу" }: ModalFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: initialComment,
  })

  useEffect(() => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      comment: initialComment,
    })
  }, [isOpen, initialComment])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded p-1 text-white font-bold text-lg">RB</span>
          <span className="text-[#FF3A2D] font-semibold">Решаем Быстро</span>
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">Оставьте заявку, и мы свяжемся с вами для обсуждения деталей в течение <span className="text-[#FF3A2D] font-bold">5 минут</span></p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0"
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Ваш номер телефона"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0"
            />
          </div>

          <div>
            <Label htmlFor="email">Email (необязательно)</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0"
            />
          </div>

          <div>
            <Label htmlFor="comment">Комментарий</Label>
            <Textarea
              id="comment"
              placeholder="Опишите ваши пожелания или задайте вопрос"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              rows={3}
              className="border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0"
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white text-lg font-semibold">
            Отправить заявку
          </Button>
        </form>
      </div>
    </div>
  )
}