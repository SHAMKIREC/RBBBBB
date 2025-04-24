import { Calculator } from "@/components/Calculator"

export default function CalculatorPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Калькулятор стоимости ремонта</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Рассчитайте примерную стоимость ремонта вашего помещения. Заполните форму ниже, и мы свяжемся с вами для уточнения деталей.
        </p>
        
        <Calculator />
      </div>
    </div>
  )
} 