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

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Сброс страницы при изменении фильтров
  useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, category, selectedTag])

  // Получение всех уникальных тегов
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags)
  }, [])

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
                className="pl-10 bg-white text-neutral-900 border-neutral-200 dark:bg-neutral-900 dark:text-white dark:border-neutral-700"
              />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[200px] bg-white text-neutral-900 border-neutral-200 dark:bg-neutral-900 dark:text-white dark:border-neutral-700">
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-700">
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value} className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Теги */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={!selectedTag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
              className="bg-white text-orange-600 border border-orange-500 dark:bg-neutral-900 dark:text-orange-400 dark:border-orange-700"
            >
              Все теги
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className="bg-white text-orange-600 border border-orange-500 dark:bg-neutral-900 dark:text-orange-400 dark:border-orange-700"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <Card key={post.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <FaCalendarAlt />
                    <span>{post.date}</span>
                    <span>•</span>
                    <FaUser />
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/blog/${post.id}`}>Читать далее</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 