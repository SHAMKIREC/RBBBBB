"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [comment, setComment] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

      // Сбросить сообщение об успешной отправке через 5 секунд
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-6 dark:text-white">Напишите нам</h3>

      {submitted ? (
        <div className="text-center py-8">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h4 className="text-xl font-medium mb-2 dark:text-white">Сообщение отправлено!</h4>
          <p className="text-gray-600 dark:text-gray-400">Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
              Имя
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
              Телефон
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md"
            />
          </div>
          <div>
            <Label htmlFor="comment" className="text-gray-700 dark:text-gray-300">
              Комментарий
            </Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md h-32"
            />
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              required
            />
            <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </Label>
          </div>
          <Button type="submit" disabled={isSubmitting || !agreed} className="w-full bg-[#007bff] hover:bg-blue-700">
            {isSubmitting ? "Отправка..." : "Отправить в Telegram"}
          </Button>
        </form>
      )}
    </div>
  )
}
