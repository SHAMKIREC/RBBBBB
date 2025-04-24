import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/app/components/header'
import Footer from './components/footer'
import type { Metadata } from "next"

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Решаем Быстро - Профессиональные услуги',
  description: 'Компания "Решаем Быстро" - ваш надежный партнер в сфере ремонта, строительства и IT-услуг',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'