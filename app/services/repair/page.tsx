"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { ServiceCard } from "@/components/service-card"
import Footer from "@/app/components/footer"
import { PageHeader } from "@/components/page-header"

export default function RepairPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white pb-32">
        <div className="container mx-auto px-4 pt-12">
          <section className="text-center">
            <div className="w-24 h-24 rounded-[20px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center mb-6 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              <span className="text-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">🔨</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
              Ремонтные работы
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold">
              Комплексный ремонт квартир, офисов и коммерческих помещений: от косметического до капитального.
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text"> Гарантия 3 года!</span>
            </p>
          </section>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">🔨</span>}
              title="Ремонтные работы"
              description="Комплексный ремонт квартир, офисов и коммерческих помещений: от косметического до капитального. Гарантия 3 года!"
              categories={[
                {
                  title: "Косметический ремонт",
                  options: [
                    { id: "painting", label: "Покраска стен" },
                    { id: "wallpaper", label: "Оклейка обоями" },
                    { id: "flooring", label: "Замена напольного покрытия" },
                    { id: "baseboards", label: "Установка плинтусов" },
                    { id: "sockets", label: "Замена розеток и выключателей" }
                  ]
                },
                {
                  title: "Капитальный ремонт",
                  options: [
                    { id: "replanning", label: "Полная перепланировка" },
                    { id: "systems", label: "Замена инженерных систем" },
                    { id: "leveling", label: "Выравнивание стен и полов" },
                    { id: "windows", label: "Замена окон и дверей" },
                    { id: "turnkey", label: "Отделка под ключ" }
                  ]
                },
                {
                  title: "Отделка под ключ",
                  options: [
                    { id: "design", label: "Дизайн-проект" },
                    { id: "rough", label: "Черновая отделка" },
                    { id: "finish", label: "Чистовая отделка" },
                    { id: "plumbing", label: "Установка сантехники" },
                    { id: "lighting", label: "Монтаж освещения" }
                  ]
                }
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
