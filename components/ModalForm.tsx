"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useToast } from "@/components/ui/use-toast"
import { Dialog, DialogContent } from '@/components/ui/dialog'

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
  const [resultModal, setResultModal] = useState<{ open: boolean, success: boolean }>({ open: false, success: true });
  const [acceptPolicy, setAcceptPolicy] = useState(false)

  // Регулярка для имени РФ: только буквы, один пробел между словами, не в начале/конце, не подряд, 2-32 символа
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{2,32}$|^[a-zA-Zа-яА-ЯёЁ]{1,16} [a-zA-Zа-яА-ЯёЁ]{1,16}$/
  // Email строгая валидация
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

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
    const name = formData.name.trim()
    if (!name) {
      newErrors.name = 'Имя обязательно'
      valid = false
    } else if (name.length < 2 || name.length > 32) {
      newErrors.name = 'Имя должно быть от 2 до 32 символов'
      valid = false
    } else if (!nameRegex.test(name)) {
      newErrors.name = 'Только буквы, один пробел между именем и фамилией, без спецсимволов'
      valid = false
    }
    // Email (необязательно)
    const email = formData.email.trim()
    if (email && !emailRegex.test(email)) {
      newErrors.email = 'Некорректный email'
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
    const name = formData.name.trim()
    const email = formData.email.trim()
    const digits = formData.phone.replace(/\D/g, '')
    if (!name || name.length < 2 || name.length > 32 || !nameRegex.test(name)) return false
    if (email && !emailRegex.test(email)) return false
    if (!formData.phone.trim() || !/^\+7[\d\s+\-()]{10,}$/.test(formData.phone.trim())) return false
    if (!formData.phone.startsWith('+7')) return false
    if (digits.length !== 11 || !digits.startsWith('7')) return false
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
      setResultModal({ open: true, success: true });
      setTimeout(() => {
        setResultModal({ open: false, success: true });
        onClose();
      }, 7000);
    } catch (error) {
      setResultModal({ open: true, success: false });
      setTimeout(() => {
        setResultModal({ open: false, success: false });
      }, 7000);
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
    <>
      <button type="button" onClick={() => alert('Проверка alert вне формы')}
        style={{position:'fixed',top:10,right:10,zIndex:9999,background:'#fff',border:'1px solid #f00',padding:8}}>Проверка alert</button>
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
                  let value = e.target.value
                  // Удаляем все, кроме букв и пробела
                  value = value.replace(/[^a-zA-Zа-яА-ЯёЁ ]/g, '')
                  // Заменяем несколько пробелов подряд на один
                  value = value.replace(/ {2,}/g, ' ')
                  // Обрезаем до 32 символов
                  value = value.slice(0, 32)
                  // Не даём ввести больше одного пробела (т.е. не более двух слов)
                  const parts = value.split(' ')
                  if (parts.length > 2) {
                    // Если пользователь вставил больше двух слов, оставляем только первые два
                    value = parts.slice(0, 2).join(' ')
                  }
                  // Не допускаем пробел в начале
                  value = value.replace(/^ +/, '')
                  setFormData({ ...formData, name: value })
                }}
                onKeyDown={e => handleKeyDown(e, 'name')}
                required
                maxLength={32}
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
                onChange={e => {
                  let value = e.target.value
                  // Удаляем все символы, кроме латиницы, цифр и допустимых спецсимволов email
                  value = value.replace(/[^a-zA-Z0-9.!#$%&'*+/=?^_`{|}~@\-]/g, '')
                  // Обрезаем до 64 символов
                  value = value.slice(0, 64)
                  // Если в строке есть валидный email в начале, обрезаем всё после него
                  const match = value.match(/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)/)
                  if (match) {
                    value = match[1]
                  }
                  setFormData({ ...formData, email: value })
                  if (value && !emailRegex.test(value.trim())) setErrors(prev => ({ ...prev, email: 'Некорректный email' }))
                  else setErrors(prev => ({ ...prev, email: '' }))
                }}
                onKeyDown={e => handleKeyDown(e, 'email')}
                className={`border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0 ${errors.email ? 'border-red-500' : ''}`}
                maxLength={64}
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
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="acceptPolicy"
                checked={acceptPolicy}
                onChange={e => setAcceptPolicy(e.target.checked)}
                className="mr-2"
                required
              />
              <label htmlFor="acceptPolicy" className="text-sm text-gray-600">
                Нажимая на кнопку, вы подтверждаете согласие с{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-medium">Политикой конфиденциальности</a>
              </label>
            </div>
            <button
              type="submit"
              disabled={!isFormValid() || !recaptchaToken || (Date.now() - lastSubmit < 30000) || !acceptPolicy}
              className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF3A2D] text-white font-bold py-3 rounded-md disabled:opacity-60"
            >
              Отправить заявку
            </button>
            {/* Диагностика: показываем причину дизейбла */}
            <div style={{fontSize:12, color:'#888', marginTop:8}}>
              {!isFormValid() && 'Форма невалидна. '}
              {!recaptchaToken && 'Нет токена reCAPTCHA. '}
              {(Date.now() - lastSubmit < 30000) && 'Ограничение по времени (30 сек). '}
              {!acceptPolicy && 'Не подтверждено согласие с политикой конфиденциальности. '}
            </div>
          </form>
        </div>
      </div>
      <Dialog open={resultModal.open} onOpenChange={() => setResultModal({ ...resultModal, open: false })}>
        <DialogContent className="max-w-md w-full flex flex-col items-center justify-center text-center py-8 px-6 rounded-lg shadow-xl" style={{background:'#FFF3E6'}}>
          <div className="flex flex-col items-center mb-4">
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded p-2 text-white font-extrabold text-2xl mb-2">RB</span>
            <span className="text-[#FF3A2D] font-extrabold text-lg">Решаем Быстро</span>
          </div>
          {resultModal.success ? (
            <>
              <div className="mb-4">
                <svg width="88" height="88" viewBox="0 0 72 72" fill="none">
                  <defs>
                    <radialGradient id="shield" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFF3E6" />
                      <stop offset="100%" stopColor="#FFD6B0" />
                    </radialGradient>
                    <linearGradient id="check" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor="#00C853" />
                      <stop offset="1" stopColor="#009688" />
                    </linearGradient>
                  </defs>
                  <path d="M36 8C36 8 14 12 14 28C14 56 36 66 36 66C36 66 58 56 58 28C58 12 36 8 36 8Z" fill="url(#shield)" stroke="#FF7A00" strokeWidth="2"/>
                  <path d="M25 39L34 48L49 27" stroke="url(#check)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-2xl font-extrabold mb-2">🎉 Заявка отправлена!🎉</div>
              <div className="text-lg font-semibold text-gray-700">
                Спасибо, что выбрали нас — мы уже на связи и скоро всё решим. Ожидайте звонка или сообщения в течение
                <span className="font-extrabold bg-gradient-to-r from-[#FF7A00] to-[#FF0000] bg-clip-text text-transparent mx-1">5 минут</span>!
              </div>
            </>
          ) : (
            <>
              <div className="text-red-500 text-5xl mb-4">✗</div>
              <div className="text-xl font-bold mb-2">Не удалось отправить заявку.</div>
              <div className="text-gray-600">Пожалуйста, попробуйте позже.</div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}