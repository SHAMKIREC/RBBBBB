"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Icon } from "@/components/ui/icon";
import { Calculator } from "@/components/Calculator";
import { HeroRequestForm } from "@/components/hero-request-form";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// Компонент анимированного дефиса (эффект "швырнули палку")
function ThrownDash({ onComplete }: { onComplete?: () => void }) {
  return (
    <motion.div
      initial={{
        x: -250, // старт далеко слева
        y: 0,
        rotate: 0,
        scaleX: 15, // длинная палка
        opacity: 1,
      }}
      animate={{
        x: 0, // центр секции
        y: 56, // ниже, на уровень слогана (подбирается визуально)
        rotate: 720, // два оборота вокруг оси
        scaleX: 1, // становится коротким
        opacity: 1,
        transition: {
          x: { duration: 1.1, ease: "easeInOut" },
          y: { duration: 1.1, ease: "easeInOut" },
          rotate: { duration: 1.1, ease: "easeInOut" },
          scaleX: { duration: 1.1, ease: "easeInOut" },
        },
      }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onComplete}
      style={{
        width: '0.75em',
        height: '0.18em',
        background: 'linear-gradient(90deg, #FF7A00, #FF0000)',
        borderRadius: '2px',
        verticalAlign: 'middle',
        display: 'inline-block',
        position: 'absolute',
        left: '50%',
        top: 180, // ниже, на уровень слогана (подбирается визуально)
        transform: 'translateX(-50%)',
        zIndex: 10,
      }}
    />
  );
}

