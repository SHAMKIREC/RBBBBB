import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function StorePage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-2">Магазин материалов</h1>
        <p className="text-center text-gray-600 mb-12">Качественные строительные материалы для ваших проектов</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <MaterialCard
              key={index}
              image={material.image}
              title={material.title}
              description={material.description}
              price={material.price}
            />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button className="bg-blue-600 hover:bg-blue-700">Показать больше товаров</Button>
        </div>
      </div>
    </div>
  )
}

function MaterialCard({ image, title, description, price }) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold">{price}</span>
          <Button className="bg-blue-600 hover:bg-blue-700">В корзину</Button>
        </div>
      </CardContent>
    </Card>
  )
}

const materials = [
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Краска интерьерная",
    description: "Высококачественная матовая краска для внутренних работ",
    price: "2 500 ₽",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Набор инструментов",
    description: "Профессиональный набор из 35 предметов для ремонта",
    price: "8 900 ₽",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Ламинат Premium",
    description: "Влагостойкий ламинат класс 33, цвет дуб натуральный",
    price: "1 450 ₽/м²",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Клей для плитки",
    description: "Усиленный клей для керамической плитки, 25 кг",
    price: "650 ₽",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Гипсокартон влагостойкий",
    description: "Листы гипсокартона для влажных помещений, 12.5 мм",
    price: "780 ₽/лист",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Обои виниловые",
    description: "Моющиеся обои для кухни и ванной, ширина 1.06 м",
    price: "1 200 ₽/рулон",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Плитка напольная",
    description: "Керамогранит для пола, морозостойкий, 60x60 см",
    price: "1 850 ₽/м²",
  },
  {
    image: "/placeholder.svg?height=200&width=300",
    title: "Электродрель",
    description: "Профессиональная дрель с набором сверл, 800 Вт",
    price: "5 400 ₽",
  },
]
