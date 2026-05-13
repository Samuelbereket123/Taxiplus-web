import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const nuxtDir = resolve(__dirname, '../.nuxt')

// Create .nuxt directory if it doesn't exist
if (!existsSync(nuxtDir)) {
  mkdirSync(nuxtDir, { recursive: true })
}

// Create tsconfig.app.json
const tsconfigPath = resolve(nuxtDir, 'tsconfig.app.json')
const tsconfigContent = {
  extends: './tsconfig.json',
  compilerOptions: {
    composite: true,
    skipLibCheck: true,
    strict: false
  }
}

writeFileSync(tsconfigPath, JSON.stringify(tsconfigContent, null, 2))
console.log('✓ Created .nuxt/tsconfig.app.json')
