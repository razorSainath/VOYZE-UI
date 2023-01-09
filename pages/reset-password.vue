<script setup>
definePageMeta({
  layout: "center-layout",
});
</script>

<template>
  <head>
    <title>Recover Password | Voyze</title>
  </head>

  <div class="card-body p-4">
    <div class="text-center mt-2">
      <h5 style="color: #009dc2">Reset Password</h5>
      <p class="text-muted">Reset Password with Voyze.</p>
    </div>
    <div class="p-2 mt-4">
      <div class="alert alert-success text-center mb-4" role="alert">
        Enter your Email and instructions will be sent to you!
      </div>
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

        <div class="mt-3 text-end">
          <button
            class="btn btn-primary w-sm waves-effect waves-light"
            type="submit"
            style="background-color: #009dc2; border: #009dc2"
          >
            Reset
          </button>
        </div>

        <div class="mt-4 text-center">
          <p class="mb-0">
            Remember It ?
            <a href="auth-login.html" class="fw-medium" style="color: #009dc2">
              Signin
            </a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
