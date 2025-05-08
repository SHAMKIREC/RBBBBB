"use client"

import { Calculator } from "@/components/Calculator"
import { HeroRequestForm } from "@/components/hero-request-form"
import { useState } from "react"

export default function CalculatorPage() {
  const [calcData, setCalcData] = useState({
    area: "",
    type: "",
    rooms: "",
    repairType: ""
  })
  const [open, setOpen] = useState(false)

  // Формируем текст для комментария
  const comment = [
    calcData.area && `Площадь: ${calcData.area} м²`,
    calcData.type && `Тип: ${getTypeName(calcData.type)}`,
    calcData.rooms && `Комнат: ${getRoomsName(calcData.rooms)}`,
    calcData.repairType && `Вид ремонта: ${getRepairTypeName(calcData.repairType)}`
  ].filter(Boolean).join(", ")

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="rounded-2xl mb-8 p-8 bg-[#FF4D00] text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Калькулятор стоимости ремонта</h1>
        <p className="text-xl">
          Рассчитайте примерную стоимость ремонта вашего помещения с помощью калькулятора ниже.
        </p>
      </div>
      <Calculator onChange={setCalcData} onOpenRequestForm={() => setOpen(true)} />
      <HeroRequestForm
        defaultComment={comment}
        open={open}
        onOpenChange={setOpen}
        hideServiceSelect={true}
      />
    </div>
  )
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