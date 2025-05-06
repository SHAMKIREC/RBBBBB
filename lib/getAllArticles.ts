import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ARTICLES_DIR = path.join(process.cwd(), 'app', 'blog', 'articles');

export type Article = {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  time_to_read: number;
  image: string;
  content: string;
};

export function getAllArticles(): Article[] {
  try {
    return fs.readdirSync(ARTICLES_DIR)
      .filter(f => f.endsWith('.mdx'))
      .map(f => {
        const file = fs.readFileSync(path.join(ARTICLES_DIR, f), 'utf-8');
        const { data, content } = matter(file);
        return {
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          author: data.author || '',
          tags: data.tags || [],
          time_to_read: data.time_to_read || 1,
          image: data.image || '/images/placeholder.jpg',
          content: content || '',
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
} 