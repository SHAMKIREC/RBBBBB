"use client"

import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { RequestForm } from "@/components/request-form"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function EngineeringPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Инженерные системы"
        description="Проектирование и монтаж инженерных систем: отопление, водоснабжение, электрика, вентиляция и кондиционирование."
      >
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              className="bg-[#007bff] hover:bg-blue-600 text-white px-8 py-6 text-lg border-2 border-gray-900 rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => setIsOpen(true)}
            >
              Узнать условия
            </Button>
          </DialogTrigger>
          <DialogContent>
            <RequestForm />
          </DialogContent>
        </Dialog>
      </PageHeader>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">⚡</span>}
              title="Инженерные системы"
              description="Проектирование и монтаж инженерных систем: отопление, водоснабжение, электрика, вентиляция и кондиционирование."
              categories={[
                {
                  title: "Системы отопления",
                  options: [
                    { id: "boiler", label: "Монтаж газового котла" },
                    { id: "radiators", label: "Установка радиаторов" },
                    { id: "floor", label: "Тёплый пол" },
                  ],
                },
                {
                  title: "Электроснабжение",
                  options: [
                    { id: "wiring", label: "Замена проводов" },
                    { id: "panel", label: "Щитовая сборка" },
                    { id: "smart", label: "Умный дом" },
                  ],
                },
                {
                  title: "Вентиляция и кондиционирование",
                  options: [
                    { id: "ac", label: "Монтаж сплит-системы" },
                    { id: "vent", label: "Приточная вентиляция" },
                    { id: "clean", label: "Очистка воздуховодов" },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
