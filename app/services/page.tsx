import Link from "next/link"
import { ServiceCard } from "@/components/ServiceCard"

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
        />
        
        {/* Строительство */}
        <ServiceCard
          title="Строительство"
          description="Строительство домов и объектов под ключ"
          href="/services/building"
          icon="🏗️"
        />
        
        {/* IT-услуги */}
        <ServiceCard
          title="IT-услуги"
          description="Разработка сайтов и IT-консультации"
          href="/services/it"
          icon="💻"
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
          />
          <ServiceCard
            title="Кровля и фасады"
            description="Монтаж и ремонт кровли, фасадные работы"
            href="/services/remont/krovlya-i-fasady"
            icon="🏠"
          />
          <ServiceCard
            title="Инженерные системы"
            description="Проектирование и монтаж инженерных систем"
            href="/services/remont/inzhenernye-sistemy"
            icon="⚡"
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
          />
          <ServiceCard
            title="Строительство под ключ"
            description="Полный цикл строительства от проекта до сдачи"
            href="/services/building/pod-klyuch"
            icon="🔑"
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
          />
          <ServiceCard
            title="Поддержка и консультации"
            description="IT-поддержка и консультации для бизнеса"
            href="/services/it/support"
            icon="💡"
          />
        </div>
      </div>
    </div>
  )
}
