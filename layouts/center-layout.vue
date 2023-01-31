<script setup>
import image from "@/assets/images/logo-light.svg"
</script>


<template>
    


<section class="authentication-bg">
    <div class="account-pages pt-sm-5 pb-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <a class="mt-2 mb-2 d-block auth-logo">
                            <img :src="image" height="30" class="logo logo-dark">
                        </a>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card mb-0" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
<slot/>
                    </div>

                </div>
            </div>
            <!-- end row -->
            <div class="text-center mt-sm-5" style=" position:absolute;
    bottom:0;
    right:0;
    width:100%;">
                        <p>© 2021 -
                            {{new Date().getFullYear()}} Razorlabs Software Private
                            Limited. All rights reserved.
                        </p>
                    </div>
        </div>
        <!-- end container -->
    </div>



</section>



</template>

<!-- reset-password -->

 