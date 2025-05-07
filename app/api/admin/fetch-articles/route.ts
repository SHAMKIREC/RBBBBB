import { NextRequest, NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function POST(req: NextRequest) {
  return new Promise((resolve) => {
    exec('set HABR_RSS=https://habr.com/ru/rss/all/all/?fl=ru&& set VC_RSS=https://vc.ru/rss&& set LIFEHACKER_RSS=https://lifehacker.ru/feed/&& set DEVTO_RSS=https://dev.to/feed&& node scripts/dist/fetch-articles.js', (error, stdout, stderr) => {
      if (error) {
        resolve(NextResponse.json({ success: false, error: 'Ошибка при импорте статей.' }, { status: 500 }));
      } else {
        resolve(NextResponse.json({ success: true, output: 'Импорт завершён' }));
      }
    });
  });
} 