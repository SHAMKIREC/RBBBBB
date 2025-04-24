"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MessageCircle } from "lucide-react"

export function SOSButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Всплывающая карточка */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 p-4 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
            Экстренный вызов сотрудника во время ЧС
          </h3>
          
          <div className="space-y-3">
            <a 
              href="tel:+79085509037"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Phone className="h-4 w-4" />
              +7 908 550 90 37
            </a>
            
            <a 
              href="https://wa.me/79085509037"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            
            <a 
              href="https://t.me/+79085509037"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Telegram
            </a>
          </div>
        </Card>
      )}

      {/* Кнопка SOS */}
      <Button
        className="fixed bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        SOS 24/7
      </Button>
    </>
  )
} 