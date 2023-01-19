<script setup>
import { ref } from "vue";
const roughVariable = ref("blue");

// const styleObject = reactive({
//   "background-color": roughVariable,
// });
const obj = reactive({
  first: "white",
  isShow: "black"
})

const toggleSidebar = computed(() => {
  console.log("clicked");
  roughVariable.value = "red";
});

// const publishedBooksMessage = computed(() => {
//   return author.books.length > 0 ? 'Yes' : 'No'
// })



//here whole script is getting executed only when the script of that page is changed 
//computed properties are executed only when the dependent variable change

</script>

<template>
  <button @click="toggleSidebar">golu</button>
  <div :style="{'background-color': 'first' ,'text-transform' : uppercase}">first</div>
  <div :style="{'background-color': secound}">secound</div>
  <div :style="{'background-color': third}">third</div>
  <div :style="{'background-color': fourth}">fourth</div>


<!-- <h1>hello</h1> -->

</template>


