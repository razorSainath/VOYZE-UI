<script setup>

import { ref } from "vue";
const roughVariable = ref("blue");

const toggleSidebar = computed(() => {
  console.log("clicked");
  roughVariable.value = "red";
});
//multiple objects will be created of each tab in sidebar



//here whole script is getting executed only when the script of that page is changed 
//computed properties are executed only when the dependent variable change

</script>

<template>
  <button @click="toggleSidebar">golu</button>
  <div :style="{'background-color': roughVariable ,'text-transform' : uppercase}">first</div>
  <div :style="{'background-color': roughVariable}">secound</div>
  <div :style="{'background-color': roughVariable}">third</div>
  <div :style="{'background-color': roughVariable}">fourth</div>


<!-- <h1>hello</h1> -->

</template>
