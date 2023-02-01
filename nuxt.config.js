// https://nuxt.com/docs/api/configuration/nuxt-config

export default {

target: "static",
router:{
base:'/VOYZE-UI/'
},

  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/79955d71bb.js",
          crossorigin: "anonymous",
        },
      ],
      // link:[
      //   { rel:"stylesheet",
      //   href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" }
      // ]//didnt work like this
    },
  },
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
