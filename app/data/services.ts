export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'construction' | 'it' | 'education';
  icon: string;
  url: string;
}

export const services: ServiceItem[] = [
  {
    id: 'repair',
    title: 'Ремонт',
    description: 'Комплексный ремонт квартир, офисов и коммерческих помещений: от косметического до капитального.',
    category: 'construction',
    icon: '🛠️',
    url: '/services/repair'
  },
  {
    id: 'engineering',
    title: 'Инженерные системы',
    description: 'Установка и проектирование инженерных систем под ключ: электричество, отопление, водоснабжение и вентиляция',
    category: 'construction',
    icon: '🔌',
    url: '/services/engineering'
  },
  {
    id: 'construction',
    title: 'Строительство',
    description: 'Возводим надёжные жилые дома и коммерческие здания — под ключ, в срок и с гарантией качества.',
    category: 'construction',
    icon: '🏗️',
    url: '/services/construction'
  },
  {
    id: 'windows-doors',
    title: 'Окна и двери',
    description: 'Профессиональный монтаж, установка и ремонт окон и дверей — для уюта, тепла и безопасности вашего дома.',
    category: 'construction',
    icon: '🪟',
    url: '/services/windows-doors'
  },
  {
    id: 'roofing-facades',
    title: 'Кровля и фасады',
    description: 'Надёжный монтаж и ремонт кровли, профессиональная отделка фасадов — защита и стиль вашего дома.',
    category: 'construction',
    icon: '🏠',
    url: '/services/roofing-facades'
  },
  {
    id: 'it',
    title: 'IT-услуги',
    description: 'Широкий спектр IT-услуг для бизнеса и частных лиц',
    category: 'it',
    icon: '💻',
    url: '/services/it'
  },
  {
    id: 'academic',
    title: 'Академическая поддержка',
    description: 'Полный спектр услуг по академической поддержке',
    category: 'education',
    icon: '🎓',
    url: '/services/academic'
  }
]; 