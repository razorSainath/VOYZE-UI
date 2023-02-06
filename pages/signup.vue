<script setup>
import image from "@/assets/images/blog_4.jpg"
definePageMeta({
  layout: "empty",
});
const redirectToSignup = ()=>{
  navigateTo("/signin")
}
</script>

<template>
  <head>
    <title>Register | Voyze</title>
  </head>
  <div class="bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40"
    :style="{'backgroundImage':`url(${image})`,'background-repeat':'no-repeat','background-size':'cover','background-attachment':'fixed',}">
    <div class="flex flex-wrap flex-row">
      <span class="fixed bg-gray-900 bg-opacity-70 w-full h-full inset-x-0 top-0"></span>
      <div class="flex-shrink max-w-full w-full min-h-screen sm:w-2/3 lg:w-1/2 xl:w-1/3 z-30">
        <!-- login form -->
        <div class="max-w-full w-full h-full px-6 sm:px-12 bg-white dark:bg-gray-800 shadow-lg z-40">
          <div class="relative">
            <div class="p-6 sm:p-8">
              <form id="login-form">
                <div class="text-left mb-5">
                  <a class="py-2 text-xl">
                    <img class="inline-block w-48 h-auto ltr:mr-2 rtl:ml-2 -mt-1" src="~/assets/images/logo-light.svg">
                  </a>
                  <h2 class="text-2xl font-semibold text-gray-900 px-1 mt-2 max-h-9 overflow-hidden mt-5">
                    Get Started
                  </h2>
                  <small class="font-semibold text-gray-400 px-1 max-h-9 overflow-hidden">Enter your credentials to access your account</small>
                </div>
                <div class="mb-6">
                  <label for="inputemail" class="inline-block mb-2">Username</label>
                  <input name="email" id="inputemail"
                    class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                    value="" aria-label="email" type="email" required="" placeholder="Enter Username">
                </div>
                <div class="mb-6">
                  <div class="flex flex-wrap flex-row">
                    <div class="flex-shrink max-w-full w-1/2">
                      <label for="inputpass" class="inline-block mb-2">Email</label>
                    </div>
                  </div>
                  <input id="inputpass"
                    class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                    aria-label="email" type="email" value="" required="" placeholder="Enter your email">
                </div>
                <div class="mb-6">
                  <div class="flex flex-wrap flex-row">
                    <div class="flex-shrink max-w-full w-1/2">
                      <label for="inputpass" class="inline-block mb-2">Organisation</label>
                    </div>
                  </div>
                  <input id="inputpass"
                    class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                    aria-label="text" type="text" value="" required="" placeholder="Enter your Org. Code">
                </div>
                <div class="mb-6">
                  <div class="flex flex-wrap flex-row">
                    <div class="flex-shrink max-w-full w-1/2">
                      <label for="inputpass" class="inline-block mb-2">Password</label>
                    </div>
                  </div>
                  <input id="inputpass"
                    class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                    aria-label="password" type="password" value="" required="" placeholder="Min. 8 characters">
                </div>
                <div class="mb-6 flex flex-row">
                  <input
                    class="form-checkbox h-5 w-5 text-indigo-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded focus:outline-none"
                    type="checkbox" value="" id="remember" required="">
                  <div class="flex-shrink max-w-full w-full">
                    <label class="ltr:ml-2 rtl:mr-2 ml-2" for="remember">
                      I agree to the <a href="">Terms</a> & <a href="">Privacy</a>
                    </label>
                  </div>
                </div>
                <div class="grid">
                  <button type="submit"
                    class="py-2 px-4 inline-block text-center rounded leading-5 text-gray-100 bg-cyan-500 border border-cyan-500 hover:text-white hover:bg-cyan-600 hover:ring-0 hover:border-cyan-600 focus:bg-cyan-600 focus:border-cyan-600 focus:outline-none focus:ring-0 text-white"
                    @click="redirectToDashboard">
                    <!-- <i class="fas fa-sign-up ltr:mr-2 rtl:ml-2"></i> -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      class="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right" viewbox="0 0 16 16">
                      <path fill-rule="evenodd"
                        d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z">
                      </path>
                      <path fill-rule="evenodd"
                        d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z">
                      </path>
                    </svg> Sign Up
                  </button>
                </div>
              </form>
              <div class="mt-4">
                <p class="text-center mb-0">Have an account? <a class="hover:text-cyan-500 cursor-pointer"
                    @click="redirectToSignup">SignIn</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
