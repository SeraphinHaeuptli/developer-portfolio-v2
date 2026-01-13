const config = require('./developer.json')
const siteTitle = `${config.name} | ${config.role}`


/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  compatibilityDate: '2025-02-28',
  devtools: { enabled: true },
  /**
   * * App Config
   * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   * meta config: https://nuxt.com/docs/getting-started/seo-meta
   * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
   * TODO: Add more meta tags for SEO
   * TODO: Add tags for social media sharing
   * TODO: Migrate apple-touch-icon config to manifest.json
   */
  app: {
    head: {
      htmlAttrs: {
        lang: 'en', // App language
      },
      title: 'Seraphin Haeuptli | Full-stack Developer Portfolio', // App window nav title
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Seraphin Haeuptli - Full-stack developer based in Zürich. Portfolio showcasing web development projects using React, Node.js, and modern JavaScript frameworks.' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://seraphinhaeuptli.com/' },
        { hid: 'og:title', property: 'og:title', content: 'Seraphin Haeuptli | Full-stack Developer Portfolio' },
        { hid: 'og:description', property: 'og:description', content: 'Full-stack developer portfolio - View my projects and skills in React, Node.js, and modern web development.' },
        { hid: 'og:image', property: 'og:image', content: 'https://seraphinhaeuptli.com/og-image.jpg' },
        { name: 'theme-color', content: '#010C15' },
        { name: 'google-site-verification', content: 'AeefdgM2q5N2Xwv6-WY5bEudmnLyXt03rN75iTs-yRU' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Seraphin Haeuptli",
            "jobTitle": "Full-stack Developer",
            "url": "https://seraphinhaeuptli.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Zürich",
              "addressCountry": "CH"
            },
            "sameAs": [
              "https://github.com/SeraphinHaeuptli"
            ]
          })
        }
      ],
      link: [
        { rel: 'icon', type: 'public/x-icon', href: '/favicon.ico' },  // ← Add this line here
        { rel: 'manifest', href: 'pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: 'pwa/icons/apple-touch-icon.png' },
      ],
    },
  },

  /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: [
    '@nuxtjs/tailwindcss',
  ],

  components: {
    dirs: [
      '~/components',
    ],
  },

  /**
   * * Tailwind CSS Config
   * Options: https://tailwindcss.nuxt.dev/getting-started/options/
   * Docs: https://tailwindcss.nuxt.dev
   */
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: false,
  },

  /**
   * * Runtime Config (Environment Variables)
   * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',

    }
  }
})