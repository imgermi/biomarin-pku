export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.TITLE,
    titleTemplate: process.env.TITLE + ' | %s',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.DESCRIPTION,
      },
    ],
  },

  publicRuntimeConfig: {
    axe: true,
  },

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/axios', '~/plugins/axe', '~/plugins/vee-validate'],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Docs: https://marquez.co/docs/nuxt-optimized-images/
    [
      '@aceforth/nuxt-optimized-images',
      {
        optimizeImages: true,
      },
    ],

    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',

    // Docs: https://nuxt-speedkit.grabarzundpartner.dev/options
    // https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-with-preload
    [
      'nuxt-speedkit',
      {
        detection: {
          performance: true,
          browserSupport: true,
        },
        performance: {},
        fonts: [
          {
            family: 'Roboto',
            locals: ['Roboto'],
            fallback: ['Franklin Gothic Medium', 'Tahoma', 'sans-serif'],
            variances: [
              {
                style: 'normal',
                weight: 500,
                sources: [
                  {
                    src: '@/assets/fonts/Roboto/Roboto-Medium.ttf',
                    type: 'ttf',
                  },
                  {
                    src: '@/assets/fonts/Roboto/Roboto-Medium.woff',
                    type: 'woff',
                  },
                  {
                    src: '@/assets/fonts/Roboto/Roboto-Medium.woff2',
                    type: 'woff2',
                  },
                ],
              },
              {
                style: 'normal',
                weight: 400,
                sources: [
                  {
                    src: '@/assets/fonts/Roboto/Roboto-Regular.ttf',
                    type: 'ttf',
                  },
                  {
                    src: '@/assets/fonts/Roboto/Roboto-Regular.woff',
                    type: 'woff',
                  },
                  {
                    src: '@/assets/fonts/Roboto/Roboto-Regular.woff2',
                    type: 'woff2',
                  },
                ],
              },
              {
                style: 'normal',
                weight: 200,
                sources: [
                  {
                    src: '@/assets/fonts/Roboto/Roboto-Light.ttf',
                    type: 'ttf',
                  },
                  {
                    src: '@/assets/fonts/Roboto/Roboto-Light.woff',
                    type: 'woff',
                  },
                  {
                    src: '@/assets/fonts/Roboto/Roboto-Light.woff2',
                    type: 'woff2',
                  },
                ],
              },
              {
                style: 'italic',
                weight: 200,
                sources: [
                  {
                    src: '@/assets/fonts/Roboto/Roboto-LightItalic.ttf',
                    type: 'ttf',
                  },
                  {
                    src: '@/assets/fonts/Roboto/Roboto-LightItalic.woff',
                    type: 'woff',
                  },
                  {
                    src: '@/assets/fonts/Roboto/Roboto-LightItalic.woff2',
                    type: 'woff2',
                  },
                ],
              },
            ],
          },
          {
            family: 'Playfair Display',
            locals: ['Playfair Display'],
            fallback: [
              'TimesNewRoman',
              'Times New Roman',
              'Times',
              'Baskerville',
              'serif',
            ],
            variances: [
              {
                style: 'normal',
                weight: 400,
                sources: [
                  {
                    src: '@/assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf',
                    type: 'ttf',
                  },
                  {
                    src: '@/assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.woff',
                    type: 'woff',
                  },
                  {
                    src: '@/assets/fonts/PlayfairDisplay/PlayfairDisplay-Regular.woff2',
                    type: 'woff2',
                  },
                ],
              },
            ],
          },
        ],

        componentAutoImport: false,
        componentPrefix: undefined,

        /**
         * IntersectionObserver rootMargin for Compoennts and Assets
         */
        lazyOffset: {
          component: '0%',
          asset: '0%',
        },
      },
    ],

    // Docs: https://www.npmjs.com/package/nuxt-social-meta
    [
      'nuxt-social-meta',
      {
        url: process.env.BASE_URL,
        title: process.env.TITLE,
        site_name: process.env.TITLE,
        description: process.env.DESCRIPTION,
        img: process.env.BASE_URL + 'social.png',
        locale: process.env.LOCALE,
        twitter: process.env.TWITTER_HANDLE,
        twitter_card: 'summary_large_image',
        themeColor: process.env.THEME_COLOR,
      },
    ],
  ],

  axios: {
    debug: false,
  },

  /*
   ** Global CSS
   */
  css: ['normalize.css/normalize.css', '@/assets/scss/main.scss'],

  // Docs: https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: ['~/assets/scss/abstracts/*.scss'],
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // https://logaretm.github.io/vee-validate/guide/rules.html#importing-rules-in-nuxt-js
    transpile: ['vee-validate/dist/rules'],
  },
}
