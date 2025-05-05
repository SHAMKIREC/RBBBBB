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
    <div className="min-h-screen w-full bg-[#FFE4D6] py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Хлебные крошки */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 bg-[#FFE4D6] rounded-lg shadow-sm px-4 py-2 text-sm">
            <li>
              <Link href="/" className="flex items-center gap-1 text-[#2563EB] hover:underline font-medium">
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3.25a.75.75 0 0 1 .53.22l8.25 8.25a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.25h-2.5V20a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 20v-8.16l-.72.72a.75.75 0 1 1-1.06-1.06l8.25-8.25a.75.75 0 0 1 .53-.22Z'/></svg>
                Главная
              </Link>
            </li>
            <li className="text-neutral-400">›</li>
            <li>
              <Link href="/blog" className="text-[#2563EB] hover:underline font-medium">Блог</Link>
            </li>
            <li className="text-neutral-400">›</li>
            <li className="font-bold text-neutral-900">{post.title}</li>
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
                  className="bg-neutral-100 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Картинка под метаданными, на месте вопроса */}
        <div className="relative w-full max-w-2xl mx-auto h-64 mb-8 rounded-2xl overflow-hidden shadow-md flex items-center justify-center bg-[#FFE4D6]">
          <img
            src={post.image || '/no-image.svg'}
            alt={post.title}
            className="max-w-full max-h-full object-contain object-center"
            style={{ display: post.image || '/no-image.svg' ? 'block' : 'none' }}
          />
        </div>

        {/* Содержимое статьи */}
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Навигация */}
        <div className="mt-12 pt-8 border-t flex justify-center">
          <Button
            asChild
            className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold rounded-lg shadow-none border-none transition-all duration-200 text-base py-3 px-8"
          >
            <Link href="/blog">← Назад к блогу</Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 