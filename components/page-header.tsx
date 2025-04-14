import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-4">{description}</p>
        {children}
      </div>
    </section>
  )
}
