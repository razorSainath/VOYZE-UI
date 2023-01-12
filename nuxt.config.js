// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  app: {
    head: {
      script: [
        {
          src: "https://kit.fontawesome.com/79955d71bb.js",
        },
      ],
    },
  },
  css: ["assets/styles/global.scss", "assets/styles/bootstrap.scss"],
};
