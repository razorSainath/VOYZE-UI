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

  <div class="card-body p-4" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
    <div class="text-center mt-2">
      <h5 style="color: #009dc2">Welcome Back !</h5>
      <p class="text-muted">Sign in to continue to Voyze.</p>
    </div>
    <div class="p-2 mt-4">
      <form action="dashboard">
        <div class="mb-3">
          <label class="form-label" for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Enter username"
          />
        </div>

        <div class="mb-3">
          <label class="form-label" for="userpassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="userpassword"
            placeholder="Enter password"
          />
        </div>

        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="auth-remember-check"
          />
          <label class="form-check-label" for="auth-remember-check"
            >Remember me</label
          >
          <div class="float-end">
            <a @click="redirectToForgetpassword" class="text-muted"
              >Forgot password?</a
            >
          </div>
        </div>
        <div class="py-2">
          <small
            >By clicking <b>Log In</b>, you agree to our
            <a
              href="https://voyze.io/terms-and-conditions"
              style="color: #009dc2"
              >Terms</a
            >
            & that you have read our
            <a href="https://voyze.io/privacy-policy" style="color: #009dc2"
              >Data Use Policy</a
            >.</small
          >
        </div>
        <div class="mt-3 text-end">
          <button
          @click="redirectToDashboard"
            class="btn btn-primary w-sm waves-effect waves-light"
            type="submit"
            style="background-color: #009dc2; border: #009dc2"
          >
          Log In
          </button>
        </div>

        <div class="mt-4 text-center">
          <p class="mb-0">
            Don't have an account ?
            <a
              @click="redirectToSignup"
              class="fw-medium"
              style="color: #009dc2; cursor: pointer; "
              
            >
              Signup now
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
