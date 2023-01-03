<script setup>

import logoSignin from "@/assets/images/logo-light.svg"

</script>


<template>
  <head>
    <title>Login | Voyze</title>
  </head>

 
    <div class="account-pages pt-sm-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <a href="index.html" class="mb-5 d-block auth-logo">
                <img
                  :src="logoSignin"
                  alt=""
                  height="30"
                  class="logo logo-dark"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card">
              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 style="color: #009dc2">Welcome Back !</h5>
                  <p class="text-muted">Sign in to continue to Voyze.</p>
                </div>
                <div class="p-2 mt-4">
                  <form action="index.html">
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
                      <label class="form-label" for="userpassword"
                        >Password</label
                      >
                      <input
                        type="password"
                        class="form-control"
                        id="userpassword"
                        placeholder="Enter password"
                      />
                      <div class="float-end">
                        <a href="auth-recoverpw.html" class="text-muted"
                          >Forgot password?</a
                        >
                      </div>
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
                        <a
                          href="https://voyze.io/privacy-policy"
                          style="color: #009dc2"
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
                        Log In
                      </button>
                    </div>

                    <div class="mt-4 text-center">
                      <p class="mb-0">
                        Don't have an account ?
                        <a
                          href="auth-register.html"
                          class="fw-medium"
                          style="color: #009dc2"
                        >
                          Signup now
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="mt-5 text-center">
              <p>
                © 2021 - {{ new Date().getFullYear() }} Razorlabz Software
                Private Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>

</template>

<!-- JAVASCRIPT
        <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>
        <script src="assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
        <script src="assets/libs/jquery.counterup/jquery.counterup.min.js"></script>


        <script src="assets/js/app.js"></script> -->
