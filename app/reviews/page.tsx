"use client"

import { useState, useMemo } from "react"
import { FaFilter, FaCamera, FaVideo, FaThumbsUp, FaThumbsDown, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import ReviewForm from "@/app/components/review-form"

// Типы данных
type Review = {
  id: number
  name: string
  service: string
  rating: number
  text: string
  date: string
  photos?: string[]
  video?: string
  likes: number
  dislikes: number
  companyResponse?: string
}

type FilterOptions = {
  service: string
  date: string
  hasMedia: boolean
}

export default function ReviewsPage() {
  const [filters, setFilters] = useState<FilterOptions>({
    service: "",
    date: "newest",
    hasMedia: false
  })
  const [currentPage, setCurrentPage] = useState(1)
  const reviewsPerPage = 6

  // Пример данных (в реальности будут из API)
  const reviews: Review[] = [
    // Ремонт (6 отзывов)
    {
      id: 1,
      name: "Иван Петров",
      service: "Ремонт",
      rating: 5,
      text: "Отличный сервис! Мастера приехали быстро, сделали ремонт в квартире качественно. Особенно понравилось, как аккуратно положили плитку в ванной.",
      date: "2024-03-15",
      photos: ["/reviews/repair/photo1.jpg", "/reviews/repair/photo2.jpg"],
      likes: 12,
      dislikes: 0
    },
    {
      id: 2,
      name: "Мария Иванова",
      service: "Ремонт",
      rating: 4,
      text: "Сделали ремонт в офисе. Работа выполнена хорошо, но немного затянули сроки. В целом довольна результатом.",
      date: "2023-12-20",
      photos: ["/reviews/repair/photo3.jpg"],
      likes: 8,
      dislikes: 1
    },
    {
      id: 3,
      name: "Алексей Смирнов",
      service: "Ремонт",
      rating: 5,
      text: "Профессиональная команда, качественные материалы. Сделали ремонт в срок, все работы выполнены аккуратно.",
      date: "2023-10-05",
      photos: ["/reviews/repair/photo4.jpg", "/reviews/repair/photo5.jpg"],
      video: "/reviews/repair/video1.mp4",
      likes: 15,
      dislikes: 0
    },
    {
      id: 4,
      name: "Елена Козлова",
      service: "Ремонт",
      rating: 5,
      text: "Очень довольна результатом! Мастера аккуратные, работают чисто. Особенно понравился дизайн-проект.",
      date: "2023-08-12",
      photos: ["/reviews/repair/photo6.jpg"],
      likes: 20,
      dislikes: 0
    },
    {
      id: 5,
      name: "Дмитрий Волков",
      service: "Ремонт",
      rating: 4,
      text: "Хороший ремонт, но цены немного высокие. Качество работы на уровне, особенно понравилась отделка стен.",
      date: "2023-06-30",
      photos: ["/reviews/repair/photo7.jpg"],
      likes: 10,
      dislikes: 2
    },
    {
      id: 6,
      name: "Ольга Белова",
      service: "Ремонт",
      rating: 5,
      text: "Сделали ремонт в квартире - всё идеально! Спасибо за качественную работу и внимательное отношение к деталям.",
      date: "2023-04-15",
      photos: ["/reviews/repair/photo8.jpg"],
      likes: 18,
      dislikes: 0
    },

    // Инженерные системы (6 отзывов)
    {
      id: 7,
      name: "Андрей Петров",
      service: "Инженерные системы",
      rating: 5,
      text: "Установили систему отопления в доме. Работа выполнена качественно, всё работает отлично. Специалисты очень компетентные!",
      date: "2024-02-10",
      photos: ["/reviews/engineering/photo1.jpg"],
      likes: 15,
      dislikes: 0
    },
    {
      id: 8,
      name: "Екатерина Смирнова",
      service: "Инженерные системы",
      rating: 5,
      text: "Профессиональная установка водоснабжения. Мастера работали аккуратно, всё сделали в срок. Особенно понравилось качество материалов.",
      date: "2023-12-15",
      photos: ["/reviews/engineering/photo2.jpg"],
      video: "/reviews/engineering/video1.mp4",
      likes: 12,
      dislikes: 0
    },
    {
      id: 9,
      name: "Максим Иванов",
      service: "Инженерные системы",
      rating: 4,
      text: "Установили вентиляцию в офисе. Работа выполнена хорошо, но были небольшие задержки. В целом доволен результатом.",
      date: "2023-10-20",
      photos: ["/reviews/engineering/photo3.jpg"],
      likes: 8,
      dislikes: 1
    },
    {
      id: 10,
      name: "Наталья Козлова",
      service: "Инженерные системы",
      rating: 5,
      text: "Сделали монтаж канализации в частном доме. Всё работает отлично, никаких протечек. Спасибо за качественную работу!",
      date: "2023-08-25",
      photos: ["/reviews/engineering/photo4.jpg"],
      likes: 10,
      dislikes: 0
    },
    {
      id: 11,
      name: "Александр Волков",
      service: "Инженерные системы",
      rating: 5,
      text: "Установили систему кондиционирования в квартире. Работа выполнена быстро и качественно. Особенно понравился сервис.",
      date: "2023-06-30",
      photos: ["/reviews/engineering/photo5.jpg"],
      likes: 14,
      dislikes: 0
    },
    {
      id: 12,
      name: "Ольга Белова",
      service: "Инженерные системы",
      rating: 5,
      text: "Профессиональный монтаж электрики в доме. Всё сделано аккуратно, работает без нареканий. Рекомендую!",
      date: "2023-04-15",
      photos: ["/reviews/engineering/photo6.jpg"],
      video: "/reviews/engineering/video2.mp4",
      likes: 16,
      dislikes: 0
    },

    // Строительство (6 отзывов)
    {
      id: 13,
      name: "Иван Петров",
      service: "Строительство",
      rating: 5,
      text: "Построили дом под ключ. Работа выполнена качественно, в срок. Особенно понравилось, как аккуратно сделали отделку фасада.",
      date: "2024-01-15",
      photos: ["/reviews/building/photo1.jpg", "/reviews/building/photo2.jpg"],
      video: "/reviews/building/video1.mp4",
      likes: 20,
      dislikes: 0
    },
    // ... остальные отзывы по строительству ...

    // Окна и двери (6 отзывов)
    {
      id: 19,
      name: "Александр Соколов",
      service: "Окна и двери",
      rating: 5,
      text: "Установили пластиковые окна в квартире. Работа выполнена быстро и качественно. Окна отлично держат тепло, шумоизоляция на высоте!",
      date: "2024-02-20",
      photos: ["/reviews/windows/photo1.jpg", "/reviews/windows/photo2.jpg"],
      likes: 16,
      dislikes: 0
    },
    // ... остальные отзывы по окнам и дверям ...

    // Кровля и фасады (6 отзывов)
    {
      id: 25,
      name: "Сергей Морозов",
      service: "Кровля и фасады",
      rating: 5,
      text: "Сделали ремонт фасада и кровли. Работа выполнена качественно, материалы использованы хорошие. Особенно понравилась отделка фасада.",
      date: "2024-01-10",
      photos: ["/reviews/roof/photo1.jpg"],
      likes: 14,
      dislikes: 0
    },
    // ... остальные отзывы по кровле и фасадам ...

    // IT-услуги (6 отзывов)
    {
      id: 31,
      name: "Дмитрий Волков",
      service: "IT-услуги",
      rating: 5,
      text: "Настроили корпоративную сеть в офисе. Всё работает быстро и стабильно. Специалисты очень компетентные!",
      date: "2024-02-15",
      photos: ["/reviews/it/photo1.jpg"],
      likes: 12,
      dislikes: 0
    },
    // ... остальные отзывы по IT-услугам ...

    // Академическая поддержка (6 отзывов)
    {
      id: 37,
      name: "Анна Соколова",
      service: "Академическая поддержка",
      rating: 5,
      text: "Помогли с написанием дипломной работы. Работа выполнена качественно, все требования соблюдены. Защитилась на отлично!",
      date: "2024-03-01",
      photos: ["/reviews/academic/photo1.jpg"],
      likes: 10,
      dislikes: 0
    }
    // ... остальные отзывы по академической поддержке ...
  ]

  // Группировка отзывов по услугам
  const groupedReviews = useMemo(() => {
    const groups: Record<string, Review[]> = {
      "Ремонт": [],
      "Инженерные системы": [],
      "Строительство": [],
      "Окна и двери": [],
      "Кровля и фасады": [],
      "IT-услуги": [],
      "Академическая поддержка": []
    }

    reviews.forEach(review => {
      if (groups[review.service]) {
        groups[review.service].push(review)
      }
    })

    // Сортировка отзывов в каждой группе
    Object.keys(groups).forEach(service => {
      groups[service].sort((a, b) => {
        if (filters.date === "newest") {
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        }
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
    })

    return groups
  }, [filters.date])

  // Получение отзывов для выбранной услуги
  const filteredReviews = useMemo(() => {
    if (!filters.service) return []
    return groupedReviews[filters.service]
      ?.filter(review => !filters.hasMedia || review.photos?.length || review.video) || []
  }, [filters, groupedReviews])

  // Пагинация
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage)
  const currentReviews = useMemo(() => {
    const startIndex = (currentPage - 1) * reviewsPerPage
    return filteredReviews.slice(startIndex, startIndex + reviewsPerPage)
  }, [filteredReviews, currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Хедер страницы */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground">Отзывы клиентов</h1>
          <p className="mt-2 text-muted-foreground">Узнайте, что говорят о нас наши клиенты</p>
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Фильтры */}
          <div className="bg-card border border-border rounded-lg shadow-sm p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <h2 className="text-xl font-semibold gradient-text flex items-center gap-2">
                <FaFilter className="text-orange-500" />
                Фильтры
              </h2>

              {/* Фильтр по услугам */}
              <select
                className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-foreground"
                value={filters.service}
                onChange={(e) => setFilters({ ...filters, service: e.target.value })}
              >
                <option value="">Выберите услугу</option>
                <option value="Ремонт">Ремонт</option>
                <option value="Инженерные системы">Инженерные системы</option>
                <option value="Строительство">Строительство</option>
                <option value="Окна и двери">Окна и двери</option>
                <option value="Кровля и фасады">Кровля и фасады</option>
                <option value="IT-услуги">IT-услуги</option>
                <option value="Академическая поддержка">Академическая поддержка</option>
              </select>

              {filters.service && (
                <>
                  {/* Фильтр по дате */}
                  <select
                    className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-foreground"
                    value={filters.date}
                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                  >
                    <option value="newest">Сначала новые</option>
                    <option value="oldest">Сначала старые</option>
                  </select>

                  {/* Фильтр по медиа */}
                  <label className="flex items-center gap-2 text-foreground">
                    <input
                      type="checkbox"
                      checked={filters.hasMedia}
                      onChange={(e) => setFilters({ ...filters, hasMedia: e.target.checked })}
                      className="rounded border-border text-orange-500 focus:ring-orange-500"
                    />
                    <span>Только с фото/видео</span>
                  </label>
                </>
              )}
            </div>
          </div>

          {/* Список отзывов */}
          {filters.service ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold gradient-text">{filters.service}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentReviews.map((review) => (
                  <div key={review.id} className="bg-card border border-border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{review.name}</h3>
                        <p className="text-sm text-muted-foreground">{review.service}</p>
                      </div>
                    </div>

                    <p className="text-foreground mb-4 line-clamp-3">{review.text}</p>

                    {/* Медиа */}
                    {(review.photos || review.video) && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {review.photos?.map((photo, index) => (
                          <div key={index} className="relative aspect-square">
                            <FaCamera className="absolute top-2 right-2 text-white drop-shadow-lg z-10" />
                            <img
                              src={photo}
                              alt={`Фото отзыва ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg border border-border"
                            />
                          </div>
                        ))}
                        {review.video && (
                          <div className="relative aspect-square">
                            <FaVideo className="absolute top-2 right-2 text-white drop-shadow-lg z-10" />
                            <img
                              src={review.video}
                              alt="Видео отзыва"
                              className="w-full h-full object-cover rounded-lg border border-border"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Ответ компании */}
                    {review.companyResponse && (
                      <div className="bg-secondary border border-border rounded-lg p-4 mb-4">
                        <p className="font-semibold text-foreground">Ответ компании:</p>
                        <p className="mt-2 text-sm text-muted-foreground">{review.companyResponse}</p>
                      </div>
                    )}

                    {/* Футер карточки */}
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex gap-4">
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-orange-500">
                          <FaThumbsUp />
                          <span>{review.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 text-muted-foreground hover:text-orange-500">
                          <FaThumbsDown />
                          <span>{review.dislikes}</span>
                        </button>
                      </div>
                      <span className="text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Пагинация */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaChevronLeft />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg border border-border ${
                        currentPage === page
                          ? 'bg-orange-500 text-white'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Выберите услугу, чтобы увидеть отзывы</p>
            </div>
          )}

          {/* Кнопка добавления отзыва */}
          <div className="flex justify-center">
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  )
} 