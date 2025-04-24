import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 mb-4 gradient-text">
                  Политика конфиденциальности
                </Dialog.Title>
                <div className="privacy-policy-content">
                  <h4>1. Оператор</h4>
                  <p>
                    ИП или ООО «РЕШАЕМ БЫСТРО» осуществляет сбор и обработку персональных данных, 
                    предоставленных пользователями через формы на сайте.
                  </p>

                  <h4>2. Какие данные мы собираем</h4>
                  <ul>
                    <li>• Имя пользователя</li>
                    <li>• Номер телефона</li>
                    <li>• Электронную почту (если указывается)</li>
                    <li>• Сообщение/комментарий</li>
                  </ul>

                  <h4>3. Цель сбора данных</h4>
                  <ul>
                    <li>• Обратная связь с пользователем</li>
                    <li>• Обработка заявок и предоставление услуг</li>
                    <li>• Улучшение качества сервиса</li>
                  </ul>

                  <h4>4. Хранение и безопасность</h4>
                  <p>
                    Мы обязуемся не передавать ваши данные третьим лицам без вашего согласия.
                  </p>

                  <h4>5. Согласие на обработку</h4>
                  <p>
                    Отправляя форму, пользователь соглашается с данной политикой согласно ФЗ № 152-ФЗ.
                  </p>

                  <h4>6. Связь с нами</h4>
                  <p>
                    📧 <a href="mailto:rb.service24@mail.ru" className="text-blue-600 hover:underline">rb.service24@mail.ru</a><br />
                    📞 <a href="tel:+79330306949" className="text-blue-600 hover:underline">+7 933 030 69 49</a>
                  </p>

                  <h4>7. Изменения политики</h4>
                  <p>
                    Актуальная версия всегда доступна на сайте:{" "}
                    <a
                      href="https://r-bservice.vercel.app/privacy-policy"
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      r-bservice.vercel.app/privacy-policy
                    </a>
                  </p>

                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      className="gradient-button px-4 py-2 text-sm font-medium text-white rounded-md"
                      onClick={onClose}
                    >
                      Закрыть
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
} 