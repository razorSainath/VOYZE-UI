// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
        "~/assets/css/bootstrap.min.css",
        "~/assets/css/app.min.css"
    ],
    plugins: [
        { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" }
    ],
})
