// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
   "@/assets/styles/global.scss",

  ],
  buildModules:['@nuxtjs/fontawesome'],
  fontawesome: {
    icons:{
     solid:true,
     brands:true
    }
   }
});
