export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  app: {
    baseURL: '/nuxt3-provet/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nordhealth Signup',
      link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }],
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
