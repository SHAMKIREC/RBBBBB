import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactsPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-2">Контакты</h1>
        <p className="text-center text-gray-600 mb-12">Свяжитесь с нами любым удобным способом</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6">Напишите нам</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Имя</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Электронная почта</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Телефон</label>
                <input type="tel" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Сообщение</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-md h-32"></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Отправить</Button>
            </form>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6">Наши контакты</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-pink-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-gray-600">г. Москва, ул. Строителей, д. 10, офис 505</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-pink-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="text-gray-600">+7 (123) 456-78-90</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-pink-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Электронная почта</p>
                  <p className="text-gray-600">info@rb-service.ru</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-pink-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Режим работы</p>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                  <p className="text-gray-600">Сб: 10:00 - 18:00</p>
                  <p className="text-gray-600">Вс: выходной</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-medium mb-3">Мы в соцсетях</h4>
              <div className="flex space-x-2">
                <Link href="#" className="bg-blue-100 text-blue-500 p-2 rounded-full hover:bg-blue-200">
                  <span className="sr-only">ВК</span>
                  <div className="w-6 h-6 flex items-center justify-center">ВК</div>
                </Link>
                <Link href="#" className="bg-blue-100 text-blue-500 p-2 rounded-full hover:bg-blue-200">
                  <span className="sr-only">TT</span>
                  <div className="w-6 h-6 flex items-center justify-center">TT</div>
                </Link>
                <Link href="#" className="bg-blue-100 text-blue-500 p-2 rounded-full hover:bg-blue-200">
                  <span className="sr-only">Вашингтон</span>
                  <div className="w-6 h-6 flex items-center justify-center">W</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
