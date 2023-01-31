<script setup>
import image from "@/assets/images/logo-light.svg"
</script>


<template>
    


<section class="authentication-bg">
    <div class="account-pages pt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <a class="mb-5 d-block auth-logo">
                            <img :src="image" height="30" class="logo logo-dark">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card">
<slot/>
                    </div>
                    <div class="mt-5 text-center">
                        <p>© 2021 -
                            {{new Date().getFullYear()}} Razorlabs Software Private
                            Limited. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>



</section>



</template>

<!-- reset-password -->

 