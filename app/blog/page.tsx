"use client"

import { useState } from "react"
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

// Моковые данные для статей блога
const blogPosts = [
  {
    id: 1,
    title: "Как выбрать материалы для ремонта квартиры",
    excerpt: "Советы по выбору качественных и экологичных материалов для ремонта вашего дома.",
    date: "10.05.2023",
    category: "remont",
    image: "/blog/repair-materials.jpg",
    author: "Александр Петров",
  },
  {
    id: 2,
    title: "Тренды в дизайне интерьера 2023 года",
    excerpt: "Обзор самых популярных трендов в дизайне интерьера, которые будут актуальны в 2023 году.",
    date: "15.06.2023",
    category: "design",
    image: "/blog/interior-trends.jpg",
    author: "Елена Иванова",
  },
  {
    id: 3,
    title: "Строительство дома: с чего начать",
    excerpt: "Пошаговое руководство по планированию и началу строительства собственного дома.",
    date: "22.07.2023",
    category: "building",
    image: "/blog/house-building.jpg",
    author: "Дмитрий Сидоров",
  },
  {
    id: 4,
    title: "Как сэкономить на ремонте без потери качества",
    excerpt: "Практические советы по оптимизации бюджета ремонта без ущерба для качества работ.",
    date: "05.08.2023",
    category: "remont",
    image: "/blog/save-money.jpg",
    author: "Мария Козлова",
  },
  {
    id: 5,
    title: "Веб-дизайн: основные принципы",
    excerpt: "Обзор основных принципов современного веб-дизайна и их применение на практике.",
    date: "18.09.2023",
    category: "it",
    image: "/blog/web-design.jpg",
    author: "Игорь Волков",
  },
  {
    id: 6,
    title: "Энергоэффективность в строительстве",
    excerpt: "Как сделать ваш дом энергоэффективным и сэкономить на коммунальных услугах.",
    date: "30.10.2023",
    category: "building",
    image: "/blog/energy-efficiency.jpg",
    author: "Анна Соколова",
  },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("all")

  // Фильтрация статей
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      category === "all" || post.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Блог</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Полезные статьи, советы и новости из мира ремонта, строительства и IT
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Поиск по статьям..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="md:w-1/2"
        />
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="md:w-1/2">
            <SelectValue placeholder="Выберите категорию" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все категории</SelectItem>
            <SelectItem value="remont">Ремонт</SelectItem>
            <SelectItem value="building">Строительство</SelectItem>
            <SelectItem value="design">Дизайн</SelectItem>
            <SelectItem value="it">IT-услуги</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="h-full flex flex-col">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.id}`}>Читать далее</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 