export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to,"here comes the middleware",from)
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // return navigateTo('/')
  })