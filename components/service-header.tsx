"use client"

import { ReactNode } from "react"

interface ServiceHeaderProps {
  title: string
  description: string
  icon: ReactNode
  warranty: string
}

export function ServiceHeader({ title, description, icon, warranty }: ServiceHeaderProps) {
  return (
    <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white pb-32">
      <div className="container mx-auto px-4 pt-12">
        <section className="text-center">
          {icon && (
            <div className="w-24 h-24 rounded-[20px] bg-gradient-to-r from-[#FF7A00] to-[#FF0000] flex items-center justify-center mb-6 mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              <span className="text-4xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">{icon}</span>
            </div>
          )}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-bold">
            {description}
          </p>
          <p className="text-xl md:text-2xl bg-gradient-to-r from-[#FF7A00] to-[#FF0000] text-transparent bg-clip-text font-bold mt-2">
            {warranty}
          </p>
        </section>
      </div>
    </div>
  )
} 