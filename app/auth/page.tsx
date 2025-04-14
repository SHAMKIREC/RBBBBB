import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function AuthPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Добро пожаловать в РЕШАЕМ БЫСТРО
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Войдите в свой аккаунт или зарегистрируйтесь, чтобы получить доступ к полному функционалу
            </p>
          </div>
          <div className="w-full max-w-md">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle>Вход в аккаунт</CardTitle>
                    <CardDescription>Введите ваш email и пароль для входа в систему</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="example@mail.ru" type="email" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Пароль</Label>
                        <Link href="#" className="text-sm text-blue-600 hover:text-blue-800">
                          Забыли пароль?
                        </Link>
                      </div>
                      <Input id="password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Войти</Button>
                  </CardFooter>
                </Card>

                {/* Социальные сети для входа */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-gray-50 dark:bg-gray-900 px-2 text-gray-500">Или войти через</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <Button variant="outline" className="w-full">
                      <div className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.615h-1.616c-.607 0-.789-.583-1.979-1.979-.998-.998-1.388-.789-1.388-.789v1.388c0 .422-.211.633-.844.633h-1.32c-1.898 0-3.53-1.154-4.835-3.3-1.983-2.888-2.523-5.045-2.523-5.497 0-.211.106-.422.633-.422h1.616c.422 0 .633.211.844.633.844 2.467 2.257 4.623 2.888 4.623.211 0 .317-.106.317-.633v-2.467c-.106-.844-.633-1.005-.633-1.32 0-.211.106-.422.422-.422h2.572c.317 0 .422.211.422.633v3.3c0 .317.211.422.317.422.211 0 .317-.106.633-.422.844-1.154 1.477-2.888 1.477-2.888.106-.211.317-.422.633-.422h1.616c.422 0 .528.211.422.633-.211.844-1.898 3.194-1.898 3.194-.106.211-.211.422 0 .633.106.106.422.422.633.633.633.633 1.616 1.477 1.898 1.898.317.317.211.633-.106.633z" />
                        </svg>
                        <span className="ml-2">ВК</span>
                      </div>
                    </Button>

                    <Button variant="outline" className="w-full">
                      <div className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                        <span className="ml-2">Телеграм</span>
                      </div>
                    </Button>

                    <Button variant="outline" className="w-full">
                      <div className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 0.16 5.334 0.157 11.892c0 2.096.546 4.142 1.588 5.946L0.057 24l6.304-1.654a11.882 11.882 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.24-6.165-3.48-8.413zm-8.413 18.306h-.004a9.866 9.866 0 01-5.031-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.904 9.904 0 01-1.51-5.272c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.993c-.003 5.45-4.437 9.897-9.886 9.897zm5.43-7.403c-.3-.15-1.767-.872-2.04-.971-.272-.099-.47-.15-.669.15-.198.3-.767.97-.94 1.17-.173.198-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.49-1.768-1.663-2.066-.173-.3-.019-.46.13-.61.134-.133.297-.347.446-.52.148-.174.198-.3.297-.496.1-.198.05-.371-.025-.52-.074-.148-.668-1.61-.916-2.206-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"
                          />
                        </svg>
                        <span className="ml-2">WhatsApp</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle>Создать аккаунт</CardTitle>
                    <CardDescription>Заполните форму для регистрации нового аккаунта</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Имя</Label>
                        <Input id="first-name" placeholder="Иван" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Фамилия</Label>
                        <Input id="last-name" placeholder="Иванов" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="example@mail.ru" type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Пароль</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Зарегистрироваться</Button>
                  </CardFooter>
                </Card>

                {/* Социальные сети для регистрации */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-gray-50 dark:bg-gray-900 px-2 text-gray-500">
                        Или зарегистрироваться через
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <Button variant="outline" className="w-full">
                      <div className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.615h-1.616c-.607 0-.789-.583-1.979-1.979-.998-.998-1.388-.789-1.388-.789v1.388c0 .422-.211.633-.844.633h-1.32c-1.898 0-3.53-1.154-4.835-3.3-1.983-2.888-2.523-5.045-2.523-5.497 0-.211.106-.422.633-.422h1.616c.422 0 .633.211.844.633.844 2.467 2.257 4.623 2.888 4.623.211 0 .317-.106.317-.633v-2.467c-.106-.844-.633-1.005-.633-1.32 0-.211.106-.422.422-.422h2.572c.317 0 .422.211.422.633v3.3c0 .317.211.422.317.422.211 0 .317-.106.633-.422.844-1.154 1.477-2.888 1.477-2.888.106-.211.317-.422.633-.422h1.616c.422 0 .528.211.422.633-.211.844-1.898 3.194-1.898 3.194-.106.211-.211.422 0 .633.106.106.422.422.633.633.633.633 1.616 1.477 1.898 1.898.317.317.211.633-.106.633z" />
                        </svg>
                        <span className="ml-2">ВК</span>
                      </div>
                    </Button>

                    <Button variant="outline" className="w-full">
                      <div className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                        <span className="ml-2">Телеграм</span>
                      </div>
                    </Button>

                    <Button variant="outline" className="w-full">
                      <div className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 0.16 5.334 0.157 11.892c0 2.096.546 4.142 1.588 5.946L0.057 24l6.304-1.654a11.882 11.882 0 005.684 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.24-6.165-3.48-8.413zm-8.413 18.306h-.004a9.866 9.866 0 01-5.031-1.378l-.36-.214-3.742.982.999-3.648-.235-.374a9.904 9.904 0 01-1.51-5.272c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.993c-.003 5.45-4.437 9.897-9.886 9.897zm5.43-7.403c-.3-.15-1.767-.872-2.04-.971-.272-.099-.47-.15-.669.15-.198.3-.767.97-.94 1.17-.173.198-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.79-1.49-1.768-1.663-2.066-.173-.3-.019-.46.13-.61.134-.133.297-.347.446-.52.148-.174.198-.3.297-.496.1-.198.05-.371-.025-.52-.074-.148-.668-1.61-.916-2.206-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"
                          />
                        </svg>
                        <span className="ml-2">WhatsApp</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-4 text-center text-sm">
              Продолжая, вы соглашаетесь с{" "}
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                условиями использования
              </Link>{" "}
              и{" "}
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                политикой конфиденциальности
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
