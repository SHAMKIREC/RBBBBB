import Link from "next/link"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Наши услуги</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Ремонт */}
        <ServiceCard
          title="Ремонт"
          description="Комплексный ремонт квартир, домов и коммерческих помещений"
          href="/services/remont"
          icon="🏠"
          variant="simple"
        />
        
        {/* Строительство */}
        <ServiceCard
          title="Строительство"
          description="Возводим надёжные жилые дома и коммерческие здания — под ключ, в срок и с гарантией качества."
          href="/services/building"
          icon="🏗️"
          variant="simple"
        />
        
        {/* IT-услуги */}
        <ServiceCard
          title="IT-услуги"
          description="Разработка сайтов и IT-консультации"
          href="/services/it"
          icon="💻"
          variant="simple"
        />
      </div>

      {/* Подкатегории ремонта */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Ремонт</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Окна и двери"
            description="Установка и ремонт окон и дверей"
            href="/services/remont/okna-i-dveri"
            icon="🚪"
            variant="simple"
          />
          <ServiceCard
            title="Кровля и фасады"
            description="Монтаж и ремонт кровли, фасадные работы"
            href="/services/remont/krovlya-i-fasady"
            icon="🏠"
            variant="simple"
          />
          <ServiceCard
            title="Инженерные системы"
            description="Установка и проектирование инженерных систем под ключ: электричество, отопление, водоснабжение и вентиляция — с гарантией качества."
            href="/services/remont/inzhenernye-sistemy"
            icon="⚡"
            variant="simple"
          />
        </div>
      </div>

      {/* Подкатегории строительства */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Строительство</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Строительство домов"
            description="Возведение жилых домов любой сложности"
            href="/services/building/domov"
            icon="🏡"
            variant="simple"
          />
          <ServiceCard
            title="Строительство под ключ"
            description="Полный цикл строительства от проекта до сдачи"
            href="/services/building/pod-klyuch"
            icon="🔑"
            variant="simple"
          />
        </div>
      </div>

      {/* Подкатегории IT-услуг */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">IT-услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Веб-разработка"
            description="Создание современных веб-сайтов и приложений"
            href="/services/it/web-development"
            icon="🌐"
            variant="simple"
          />
          <ServiceCard
            title="Поддержка и консультации"
            description="IT-поддержка и консультации для бизнеса"
            href="/services/it/support"
            icon="💡"
            variant="simple"
          />
        </div>
      </div>
    </div>
  )
}
