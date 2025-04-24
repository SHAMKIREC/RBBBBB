import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function Calculator() {
  const [area, setArea] = useState("")
  const [type, setType] = useState("")
  const [estimate, setEstimate] = useState<number | null>(null)

  const calculateEstimate = () => {
    if (!area || !type) return

    const basePrice = {
      "cosmetic": 2000,
      "capital": 4000,
      "designer": 6000,
    }[type] || 0

    const total = basePrice * Number(area)
    setEstimate(total)
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="area">Площадь помещения (м²)</Label>
            <Input
              id="area"
              type="number"
              placeholder="Введите площадь"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="type">Тип ремонта</Label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип ремонта" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cosmetic">Косметический ремонт</SelectItem>
                <SelectItem value="capital">Капитальный ремонт</SelectItem>
                <SelectItem value="designer">Дизайнерский ремонт</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateEstimate}>Рассчитать стоимость</Button>

          {estimate !== null && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-lg font-semibold">
                Примерная стоимость: {estimate.toLocaleString()} ₽
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                * Это предварительный расчет. Точная стоимость будет определена после осмотра помещения.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 