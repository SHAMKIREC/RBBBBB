"use client"

import { ReactNode } from "react"
import { RequestForm } from "./request-form"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

interface PageHeaderProps {
  title: string
  description: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-gradient-to-r from-[#FF7A00] to-[#FF0000] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
            {description}
          </p>
          {children ? (
            children
          ) : (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-[#007bff] hover:bg-blue-600 text-white px-8 py-6 text-lg border-2 border-gray-900 rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                  onClick={() => setIsOpen(true)}
                >
                  Узнать условия
                </Button>
              </DialogTrigger>
              <DialogContent>
                <RequestForm />
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </section>
  )
}
