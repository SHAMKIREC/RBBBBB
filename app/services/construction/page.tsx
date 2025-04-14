import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function ConstructionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Строительство"
        description="Строительство жилых и коммерческих объектов любой сложности. От проектирования до сдачи в эксплуатацию."
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">🏗️</span>}
              title="Строительство"
              description="Строительство жилых и коммерческих объектов любой сложности. От проектирования до сдачи в эксплуатацию."
              categories={[
                {
                  title: "Жилое строительство",
                  options: [
                    { id: "house", label: "Частные дома" },
                    { id: "cottage", label: "Коттеджи" },
                    { id: "townhouse", label: "Таунхаусы" },
                  ],
                },
                {
                  title: "Коммерческое строительство",
                  options: [
                    { id: "office", label: "Офисные здания" },
                    { id: "retail", label: "Торговые центры" },
                    { id: "warehouse", label: "Склады" },
                  ],
                },
                {
                  title: "Проектирование",
                  options: [
                    { id: "architecture", label: "Архитектурные решения" },
                    { id: "engineering", label: "Конструктивные решения" },
                    { id: "design", label: "Дизайн-проекты" },
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
