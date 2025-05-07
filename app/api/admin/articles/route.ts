import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ARTICLES_PATH = path.join(process.cwd(), 'public', 'articles.json');

export async function GET() {
  try {
    const data = fs.readFileSync(ARTICLES_PATH, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  const articles = await req.json();
  fs.writeFileSync(ARTICLES_PATH, JSON.stringify(articles, null, 2), 'utf-8');
  return NextResponse.json({ success: true });
} 