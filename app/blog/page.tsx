"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaSearch, FaTags, FaCalendarAlt, FaUser } from "react-icons/fa"

// Моковые данные для статей блога
const blogPosts = [
  {
    id: 1,
    title: "Как выбрать материалы для ремонта квартиры",
    excerpt: "Советы по выбору качественных и экологичных материалов для ремонта вашего дома.",
    date: "10.05.2023",
    category: "remont",
    tags: ["ремонт", "материалы", "советы"],
    image: "/blog/repair-materials.jpg",
    author: "Александр Петров",
    readTime: "5 мин",
  },
  {
    id: 2,
    title: "Тренды в дизайне интерьера 2023 года",
    excerpt: "Обзор самых популярных трендов в дизайне интерьера, которые будут актуальны в 2023 году.",
    date: "15.06.2023",
    category: "design",
    tags: ["дизайн", "тренды", "интерьер"],
    image: "/blog/interior-trends.jpg",
    author: "Елена Иванова",
    readTime: "7 мин",
  },
  {
    id: 3,
    title: "Строительство дома: с чего начать",
    excerpt: "Пошаговое руководство по планированию и началу строительства собственного дома.",
    date: "22.07.2023",
    category: "building",
    tags: ["строительство", "дом", "планирование"],
    image: "/blog/house-building.jpg",
    author: "Дмитрий Сидоров",
    readTime: "10 мин",
  },
  {
    id: 4,
    title: "Как сэкономить на ремонте без потери качества",
    excerpt: "Практические советы по оптимизации бюджета ремонта без ущерба для качества работ.",
    date: "05.08.2023",
    category: "remont",
    tags: ["ремонт", "экономия", "бюджет"],
    image: "/blog/save-money.jpg",
    author: "Мария Козлова",
    readTime: "6 мин",
  },
  {
    id: 5,
    title: "Веб-дизайн: основные принципы",
    excerpt: "Обзор основных принципов современного веб-дизайна и их применение на практике.",
    date: "18.09.2023",
    category: "it",
    tags: ["веб-дизайн", "IT", "разработка"],
    image: "/blog/web-design.jpg",
    author: "Игорь Волков",
    readTime: "8 мин",
  },
  {
    id: 6,
    title: "Энергоэффективность в строительстве",
    excerpt: "Как сделать ваш дом энергоэффективным и сэкономить на коммунальных услугах.",
    date: "30.10.2023",
    category: "building",
    tags: ["строительство", "энергоэффективность", "экономия"],
    image: "/blog/energy-efficiency.jpg",
    author: "Анна Соколова",
    readTime: "9 мин",
  },
  // Дополнительные статьи для отображения пагинации
  {
    id: 7,
    title: "Современные материалы для отделки стен",
    excerpt: "Какие материалы выбрать для стильного и долговечного ремонта стен.",
    date: "12.11.2023",
    category: "remont",
    tags: ["ремонт", "материалы", "стены"],
    image: "/blog/walls.jpg",
    author: "Павел Орлов",
    readTime: "4 мин",
  },
  {
    id: 8,
    title: "Топ-5 ошибок при ремонте кухни",
    excerpt: "Чего стоит избегать, чтобы ремонт кухни прошёл без проблем.",
    date: "20.11.2023",
    category: "remont",
    tags: ["ремонт", "кухня", "ошибки"],
    image: "/blog/kitchen.jpg",
    author: "Светлана Миронова",
    readTime: "5 мин",
  },
  {
    id: 9,
    title: "Как выбрать подрядчика для строительства дома",
    excerpt: "На что обратить внимание при выборе строительной компании.",
    date: "01.12.2023",
    category: "building",
    tags: ["строительство", "подрядчик", "советы"],
    image: "/blog/contractor.jpg",
    author: "Виктор Сергеев",
    readTime: "7 мин",
  },
  {
    id: 10,
    title: "Дизайн ванной комнаты: современные тренды",
    excerpt: "Как сделать ванную комнату стильной и функциональной.",
    date: "10.12.2023",
    category: "design",
    tags: ["дизайн", "ванная", "тренды"],
    image: "/blog/bathroom.jpg",
    author: "Ольга Кузнецова",
    readTime: "6 мин",
  },
  {
    id: 11,
    title: "Умный дом: технологии для комфорта и безопасности",
    excerpt: "Какие системы стоит внедрить в современном доме.",
    date: "18.12.2023",
    category: "it",
    tags: ["умный дом", "технологии", "безопасность"],
    image: "/blog/smart-home.jpg",
    author: "Денис Громов",
    readTime: "8 мин",
  },
  {
    id: 12,
    title: "Как выбрать окна для квартиры",
    excerpt: "Плюсы и минусы разных видов окон, советы по выбору.",
    date: "25.12.2023",
    category: "windows-doors",
    tags: ["окна", "выбор", "советы"],
    image: "/blog/windows.jpg",
    author: "Ирина Лебедева",
    readTime: "5 мин",
  },
]

