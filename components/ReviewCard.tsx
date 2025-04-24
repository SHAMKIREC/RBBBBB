import { Star } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ReviewCardProps {
  name: string
  avatar?: string
  rating: number
  date: string
  text: string
  service: string
}

export function ReviewCard({
  name,
  avatar,
  rating,
  date,
  text,
  service,
}: ReviewCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{service}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{text}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">{date}</p>
      </CardFooter>
    </Card>
  )
} 