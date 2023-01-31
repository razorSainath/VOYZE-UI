<script setup>
definePageMeta({
  layout: "center-layout",
});
const redirectToSignup = ()=>{
  navigateTo("/signin")
}
</script>

<template>
  <head>
    <title>Register | Voyze</title>
  </head>
  <div class="card-body">
    <div class="text-center mt-2">
      <h5 style="color: #009dc2">Register Account</h5>
      <p class="text-muted">Register yourself to get Voyze access</p>
    </div>
    <div class="p-2 mt-4">
      <form action="index.html">
        <div class="mb-3">
          <label class="form-label" for="useremail">Email</label>
          <input
            type="email"
            class="form-control"
            id="useremail"
            placeholder="Enter email"
          />
        </div>
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
            id="auth-terms-condition-check"
          />
          <label class="form-check-label" for="auth-terms-condition-check"
            >I accept
            <a href="javascript: void(0);" class="text-dark"
              >Terms and Conditions</a
            ></label
          >
        </div>
        <div class="py-2">
          <small
            >By clicking <b>Register</b>, you agree to our
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
            class="btn btn-primary w-sm waves-effect waves-light"
            type="submit"
            style="background-color: #009dc2; border: #009dc2"
          >
            Register
          </button>
        </div>

        <div class="text-center">
          <p class="text-muted">
            Already have an account ?
            <a @click="redirectToSignup" class="fw-medium" style="color: #009dc2">
              Login</a
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
