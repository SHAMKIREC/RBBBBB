"use client"

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'
import { services, ServiceItem } from '@/app/data/services'
import { FaSearch } from 'react-icons/fa'

const fuseOptions = {
  keys: ['title', 'description'],
  threshold: 0.3,
  distance: 100,
  minMatchCharLength: 2
}

const fuse = new Fuse(services, fuseOptions)

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ServiceItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const router = useRouter()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (value: string) => {
    setQuery(value)
    if (value.length > 1) {
      const searchResults = fuse.search(value).map(result => result.item)
      setResults(searchResults)
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }

  const handleSelect = (service: ServiceItem) => {
    router.push(service.url)
    setQuery('')
    setResults([])
    setIsOpen(false)
    setIsFocused(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (results.length > 0) {
      handleSelect(results[0])
    }
  }

  return (
    <div ref={wrapperRef} className="relative flex-1 max-w-xl">
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Поиск по сайту..."
          className={`w-full px-4 py-2 pl-11 pr-4 bg-white dark:bg-neutral-800 
                    border-2 rounded-xl transition-all duration-200
                    text-neutral-900 dark:text-neutral-100 placeholder-neutral-400
                    ${isFocused 
                      ? 'border-orange-500 shadow-lg shadow-orange-500/10' 
                      : 'border-neutral-200 dark:border-neutral-700'
                    }
                    focus:outline-none focus:border-orange-500 dark:focus:border-orange-500`}
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 
                   hover:text-orange-500 transition-colors p-1"
          aria-label="Поиск"
        >
          <FaSearch className="w-4 h-4" />
        </button>
      </form>

      {/* Выпадающий список результатов */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-neutral-800 
                      rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-700 
                      max-h-[calc(100vh-200px)] overflow-y-auto z-50
                      backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
          {results.length > 0 ? (
            <ul className="divide-y divide-neutral-200 dark:divide-neutral-700">
              {results.map((service) => (
                <li 
                  key={service.id}
                  onClick={() => handleSelect(service)}
                  className="p-4 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 
                           cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{service.icon}</span>
                    <div>
                      <h4 className="font-medium text-neutral-900 dark:text-white">
                        {service.title}
                      </h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : query.length > 1 ? (
            <div className="p-6 text-center">
              <span className="text-4xl mb-3 block">🔍</span>
              <p className="text-neutral-500 dark:text-neutral-400">
                Ничего не найдено
              </p>
              <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-1">
                Попробуйте изменить запрос
              </p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
} 