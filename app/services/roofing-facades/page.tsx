"use client"

import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function RoofingFacadesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Кровля и фасады"
        description="Профессиональные кровельные и фасадные работы. Качественные материалы и гарантия на все работы."
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">🏠</span>}
              title="Кровля и фасады"
              description="Профессиональные кровельные и фасадные работы. Качественные материалы и гарантия на все работы."
              categories={[
                {
                  title: "Кровельные работы",
                  options: [
                    { id: "metal-tile", label: "Металлочерепица" },
                    { id: "soft-roof", label: "Мягкая кровля" },
                    { id: "profiled", label: "Профнастил" },
                    { id: "seam", label: "Фальцевая кровля" },
                    { id: "copper", label: "Медная кровля" }
                  ]
                },
                {
                  title: "Фасадные работы",
                  options: [
                    { id: "ventilated", label: "Вентилируемые фасады" },
                    { id: "plaster", label: "Штукатурные фасады" },
                    { id: "stone", label: "Облицовка камнем" },
                    { id: "brick", label: "Облицовка кирпичом" },
                    { id: "insulation", label: "Утепление фасадов" }
                  ]
                },
                {
                  title: "Дополнительные услуги",
                  options: [
                    { id: "waterproof", label: "Гидроизоляция" },
                    { id: "vapor", label: "Пароизоляция" },
                    { id: "gutters", label: "Установка водостоков" },
                    { id: "roof-repair", label: "Ремонт кровли" },
                    { id: "facade-repair", label: "Ремонт фасадов" }
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
