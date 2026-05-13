// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  css: ['~/assets/css/main.css'],

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
  },

  runtimeConfig: {
    public: {
      // MVP - No Supabase needed
      supabaseUrl: 'https://demo.supabase.co',
      supabaseKey: 'demo-key'
    }
  },

  typescript: {
    strict: false,
    typeCheck: false
  },

  nitro: {
    preset: 'vercel'
  }
})
