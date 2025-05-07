import OpenAI from "openai"
import dotenv from "dotenv"
import fs from "fs"
import path from "path"
import fetch from "node-fetch"

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Константы
const ARTICLES_DIR = path.join(process.cwd(), 'app', 'blog', 'articles');
const ARTICLES_JSON = path.join(process.cwd(), 'public', 'articles.json');
const UNSPLASH_API_KEY = process.env.UNSPLASH_API_KEY;

// Словарь переводов тегов для Unsplash
const TAGS_EN: Record<string, string> = {
  'ремонт': 'renovation',
  'материалы': 'materials',
  'советы': 'advice',
  'дизайн': 'design',
  'тренды': 'trends',
  'интерьер': 'interior',
  'строительство': 'construction',
  'дом': 'house',
  'планирование': 'planning',
  'экономия': 'saving',
  'бюджет': 'budget',
  'веб-дизайн': 'web design',
  'IT': 'IT',
  'разработка': 'development',
  'энергоэффективность': 'energy efficiency',
  'стены': 'walls',
  'кухня': 'kitchen',
  'ошибки': 'mistakes',
  'подрядчик': 'contractor',
  'ванная': 'bathroom',
  'умный дом': 'smart home',
  'технологии': 'technology',
  'безопасность': 'security',
  'окна': 'windows',
  'выбор': 'choice',
};

interface UnsplashResponse {
  results: Array<{
    urls: {
      regular: string;
    };
  }>;
}

// Функция для получения изображения с Unsplash
async function getImage(query: string): Promise<string> {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`,
      },
    }
  );
  const data = (await response.json()) as UnsplashResponse;
  return data.results[0]?.urls.regular || 'https://via.placeholder.com/800x400';
}

// Функция для генерации статьи с помощью GPT
async function generateArticle(tag: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `Ты - эксперт по ремонту и обустройству дома. Напиши статью на тему "${tag}". Статья должна быть информативной, полезной и содержать практические советы.`
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })

    const content = completion.choices[0].message.content
    if (!content) {
      throw new Error("Не удалось сгенерировать контент")
    }

    // Разделяем контент на заголовок и основной текст
    const [title, ...contentParts] = content.split("\n\n")
    const fullContent = contentParts.join("\n\n")

    return {
      title: title.replace("# ", ""),
      content: fullContent,
      tag
    }
  } catch (error) {
    console.error(`Ошибка при генерации статьи для тега ${tag}:`, error)
    throw error
  }
}

// Основная функция для генерации статей
async function generateArticles() {
  try {
    // Загружаем существующие статьи
    let articlesJsonArr: any[] = [];
    if (fs.existsSync(ARTICLES_JSON)) {
      try {
        articlesJsonArr = JSON.parse(fs.readFileSync(ARTICLES_JSON, 'utf-8'));
      } catch {}
    }

    // Генерируем статьи для каждого тега
    for (const [tag, tagEn] of Object.entries(TAGS_EN)) {
      try {
        // Генерируем контент
        const { title, content } = await generateArticle(tag);
        
        // Получаем изображение
        const image = await getImage(tagEn);
        
        // Создаем объект статьи
        const articleObj = {
          title,
          date: new Date().toISOString(),
          tags: [tag],
          image,
          content,
          published: true
        };

        // Сохраняем в MDX
        const fileName = `${new Date().toISOString().slice(0,10)}-${title.toLowerCase().replace(/[^a-zа-я0-9]+/gi, '-')}.mdx`;
        const filePath = path.join(ARTICLES_DIR, fileName);
        const mdx = `---
title: "${title}"
description: "${articleObj.content.split('\n\n')[0]}"
date: "${articleObj.date}"
author: "AI Assistant"
tags: [${articleObj.tags.map(t => `"${t}"`).join(', ')}]
time_to_read: ${Math.max(1, Math.round(articleObj.content.split(' ').length / 180))}
image: "${image}"
---

${articleObj.content}
`;
        
        fs.mkdirSync(ARTICLES_DIR, { recursive: true });
        fs.writeFileSync(filePath, mdx, 'utf-8');
        
        // Добавляем в articles.json
        articlesJsonArr.unshift(articleObj);
        console.log(`Сгенерирована статья по тегу: ${tag}`);
      } catch (error) {
        console.error(`Ошибка при генерации статьи для тега ${tag}:`, error);
      }
    }

    // Сохраняем обновленный articles.json
    fs.writeFileSync(ARTICLES_JSON, JSON.stringify(articlesJsonArr, null, 2), 'utf-8');
    console.log('Итоговое количество статей в articles.json:', articlesJsonArr.length);
  } catch (error) {
    console.error('Ошибка при генерации статей:', error);
  }
}

// Запуск генерации
generateArticles().catch(console.error); 