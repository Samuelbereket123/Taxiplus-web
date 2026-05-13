// https://nuxt.com/docs/api/configuration/nuxt-config
import { writeFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  ssr: true,

  nitro: {
    preset: 'vercel'
  },

  typescript: {
    typeCheck: false,
    strict: false
  },

  hooks: {
    'build:before': () => {
      const nuxtDir = resolve(process.cwd(), '.nuxt')
      try {
        mkdirSync(nuxtDir, { recursive: true })
        writeFileSync(
          resolve(nuxtDir, 'tsconfig.app.json'),
          JSON.stringify({ extends: './tsconfig.json' }, null, 2)
        )
      } catch (e) {
        console.log('Could not create tsconfig.app.json:', e)
      }
    }
  },

  app: {
    head: {
      title: 'TaxiPlus - Transportation Without Uncertainty',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Move through Addis with confidence. Fast, predictable, stress-free urban mobility.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
