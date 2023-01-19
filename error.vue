<script setup>
import error404 from "@/assets/images/404-error.png" 
import image from "@/assets/images/500-error.png" 
const router = useRouter()
// onMounted(() => {
// //   console.log("route coming in",router.currentRoute.value.fullPath)
// if(router.currentRoute.value.fullPath=="/") router.push("/signin")
// })

const error = useError()

const handleError = ()=>{
    navigateTo("/dashboard")
}
</script>

<template>

<head>
        
        <title>Error {{ error.statusCode }} | Voyze</title>




    </head>



        <div class="my-5 pt-sm-5">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center">
                            <div>
                                <div class="row justify-content-center">
                                    <div class="col-sm-4">
                                        <div class="error-img">
                                            <img v-if="error.statusCode==404" :src="error404" class="img-fluid mx-auto d-block">
                                            <img v-if="error.statusCode==500" :src="image" class="img-fluid mx-auto d-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4 class="mt-4">{{ error.message }}</h4>
                            <p class="text-muted">It will be as simple as Occidental in fact, it will be Occidental</p>
                            <div class="mt-5" >
                                <a @click="handleError" class="btn btn-primary waves-effect waves-light"  style="background-color: #009dc2;border: #009dc2;">Back to Dashboard</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>





</template>