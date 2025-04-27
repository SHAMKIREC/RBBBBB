import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

// Функция для рекурсивного чтения всех файлов
async function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): Promise<string[]> {
  const files = await fs.readdir(dirPath)

  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const stat = await fs.stat(filePath)

    if (stat.isDirectory()) {
      // Пропускаем некоторые директории
      if (!file.startsWith('.') && !['node_modules', '.next', 'public'].includes(file)) {
        arrayOfFiles = await getAllFiles(filePath, arrayOfFiles)
      }
    } else {
      // Добавляем только текстовые файлы
      if (['.tsx', '.ts', '.js', '.jsx', '.md', '.txt'].includes(path.extname(file))) {
        arrayOfFiles.push(filePath)
      }
    }
  }

  return arrayOfFiles
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase()

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  try {
    const rootDir = process.cwd()
    const files = await getAllFiles(rootDir)
    const results = []

    for (const file of files) {
      const content = await fs.readFile(file, 'utf-8')
      const lines = content.split('\n')
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].toLowerCase()
        if (line.includes(query)) {
          // Получаем контекст (несколько строк до и после совпадения)
          const start = Math.max(0, i - 2)
          const end = Math.min(lines.length, i + 3)
          const excerpt = lines.slice(start, end).join('\n')

          results.push({
            title: path.relative(rootDir, file),
            url: `/${path.relative(rootDir, file)}`,
            excerpt,
            lineNumber: i + 1
          })

          // Ограничиваем количество результатов
          if (results.length >= 20) break
        }
      }

      if (results.length >= 20) break
    }

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 