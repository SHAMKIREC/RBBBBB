"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface ServiceFAQProps {
  items: FAQItem[]
}

export function ServiceFAQ({ items }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <div className="bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
          Часто задаваемые вопросы
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors rounded-xl"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center space-x-4">
                  <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text text-2xl font-bold">?</span>
                  <span className="text-xl font-medium">{item.question}</span>
                </div>
                <ChevronDown
                  className={`h-6 w-6 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-6 text-gray-600">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 