"use client"

import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function WindowsDoorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Окна и двери"
        description="Профессиональная установка и замена окон и дверей. Качественные материалы и гарантия на все работы."
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">🚪</span>}
              title="Окна и двери"
              description="Профессиональная установка и замена окон и дверей. Качественные материалы и гарантия на все работы."
              categories={[
                {
                  title: "Установка окон",
                  options: [
                    { id: "plastic", label: "Пластиковые окна" },
                    { id: "wooden", label: "Деревянные окна" },
                    { id: "aluminum", label: "Алюминиевые окна" },
                    { id: "french", label: "Французские окна" },
                    { id: "sill", label: "Окна с подоконниками" }
                  ]
                },
                {
                  title: "Замена стеклопакетов",
                  options: [
                    { id: "single", label: "Однокамерные стеклопакеты" },
                    { id: "double", label: "Двухкамерные стеклопакеты" },
                    { id: "energy", label: "Энергосберегающие стеклопакеты" },
                    { id: "tinted", label: "Тонированные стеклопакеты" },
                    { id: "impact", label: "Ударопрочные стеклопакеты" }
                  ]
                },
                {
                  title: "Установка дверей",
                  options: [
                    { id: "entrance", label: "Входные двери" },
                    { id: "interior", label: "Межкомнатные двери" },
                    { id: "sliding", label: "Раздвижные двери" },
                    { id: "coupe", label: "Двери-купе" },
                    { id: "closer", label: "Двери с доводчиками" }
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
