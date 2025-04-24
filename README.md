# Решаем Быстро - Сайт компании

Современный веб-сайт компании "Решаем Быстро", предоставляющей услуги в сфере ремонта, строительства и IT-решений.

## Технологии

- Next.js 14
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Telegram Bot API

## Функциональность

- Адаптивный дизайн
- Темная/светлая тема
- Калькулятор стоимости ремонта
- Отправка заявок через Telegram
- Каталог услуг с подкатегориями
- Блог и отзывы
- Форма обратной связи

## Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/reshaembystro.git
cd reshaembystro
```

2. Установите зависимости:
```bash
npm install
# или
yarn install
# или
pnpm install
```

3. Создайте файл .env.local и добавьте необходимые переменные окружения:
```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Решаем Быстро
```

4. Запустите проект в режиме разработки:
```bash
npm run dev
# или
yarn dev
# или
pnpm dev
```

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
/
├── app/                    # Страницы и API routes
├── components/            # React компоненты
├── styles/               # Глобальные стили
├── public/               # Статические файлы
└── ...
```

## Лицензия

MIT
