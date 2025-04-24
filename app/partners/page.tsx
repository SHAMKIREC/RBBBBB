import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Партнёрам</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Мы всегда открыты для сотрудничества с профессионалами в сфере ремонта, строительства и IT
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Преимущества сотрудничества</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Регулярный поток заказов</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Гибкие условия сотрудничества</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Быстрые выплаты</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Поддержка и обучение</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Современные инструменты для работы</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Требования к партнёрам</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Профессиональный опыт от 3 лет</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Наличие необходимых сертификатов и лицензий</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Ответственность и пунктуальность</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Готовность к обучению и развитию</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Соблюдение стандартов качества компании</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Как стать партнёром</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">1. Заполните заявку</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Отправьте нам заявку с информацией о себе и своем опыте работы.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2. Собеседование</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Мы свяжемся с вами для проведения собеседования и обсуждения деталей сотрудничества.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3. Начало работы</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                После успешного собеседования мы подпишем договор и начнем сотрудничество.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Готовы стать нашим партнёром?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Заполните форму ниже, и мы свяжемся с вами в ближайшее время для обсуждения деталей сотрудничества.
        </p>
        <Button size="lg" asChild>
          <a href="/contacts">Отправить заявку</a>
        </Button>
      </div>
    </div>
  )
} 