<template>
    
    <head>
        
        <meta charset="utf-8" />
        <title>Recover Password | Voyze</title>
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
        <div class="account-pages my-5  pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div>
                            
                            <a href="index.html" class="mb-5 d-block auth-logo">
                                <img src="assets/images/logo-light.svg" alt="" height="30" class="logo logo-dark">
                            </a>
                            <div class="card">
                               
                                <div class="card-body p-4"> 
    
                                    <div class="text-center mt-2">
                                        <h5 style="color: #009dc2;">Reset Password</h5>
                                        <p class="text-muted">Reset Password with Voyze.</p>
                                    </div>
                                    <div class="p-2 mt-4">
                                        <div class="alert alert-success text-center mb-4" role="alert">
                                            Enter your Email and instructions will be sent to you!
                                        </div>
                                        <form action="index.html">
            
                                            <div class="mb-3">
                                                <label class="form-label" for="useremail">Email</label>
                                                <input type="email" class="form-control" id="useremail" placeholder="Enter email">
                                            </div>
                                            
                                            <div class="mt-3 text-end">
                                                <button class="btn btn-primary w-sm waves-effect waves-light" type="submit" style="background-color: #009dc2;border: #009dc2;">Reset</button>
                                            </div>
                
    
                                            <div class="mt-4 text-center">
                                                <p class="mb-0">Remember It ? <a href="auth-login.html" class="fw-medium" style="color: #009dc2;"> Signin </a></p>
                                            </div>
                                        </form>
                                    </div>
                
                                </div>
                            </div>
                            <div class="mt-5 text-center">
                                <p>© {{new Date().getFullYear()}} Razorlabz Software Private Limited. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>



    </body>
</template>