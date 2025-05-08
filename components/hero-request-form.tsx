import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Icon } from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface HeroRequestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultComment?: string;
  hideServiceSelect?: boolean;
}

export function HeroRequestForm({ open, onOpenChange, defaultComment = "", hideServiceSelect = false }: HeroRequestFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState(defaultComment);
  const [service, setService] = useState("");
  const [sendMethod, setSendMethod] = useState("system");
  const [accept, setAccept] = useState(false);

  useEffect(() => {
    if (open) {
      setComment(defaultComment);
    }
  }, [defaultComment, open]);

  // Сброс формы при закрытии
  const handleOpenChange = (val: boolean) => {
    if (!val) {
      setName("");
      setPhone("");
      setEmail("");
      setComment(defaultComment);
      setService("");
      setSendMethod("system");
      setAccept(false);
    }
    onOpenChange(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь логика отправки
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-6 bg-white border-2 border-[#FF4D00] rounded-xl shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded bg-[#FF4D00] flex items-center justify-center">
            <span className="text-white font-bold">RB</span>
          </div>
          <span className="text-[#FF4D00] font-bold">Решаем Быстро</span>
        </div>
        <h2 className="text-xl font-medium mb-2 text-black">Узнайте наши условия</h2>
        <p className="text-sm text-[#333] mb-6">
          Мы готовы обсудить детали и предложить оптимальное решение. Заполните форму — и мы свяжемся с вами.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label className="text-sm font-medium mb-1 text-black">Имя</Label>
            <Input 
              placeholder="Введите ваше имя"
              className="border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded bg-white text-black placeholder:text-gray-400"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label className="text-sm font-medium mb-1 text-black">Телефон</Label>
            <Input 
              placeholder="Введите ваш номер телефона"
              className="border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded bg-white text-black placeholder:text-gray-400"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <Label className="text-sm font-medium mb-1 text-black">Почта (необязательно)</Label>
            <Input 
              placeholder="Укажите вашу почту"
              className="border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded bg-white text-black placeholder:text-gray-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Label className="text-sm font-medium mb-1 text-black">Комментарий</Label>
            <Textarea 
              placeholder="Опишите ваш запрос или задайте вопрос"
              className="border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded min-h-[100px] bg-white text-black placeholder:text-gray-400"
              value={comment}
              onChange={e => setComment(e.target.value)}
            />
          </div>
          {!hideServiceSelect && (
            <div className="grid gap-2">
              <Label htmlFor="service" className="text-black">Выберите услуги</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="border-2 border-[#FF7A00] focus:ring-0 focus:border-[#FF7A00] bg-white text-black">
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black border-[#FF7A00]">
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
          )}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-black">Куда отправить запрос?</Label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div
                className={`flex-1 flex flex-col items-center justify-center min-h-[40px] p-1 rounded-xl cursor-pointer border-2 transition-all select-none duration-200
                  ${sendMethod === "system"
                    ? "bg-gradient-to-br from-[#FF7A00] to-[#FF0000] text-white border-transparent shadow-md"
                    : "bg-white border-[#FF4D00] text-[#FF4D00] hover:border-[#FF7A00]"}
                `}
                onClick={() => setSendMethod("system")}
              >
                <div className="w-12 h-12 rounded-[10px] bg-gradient-to-br from-[#FF7A00] to-[#FF4D00] flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-lg">RB</span>
                </div>
                <span className="text-xs font-bold mt-2">В систему<br/>заказов</span>
              </div>
              <div
                className={`flex-1 flex flex-col justify-center items-center w-28 h-28 rounded-xl cursor-pointer border-2 transition-all select-none duration-200
                  ${sendMethod === "telegram"
                    ? "bg-[#229ED9] text-white border-transparent shadow-md"
                    : "bg-white border-[#229ED9] text-[#229ED9] hover:border-[#229ED9]"}
                `}
                onClick={() => setSendMethod("telegram")}
              >
                <div className="flex flex-col items-center justify-center">
                  <svg
                    className="w-12 h-12 mb-2"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="24" fill="#229ED9"/>
                    <path d="M36.7 13.3L32.1 36.1c-.3 1.3-1.1 1.6-2.2 1l-6.1-4.5-2.9 2.8c-.3.3-.6.6-1.3.6l.5-6.4 11.6-10.5c.5-.5-.1-.7-.8-.2l-14.3 9-6.2-1.9c-1.3-.4-1.3-1.3.3-1.9l24-9.3c1.1-.4 2.1.3 1.7 1.9z" fill="#fff"/>
                  </svg>
                  <span className={`text-xs font-bold ${sendMethod === "telegram" ? "text-white" : "text-[#229ED9]"}`}>Telegram</span>
                </div>
              </div>
              <div
                className={`flex-1 flex flex-col justify-center items-center w-28 h-28 rounded-xl cursor-pointer border-2 transition-all select-none duration-200
                  ${sendMethod === "whatsapp"
                    ? "bg-[#25D366] text-white border-transparent shadow-md"
                    : "bg-white border-[#25D366] text-[#25D366] hover:border-[#25D366]"}
                `}
                onClick={() => setSendMethod("whatsapp")}
              >
                <div className="flex flex-col items-center justify-center">
                  {sendMethod === "whatsapp" ? (
                    <svg className="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="12" fill="#25D366"/>
                      <path d="M34.6 29.2c-.5-.2-2.8-1.4-3.2-1.6-.4-.2-.7-.3-1.1.2-.3.4-1.3 1.6-1.6 2-.3.4-.6.4-1.1.2-.5-.2-2.1-.8-4-2.5-1.9-1.7-3.2-3.7-3.6-4.2-.4-.5-.1-.8.2-1.1.2-.2.5-.6.7-.9.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1.1-2.7-1.5-3.7-.4-1-.8-.9-1.1-.9-.3 0-.6 0-1 .1-.3.1-.8.2-1.2.6-.4.4-.5 1-.5 1.5 0 .5.2 1 .4 1.4.2.4 1 1.8 2.3 3.1 1.3 1.3 3 2.5 3.4 2.7.4.2.7.2 1 .1.3-.1.7-.5 1.1-1 .3-.5.6-.5 1-.3.4.2 2.1 1 2.5 1.2.4.2.7.2.9-.2.3-.4 1.1-1.2 1.3-1.5.2-.3.2-.5-.2-.7z" fill="#fff"/>
                      <circle cx="24" cy="24" r="20" stroke="#fff" strokeWidth="2"/>
                    </svg>
                  ) : (
                    <svg className="w-12 h-12 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="48" rx="12" fill="#fff"/>
                      <path d="M34.6 29.2c-.5-.2-2.8-1.4-3.2-1.6-.4-.2-.7-.3-1.1.2-.3.4-1.3 1.6-1.6 2-.3.4-.6.4-1.1.2-.5-.2-2.1-.8-4-2.5-1.9-1.7-3.2-3.7-3.6-4.2-.4-.5-.1-.8.2-1.1.2-.2.5-.6.7-.9.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1.1-2.7-1.5-3.7-.4-1-.8-.9-1.1-.9-.3 0-.6 0-1 .1-.3.1-.8.2-1.2.6-.4.4-.5 1-.5 1.5 0 .5.2 1 .4 1.4.2.4 1 1.8 2.3 3.1 1.3 1.3 3 2.5 3.4 2.7.4.2.7.2 1 .1.3-.1.7-.5 1.1-1 .3-.5.6-.5 1-.3.4.2 2.1 1 2.5 1.2.4.2.7.2.9-.2.3-.4 1.1-1.2 1.3-1.5.2-.3.2-.5-.2-.7z" fill="#25D366"/>
                      <circle cx="24" cy="24" r="20" stroke="#25D366" strokeWidth="2"/>
                    </svg>
                  )}
                  <span className={`text-xs font-bold ${sendMethod === "whatsapp" ? "text-white" : "text-[#25D366]"}`}>WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              className="mt-1 w-4 h-4 rounded border-[#FF7A00] text-[#FF7A00] focus:ring-[#FF7A00] focus:ring-offset-0 checked:bg-gradient-to-r checked:from-[#FF7A00] checked:to-[#FF0000]" 
              checked={accept}
              onChange={e => setAccept(e.target.checked)}
              required
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
            className="w-full h-12 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white hover:opacity-90 rounded-xl text-base font-bold"
            disabled={!accept}
          >
            Отправить запрос
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 