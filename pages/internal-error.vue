<script setup>
import image from "@/assets/images/500-error.png" 
</script>

<template>
        

        <title>Error 500 | Voyze</title>





        <div class="my-5 pt-sm-5">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center">
                            <div>
                                <div class="row justify-content-center">
                                    <div class="col-sm-4">
                                        <div class="error-img">
                                            <img :src="image" alt="" class="img-fluid mx-auto d-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 class="text-uppercase mt-4">Internal Server Error</h4>
                            <p class="text-muted">It will be as simple as Occidental in fact, it will be Occidental</p>
                            <div class="mt-5">
                                <a class="btn btn-primary waves-effect waves-light" href="index.html" style="background-color: #009dc2;border: #009dc2;">Back to Dashboard</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>



</template>