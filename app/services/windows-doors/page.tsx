import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function WindowsDoorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Окна и двери" description="Монтаж, установка и ремонт окон и дверей." />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">🚪</span>}
              title="Окна и двери"
              description="Монтаж, установка и ремонт окон и дверей."
              categories={[
                {
                  title: "Окна",
                  options: [
                    { id: "plastic-windows", label: "Установка пластиковых окон" },
                    { id: "window-repair", label: "Ремонт окон" },
                    { id: "window-sealing", label: "Утепление окон" },
                  ],
                },
                {
                  title: "Двери",
                  options: [
                    { id: "interior-doors", label: "Установка межкомнатных дверей" },
                    { id: "entrance-doors", label: "Установка входных дверей" },
                    { id: "door-repair", label: "Ремонт дверей" },
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
