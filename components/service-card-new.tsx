"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface ServiceOption {
  id: string
  label: string
}

interface ServiceCategory {
  title: string
  options: ServiceOption[]
}

interface ServiceCardProps {
  categories: ServiceCategory[]
  onOrderClick: () => void
}

export function ServiceCard({ categories, onOrderClick }: ServiceCardProps) {
  const [openCategories, setOpenCategories] = useState<string[]>([])
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleCategory = (title: string) => {
    setOpenCategories(prev =>
      prev.includes(title)
        ? prev.filter(cat => cat !== title)
        : [...prev, title]
    )
  }

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  return (
    <section className="max-w-4xl mx-auto px-4 -mt-24">
      <div className="bg-[#FFE4D6] dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <div className="space-y-6">
          {categories.map((category, index) => (
            <div key={index} className="mb-8">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-[22px] font-medium pl-2">{category.title}</span>
                <ChevronDown
                  className={`h-6 w-6 shrink-0 transition-transform duration-200 ${
                    openCategories.includes(category.title) ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openCategories.includes(category.title) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 space-y-5">
                      {category.options.map((option) => (
                        <div 
                          key={option.id} 
                          className="flex items-center space-x-3 cursor-pointer"
                          onClick={() => toggleService(option.label)}
                        >
                          <div className={`h-5 w-5 rounded-[4px] border-2 flex-shrink-0 transition-colors ${
                            selectedServices.includes(option.label)
                              ? "bg-[#FF7A00] border-[#FF7A00]"
                              : "border-[#D1D5DB]"
                          }`} />
                          <label className="text-[17px] text-gray-900 cursor-pointer select-none">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button
            onClick={onOrderClick}
            className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-white px-8 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
          >
            Заказать услугу
          </Button>
        </div>
      </div>
    </section>
  )
} 