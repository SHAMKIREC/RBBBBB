"use client"

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'
import { FaSearch } from 'react-icons/fa'
import { services } from '../data/services'

// Настройки для fuzzy поиска
const fuseOptions = {
  keys: ['title', 'description'],
  threshold: 0.3,
  distance: 100,
  minMatchCharLength: 2
}

const fuse = new Fuse(services, fuseOptions)

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Закрытие выпадающего списка при клике вне компонента
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownVisible(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Обработка поискового запроса
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    
    if (value.length > 1) {
      const searchResults = fuse.search(value)
      setResults(searchResults)
      setIsDropdownVisible(true)
    } else {
      setResults([])
      setIsDropdownVisible(false)
    }
  }

  // Выбор результата поиска
  const handleSelect = (url: string) => {
    router.push(url)
    setQuery('')
    setResults([])
    setIsDropdownVisible(false)
  }

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => {
            setIsFocused(true)
            setIsDropdownVisible(query.length > 1)
          }}
          onBlur={() => setIsFocused(false)}
          placeholder="Поиск по сайту..."
          className="
            w-full px-4 py-2 pr-10
            bg-white dark:bg-neutral-800
            text-neutral-900 dark:text-neutral-100
            placeholder-neutral-500 dark:placeholder-neutral-400
            border border-neutral-200 dark:border-neutral-700
            rounded-lg
            focus:outline-none focus:border-[#FF3A2D] dark:focus:border-[#FF3A2D]
            transition duration-200
          "
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <FaSearch className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
        </div>
      </div>

      {/* Выпадающий список с результатами */}
      {isDropdownVisible && (
        <div className="
          absolute top-full left-0 right-0 mt-2
          bg-white dark:bg-neutral-800
          border border-neutral-200 dark:border-neutral-700
          rounded-lg shadow-lg z-50
          max-h-[300px] overflow-y-auto
        ">
          {results.length > 0 ? (
            results.map((result) => (
              <div
                key={result.item.id}
                onClick={() => handleSelect(result.item.url)}
                className="
                  p-3 hover:bg-neutral-100 dark:hover:bg-neutral-700
                  cursor-pointer
                  border-b border-neutral-200 dark:border-neutral-700
                  last:border-none
                "
              >
                <div className="text-neutral-900 dark:text-neutral-100 font-medium">
                  {result.item.title}
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2">
                  {result.item.description}
                </div>
              </div>
            ))
          ) : (
            <div className="p-3 text-neutral-500 dark:text-neutral-400 text-center">
              Ничего не найдено
            </div>
          )}
        </div>
      )}
    </div>
  )
} 