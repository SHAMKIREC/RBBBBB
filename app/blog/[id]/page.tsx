"use client"

import { notFound } from "next/navigation"
import { FaCalendarAlt, FaUser, FaClock, FaTags } from "react-icons/fa"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Моковые данные для статей блога (те же, что и на главной странице)
const blogPosts = [
  {
    id: 1,
    title: "Как выбрать материалы для ремонта квартиры",
    content: `
      <h2>Введение</h2>
      <p>Выбор материалов для ремонта - это важный этап, который влияет на качество и долговечность результата. В этой статье мы рассмотрим основные критерии выбора и дадим практические советы.</p>
      
      <h2>Основные критерии выбора</h2>
      <h3>1. Качество</h3>
      <p>При выборе материалов в первую очередь обращайте внимание на их качество. Проверяйте сертификаты соответствия и отзывы других покупателей.</p>
      
      <h3>2. Экологичность</h3>
      <p>Важно выбирать экологически чистые материалы, особенно для жилых помещений. Обращайте внимание на маркировку и состав.</p>
      
      <h3>3. Стоимость</h3>
      <p>Не всегда высокая цена означает лучшее качество. Сравнивайте цены в разных магазинах и ищите оптимальное соотношение цены и качества.</p>
      
      <h2>Практические советы</h2>
      <ul>
        <li>Покупайте материалы с запасом 10-15%</li>
        <li>Проверяйте сроки годности</li>
        <li>Храните материалы в сухом месте</li>
        <li>Используйте материалы по назначению</li>
      </ul>
      
      <h2>Заключение</h2>
      <p>Правильный выбор материалов - это залог успешного ремонта. Уделите этому этапу достаточно внимания, и результат превзойдет ваши ожидания.</p>
    `,
    date: "10.05.2023",
    category: "remont",
    tags: ["ремонт", "материалы", "советы"],
    image: "/blog/repair-materials.jpg",
    author: "Александр Петров",
    readTime: "5 мин",
  },
  // ... остальные статьи
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Хлебные крошки */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary">Главная</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-primary">Блог</Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{post.title}</li>
          </ol>
        </nav>

        {/* Заголовок статьи */}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        {/* Метаданные */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTags />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Изображение */}
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.image})` }}
          />
        </div>

        {/* Содержимое статьи */}
        <article
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Навигация */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/blog">← Назад к списку статей</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/blog/${Number(params.id) + 1}`}>
                Следующая статья →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 