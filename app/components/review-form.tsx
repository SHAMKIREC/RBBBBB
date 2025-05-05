"use client"

import { useState } from "react"
import { FaStar, FaCamera, FaVideo, FaTimes } from "react-icons/fa"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type ReviewFormData = {
  service: string
  rating: number
  text: string
  photos: File[]
  video: File | null
}

export default function ReviewForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<ReviewFormData>({
    service: "",
    rating: 0,
    text: "",
    photos: [],
    video: null
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log(formData)
    setIsOpen(false)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files)
      if (e.target.name === "photos") {
        setFormData({ ...formData, photos: [...formData.photos, ...files] })
      } else if (e.target.name === "video") {
        setFormData({ ...formData, video: files[0] })
      }
    }
  }

  const removePhoto = (index: number) => {
    setFormData({
      ...formData,
      photos: formData.photos.filter((_, i) => i !== index)
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-lg rounded-full px-6 py-2 shadow">
          Оставить отзыв
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] gradient-border-inner rounded-[22px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold gradient-text">Оставить отзыв</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-2xl font-medium text-foreground">
              Наши Услуги
            </label>
            <div className="gradient-border rounded-lg">
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2 bg-background gradient-border-inner rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-foreground text-lg"
              >
                <option value="">Выберите услугу</option>
                <option value="Ремонт">Ремонт</option>
                <option value="Инженерные системы">Инженерные системы</option>
                <option value="Строительство">Строительство</option>
                <option value="Окна и двери">Окна и двери</option>
                <option value="Кровля и фасады">Кровля и фасады</option>
                <option value="IT-услуги">IT-услуги</option>
                <option value="Академическая поддержка">Академическая поддержка</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-2xl font-medium text-foreground">
              Оценка
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className={`text-3xl ${
                    star <= formData.rating ? "text-orange-500" : "text-muted-foreground"
                  }`}
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-2xl font-medium text-foreground">
              Текст отзыва
            </label>
            <div className="gradient-border rounded-lg">
              <textarea
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                className="w-full px-4 py-2 bg-background gradient-border-inner rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-foreground text-lg"
                rows={4}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <label className="flex-1">
                <input
                  type="file"
                  name="photos"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="gradient-border rounded-lg">
                  <div className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary gradient-border-inner rounded-lg cursor-pointer hover:bg-secondary/80">
                    <FaCamera className="text-orange-500 text-xl" />
                    <span className="text-lg text-foreground">Добавить фото</span>
                  </div>
                </div>
              </label>

              <label className="flex-1">
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="gradient-border rounded-lg">
                  <div className="flex items-center justify-center gap-2 px-4 py-2 bg-secondary gradient-border-inner rounded-lg cursor-pointer hover:bg-secondary/80">
                    <FaVideo className="text-orange-500 text-xl" />
                    <span className="text-lg text-foreground">Добавить видео</span>
                  </div>
                </div>
              </label>
            </div>

            {formData.photos.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {formData.photos.map((photo, index) => (
                  <div key={index} className="relative gradient-border rounded-lg">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Фото ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg gradient-border-inner"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 p-1 bg-white/80 rounded-full hover:bg-white"
                    >
                      <FaTimes className="text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {formData.video && (
              <div className="relative gradient-border rounded-lg">
                <video
                  src={URL.createObjectURL(formData.video)}
                  controls
                  className="w-full rounded-lg gradient-border-inner"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, video: null })}
                  className="absolute top-1 right-1 p-1 bg-white/80 rounded-full hover:bg-white"
                >
                  <FaTimes className="text-red-500" />
                </button>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <div className="gradient-border rounded-lg">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="text-lg gradient-border-inner rounded-lg"
              >
                Отмена
              </Button>
            </div>
            <div className="gradient-border rounded-lg">
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-lg gradient-border-inner rounded-lg">
                Отправить отзыв
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 