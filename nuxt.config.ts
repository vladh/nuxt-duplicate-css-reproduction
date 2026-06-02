// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  features: {
    // The below line does not affect the reproduction.
    // inlineStyles: true,
  },
  css: ['~/assets/css/main.css'],
  future: { compatibilityVersion: 4 },
  compatibilityDate: 'latest',
})
