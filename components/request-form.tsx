"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface RequestFormProps {
  defaultComment?: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RequestForm({ defaultComment = "", open, onOpenChange }: RequestFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState(defaultComment)
  const [sendMethod, setSendMethod] = useState("system")
  const [acceptPolicy, setAcceptPolicy] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setComment(defaultComment)
  }, [defaultComment])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !comment || !acceptPolicy) {
      setError("Пожалуйста, заполните все обязательные поля и примите политику.")
      return
    }
    setError("")
    setSuccess(true)
      setTimeout(() => {
      setSuccess(false)
      onOpenChange(false)
      setName("")
      setPhone("")
      setEmail("")
      setComment(defaultComment)
      setSendMethod("system")
      setAcceptPolicy(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent style={{
        width: '100vw',
        maxWidth: '100vw',
        minWidth: 0,
        minHeight: 0,
        maxHeight: '100vh',
        margin: 0,
        padding: 0,
        border: 'none',
        background: 'transparent',
        boxSizing: 'border-box',
        overflowY: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          position: 'relative',
          background: 'white',
          boxShadow: '0 4px 32px rgba(0,0,0,0.12)',
          padding: 32,
          border: '2px solid',
          borderImage: 'linear-gradient(90deg, #FF7A00, #FF0000) 1',
          borderRadius: 0,
          width: '100%',
          maxWidth: 400,
          minWidth: 0,
          boxSizing: 'border-box',
          maxHeight: '100vh',
          overflowY: 'auto',
        }}>
          <button
            type="button"
            aria-label="Закрыть"
            onClick={() => onOpenChange(false)}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              width: 28,
              height: 28,
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M15 5L5 15" stroke="#FF2D00" strokeWidth="2" strokeLinecap="round"/>
              </svg>
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
            <div style={{ width: 48, height: 48, borderRadius: 0, background: 'linear-gradient(90deg, #FF7A00, #FF0000)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 24, marginBottom: 8 }}>RB</div>
            <div style={{ background: 'linear-gradient(90deg, #FF7A00, #FF0000)', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 600, fontSize: 18, marginBottom: 4 }}>Решаем Быстро</div>
            <div style={{ fontWeight: 700, fontSize: 22, textAlign: 'center', marginBottom: 4 }}>Узнайте наши условия</div>
            <div style={{ color: '#6b7280', textAlign: 'center', fontSize: 14, marginBottom: 4 }}>
              Мы готовы обсудить детали и предложить оптимальное решение. Заполните форму — и мы свяжемся с вами в течение <span style={{ background: 'linear-gradient(90deg, #FF7A00, #FF0000)', WebkitBackgroundClip: 'text', color: 'transparent', fontWeight: 700 }}>5 минут</span>
            </div>
          </div>
          {success ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0', gap: 16 }}>
              <div style={{ width: 64, height: 64, borderRadius: 32, background: 'linear-gradient(90deg, #FF7A00, #FF0000)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width={32} height={32} fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600 }}>Спасибо!</h3>
              <p style={{ color: '#6b7280', textAlign: 'center' }}>Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fio" style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Имя</label>
                <Input
                  id="fio"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Введите ваше имя"
                  autoComplete="off"
                  className="mb-2"
                />
              </div>
              <div>
                <label htmlFor="phone" style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Телефон</label>
                <Input
                  id="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  autoComplete="off"
                  className="mb-2"
                />
              </div>
              <div>
                <label htmlFor="email" style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Email (необязательно)</label>
                <Input
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  autoComplete="off"
                  className="mb-2"
                />
              </div>
              <div>
                <label htmlFor="comment" style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Комментарий</label>
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder="Опишите ваш запрос"
                  autoComplete="off"
                  className="mb-2"
                  style={{ minHeight: 64, resize: 'none' }}
                />
                <div style={{ color: '#FF0000', fontSize: 12, marginTop: 4 }}>Обязательное поле</div>
              </div>
                  <div>
                <label style={{ fontWeight: 500, display: 'block', marginBottom: 4 }}>Куда отправить запрос?</label>
                <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                  <button type="button" onClick={() => setSendMethod("system")} style={{
                    flex: 1,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    border: sendMethod === 'system' ? '2px solid transparent' : '2px solid #e5e7eb',
                    background: sendMethod === 'system' ? 'linear-gradient(90deg, #FF7A00, #FF0000)' : 'transparent',
                    color: sendMethod === 'system' ? 'white' : 'black',
                    fontWeight: 500,
                    borderRadius: 0,
                    padding: 12,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                    <div style={{ width: 32, height: 32, borderRadius: 0, background: 'linear-gradient(90deg, #FF7A00, #FF0000)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, marginBottom: 4 }}>RB</div>
                    <span style={{ fontSize: 12 }}>В систему заказов</span>
                  </button>
                  <button type="button" onClick={() => setSendMethod("telegram")} style={{
                    flex: 1,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    border: sendMethod === 'telegram' ? '2px solid transparent' : '2px solid #e5e7eb',
                    background: sendMethod === 'telegram' ? 'linear-gradient(90deg, #FF7A00, #FF0000)' : 'transparent',
                    color: sendMethod === 'telegram' ? 'white' : 'black',
                    fontWeight: 500,
                    borderRadius: 0,
                    padding: 12,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                    <FaTelegram style={{ width: 32, height: 32, marginBottom: 4 }} />
                    <span style={{ fontSize: 12 }}>Telegram</span>
                  </button>
                  <button type="button" onClick={() => setSendMethod("whatsapp")} style={{
                    flex: 1,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    border: sendMethod === 'whatsapp' ? '2px solid transparent' : '2px solid #e5e7eb',
                    background: sendMethod === 'whatsapp' ? 'linear-gradient(90deg, #FF7A00, #FF0000)' : 'transparent',
                    color: sendMethod === 'whatsapp' ? 'white' : 'black',
                    fontWeight: 500,
                    borderRadius: 0,
                    padding: 12,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                    <FaWhatsapp style={{ width: 32, height: 32, marginBottom: 4 }} />
                    <span style={{ fontSize: 12 }}>WhatsApp</span>
                  </button>
                  </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 8 }}>
                <input type="checkbox" id="acceptPolicy" checked={acceptPolicy} onChange={e => setAcceptPolicy(e.target.checked)} style={{ marginTop: 2 }} />
                <div style={{ fontSize: 12, color: '#6b7280' }}>
                  Нажимая на кнопку, вы соглашаетесь с <a href="/privacy-policy" target="_blank" style={{ color: '#FF7A00', textDecoration: 'underline', fontWeight: 600 }}>политикой конфиденциальности</a>
                </div>
              </div>
              {error && <div style={{ color: '#FF0000', fontSize: 12, marginTop: 4 }}>{error}</div>}
              <button type="submit" style={{
                width: '100%',
                background: 'linear-gradient(90deg, #FF7A00, #FF0000)',
                color: 'white',
                fontWeight: 700,
                fontSize: 18,
                border: 'none',
                borderRadius: 0,
                padding: '14px 0',
                marginTop: 8,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}>Отправить запрос</button>
            </form>
        )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 