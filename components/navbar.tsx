import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[#FF4D00] flex items-center justify-center">
            <span className="text-white font-bold">RB</span>
          </div>
          <span className="text-[#FF4D00] font-bold hidden sm:inline">Решаем Быстро</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link 
            href="/services/remont" 
            className="text-gray-700 dark:text-gray-300 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors"
          >
            Услуги
          </Link>
          <Link 
            href="/contact" 
            className="hidden sm:inline-block text-gray-700 dark:text-gray-300 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors"
          >
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  )
} 