const categories = [
  { value: "all", label: "Все категории" },
  { value: "remont", label: "Ремонт" },
  { value: "engineering", label: "Инженерные системы" },
  { value: "building", label: "Строительство" },
  { value: "windows-doors", label: "Окна и двери" },
  { value: "roof-facade", label: "Кровля и фасады" },
  { value: "it", label: "IT-услуги" },
  { value: "academic", label: "Академическая поддержка" },
]

const postsPerPage = 6

// Исправленный список тегов без дублей и схожих значений
const allTags = [
  "ремонт",
  "материалы",
  "советы",
  "дизайн",
  "тренды",
  "интерьер",
  "строительство",
  "дом",
  "планирование",
  "экономия",
  "бюджет",
  "веб-дизайн",
  "IT-услуги",
  "разработка",
  "энергоэффективность",
  "стены",
  "кухня",
  "ошибки",
  "подрядчик",
  "ванная",
  "умный дом",
  "технологии",
  "безопасность",
  "окна и двери",
  "выбор",
  "инженерные системы",
  "кровля и фасады",
  "академическая поддержка"
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Сброс страницы при изменении фильтров
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, category, selectedTag])

  // Фильтрация статей
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        category === "all" || post.category === category

      const matchesTag =
        !selectedTag || post.tags.includes(selectedTag)

      return matchesSearch && matchesCategory && matchesTag
    })
  }, [searchQuery, category, selectedTag])

  // Пагинация
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage
    return filteredPosts.slice(startIndex, startIndex + postsPerPage)
  }, [filteredPosts, currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Хедер с фоном */}
        <div className="rounded-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-6 py-10 mb-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-2">Блог</h1>
          <p className="text-xl opacity-90">
            Полезные статьи, советы и новости из мира ремонта, строительства и IT
          </p>
        </div>

        {/* Поиск, фильтры и теги в одном выделенном блоке */}
        <div className="relative bg-[#FFE4D6] rounded-xl shadow-lg p-6 mb-8">
          <div className="absolute left-0 top-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-orange-400 to-red-500" />
          {/* Поиск и фильтры */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по статьям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white text-neutral-900 border-neutral-200"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[200px] bg-white text-neutral-900 border-neutral-200">
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent className="bg-white text-neutral-900 border-neutral-200">
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value} className="bg-white text-neutral-900">
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Теги */}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              onClick={() => setSelectedTag(null)}
              className={`
                bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white border-none shadow
              `}
            >
              Все теги
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className={`
                  bg-white border border-neutral-200 text-neutral-900 ${selectedTag === tag ? 'font-bold' : ''}
                `}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Список статей */}
        {currentPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {currentPosts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow rounded-2xl border border-neutral-200 bg-[#FFE4D6] p-3 min-h-[420px] h-full">
                <div className="relative h-16 overflow-hidden rounded-t-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                </div>
                <CardHeader className="pb-1 pt-1">
                  <CardTitle className="line-clamp-2 text-lg font-bold">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0 pb-1">
                  <p className="text-neutral-700 text-sm line-clamp-3 mb-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-neutral-100 px-2 py-1 rounded-full border border-orange-300 text-neutral-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold rounded-lg shadow-none border-none transition-all duration-200 text-base py-2 mt-2"
                  >
                    <Link href={`/blog/${post.id}`}>Читать далее</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center border border-orange-300 rounded-xl text-gray-500 bg-white hover:bg-orange-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-2xl">&#60;</span>
            </button>
            <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500 text-white font-bold text-lg border-2 border-orange-500">
              {currentPage}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center border border-orange-300 rounded-xl text-gray-500 bg-white hover:bg-orange-50 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-2xl">&#62;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 