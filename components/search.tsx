"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Fuse from "fuse.js"

// Данные для поиска (в реальном приложении это может быть загружено из API)
const searchData = [
  {
    title: "Ремонт",
    description: "Комплексный ремонт квартир, офисов и коммерческих помещений",
    url: "/services/repair",
    tags: ["ремонт", "квартира", "офис", "отделка", "косметический ремонт", "капитальный ремонт"],
  },
  {
    title: "Инженерные системы",
    description: "Проектирование и монтаж инженерных систем",
    url: "/services/engineering",
    tags: ["инженерные системы", "отопление", "водоснабжение", "электрика", "вентиляция", "кондиционирование"],
  },
  {
    title: "Строительство",
    description: "Строительство жилых и коммерческих объектов",
    url: "/services/construction",
    tags: ["строительство", "дом", "здание", "объект", "жилое", "коммерческое"],
  },
  {
    title: "IT-услуги",
    description: "Широкий спектр IT-услуг для бизнеса и частных лиц",
    url: "/services/it",
    tags: ["IT", "сайт", "разработка", "программирование", "веб", "чат-бот", "приложение"],
  },
  {
    title: "Окна и двери",
    description: "Монтаж, установка и ремонт окон и дверей",
    url: "/services/windows-doors",
    tags: ["окна", "двери", "монтаж", "установка", "ремонт", "пластиковые окна", "деревянные двери"],
  },
  {
    title: "Кровля и фасады",
    description: "Услуги по монтажу и ремонту кровли, фасадные работы",
    url: "/services/roofing-facades",
    tags: ["кровля", "фасад", "крыша", "монтаж", "ремонт", "утепление"],
  },
  {
    title: "Академическая поддержка",
    description: "Полный спектр услуг по академической поддержке",
    url: "/services/academic",
    tags: ["академическая поддержка", "учеба", "образование", "курсовая", "диплом", "исследование"],
  },
  {
    title: "Калькулятор",
    description: "Расчет стоимости строительных и ремонтных работ",
    url: "/calculator",
    tags: ["калькулятор", "расчет", "стоимость", "цена", "смета"],
  },
]

// Настройка Fuse.js для нечеткого поиска
const fuseOptions = {
  includeScore: true,
  threshold: 0.4, // Более низкое значение = более строгое соответствие
  keys: [
    { name: "title", weight: 0.7 },
    { name: "description", weight: 0.5 },
    { name: "tags", weight: 0.3 },
  ],
  // Поддержка диакритических знаков и регистра
  ignoreLocation: true,
  useExtendedSearch: true,
}

const fuse = new Fuse(searchData, fuseOptions)

interface SearchProps {
  isMobile?: boolean
  onClose?: () => void
}

export function Search({ isMobile = false, onClose }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Закрываем поиск при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Автофокус на поле ввода при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!query.trim()) {
      setResults([])
      setHasSearched(false)
      return
    }

    // Выполняем поиск с помощью Fuse.js
    const searchResults = fuse.search(query)

    // Преобразуем результаты в нужный формат
    setResults(searchResults.map((result) => result.item))
    setHasSearched(true)
  }

  const handleResultClick = () => {
    setIsOpen(false)
    setQuery("")
    setResults([])
    setHasSearched(false)
    if (onClose) onClose()
  }

  // Для мобильной версии
  if (isMobile) {
    return (
      <div className="w-full mb-4">
        <form onSubmit={handleSearch} className="flex">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Поиск по сайту..."
            className="flex-grow bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus-visible:ring-[#FF5722] rounded-2xl"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            type="submit"
            className="ml-2 bg-gradient-to-r from-[#FF5722] to-[#f44336] hover:from-[#f44336] hover:to-[#d32f2f] text-white rounded-2xl"
          >
            <SearchIcon className="h-4 w-4" />
          </Button>
        </form>

        {hasSearched && (
          <div className="mt-4 bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
            {results.length > 0 ? (
              <div className="py-2 px-3">
                <p className="text-xs text-gray-400 mb-2">Результаты поиска:</p>
                <ul className="space-y-1">
                  {results.map((result, index) => (
                    <li key={index}>
                      <Link
                        href={result.url}
                        className="block py-2 px-3 text-sm text-gray-300 hover:bg-gray-700 rounded transition-colors duration-150"
                        onClick={handleResultClick}
                      >
                        <div className="font-medium">{result.title}</div>
                        <div className="text-xs text-gray-400 mt-1">{result.description}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="py-4 px-3 text-center">
                <p className="text-sm text-gray-400">Ничего не найдено по запросу '{query}'</p>
                <p className="text-xs text-gray-500 mt-1">Попробуйте другие слова</p>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  // Для десктопной версии
  return (
    <div className="relative" ref={searchRef}>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:text-gray-300 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <SearchIcon className={`h-5 w-5 ${isOpen ? "text-[#FF5722]" : ""}`} />
        <span className="sr-only">Поиск</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out z-50">
          <form onSubmit={handleSearch} className="p-2">
            <div className="flex">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Поиск по сайту..."
                className="flex-grow bg-gray-100 dark:bg-gray-700 border-0 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-visible:ring-[#FF5722] transition-all duration-200 rounded-2xl"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                type="submit"
                className="ml-2 bg-gradient-to-r from-[#FF5722] to-[#f44336] hover:from-[#f44336] hover:to-[#d32f2f] text-white transition-all duration-200 rounded-2xl"
              >
                <SearchIcon className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {hasSearched && (
            <div className="border-t border-gray-200 dark:border-gray-700">
              {results.length > 0 ? (
                <div className="py-2 px-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Результаты поиска:</p>
                  <ul className="space-y-1">
                    {results.map((result, index) => (
                      <li key={index}>
                        <Link
                          href={result.url}
                          className="block py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-150"
                          onClick={handleResultClick}
                        >
                          <div className="font-medium">{result.title}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{result.description}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="py-4 px-3 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ничего не найдено по запросу '{query}'</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Попробуйте другие слова</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
