import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function RoofingFacadesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Кровля и фасады" description="Услуги по монтажу и ремонту кровли, а также фасадные работы." />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">🏠</span>}
              title="Кровля и фасады"
              description="Услуги по монтажу и ремонту кровли, а также фасадные работы."
              categories={[
                {
                  title: "Кровельные работы",
                  options: [
                    { id: "roofing", label: "Кровельные работы" },
                    { id: "tile", label: "Укладка черепицы" },
                    { id: "roof-device", label: "Устройство кровли" },
                  ],
                },
                {
                  title: "Фасадные работы",
                  options: [
                    { id: "facade", label: "Фасадные работы" },
                    { id: "facade-treatment", label: "Обработка фасадов" },
                    { id: "ventilated-facades", label: "Вентилируемые фасады" },
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
