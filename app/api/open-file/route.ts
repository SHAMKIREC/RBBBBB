import { NextResponse } from 'next/server'
import path from 'path'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const file = searchParams.get('file')
  const line = searchParams.get('line')

  if (!file || !line) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
  }

  try {
    // Формируем URL для открытия файла в редакторе
    const fileUrl = `vscode://file/${path.join(process.cwd(), file)}:${line}`
    
    return NextResponse.json({ url: fileUrl })
  } catch (error) {
    console.error('Error opening file:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 