import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const adminPassword = process.env.ADMIN_PASSWORD;
  // ВРЕМЕННО: выводим в консоль для отладки
  console.log("[ADMIN_AUTH] ENV:", adminPassword, "INPUT:", password);
  return NextResponse.json({
    success: password === adminPassword,
    debug_env: adminPassword,
    debug_input: password,
  });
} 