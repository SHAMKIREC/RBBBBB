"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ServiceOrderFormProps {
  isOpen: boolean
  onClose: () => void
  service: string
}

export function ServiceOrderForm({ isOpen, onClose, service }: ServiceOrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log("Form submitted:", { ...formData, service })
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6">
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            Заказать услугу
          </DialogTitle>
          <p className="text-white/90">{service}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Ваше имя
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-gray-300 focus:border-[#FF7A00] focus:ring-[#FF7A00]"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border-gray-300 focus:border-[#FF7A00] focus:ring-[#FF7A00]"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Телефон
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="border-gray-300 focus:border-[#FF7A00] focus:ring-[#FF7A00]"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Сообщение
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-gray-300 focus:border-[#FF7A00] focus:ring-[#FF7A00] min-h-[100px]"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white hover:shadow-lg transition-shadow"
          >
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 