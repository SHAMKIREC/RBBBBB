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
    description: 'Качественный ремонт квартир, домов и офисов под ключ. Работаем быстро и профессионально.',
    category: 'construction',
    icon: '🏠',
    url: '/services/repair'
  },
  {
    id: 'engineering',
    title: 'Инженерные системы',
    description: 'Проектирование и монтаж инженерных систем: отопление, водоснабжение, вентиляция.',
    category: 'construction',
    icon: '🔧',
    url: '/services/engineering'
  },
  {
    id: 'construction',
    title: 'Строительство',
    description: 'Строительство домов, коттеджей и коммерческих объектов с нуля.',
    category: 'construction',
    icon: '🏗️',
    url: '/services/construction'
  },
  {
    id: 'windows-doors',
    title: 'Окна и двери',
    description: 'Установка и замена окон и дверей. Работаем с различными материалами.',
    category: 'construction',
    icon: '🪟',
    url: '/services/windows-doors'
  },
  {
    id: 'roofing-facades',
    title: 'Кровля и фасады',
    description: 'Монтаж и ремонт кровли, утепление и отделка фасадов.',
    category: 'construction',
    icon: '🏡',
    url: '/services/roofing-facades'
  },
  {
    id: 'it',
    title: 'IT-услуги',
    description: 'Разработка сайтов, мобильных приложений и программного обеспечения.',
    category: 'it',
    icon: '💻',
    url: '/services/it'
  },
  {
    id: 'academic',
    title: 'Академическая поддержка',
    description: 'Помощь студентам в учебе, консультации по предметам.',
    category: 'education',
    icon: '📚',
    url: '/services/academic'
  }
]; 