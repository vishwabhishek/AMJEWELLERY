import { defineConfig } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

const siteDir = path.resolve(__dirname, 'site')

function getHtmlInputs() {
  const files = fs.readdirSync(siteDir, { recursive: true })
  const htmlFiles = files.filter(f => typeof f === 'string' && f.endsWith('.html'))
  const input = {}
  for (const rel of htmlFiles) {
    const key = rel.replace(/\/index\.html$/, '').replace(/\.html$/, '')
    input[key || 'main'] = path.resolve(siteDir, rel)
  }
  return input
}

export default defineConfig({
  root: './site',
  css: {
    postcss: {
      plugins: []
    }
  },
  server: {
    port: 3000,
    open: false,
    host: true,
    hmr: {
      overlay: false
    }
  },
  build: {
    outDir: path.resolve(__dirname, '../../dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs()
    }
  },
  preview: {
    port: 3002,
    host: true
  }
})

