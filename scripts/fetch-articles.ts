import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const parser = new Parser();

const FEEDS = [
  process.env.HABR_RSS,
  process.env.VC_RSS,
  process.env.LIFEHACKER_RSS,
  process.env.DEVTO_RSS,
];

const TAGS = [
  'ремонт', 'материалы', 'советы', 'дизайн', 'тренды', 'интерьер', 'строительство', 'дом', 'планирование', 'экономия', 'бюджет', 'веб-дизайн', 'IT', 'разработка', 'энергоэффективность', 'стены', 'кухня', 'ошибки', 'подрядчик', 'ванная', 'умный дом', 'технологии', 'безопасность', 'окна', 'выбор'
];

const ARTICLES_DIR = path.join(process.cwd(), 'app', 'blog', 'articles');
const PLACEHOLDER_IMAGE = '/images/placeholder.jpg';

async function fetchAndSaveArticles() {
  for (const feedUrl of FEEDS) {
    if (!feedUrl) continue;
    const feed = await parser.parseURL(feedUrl);
    for (const item of feed.items.slice(0, 1)) { // только 1 статья с каждого источника
      const tags = TAGS.filter(tag => (item.title + ' ' + (item.contentSnippet || '')).toLowerCase().includes(tag));
      const fileName = `${item.isoDate?.slice(0,10) || Date.now()}-${(item.title||'').toLowerCase().replace(/[^a-zа-я0-9]+/gi, '-')}.mdx`;
      const filePath = path.join(ARTICLES_DIR, fileName);
      const mdx = `---\ntitle: \"${item.title?.replace(/"/g, '')}\"\ndescription: \"${item.contentSnippet?.replace(/"/g, '').slice(0, 200)}\"\ndate: \"${item.isoDate || new Date().toISOString()}\"\nauthor: \"${item.creator || item.author || 'Unknown'}\"\ntags: [${tags.map(t => `\"${t}\"`).join(', ')}]\ntime_to_read: ${Math.max(1, Math.round(((item.contentSnippet?.split(' ').length || 100) / 180)))}\nimage: \"${item.enclosure?.url || PLACEHOLDER_IMAGE}\"\n---\n\n${item.contentSnippet || ''}\n`;
      fs.mkdirSync(ARTICLES_DIR, { recursive: true });
      fs.writeFileSync(filePath, mdx, 'utf-8');
    }
  }
}

fetchAndSaveArticles(); 