<script setup>
definePageMeta({
  layout: "center-layout",
});
const redirectToSignup = ()=>{
  navigateTo("/signup")
}
const redirectToForgetpassword = ()=>{
  navigateTo("/reset-password")
}
const redirectToDashboard = ()=>{
  navigateTo("/dashboard")
}
</script>


<template>
  <head>
        <title>Sign in | Voyze</title>
    </head>
    <!--tailwind css card start-->
	        <!-- Login form -->
	        <div class="max-w-full w-full md:w-2/3 lg:w-1/2 px-6 sm:px-12">
	          <div class="relative">
	            <div class="p-6 sm:py-8 sm:px-12 rounded-lg bg-white-500 dark:bg-gray-800 shadow-xl">
	              <form id="register-form">
	                <h1 class="text-2xl leading-normal mb-2 font-bold text-cyan-500  dark:text-cyan-500 text-center">Welcome Back!</h1>
                  <p class="leading-normal mb-3 text-slate-400  dark:text-cyan-500 text-center">Sign in to continue to Voyze.</p>
	                <hr class="block w-12 h-0.5 mx-auto my-2 bg-gray-700 border-gray-700">
	                <div class="mb-6">
                    <input name="name" class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" placeholder="Username" value="" aria-label="full name" type="text" required="">
                  </div>
                  <div class="mb-6">
                    <input name="password" class="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" placeholder="Password" value="" aria-label="email" type="email" required="">
                  </div>
                  <div class="mb-6">
                    <input class="form-checkbox h-5 w-5 text-indigo-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded focus:outline-none" type="checkbox" value="" id="terms" required="">
                    <label class="ltr:ml-2 rtl:mr-2 ml-1" for="terms">
                       Remember me
                    </label>
                  </div>
	                <div class="grid">
	                  <button type="submit" class="py-2 px-4 inline-block text-center rounded leading-normal text-gray-100 bg-cyan-500 border border-cyan-500 text-white hover:text-white hover:bg-cyan-600 hover:ring-0 hover:border-cyan-600 focus:bg-cyan-600 focus:border-cyan-600 focus:outline-none focus:ring-0">
	                  	<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right" viewbox="0 0 16 16">
											  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"></path>
											  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"></path>
											</svg> Login
	                  </button>
	                </div>
	              </form>
	              <div class="mt-3">
	                <p class="text-center mb-4">Don't have an account?  <a class="hover:text-cyan-500" href="login-basic.html">SignUp</a></p>
	              </div>
	            </div>
	          </div>
	        </div>
    <!--tailwind css card end-->
</template>