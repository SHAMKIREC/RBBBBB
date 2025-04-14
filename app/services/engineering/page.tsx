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
