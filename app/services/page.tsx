import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader title="Наши услуги" description="Профессиональные решения для строительства, ремонта и IT-сферы" />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Ремонт"
              icon="🔨"
              description="Комплексный ремонт квартир, офисов и коммерческих помещений"
              link="/services/repair"
            />
            <ServiceCard
              title="Инженерные системы"
              icon="⚡"
              description="Проектирование и монтаж инженерных систем"
              link="/services/engineering"
            />
            <ServiceCard
              title="Строительство"
              icon="🏗️"
              description="Строительство жилых и коммерческих объектов"
              link="/services/construction"
            />
            <ServiceCard
              title="IT-услуги"
              icon="💻"
              description="Широкий спектр IT-услуг для бизнеса и частных лиц"
              link="/services/it"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <ServiceCard
              title="Окна и двери"
              icon="🚪"
              description="Монтаж, установка и ремонт окон и дверей"
              link="/services/windows-doors"
            />
            <ServiceCard
              title="Кровля и фасады"
              icon="🏠"
              description="Услуги по монтажу и ремонту кровли, фасадные работы"
              link="/services/roofing-facades"
            />
            <ServiceCard
              title="Академическая поддержка"
              icon="📚"
              description="Полный спектр услуг по академической поддержке"
              link="/services/academic"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ServiceCard({ title, icon, description, link }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 text-3xl text-[#FF5722]">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
          <Link href={link} className="mt-auto text-blue-600 hover:text-blue-800 inline-flex items-center">
            Подробнее →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
