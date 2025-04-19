"use client"

import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function EngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Инженерные системы"
        description="Проектирование и монтаж инженерных систем: отопление, водоснабжение, электрика, вентиляция и кондиционирование."
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">⚡</span>}
              title="Инженерные системы"
              description="Проектирование и монтаж инженерных систем: отопление, водоснабжение, электрика, вентиляция и кондиционирование."
              categories={[
                {
                  title: "Водоснабжение",
                  options: [
                    { id: "water-install", label: "Монтаж водопровода" },
                    { id: "pump-install", label: "Установка насосов" },
                    { id: "water-filter", label: "Фильтрация воды" },
                    { id: "water-repair", label: "Ремонт водопровода" },
                    { id: "hot-water", label: "Горячее водоснабжение" }
                  ]
                },
                {
                  title: "Отопление",
                  options: [
                    { id: "boiler", label: "Монтаж газового котла" },
                    { id: "radiators", label: "Установка радиаторов" },
                    { id: "floor-heating", label: "Тёплый водяной пол" },
                    { id: "equipment", label: "Замена старого оборудования" },
                    { id: "boiler-room", label: "Обвязка котельной" }
                  ]
                },
                {
                  title: "Канализация",
                  options: [
                    { id: "sewage", label: "Монтаж канализации" },
                    { id: "septic", label: "Установка септика" },
                    { id: "pipe-clean", label: "Прочистка труб" },
                    { id: "sewage-repair", label: "Ремонт канализации" },
                    { id: "drainage", label: "Дренажные системы" }
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
