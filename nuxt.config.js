import colors from 'vuetify/es5/util/colors'
const webpack = require('webpack')

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    spa:true,
    target: 'static',
    head: {
        titleTemplate: '%s - Premium Water',
        title: 'Premium Water',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                src: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
                integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp',
                crossOrigin: 'anonymous'
            },
        ],
        script: [
            { src: 'https://kit.fontawesome.com/7a7722bde0.js', crossOrigin: 'anonymous' },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        // '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios'
    ],

    axios: {
        baseURL: 'http://127.0.0.1:8000/api/',
        proxy:true
    },
      publicRuntimeConfig:{
        axios:{
          browserBaseURL:'https://still-tor-84792.herokuapp.com/api'
        }
      },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    // vuetify: {
    //   customVariables: ['~/assets/variables.scss'],
    //   theme: {
    //     dark: true,
    //     themes: {
    //       dark: {
    //         primary: colors.blue.darken2,
    //         accent: colors.grey.darken3,
    //         secondary: colors.amber.darken3,
    //         info: colors.teal.lighten1,
    //         warning: colors.amber.base,
    //         error: colors.deepOrange.accent4,
    //         success: colors.green.accent3
    //       }
    //     }
    //   }
    // },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      vendor: ['jquery'],
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
      ],
    }
}