export function HeroAnimated() {
  const [isSOSOpen, setIsSOSOpen] = useState(false);
  const [showDash, setShowDash] = useState(true);
  const [dashPhase, setDashPhase] = useState<'circle' | 'short'>('circle');
  const [formData, setFormData] = useState({ area: "", type: "", rooms: "", repairType: "" });
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");
  const [serviceError, setServiceError] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({ name: '', phone: '', email: '', comment: '' });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [success, setSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [acceptPolicy, setAcceptPolicy] = useState(false);
  const [acceptPolicyError, setAcceptPolicyError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [triedSubmit, setTriedSubmit] = useState(false);

  // Автоматически подставлять услугу в комментарий
  const serviceNames: Record<string, string> = {
    repair: "Ремонт",
    engineering: "Инженерные системы",
    construction: "Строительство",
    windows: "Окна и двери",
    roof: "Кровля и фасады",
    it: "IT-услуги",
    academic: "Академическая поддержка"
  };

  function handleServiceChange(value: string) {
    setService(value);
    setServiceError(false);
    const newServiceName = serviceNames[value] || "";
    if (!comment || Object.values(serviceNames).some(name => comment.startsWith(name))) {
      setComment(newServiceName);
    }
  }

  // Анимация для логотипа
  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: [0.5, 1.1, 1], opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  // Анимация для заголовка по буквам
  const title = "РЕШАЕМ БЫСТРО";
  const titleVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };
  const letterVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { type: "spring", stiffness: 500, damping: 30 } },
  };

  // Анимация для слогана
  const sloganVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Анимация для кнопок
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5, duration: 0.7 } },
  };

  useEffect(() => {
    if (executeRecaptcha) {
      executeRecaptcha("order_form").then(token => setRecaptchaToken(token));
    }
  }, [executeRecaptcha]);

  function validate() {
    let valid = true;
    const newErrors = { name: '', phone: '', email: '', comment: '' };
    // Имя
    if (!name.trim()) {
      newErrors.name = 'Введите имя';
      valid = false;
    } else if (!/^([a-zA-Zа-яА-ЯёЁ\s'-]{2,})$/.test(name.trim())) {
      newErrors.name = 'Только буквы, минимум 2 символа';
      valid = false;
    }
    // Телефон (строгая РФ)
    const digits = phone.replace(/\D/g, '');
    if (!phone.trim()) {
      newErrors.phone = 'Введите телефон';
      valid = false;
    } else if (!phone.startsWith('+7')) {
      newErrors.phone = 'Номер должен начинаться с +7';
      valid = false;
    } else if (digits.length !== 11 || !digits.startsWith('7')) {
      newErrors.phone = 'Введите корректный номер в формате +7XXXXXXXXXX';
      valid = false;
    }
    // Email
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) {
      newErrors.email = 'Некорректный email';
      valid = false;
    }
    // Комментарий
    if (!comment.trim() || comment.trim().length < 5) {
      newErrors.comment = 'Минимум 5 символов';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  }

  function isFormValid() {
    const digits = phone.replace(/\D/g, '');
    if (!service) return false;
    if (!name.trim() || !/^([a-zA-Zа-яА-ЯёЁ\s'-]{2,})$/.test(name.trim())) return false;
    if (!phone.trim() || !/^\+7[\d\s\-()]{10,}$/.test(phone.trim())) return false;
    if (!phone.startsWith('+7')) return false;
    if (digits.length !== 11 || !digits.startsWith('7')) return false;
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) return false;
    if (!comment.trim() || comment.trim().length < 5) return false;
    if (!acceptPolicy) return false;
    return true;
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/[^\d\s+\-()]/g, '');
    // Автозамена первой 8 на +7
    if (value.length === 1 && value === '8') value = '+7';
    if (/^[0-9]/.test(value) && value.length > 0) value = value.replace(/^\d/, '+7');
    // Если не начинается с +7, всегда делаем +7
    if (!value.startsWith('+7')) value = '+7';
    // Оставляем только +7 и максимум 10 цифр после +7
    if (value.startsWith('+7')) {
      const digits = value.replace(/\D/g, '');
      const main = digits.slice(1, 11); // только 10 цифр после 7
      value = '+7' + main;
    }
    setPhone(value);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.slice(0, 64);
    setEmail(value);
    if (value.trim() && !/^\S+@\S+\.\S+$/.test(value.trim())) {
      setErrors(prev => ({ ...prev, email: 'Некорректный email' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  }

  function handleKeyDown(e: React.KeyboardEvent, field: string) {
    if (e.key === 'Enter' && !e.shiftKey) {
      if (!service) setTriedSubmit(true);
      e.preventDefault();
      if (field === 'name') phoneRef.current?.focus();
      if (field === 'phone') emailRef.current?.focus();
      if (field === 'email') commentRef.current?.focus();
      if (field === 'comment' && isFormValid()) {
        (e.target as HTMLTextAreaElement).form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
      }
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTriedSubmit(true);
    let hasError = false;
    if (!service) {
      setServiceError(true);
      hasError = true;
    }
    if (!acceptPolicy) {
      setAcceptPolicyError('Подтвердите согласие с политикой');
      hasError = true;
    } else {
      setAcceptPolicyError("");
    }
    if (!validate() || hasError) return;
    if (!recaptchaToken) {
      setErrors(prev => ({ ...prev, comment: 'Подтвердите, что вы не робот (reCAPTCHA)' }));
      return;
    }
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      setService("");
      setName("");
      setPhone("");
      setEmail("");
      setComment("");
      setErrors({ name: '', phone: '', email: '', comment: '' });
      setAcceptPolicy(false);
      setAcceptPolicyError("");
      setTriedSubmit(false);
    }, 5000);
  }

  // Подсказка для услуги: если все поля заполнены, чекбокс отмечен, но услуга не выбрана — всегда показывать
  const shouldShowServiceHint =
    (!service && name && phone && comment && acceptPolicy && isFormValid() === false) || (serviceError || (triedSubmit && !service));

  return (
    <motion.section
      className="py-12"
      initial="hidden"
      animate="visible"
      variants={{}}
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          className="w-24 h-24 rounded-[20px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center mb-6 mx-auto"
          variants={logoVariants}
        >
          <span className="text-4xl font-bold text-white">RB</span>
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants} style={{ display: "inline-block" }}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 font-semibold tracking-wide"
          variants={sloganVariants}
        >
          Строим будущее
          <span className="mx-2 align-middle inline-block" style={{ width: '0.75em', height: '0.18em', background: 'linear-gradient(90deg, #FF7A00, #FF0000)', borderRadius: '2px', verticalAlign: 'middle', display: 'inline-block' }}></span>
          ремонтируем настоящее!
        </motion.p>
        <motion.div className="mb-8">
          {/* Удаляю калькулятор и форму */}
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={buttonVariants}>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="w-[160px] h-[48px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium hover:from-blue-600 hover:to-blue-800"
                >
                  Узнать условия
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[480px] p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded bg-[#FF4D00] flex items-center justify-center">
                    <span className="text-white font-bold">RB</span>
                  </div>
                  <span className="text-[#FF4D00] font-bold">Решаем Быстро</span>
                </div>
                <h2 className="text-xl font-medium mb-2">Узнайте наши условия</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Мы готовы обсудить детали и предложить оптимальное решение. Заполните форму — и мы свяжемся с вами.
                </p>
                <form className="space-y-4" onSubmit={handleSubmit} autoComplete="on">
                  {success && (
                    <div className="text-green-600 text-center font-semibold py-2">Заявка отправлена!</div>
                  )}
                  <div className="grid gap-2">
                    <label htmlFor="service" className="text-sm font-medium mb-1">Выберите услуги</label>
                    <select
                      id="service"
                      className={`border-2 w-full p-2 rounded focus:outline-none transition-colors
                        ${(serviceError || (triedSubmit && !service) || shouldShowServiceHint) ? 'border-red-500 focus:border-red-500' : 'border-[#FF7A00] focus:border-[#FF3A2D]'}
                      `}
                      value={service}
                      onChange={e => { handleServiceChange(e.target.value); setServiceError(false); setTriedSubmit(false); }}
                      required
                    >
                      <option value="">Выберите услугу</option>
                      <option value="repair">Ремонт</option>
                      <option value="engineering">Инженерные системы</option>
                      <option value="construction">Строительство</option>
                      <option value="windows">Окна и двери</option>
                      <option value="roof">Кровля и фасады</option>
                      <option value="it">IT-услуги</option>
                      <option value="academic">Академическая поддержка</option>
                    </select>
                    {/* Подсказка под select, если чекбокс отмечен и услуга не выбрана */}
                    {(serviceError || (triedSubmit && !service) || shouldShowServiceHint || (acceptPolicy && !service)) && (
                      <div className="text-red-500 text-xs mt-1">Пожалуйста, выберите услугу</div>
                    )}
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1">Имя</Label>
                    <Input 
                      placeholder="Введите ваше имя"
                      className={`border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded ${errors.name ? 'border-red-500' : ''}`}
                      value={name}
                      onChange={e => setName(e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s'-]/g, '').slice(0, 32))}
                      required
                      maxLength={32}
                      ref={nameRef}
                      onKeyDown={e => handleKeyDown(e, 'name')}
                      autoComplete="name"
                      name="name"
                      id="name"
                    />
                    {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1">Телефон</Label>
                    <Input 
                      type="tel"
                      placeholder="Ваш номер телефона"
                      className={`border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded ${errors.phone ? 'border-red-500' : ''}`}
                      value={phone}
                      onChange={handlePhoneChange}
                      required
                      ref={phoneRef}
                      onKeyDown={e => handleKeyDown(e, 'phone')}
                      autoComplete="tel"
                      name="phone"
                      id="phone"
                    />
                    {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1">Почта (необязательно)</Label>
                    <Input 
                      placeholder="Укажите вашу почту"
                      className={`border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded ${errors.email ? 'border-red-500' : ''}`}
                      value={email}
                      onChange={handleEmailChange}
                      maxLength={64}
                      ref={emailRef}
                      onKeyDown={e => handleKeyDown(e, 'email')}
                      autoComplete="email"
                      name="email"
                      id="email"
                    />
                    {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1">Комментарий</Label>
                    <Textarea 
                      placeholder="Опишите ваш запрос или задайте вопрос"
                      className={`border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded min-h-[100px] ${errors.comment ? 'border-red-500' : ''}`}
                      value={comment}
                      onChange={e => setComment(e.target.value)}
                      ref={commentRef}
                      onKeyDown={e => handleKeyDown(e, 'comment')}
                    />
                    {errors.comment && <div className="text-red-500 text-xs mt-1">{errors.comment}</div>}
                  </div>
                  <div className="flex items-start gap-2">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-4 h-4 rounded border-[#FF7A00] text-[#FF7A00] focus:ring-[#FF7A00] focus:ring-offset-0 checked:bg-gradient-to-r checked:from-[#FF7A00] checked:to-[#FF0000]" 
                      checked={acceptPolicy}
                      onChange={e => { setAcceptPolicy(e.target.checked); setAcceptPolicyError(""); }}
                      required
                    />
                    <span className="text-xs text-gray-500">
                      Нажимая на кнопку, вы подтверждаете согласие с{" "}
                      <a href="#" className="text-[#FF4D00] hover:underline">
                        Политикой конфиденциальности
                      </a>
                    </span>
                  </div>
                  {acceptPolicyError && <div className="text-red-500 text-xs mt-1">{acceptPolicyError}</div>}
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white hover:opacity-90"
                    disabled={!isFormValid() || !recaptchaToken}
                    tabIndex={0}
                    onMouseDown={e => {
                      if (!service) {
                        setTriedSubmit(true);
                      }
                    }}
                    onClick={e => {
                      if (!service) {
                        setTriedSubmit(true);
                      }
                    }}
                  >
                    Отправить запрос
                  </Button>
                </form>
                <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
                  <DialogContent className="max-w-md w-full flex flex-col items-center justify-center text-center py-8 px-6 rounded-lg shadow-xl" style={{background:'#FFF3E6'}}>
                    <div className="flex flex-col items-center mb-4">
                      <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] rounded p-2 text-white font-extrabold text-2xl mb-2">RB</span>
                      <span className="text-[#FF3A2D] font-extrabold text-lg">Решаем Быстро</span>
                    </div>
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
                    <div className="text-2xl font-extrabold mb-2 flex items-center justify-center gap-2 text-black">
                      <span role="img" aria-label="confetti">🎉</span>
                      <span>Заявка отправлена!</span>
                      <span role="img" aria-label="confetti">🎉</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-700">
                      Спасибо, что выбрали нас — мы уже на связи и скоро всё решим. Ожидайте звонка или сообщения в течение
                      <span className="font-extrabold bg-gradient-to-r from-[#FF7A00] to-[#FF0000] bg-clip-text text-transparent mx-1">5 минут</span>!
                    </div>
                  </DialogContent>
                </Dialog>
              </DialogContent>
            </Dialog>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button
              className="w-[160px] h-[48px] bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium hover:from-red-600 hover:to-orange-600"
              onClick={() => setIsSOSOpen(true)}
            >
              SOS 24/7
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Вспомогательные функции для отображения названий
function getTypeName(type: string) {
  switch(type) {
    case "apartment": return "Квартира"
    case "house": return "Дом"
    case "office": return "Офис"
    case "commercial": return "Коммерческое помещение"
    case "other": return "Другое"
    default: return ""
  }
}
function getRoomsName(rooms: string) {
  switch(rooms) {
    case "studio": return "Студия"
    case "1": return "1 комната"
    case "2": return "2 комнаты"
    case "3": return "3 комнаты"
    case "4": return "4 комнаты"
    case "5+": return "5 и более"
    default: return ""
  }
}
function getRepairTypeName(type: string) {
  switch(type) {
    case "chernovoy": return "Черновой"
    case "chistovoy": return "Чистовой"
    case "pod_kluch": return "Под ключ"
    case "dizainerskiy": return "Дизайнерский"
    default: return ""
  }
} 