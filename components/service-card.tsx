"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  icon: React.ReactNode
  title: string
  description: string
  categories: ServiceCategory[]
}

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

export function ServiceCard({ icon, title, description, categories }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 text-3xl">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

          <Button
            variant="link"
            className="text-blue-600 hover:text-blue-800 p-0 justify-start mb-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            Подробнее →
          </Button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <SimpleAccordion>
                  {categories.map((category, index) => (
                    <SimpleAccordionItem key={index} title={category.title}>
                      <div className="space-y-2">
                        {category.options.map((option) => (
                          <SimpleCheckbox key={option.id} id={option.id} label={option.label} />
                        ))}
                      </div>
                    </SimpleAccordionItem>
                  ))}
                </SimpleAccordion>

                <div className="mt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Заказать услугу</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )
}
