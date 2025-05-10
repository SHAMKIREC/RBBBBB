"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useToast } from "@/components/ui/use-toast"

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
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  })
  const nameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const commentRef = useRef<HTMLTextAreaElement>(null)
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [lastSubmit, setLastSubmit] = useState<number>(0);
  const [rateLimitError, setRateLimitError] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      comment: initialComment,
    })
  }, [isOpen, initialComment])

  useEffect(() => {
    if (isOpen && executeRecaptcha) {
      const getToken = async () => {
        try {
          console.log('Запрашиваю токен reCAPTCHA...');
          const token = await executeRecaptcha("order_form");
          if (token) {
            console.log('Получен токен reCAPTCHA:', token);
            setRecaptchaToken(token);
          } else {
            console.error('Не удалось получить токен reCAPTCHA');
            setRecaptchaToken(null);
          }
        } catch (e) {
          console.error('Ошибка получения токена reCAPTCHA:', e);
          setRecaptchaToken(null);
        }
      };
      getToken();
    }
  }, [isOpen, executeRecaptcha, formData]);

  // Валидация
  const validate = () => {
    let valid = true
    const newErrors = { name: '', phone: '', email: '', comment: '' }
    // Имя
    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя'
      valid = false
    } else if (!/^([a-zA-Zа-яА-ЯёЁ\s'-]{2,})$/.test(formData.name.trim())) {
      newErrors.name = 'Только буквы, минимум 2 символа'
      valid = false
    }
    // Телефон
    const digits = formData.phone.replace(/\D/g, '')
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите телефон'
      valid = false
    } else if (!/^\+7[\d\s\-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Формат: +7XXXXXXXXXX'
      valid = false
    } else if (!formData.phone.startsWith('+7')) {
      newErrors.phone = 'Номер должен начинаться с +7'
      valid = false
    } else if (digits.length !== 11 || !digits.startsWith('7')) {
      newErrors.phone = 'В номере должно быть ровно 11 цифр (пример: +7XXXXXXXXXX)'
      valid = false
    }
    // Email
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Некорректный email'
      valid = false
    }
    // Комментарий
    if (!formData.comment.trim() || formData.comment.trim().length < 5) {
      newErrors.comment = 'Минимум 5 символов'
      valid = false
    }
    setErrors(newErrors)
    return valid
  }

  // Проверка валидности без setState
  const isFormValid = () => {
    const digits = formData.phone.replace(/\D/g, '')
    if (!formData.name.trim() || !/^([a-zA-Zа-яА-ЯёЁ\s'-]{2,})$/.test(formData.name.trim())) return false
    if (!formData.phone.trim() || !/^\+7[\d\s+\-()]{10,}$/.test(formData.phone.trim())) return false
    if (!formData.phone.startsWith('+7')) return false
    if (digits.length !== 11 || !digits.startsWith('7')) return false
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) return false
    if (!formData.comment.trim() || formData.comment.trim().length < 5) return false
    return true
  }

  // Переход по Enter
  const handleKeyDown = (e: React.KeyboardEvent, field: string) => {
    if (e.key === 'Enter' && !e.ctrlKey && !e.metaKey) {
      e.preventDefault()
      if (field === 'name') phoneRef.current?.focus()
      if (field === 'phone') emailRef.current?.focus()
      if (field === 'email') commentRef.current?.focus()
    }
    if ((e.key === 'Enter' && (e.ctrlKey || e.metaKey)) && field === 'comment') {
      // Ctrl+Enter в textarea — отправка
      if (validate()) handleSubmit(e as any)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRateLimitError("");
    if (!validate()) return;
    if (!recaptchaToken) {
      setErrors({
        name: errors.name || "",
        phone: errors.phone || "",
        email: errors.email || "",
        comment: "Подтвердите, что вы не робот (reCAPTCHA)"
      });
      return;
    }
    const now = Date.now();
    if (now - lastSubmit < 30000) {
      setRateLimitError("Вы уже отправили заявку. Пожалуйста, подождите 30 секунд.");
      return;
    }
    setLastSubmit(now);
    try {
      // Здесь отправка данных формы + recaptchaToken на сервер или в консоль
      // Имитация успешной отправки:
      // await fetch(...)
      console.log('Отправка формы с данными:', {
        ...formData,
        recaptchaToken: recaptchaToken.substring(0, 20) + '...'
      });
      toast({
        title: '✅ Заявка успешно отправлена!',
        description: 'Мы свяжемся с вами в ближайшее время.',
        duration: 5000
      });
      onClose();
    } catch (error) {
      toast({
        title: '❌ Не удалось отправить заявку.',
        description: 'Пожалуйста, попробуйте позже.',
        duration: 5000
      });
    }
  }

  // Email: мгновенная валидация
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData({ ...formData, email: value })
    if (value.trim() && !/^\S+@\S+\.\S+$/.test(value.trim())) {
      setErrors(prev => ({ ...prev, email: 'Некорректный email' }))
    } else {
      setErrors(prev => ({ ...prev, email: '' }))
    }
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
              ref={nameRef}
              placeholder="Ваше имя"
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s'-]/g, '')
                setFormData({ ...formData, name: value })
              }}
              onKeyDown={e => handleKeyDown(e, 'name')}
              required
              className={`border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
          </div>

          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              ref={phoneRef}
              type="tel"
              placeholder="Ваш номер телефона"
              value={formData.phone}
              onChange={(e) => {
                let value = e.target.value.replace(/[^\d\s+\-()]/g, '')
                // Автозамена первой 8 на +7
                if (value.length === 1 && value === '8') value = '+7'
                if (value.startsWith('8') && value.length > 1) value = value.replace(/^8/, '+7')
                // Если не начинается с +7, всегда делаем +7
                if (!value.startsWith('+7')) value = '+7'
                // Оставляем только +7 и максимум 10 цифр после +7
                if (value.startsWith('+7')) {
                  const digits = value.replace(/\D/g, '')
                  const main = digits.slice(1, 11) // только 10 цифр после 7
                  value = '+7' + main
                }
                setFormData({ ...formData, phone: value })
              }}
              onKeyDown={e => handleKeyDown(e, 'phone')}
              required
              className={`border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0 ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
          </div>

          <div>
            <Label htmlFor="email">Email (необязательно)</Label>
            <Input
              id="email"
              ref={emailRef}
              type="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleEmailChange}
              onKeyDown={e => handleKeyDown(e, 'email')}
              className={`border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
          </div>

          <div>
            <Label htmlFor="comment">Комментарий</Label>
            <Textarea
              id="comment"
              ref={commentRef}
              placeholder="Опишите ваши пожелания или задайте вопрос"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              onKeyDown={e => handleKeyDown(e, 'comment')}
              rows={3}
              className={`border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0 ${errors.comment ? 'border-red-500' : ''}`}
            />
            {errors.comment && <div className="text-red-500 text-xs mt-1">{errors.comment || ""}</div>}
          </div>

          {rateLimitError && <div className="text-red-500 text-xs mt-1">{rateLimitError}</div>}
          <button
            type="submit"
            disabled={!isFormValid() || !recaptchaToken || (Date.now() - lastSubmit < 30000)}
            className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF3A2D] text-white font-bold py-3 rounded-md disabled:opacity-60"
          >
            Отправить заявку
          </button>
          {/* Диагностика: показываем причину дизейбла */}
          <div style={{fontSize:12, color:'#888', marginTop:8}}>
            {!isFormValid() && 'Форма невалидна. '}
            {!recaptchaToken && 'Нет токена reCAPTCHA. '}
            {(Date.now() - lastSubmit < 30000) && 'Ограничение по времени (30 сек). '}
          </div>
        </form>
      </div>
    </div>
  )
}