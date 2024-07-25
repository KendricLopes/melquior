// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    baseURL: '/melquior/',
    head: {
      title: 'Melquior',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },
  css: [
    '~/assets/css/layout.css', '~/assets/css/style.css'  // Caminho para o seu arquivo CSS
  ],
})
