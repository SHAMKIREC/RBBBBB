"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  variant: "simple"
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const isITService = title === "IT-услуги"
  
  return (
    <div className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-6 flex flex-col ${isITService ? 'h-[320px]' : 'h-[280px]'}`}>
      {/* Верхняя часть карточки */}
      <div className="flex items-start gap-4 mb-6">
        <span className="text-4xl">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      {/* Описание */}
      <p className="text-lg font-medium text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Кнопка внизу */}
      <div className="mt-auto pt-4">
        <Link 
          href={href}
          className="block w-full bg-[#2563EB] text-white px-4 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
        >
          Подробнее ▼
        </Link>
      </div>
    </div>
  )
} 