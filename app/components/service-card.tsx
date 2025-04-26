"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

interface ServiceOption {
  id: string
  label: string
}

interface ServiceCategory {
  title: string
  options: ServiceOption[]
}

// Базовый интерфейс для всех вариантов карточки
interface BaseServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

// Интерфейс для детального режима с категориями
interface DetailedServiceCardProps extends BaseServiceCardProps {
  categories: ServiceCategory[]
  variant?: "detailed"
}

// Интерфейс для простого режима (главная страница)
interface SimpleServiceCardProps extends BaseServiceCardProps {
  href: string
  variant: "simple"
}

// Объединенный тип для всех вариантов
type ServiceCardProps = DetailedServiceCardProps | SimpleServiceCardProps

// Простой компонент чекбокса
function SimpleCheckbox({ id, label }: { id: string; label: string }) {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`h-4 w-4 rounded-sm border cursor-pointer flex items-center justify-center ${
          checked ? "bg-blue-600 border-blue-600" : "border-gray-300 dark:border-gray-600"
        }`}
        onClick={() => setChecked(!checked)}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white h-3 w-3"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none cursor-pointer"
        onClick={() => setChecked(!checked)}
      >
        {label}
      </label>
    </div>
  )
}

// Простой компонент аккордеона
function SimpleAccordion({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>
}

function SimpleAccordionItem({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pt-0">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ServiceCard(props: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { icon, title, description } = props

  // Если это простой вариант (для главной страницы)
  if (props.variant === "simple") {
    return (
      <Card className="bg-[#fef6f0] rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
        <CardContent className="p-8 flex flex-col h-full min-h-[320px]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl text-orange-500">{icon}</span>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <p className="text-base text-gray-600 flex-grow leading-relaxed">{description}</p>
          <Link 
            href={props.href} 
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md text-sm font-medium inline-flex items-center mt-6"
          >
            Подробнее
            <ChevronDown className="ml-2 h-4 w-4" />
          </Link>
        </CardContent>
      </Card>
    )
  }

  // Детальный вариант с категориями
  const detailedProps = props as DetailedServiceCardProps
  
  return (
    <Card className="bg-[#fef6f0] rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
      <CardContent className="p-8 flex flex-col h-full min-h-[320px]">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-5xl text-orange-500">{icon}</span>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-base text-gray-600 flex-grow leading-relaxed">{description}</p>
        <Button
          className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md text-sm font-medium inline-flex items-center mt-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          Подробнее
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4"
            >
              <SimpleAccordion>
                {detailedProps.categories.map((category: ServiceCategory, index: number) => (
                  <SimpleAccordionItem key={index} title={category.title}>
                    <div className="space-y-2">
                      {category.options.map((option: ServiceOption) => (
                        <SimpleCheckbox key={option.id} id={option.id} label={option.label} />
                      ))}
                    </div>
                  </SimpleAccordionItem>
                ))}
              </SimpleAccordion>

              <div className="mt-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Заказать услугу
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
} 