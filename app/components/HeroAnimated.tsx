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

  // Формируем текст для комментария
  const comment = [
    formData.area && `Площадь: ${formData.area} м²`,
    formData.type && `Тип: ${getTypeName(formData.type)}`,
    formData.rooms && `Комнат: ${getRoomsName(formData.rooms)}`,
    formData.repairType && `Вид ремонта: ${getRepairTypeName(formData.repairType)}`
  ].filter(Boolean).join(", ");

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
                <form className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium mb-1">Имя & Фамилия</Label>
                    <Input 
                      placeholder="Введите ваше имя и фамилию"
                      className="border-[#FF4D00] focus:border-[#FF4D00] rounded"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1">Телефон</Label>
                    <Input 
                      placeholder="Введите ваш номер телефона"
                      className="border-[#FF4D00] focus:border-[#FF4D00] rounded"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1">Почта (необязательно)</Label>
                    <Input 
                      placeholder="Укажите вашу почту"
                      className="border-[#FF4D00] focus:border-[#FF4D00] rounded"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1">Комментарий</Label>
                    <Textarea 
                      placeholder="Опишите ваш запрос или задайте вопрос"
                      className="border-[#FF4D00] focus:border-[#FF4D00] rounded min-h-[100px]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="service">Выберите услуги</Label>
                    <Select>
                      <SelectTrigger className="border-[#FF7A00] focus:ring-[#FF7A00] focus:border-[#FF7A00] focus:ring-0">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="repair">Ремонт</SelectItem>
                        <SelectItem value="engineering">Инженерные системы</SelectItem>
                        <SelectItem value="construction">Строительство</SelectItem>
                        <SelectItem value="windows">Окна и двери</SelectItem>
                        <SelectItem value="roof">Кровля и фасады</SelectItem>
                        <SelectItem value="it">IT-услуги</SelectItem>
                        <SelectItem value="academic">Академическая поддержка</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Куда отправить запрос?</Label>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="sendMethod" 
                          value="system" 
                          className="w-4 h-4 text-[#FF4D00] border-[#FF4D00] focus:ring-[#FF4D00]" 
                          defaultChecked 
                        />
                        <div className="w-6 h-6 rounded bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center">
                          <span className="text-xs text-white font-bold">RB</span>
                        </div>
                        <span className="text-sm">В систему заказов</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="sendMethod" 
                          value="telegram" 
                          className="w-4 h-4 text-[#FF4D00] border-[#FF4D00] focus:ring-[#FF4D00]" 
                        />
                        <Icon icon="mdi:telegram" className="w-6 h-6 text-[#229ED9]" />
                        <span className="text-sm">Telegram</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="sendMethod" 
                          value="whatsapp" 
                          className="w-4 h-4 text-[#FF4D00] border-[#FF4D00] focus:ring-[#FF4D00]" 
                        />
                        <Icon icon="fa-brands:whatsapp" className="w-6 h-6 text-[#25D366]" />
                        <span className="text-sm">WhatsApp</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-4 h-4 rounded border-[#FF7A00] text-[#FF7A00] focus:ring-[#FF7A00] focus:ring-offset-0 checked:bg-gradient-to-r checked:from-[#FF7A00] checked:to-[#FF0000]" 
                    />
                    <span className="text-xs text-gray-500">
                      Нажимая на кнопку, вы подтверждаете согласие с{" "}
                      <a href="#" className="text-[#FF4D00] hover:underline">
                        Политикой конфиденциальности
                      </a>
                    </span>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white hover:opacity-90"
                  >
                    Отправить запрос
                  </Button>
                </form>
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