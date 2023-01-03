

<template>


<head>
    <meta charset="utf-8" />
    <title>Register | Voyze</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
    <meta content="Themesbrand" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.ico">

    <!-- Bootstrap Css -->
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />

</head>

<body class="authentication-bg">
    <div class="account-pages pt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <a href="index.html" class="mb-5 d-block auth-logo">
                            <img src="assets/images/logo-light.svg" alt="" height="30" class="logo logo-dark">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card">
                        <div class="card-body p-4">
                            <div class="text-center mt-2">
                                <h5 style="color: #009dc2;">Register Account</h5>
                                <p class="text-muted">Register yourself to get Voyze access</p>
                            </div>
                            <div class="p-2 mt-4">
                                <form action="index.html">
                                    <div class="mb-3">
                                        <label class="form-label" for="useremail">Email</label>
                                        <input type="email" class="form-control" id="useremail"
                                            placeholder="Enter email">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="username">Username</label>
                                        <input type="text" class="form-control" id="username"
                                            placeholder="Enter username">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="userpassword">Password</label>
                                        <input type="password" class="form-control" id="userpassword"
                                            placeholder="Enter password">
                                    </div>

                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="auth-terms-condition-check">
                                        <label class="form-check-label" for="auth-terms-condition-check">I accept <a
                                                href="javascript: void(0);" class="text-dark">Terms and
                                                Conditions</a></label>
                                    </div>
                                    <div class="py-2">
                                        <small>By clicking <b>Register</b>, you agree to our <a
                                                href="https://voyze.io/terms-and-conditions"
                                                style="color: #009dc2;">Terms</a> & that you have read our <a
                                                href="https://voyze.io/privacy-policy" style="color: #009dc2;">Data Use
                                                Policy</a>.</small>
                                    </div>
                                    <div class="mt-3 text-end">
                                        <button class="btn btn-primary w-sm waves-effect waves-light" type="submit"
                                            style="background-color: #009dc2;border: #009dc2;">Register</button>
                                    </div>

                                    <div class="mt-4 text-center">
                                        <p class="text-muted mb-0">Already have an account ? <a href="auth-login.html"
                                                class="fw-medium" style="color: #009dc2;"> Login</a></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <p>© 2021 -
                            {{new Date().getFullYear()}} Razorlabz Software Private
                            Limited. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>



</body>



</template>