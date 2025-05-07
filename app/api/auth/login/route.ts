import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'admin_auth';
const COOKIE_VALUE = 'admin_session_token'; // В реальной реализации лучше использовать JWT или случайный токен
const COOKIE_OPTIONS = {
  httpOnly: false, // теперь cookie доступна на клиенте
  path: '/',
  sameSite: 'lax' as const,
  secure: false, // true для https
  maxAge: 60 * 60 * 8, // 8 часов
};

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const adminSecret = "Allukard19992204remmi1343!@#$$%^^";
  console.log('DEBUG PASSWORD:', password);
  if (password && password === adminSecret) {
    const res = NextResponse.json({ success: true });
    res.cookies.set(COOKIE_NAME, COOKIE_VALUE, COOKIE_OPTIONS);
    return res;
  }
  return NextResponse.json({ success: false }, { status: 401 });
} 