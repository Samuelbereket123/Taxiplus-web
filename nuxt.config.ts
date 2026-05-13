// https://nuxt.com/docs/api/configuration/nuxt-config
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

  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true
        }
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
