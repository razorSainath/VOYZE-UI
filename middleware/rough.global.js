export default defineNuxtRouteMiddleware((to, from) => {
    if(to.fullPath=="/") navigateTo("/signin")

  })
  