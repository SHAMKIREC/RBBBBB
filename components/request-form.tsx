"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface RequestFormProps {
  variant?: "simple" | "detailed"
}

export function RequestForm({ variant = "simple" }: RequestFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [selectedService, setSelectedService] = useState("")
  const [sendMethod, setSendMethod] = useState("system")
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log({
      name,
      phone,
      email,
      comment,
      selectedService,
      sendMethod
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={variant === "simple" ? "outline" : "default"} 
          className={variant === "simple" ? "gradient-border" : "bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white"}
        >
          Узнать условия
        </Button>
      </DialogTrigger>
      <DialogContent className="dialog-content gradient-border sm:max-w-[425px]">
        <DialogHeader>
          <div className="text-center space-y-2 mb-4">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center text-white font-bold">
                RB
              </div>
            </div>
            <h3 className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text font-bold">
              Решаем Быстро
            </h3>
            <DialogTitle className="text-xl font-semibold">
              Узнайте наши условия
            </DialogTitle>
            <p className="text-sm text-gray-500">
              Обсудим детали и подберем оптимальное решение. Заполните форму, и мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Имя и фамилия</Label>
            <Input 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="gradient-border" 
              placeholder="Введите ваше имя" 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input 
              id="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="gradient-border" 
              placeholder="+7 (___) ___-__-__" 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email (необязательно)</Label>
            <Input 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="gradient-border" 
              placeholder="example@mail.com" 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="service">Выберите услугу</Label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="gradient-border">
                <SelectValue placeholder="Выберите услугу" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="repair">Ремонт</SelectItem>
                <SelectItem value="installation">Монтаж</SelectItem>
                <SelectItem value="maintenance">Обслуживание</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="comment">Комментарий</Label>
            <Textarea 
              id="comment" 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="gradient-border" 
              placeholder="Опишите ваш запрос"
            />
          </div>
          <div className="grid gap-2">
            <Label>Способ отправки заявки</Label>
            <RadioGroup value={sendMethod} onValueChange={setSendMethod} className="grid grid-cols-3 gap-4">
              <div>
                <RadioGroupItem 
                  value="system" 
                  id="system" 
                  className="peer sr-only" 
                />
                <Label
                  htmlFor="system"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#FF7A00] [&:has([data-state=checked])]:border-[#FF7A00]"
                >
                  <span>В систему заказов</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="telegram"
                  id="telegram"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="telegram"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#FF7A00] [&:has([data-state=checked])]:border-[#FF7A00]"
                >
                  <span>Telegram</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="whatsapp"
                  id="whatsapp"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="whatsapp"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#FF7A00] [&:has([data-state=checked])]:border-[#FF7A00]"
                >
                  <span>WhatsApp</span>
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Нажимая кнопку "Отправить запрос", вы соглашаетесь с политикой конфиденциальности
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white">
            Отправить запрос
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 