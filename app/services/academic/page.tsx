import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"

export default function AcademicPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Академическая поддержка"
        description="Предлагаем полный спектр услуг по академической поддержке для студентов."
      />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<span className="text-[#FF5722]">📚</span>}
              title="Академическая поддержка"
              description="Предлагаем полный спектр услуг по академической поддержке для студентов."
              categories={[
                {
                  title: "Сопровождение ВКР",
                  options: [
                    { id: "vkr-method", label: "Методическая помощь" },
                    { id: "vkr-structure", label: "Структурирование работы" },
                    { id: "vkr-research", label: "Подбор источников" },
                    { id: "vkr-writing", label: "Помощь в написании" },
                  ],
                },
                {
                  title: "Курсовые проекты",
                  options: [
                    { id: "course-sources", label: "Подбор источников" },
                    { id: "course-calc", label: "Проверка расчетов" },
                    { id: "course-present", label: "Подготовка презентаций" },
                    { id: "course-research", label: "Экспертная оценка исследований" },
                  ],
                },
                {
                  title: "Анализ материалов",
                  options: [
                    { id: "analysis-system", label: "Систематизация информации" },
                    { id: "analysis-prepare", label: "Подготовка к защите" },
                    { id: "analysis-review", label: "Проверка на плагиат" },
                    { id: "analysis-edit", label: "Редактирование работ" },
                  ],
                },
                {
                  title: "Технические дисциплины",
                  options: [
                    { id: "tech-autocad", label: "Чертежи в AutoCAD" },
                    { id: "tech-mathcad", label: "Расчёты в MathCAD" },
                    { id: "tech-3d", label: "3D-моделирование" },
                    { id: "tech-programming", label: "Программирование" },
                  ],
                },
                {
                  title: "Гуманитарные науки",
                  options: [
                    { id: "human-history", label: "Исторический анализ" },
                    { id: "human-socio", label: "Социологические исследования" },
                    { id: "human-philo", label: "Философские концепции" },
                    { id: "human-lit", label: "Литературоведение" },
                  ],
                },
                {
                  title: "Дополнительные услуги",
                  options: [
                    { id: "add-present", label: "Подготовка презентации" },
                    { id: "add-speech", label: "Подготовка речи" },
                    { id: "add-review", label: "Проверка на плагиат" },
                    { id: "add-consult", label: "Консультации" },
                  ],
                },
              ]}
            />
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            * Услуги оказываются в формате соглашения. Ответственность за использование материалов несёт заказчик.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
