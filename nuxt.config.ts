export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nordhealth Signup',
      meta: [
        {
          name: 'description',
          content: 'Signup to Nordhealth',
        },
        { name: 'keywords', content: 'nordhealth signup' },
      ],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.includes('-'),
    },
  },

  modules: ['nuxt-auth-utils'],
})
