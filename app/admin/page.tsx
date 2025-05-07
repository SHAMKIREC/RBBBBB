import React from "react";
import Link from "next/link";

const stats = [
  { title: "Статей", value: 11, icon: "📝", color: "text-[#2563EB]" },
  { title: "Пользователей", value: 1, icon: "👤", color: "text-[#D97706]" },
  { title: "Системная информация", value: "Next.js, Node.js", icon: "⚙️", color: "text-[#92400E]" },
];

const menu = [
  { name: "Главная", href: "/admin", exact: true },
  { name: "Услуги", href: "/admin/services" },
  { name: "Блог / Статьи", href: "/admin/blog" },
  { name: "Отзывы", href: "/admin/reviews" },
  { name: "Партнёры", href: "/admin/partners" },
  { name: "Калькулятор", href: "/admin/calculator" },
  { name: "Контакты", href: "/admin/contacts" },
  { name: "Заявки", href: "/admin/request" },
  { name: "Пользователи", href: "/admin/auth" },
  { name: "Цены", href: "/admin/prices" },
  { name: "Сотрудники", href: "/admin/employees" },
  { name: "Клиенты", href: "/admin/clients" },
  { name: "Партнёрская программа", href: "/admin/partners-program" },
  { name: "Магазин", href: "/admin/store" },
  { name: "Новости", href: "/admin/news" },
  { name: "Акции", href: "/admin/actions" },
  { name: "Галерея", href: "/admin/gallery" },
  { name: "Документы", href: "/admin/documents" },
];

const popularArticles = [
  { title: "О сайте", hits: 0, date: "2021-11-14" },
  { title: "Главная страница", hits: 0, date: "2021-11-14" },
  { title: "Добро пожаловать в блог", hits: 0, date: "2021-11-14" },
  { title: "Типографика", hits: 0, date: "2021-11-14" },
  { title: "Новая функция: Workflows", hits: 0, date: "2021-11-14" },
];

const recentArticles = [
  { title: "О сайте", author: "Админ", date: "2021-11-14" },
  { title: "Шаблон", author: "Админ", date: "2021-11-14" },
  { title: "Модули", author: "Админ", date: "2021-11-14" },
  { title: "Главная страница", author: "Админ", date: "2021-11-14" },
  { title: "Добро пожаловать в блог", author: "Админ", date: "2021-11-14" },
];

const components = [
  { name: "Резервные копии", icon: "📦" },
  { name: "Баннеры", icon: "🔖" },
  { name: "Контакты", icon: "👥" },
  { name: "Новости", icon: "📰" },
  { name: "Поиск", icon: "🔍" },
  { name: "Теги", icon: "🏷️" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex bg-[#FFE4D6]">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-[#2563EB] flex flex-col min-h-screen shadow-lg">
        <div className="p-6 text-2xl font-bold border-b border-[#FFE4D6]">Админ-панель</div>
        <nav className="flex-1 p-4 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 px-4 rounded hover:bg-[#E0E7FF] font-medium"
              prefetch={false}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[#FFE4D6] text-xs text-[#9CA3AF]">© {new Date().getFullYear()} Панель управления</div>
      </aside>
      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 flex items-center gap-2 text-[#D97706]">🏠 Главная админки</h1>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.title} className="rounded-lg p-6 bg-white shadow-lg flex items-center gap-4">
              <span className={`text-4xl ${stat.color}`}>{stat.icon}</span>
              <div>
                <div className="text-2xl font-bold text-[#2563EB]">{stat.value}</div>
                <div className="text-sm text-[#6B7280]">{stat.title}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="font-bold mb-2 text-[#2563EB]">Популярные статьи</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Заголовок</th>
                  <th>Просмотры</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                {popularArticles.map((a) => (
                  <tr key={a.title}>
                    <td>{a.title}</td>
                    <td>{a.hits}</td>
                    <td>{a.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="font-bold mb-2 text-[#2563EB]">Недавно добавленные статьи</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Заголовок</th>
                  <th>Автор</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                {recentArticles.map((a) => (
                  <tr key={a.title}>
                    <td>{a.title}</td>
                    <td>{a.author}</td>
                    <td>{a.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Components */}
        <div>
          <h2 className="font-bold mb-2 text-[#2563EB]">Компоненты</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {components.map((c) => (
              <div key={c.name} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
                <span className="text-4xl mb-2 text-[#D97706]">{c.icon}</span>
                <span className="font-medium text-center text-[#D97706]">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 