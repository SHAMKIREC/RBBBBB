"use client"

import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function RepairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Ремонтные работы"
        description="Профессиональный ремонт и отделка помещений любой сложности. От косметического ремонта до полной перепланировки."
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">🔨</span>}
              title="Ремонтные работы"
              description="Профессиональный ремонт и отделка помещений любой сложности. От косметического ремонта до полной перепланировки."
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
