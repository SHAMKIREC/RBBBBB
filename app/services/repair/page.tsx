import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function RepairPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Ремонтные работы"
        description="Комплексный ремонт квартир, офисов и коммерческих помещений: от косметического до капитального."
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">🔨</span>}
              title="Ремонт"
              description="Комплексный ремонт квартир, офисов и коммерческих помещений: от косметического до капитального."
              categories={[
                {
                  title: "Косметический ремонт",
                  options: [
                    { id: "painting", label: "Покраска стен/потолков" },
                    { id: "wallpaper", label: "Оклейка обоями" },
                    { id: "flooring", label: "Настил напольных покрытий" },
                  ],
                },
                {
                  title: "Капитальный ремонт",
                  options: [
                    { id: "demolition", label: "Демонтажные работы" },
                    { id: "systems", label: "Замена инженерных систем" },
                    { id: "leveling", label: "Выравнивание поверхностей" },
                  ],
                },
                {
                  title: "Спецработы",
                  options: [
                    { id: "plumbing", label: "Установка сантехники" },
                    { id: "ceiling", label: "Монтаж натяжных потолков" },
                    { id: "tile", label: "Укладка кафеля" },
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
