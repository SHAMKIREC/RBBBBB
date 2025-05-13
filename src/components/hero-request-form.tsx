import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface HeroRequestFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultComment?: string;
  hideServiceSelect?: boolean;
}

const nameFilter = (value: string) =>
  value
    .replace(/[^A-Za-zА-Яа-яЁё\s'-]/g, "") // только буквы, пробел, дефис, апостроф
    .replace(/\s{2,}/g, " ") // убирает лишние пробелы
    .replace(/^\s+|\s+$/g, "") // убирает пробелы в начале и конце
    .replace(/[^A-Za-zА-Яа-яЁё\s'-]/g, ""); // повторная фильтрация для уверенности

const emailFilter = (value: string) =>
  value
    .replace(/[^A-Za-z0-9@._-]/g, "") // только латиница, цифры и спецсимволы email
    .replace(/@{2,}/g, "@") // только один @ подряд
    .replace(/^\s+|\s+$/g, ""); // убирает пробелы в начале и конце

export function HeroRequestForm({ open, onOpenChange, defaultComment = "", hideServiceSelect = false }: HeroRequestFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: defaultComment,
  });
  const [service, setService] = useState("");
  const [sendMethod, setSendMethod] = useState("system");
  const [accept, setAccept] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accept) return;
    // Здесь логика отправки формы
    console.log('Form submitted:', formData);
    onOpenChange(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
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
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={e => {
                  const filtered = nameFilter(e.target.value);
                  setFormData(prev => ({ ...prev, name: filtered }));
                }}
                required
                maxLength={32}
                className="border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0"
                autoComplete="off"
              />
            </div>

            <div>
              <Label className="text-sm font-medium mb-1 text-black">Телефон</Label>
              <Input 
                placeholder="Введите ваш номер телефона"
                className="border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded bg-white text-black placeholder:text-gray-400"
                value={formData.phone}
                onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Почта (необязательно)</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={e => {
                  const filtered = emailFilter(e.target.value);
                  setFormData(prev => ({ ...prev, email: filtered }));
                }}
                maxLength={64}
                className="border-2 border-[#FF7A00] focus:border-[#FF3A2D] focus:ring-0"
                autoComplete="off"
              />
            </div>

            <div>
              <Label className="text-sm font-medium mb-1 text-black">Комментарий</Label>
              <Textarea 
                placeholder="Опишите ваш запрос или задайте вопрос"
                className="border-2 border-[#FF4D00] focus:border-[#FF4D00] rounded min-h-[100px] bg-white text-black placeholder:text-gray-400"
                value={formData.comment}
                onChange={e => setFormData(f => ({ ...f, comment: e.target.value }))}
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

            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                className="mt-1 w-4 h-4 rounded border-[#FF7A00] text-[#FF7A00] focus:ring-[#FF7A00] focus:ring-offset-0 checked:bg-gradient-to-r checked:from-[#FF7A00] checked:to-[#FF0000]" 
                checked={accept}
                onChange={e => setAccept(e.target.checked)}
                required
              />
              <span className="text-xs text-gray-500">
                Нажимая на кнопку, вы подтверждаете согласие с{' '}
                <button
                  type="button"
                  className="text-[#FF4D00] hover:underline cursor-pointer p-0 m-0 bg-transparent border-none inline"
                  style={{ textDecoration: 'underline', background: 'none', border: 'none', padding: 0, margin: 0 }}
                  onClick={() => setShowPolicy(true)}
                >
                  Политикой конфиденциальности
                </button>
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
      {/* Модалка с согласием и двумя фото */}
      <Dialog open={showPolicy} onOpenChange={setShowPolicy}>
        <DialogContent className="max-w-lg p-6 bg-white border-2 border-[#FF4D00] rounded-xl shadow-xl overflow-y-auto z-50">
          <h2 className="text-xl font-bold mb-4">Согласие на обработку персональных данных</h2>
          <div className="text-sm text-black mb-4 space-y-2" style={{ whiteSpace: 'pre-line' }}>
            В соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» я свободно, своей волей и в своём интересе даю конкретное, информированное и сознательное согласие оператору персональных данных — компании «Решаем Быстро» (адрес электронной почты: rb.service24@mail.ru) — на обработку моих персональных данных в целях:

приёма заявок, связи со мной и предоставления консультаций;
отправки информационных и рекламных рассылок;
предоставления справочной информации по услугам;
улучшения качества обслуживания и анализа интересов пользователей;
персонализации предложений, связанных с товарами и услугами компании;
исполнения обязательств по договору оказания услуг (например, для заключения и выполнения договоров на оказание строительных, IT-услуг и прочих услуг, указанных на сайте);
а также иных действий, необходимых для эффективного взаимодействия между мной и компанией.

Персональные данные, которые могут быть обработаны:
- имя, номер телефона, адрес электронной почты;
- комментарии, содержащиеся в заявке;
- история обращений, заказов и взаимодействий с сайтом;
- техническая информация: IP-адрес, cookies, данные о браузере и устройстве.

Обработка может включать: сбор, хранение, уточнение, использование, обезличивание, передачу (в случаях, предусмотренных законом), удаление и уничтожение данных. Обработка может вестись как автоматизированными, так и неавтоматизированными средствами.

Срок действия согласия — 20 лет, или до момента его отзыва по заявлению, направленному на указанный выше адрес электронной почты. После отзыва согласия некоторые функции сайта и услуги могут быть недоступны.

Я подтверждаю, что ознакомлен(а) с политикой в отношении обработки персональных данных и осознаю возможные последствия отзыва согласия.
          </div>
          <Button onClick={() => setShowPolicy(false)} className="w-full mt-2 bg-[#FF4D00] text-white">Закрыть</Button>
        </DialogContent>
      </Dialog>
    </>
  );
} 