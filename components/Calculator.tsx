"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormData {
  area: string
  type: string
  rooms: string
  repairType: string
}

interface CalculatorProps {
  onChange?: (data: FormData) => void
  onOpenRequestForm?: () => void
}

export function Calculator({ onChange, onOpenRequestForm }: CalculatorProps) {
  const [formData, setFormData] = useState<FormData>({
    area: "",
    type: "",
    rooms: "",
    repairType: ""
  })
  const [result, setResult] = useState<number | null>(null)

  useEffect(() => {
    if (onChange) onChange(formData)
  }, [formData, onChange])

  // Примерная формула расчёта стоимости
  const getPrice = () => {
    const area = Number(formData.area) || 0
    let base = 0
    switch (formData.repairType) {
      case "chernovoy": base = 3500; break
      case "chistovoy": base = 6000; break
      case "pod_kluch": base = 9000; break
      case "dizainerskiy": base = 14000; break
      default: base = 0
    }
    return area * base
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setResult(getPrice())
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#FFE4D6] rounded-2xl shadow-xl p-8 border border-orange-200">
      <div className="space-y-4">
        <div>
          <Label htmlFor="area" className="font-semibold text-black">Площадь помещения (м²)</Label>
          <Input
            id="area"
            type="number"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            required
            placeholder="Введите площадь, например: 53"
            className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-base bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div>
          <Label htmlFor="type" className="font-semibold text-black">Тип помещения</Label>
          <select
            id="type"
            className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-base bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.type}
            onChange={e => setFormData({ ...formData, type: e.target.value })}
            required
          >
            <option value="" disabled>Выберите тип помещения</option>
            <option value="apartment">Квартира</option>
            <option value="house">Дом</option>
            <option value="office">Офис</option>
            <option value="commercial">Коммерческое помещение</option>
            <option value="other">Другое</option>
          </select>
        </div>
        <div>
          <Label htmlFor="rooms" className="font-semibold text-black">Количество комнат</Label>
          <select
            id="rooms"
            className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-base bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.rooms}
            onChange={e => setFormData({ ...formData, rooms: e.target.value })}
            required
          >
            <option value="" disabled>Выберите количество комнат</option>
            <option value="studio">Студия</option>
            <option value="1">1 комната</option>
            <option value="2">2 комнаты</option>
            <option value="3">3 комнаты</option>
            <option value="4">4 комнаты</option>
            <option value="5+">5 и более</option>
          </select>
        </div>
        <div>
          <Label htmlFor="repairType" className="font-semibold text-black">Вид ремонта</Label>
          <select
            id="repairType"
            className="w-full h-10 rounded-md border border-gray-300 px-3 py-2 text-base bg-white text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={formData.repairType}
            onChange={e => setFormData({ ...formData, repairType: e.target.value })}
            required
          >
            <option value="" disabled>Выберите вид ремонта</option>
            <option value="chernovoy">Черновой</option>
            <option value="chistovoy">Чистовой</option>
            <option value="pod_kluch">Под ключ</option>
            <option value="dizainerskiy">Дизайнерский</option>
          </select>
        </div>
      </div>
      <Button
        type="submit"
        className="w-full h-12 text-lg font-bold bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl transition-colors"
      >
        Рассчитать стоимость
      </Button>
      <Button
        type="button"
        className="w-full h-12 text-lg font-bold bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-xl transition-colors mt-3"
        onClick={onOpenRequestForm}
      >
        Узнать условия
      </Button>
      {result !== null && (
        <div className="mt-6 text-center text-2xl font-bold text-[#2563EB]">
          Примерная стоимость: {result.toLocaleString()} ₽
        </div>
      )}
    </form>
  )
} 