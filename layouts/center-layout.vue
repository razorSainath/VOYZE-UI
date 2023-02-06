<script setup>
import image from "@/assets/images/logo-light.svg"
</script>


<template>
    <div class="relative py-12 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
	    <div class="container xl:max-w-6xl mx-auto px-4 w-full">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <div class="justify-center relative" style="display: flex;">
                        <a class="mt-4 mb-2">
                            <img :src="image"  class="h-auto max-w-full" width="250px">
                        </a>
                    </div>
                </div>
            </div>
	      <div class="flex flex-wrap flex-row mx-4 justify-center w-full">
<slot/>
                    </div>

                </div>
            </div>
            <!-- end row -->
            <div class="flex justify-center aligns-center text-center mt-12 absolute bottom-0 right-0 w-full">
                        <p class="flex justify-center">© 2021 -
                            {{new Date().getFullYear()}} Razorlabs Software Private
                            Limited. All rights reserved.
                        </p>
                    </div>



</template>

<!-- reset-password -->

 