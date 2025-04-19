"use client"

import { ReactNode } from "react"

interface PageHeaderProps {
  icon?: string
  title: string
  description: string
  children?: ReactNode
  showRequestButton?: boolean
}

export function PageHeader({ icon, title, description, children, showRequestButton = false }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-lg">
            {icon} {title}
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 drop-shadow-md">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  )
}
