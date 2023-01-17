// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/79955d71bb.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  // router: {
  //   extendRoutes (routes) {
  //     // Update 
  //     routes.find((r) => r.path.includes('pages/product/_id.vue')).path = '/produtos/:id'
  //   }
  // },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css', "assets/styles/global.scss", "assets/styles/bootstrap.scss"],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
};
