import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/app/components/header'
import Footer from './components/footer'
import type { Metadata } from "next"
import { ReCaptchaProvider } from '@/components/providers/recaptcha-provider'
import { Toaster } from '@/components/ui/toaster'

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
        <ReCaptchaProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ReCaptchaProvider>
        <Toaster />
      </body>
    </html>
  )
}


import './globals.css'