"use client"

import { useState } from "react"
import { ReviewCard } from "@/components/ReviewCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Моковые данные для отзывов
const reviews = [
  {
    id: 1,
    name: "Александр Петров",
    avatar: "/avatars/avatar-1.jpg",
    rating: 5,
    date: "15.05.2023",
    text: "Отличная работа! Команда профессионалов выполнила ремонт квартиры в срок и с высоким качеством. Особенно понравилось внимание к деталям и чистота на объекте.",
    service: "Ремонт квартиры",
    category: "remont",
  },
  {
    id: 2,
    name: "Елена Иванова",
    avatar: "/avatars/avatar-2.jpg",
    rating: 4,
    date: "22.06.2023",
    text: "Заказывали строительство дачного дома. Работа выполнена качественно, но были небольшие задержки по срокам. В целом остались довольны результатом.",
    service: "Строительство дома",
    category: "building",
  },
  {
    id: 3,
    name: "Дмитрий Сидоров",
    avatar: "/avatars/avatar-3.jpg",
    rating: 5,
    date: "10.07.2023",
    text: "Разработали для нас корпоративный сайт. Отличный дизайн, удобный интерфейс и быстрая работа. Рекомендую!",
    service: "Разработка сайта",
    category: "it",
  },
  {
    id: 4,
    name: "Мария Козлова",
    avatar: "/avatars/avatar-4.jpg",
    rating: 5,
    date: "05.08.2023",
    text: "Команда профессионалов! Установили новые окна в квартире. Работа выполнена быстро и аккуратно. Очень довольна результатом.",
    service: "Установка окон",
    category: "remont",
  },
  {
    id: 5,
    name: "Игорь Волков",
    avatar: "/avatars/avatar-5.jpg",
    rating: 4,
    date: "18.09.2023",
    text: "Заказывали ремонт кровли. Работа выполнена качественно, но цена немного выше, чем ожидали. В целом доволен.",
    service: "Ремонт кровли",
    category: "remont",
  },
  {
    id: 6,
    name: "Анна Соколова",
    avatar: "/avatars/avatar-6.jpg",
    rating: 5,
    date: "30.10.2023",
    text: "Разработали для нас мобильное приложение. Отличная работа, все пожелания учтены. Рекомендую!",
    service: "Разработка приложения",
    category: "it",
  },
]

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("all")

  // Фильтрация отзывов
  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.service.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      category === "all" || review.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Отзывы наших клиентов</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Поиск по отзывам..."
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
            <SelectItem value="it">IT-услуги</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredReviews.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              avatar={review.avatar}
              rating={review.rating}
              date={review.date}
              text={review.text}
              service={review.service}
            />
          ))}
        </div>
      )}

      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <a href="/contacts">Оставить свой отзыв</a>
        </Button>
      </div>
    </div>
  )
} 