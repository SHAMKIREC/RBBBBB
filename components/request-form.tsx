"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { PrivacyPolicyModal } from "./privacy-policy-modal"

interface RequestFormProps {
  variant?: "simple" | "detailed"
}

interface FormData {
  name: string
  phone: string
  email: string
  comment: string
  selectedService: string
  sendMethod: "system" | "telegram" | "whatsapp"
  acceptPolicy: boolean
}

export function RequestForm({ variant = "simple" }: RequestFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    setValue,
    trigger
  } = useForm<FormData>({
    defaultValues: {
      sendMethod: "system",
      acceptPolicy: false
    },
    mode: "onChange"
  })

  const acceptPolicy = watch("acceptPolicy")
  const sendMethod = watch("sendMethod")

  const formatPhoneNumber = (value: string) => {
    if (!value) return value
    const phoneNumber = value.replace(/[^\d]/g, '')
    if (phoneNumber.length < 1) return ''
    if (phoneNumber.length < 4) return `+7 (${phoneNumber}`
    if (phoneNumber.length < 7) return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`
    if (phoneNumber.length < 9) return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setValue('phone', formatted)
    trigger('phone')
    }
    
  // Обработчики для поля имени
  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('KeyDown event:', e.key);
    const allowed = /^[A-Za-zА-Яа-яЁё\-]$/;
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", " "];
    
    if (!allowed.test(e.key) && !allowedKeys.includes(e.key)) {
      e.preventDefault();
      return;
    }

    // Запрещаем пробел и дефис в начале
    if ((e.key === ' ' || e.key === '-') && e.currentTarget.selectionStart === 0) {
      e.preventDefault();
      return;
    }

    // Запрещаем двойные пробелы и дефисы
    if ((e.key === ' ' || e.key === '-') && 
        e.currentTarget.value[e.currentTarget.selectionStart! - 1] === e.key) {
      e.preventDefault();
      return;
    }
  };

  const handleNamePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    console.log('Paste event');
    e.preventDefault();
    const pasted = e.clipboardData.getData('text');
    const cleaned = pasted
      .replace(/[^A-Za-zА-Яа-яЁё\s\-]/g, '') // Убираем запрещенные символы
      .replace(/\s+/g, ' ')                   // Убираем множественные пробелы
      .replace(/-+/g, '-')                    // Убираем множественные дефисы
      .trim();                                // Убираем пробелы по краям

    const target = e.target as HTMLInputElement;
    const start = target.selectionStart!;
    const end = target.selectionEnd!;
    const newValue = target.value.slice(0, start) + cleaned + target.value.slice(end);
    
    setValue('name', newValue, { shouldValidate: true });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Change event:', e.target.value);
    let value = e.target.value
      .replace(/[^A-Za-zА-Яа-яЁё\s\-]/g, '') // Убираем запрещенные символы
      .replace(/\s+/g, ' ')                   // Убираем множественные пробелы
      .replace(/-+/g, '-')                    // Убираем множественные дефисы
      .trim();                                // Убираем пробелы по краям

    // Запрещаем начинать с дефиса
    if (value.startsWith('-')) {
      value = value.slice(1);
    }

    setValue('name', value, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    if (!data.sendMethod || !data.acceptPolicy) {
      return
    }
    
    try {
      console.log(data)
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
        setIsOpen(false)
        reset()
      }, 3000)
    } catch (error) {
      console.error('Ошибка при отправке формы:', error)
    }
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
      <DialogContent className="sm:max-w-[500px]">
        {showSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Спасибо!</h3>
            <p className="text-center text-gray-500">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
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
                  Мы готовы обсудить детали и предложить оптимальное решение. Заполните форму — и мы свяжемся с вами.
                </p>
              </div>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Имя & Фамилия <span className="text-[#FF0000]">*</span>
                </Label>
                <Input
                  id="name"
                  {...register("name", {
                    required: "Обязательное поле",
                    validate: {
                      validCharacters: (value) => {
                        const nameRegex = /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё\s\-]*[A-Za-zА-Яа-яЁё]$/;
                        return nameRegex.test(value) || "Введите имя и фамилию без цифр и спецсимволов";
                      },
                      minLength: (value) => {
                        return value.length >= 2 || "Имя должно содержать минимум 2 символа";
                      }
                    }
                  })}
                  className={errors.name ? "error-gradient" : "gradient-border"}
                  placeholder="Введите ваше имя"
                  onKeyDown={handleNameKeyDown}
                  onChange={handleNameChange}
                  onPaste={handleNamePaste}
                />
                {errors.name && (
                  <p className="error-message text-sm">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">
                  Телефон <span className="text-[#FF0000]">*</span>
                </Label>
                <Input
                  id="phone"
                  {...register("phone", { 
                    required: "Обязательное поле",
                    pattern: {
                      value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                      message: "Введите корректный номер телефона"
                    }
                  })}
                  onChange={handlePhoneChange}
                  className={errors.phone ? "error-gradient" : "gradient-border"}
                  placeholder="+7 (___) ___-__-__"
                />
                {errors.phone && (
                  <p className="error-message text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (необязательно)</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Введите корректный email"
                    }
                  })}
                  className={errors.email ? "error-gradient" : "gradient-border"}
                  placeholder="example@mail.com"
                />
                {errors.email && (
                  <p className="error-message text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">
                  Выберите услугу <span className="text-[#FF0000]">*</span>
                </Label>
                <Select 
                  {...register("selectedService", { required: "Пожалуйста, выберите услугу" })}
                  onValueChange={(value) => {
                    setValue("selectedService", value)
                    trigger("selectedService")
                  }}
                >
                  <SelectTrigger className={errors.selectedService ? "error-gradient" : "gradient-border"}>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="repair">Ремонт</SelectItem>
                    <SelectItem value="installation">Установка</SelectItem>
                    <SelectItem value="maintenance">Обслуживание</SelectItem>
                    <SelectItem value="consultation">Консультация</SelectItem>
                  </SelectContent>
                </Select>
                {errors.selectedService && (
                  <p className="error-message text-sm">{errors.selectedService.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">
                  Комментарий <span className="text-[#FF0000]">*</span>
                </Label>
                <Textarea
                  id="comment"
                  {...register("comment", { 
                    required: "Обязательное поле",
                    minLength: {
                      value: 10,
                      message: "Введите содержательный комментарий (минимум 10 символов)"
                    },
                    validate: {
                      notOnlyNumbers: (value) => 
                        !/^\d+$/.test(value) || "Комментарий не может состоять только из цифр",
                      notOnlySpecialChars: (value) =>
                        /[а-яА-ЯёЁa-zA-Z]/.test(value) || "Комментарий должен содержать буквы"
                    }
                  })}
                  className={errors.comment ? "error-gradient" : "gradient-border"}
                  placeholder="Опишите ваш запрос"
                />
                {errors.comment && (
                  <p className="error-message text-sm">{errors.comment.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>
                  Куда отправить запрос? <span className="text-[#FF0000]">*</span>
                </Label>
                <RadioGroup
                  value={sendMethod}
                  onValueChange={(value: "system" | "telegram" | "whatsapp") => {
                    setValue("sendMethod", value)
                    trigger("sendMethod")
                  }}
                  className="grid grid-cols-3 gap-4"
                >
                  <div>
                    <RadioGroupItem
                      value="system"
                      id="system"
                      className="peer sr-only radio-gradient"
                    />
                    <Label
                      htmlFor="system"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-transparent peer-data-[state=checked]:bg-gradient-to-r peer-data-[state=checked]:from-[#FF7A00] peer-data-[state=checked]:to-[#FF0000] peer-data-[state=checked]:text-white cursor-pointer transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center text-white font-bold mb-2">
                        RB
                      </div>
                      <span>В систему заказов</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="telegram"
                      id="telegram"
                      className="peer sr-only radio-gradient"
                    />
                    <Label
                      htmlFor="telegram"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-transparent peer-data-[state=checked]:bg-gradient-to-r peer-data-[state=checked]:from-[#FF7A00] peer-data-[state=checked]:to-[#FF0000] peer-data-[state=checked]:text-white cursor-pointer transition-all"
                    >
                      <FaTelegram className="w-8 h-8 mb-2" />
                      <span>Telegram</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="whatsapp"
                      id="whatsapp"
                      className="peer sr-only radio-gradient"
                    />
                    <Label
                      htmlFor="whatsapp"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-transparent peer-data-[state=checked]:bg-gradient-to-r peer-data-[state=checked]:from-[#FF7A00] peer-data-[state=checked]:to-[#FF0000] peer-data-[state=checked]:text-white cursor-pointer transition-all"
                    >
                      <FaWhatsapp className="w-8 h-8 mb-2" />
                      <span>WhatsApp</span>
                    </Label>
                  </div>
                </RadioGroup>
                {!sendMethod && (
                  <p className="error-message text-sm">Укажите способ отправки запроса</p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="acceptPolicy"
                  checked={acceptPolicy}
                  onCheckedChange={(checked) => {
                    setValue("acceptPolicy", checked as boolean)
                    trigger("acceptPolicy")
                  }}
                  className={`checkbox-gradient ${!acceptPolicy ? "border-[#FF0000]" : ""}`}
                />
                <div className="grid gap-1.5 leading-none">
                  <div className="text-sm text-gray-500">
                    Нажимая на кнопку, вы соглашаетесь с{" "}
                    <button 
                      type="button"
                      onClick={() => setIsPrivacyPolicyOpen(true)}
                      className="text-[#FF7A00] hover:text-[#FF0000] underline font-semibold"
                    >
                      политикой конфиденциальности
                    </button>
                  </div>
                  {!acceptPolicy && (
                    <p className="error-message text-sm">
                      Необходимо принять условия политики конфиденциальности
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !acceptPolicy || !sendMethod}
                className="w-full bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white hover:from-[#FF0000] hover:to-[#FF7A00] transition-all duration-300"
              >
                {isSubmitting ? "Отправка..." : "Отправить запрос"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>

      {/* Модальное окно политики конфиденциальности */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-black/50" 
            onClick={() => setShowPrivacyPolicy(false)}
          />
          
          <div className="relative z-50 w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg max-h-[80vh] overflow-y-auto mx-4">
            <button
              type="button"
              onClick={() => setShowPrivacyPolicy(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#FF7A00] text-xl"
            >
              ×
            </button>

            <h2 className="text-[#FF7A00] text-2xl font-bold mb-6">
              Политика конфиденциальности
            </h2>

            <div className="space-y-4 text-sm text-gray-800">
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации, которую пользователь предоставляет при использовании сайта "РЕШАЕМ БЫСТРО" (https://r-bservice.vercel.app).
              </p>

              <div>
                <h3 className="font-bold mb-2">1. Оператор</h3>
                <p>
                  ИП или ООО «РЕШАЕМ БЫСТРО» осуществляет сбор и обработку персональных данных, предоставленных пользователями через формы на сайте.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">2. Какие данные мы собираем</h3>
                <ul className="list-inside space-y-1">
                  <li>• Имя пользователя</li>
                  <li>• Номер телефона</li>
                  <li>• Электронную почту (если указывается)</li>
                  <li>• Сообщение/комментарий</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">3. Цель сбора данных</h3>
                <ul className="list-inside space-y-1">
                  <li>• Обратная связь с пользователем</li>
                  <li>• Обработка заявок и предоставление услуг</li>
                  <li>• Улучшение качества сервиса</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">4. Хранение и безопасность</h3>
                <p>
                  Мы обязуемся не передавать ваши данные третьим лицам без вашего согласия.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">5. Согласие на обработку</h3>
                <p>
                  Отправляя форму, пользователь соглашается с данной политикой согласно ФЗ № 152-ФЗ.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">6. Связь с нами</h3>
                <p>
                  📧 <a href="mailto:rb.service24@mail.ru" className="text-blue-600 hover:underline">rb.service24@mail.ru</a><br />
                  📞 <a href="tel:+79330306949" className="text-blue-600 hover:underline">+7 933 030 69 49</a>
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">7. Изменения политики</h3>
                <p>
                  Актуальная версия всегда доступна на сайте:{" "}
                  <a
                    href="https://r-bservice.vercel.app/privacy-policy"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    r-bservice.vercel.app/privacy-policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <PrivacyPolicyModal
        isOpen={isPrivacyPolicyOpen}
        onClose={() => setIsPrivacyPolicyOpen(false)}
      />
    </Dialog>
  )
} 