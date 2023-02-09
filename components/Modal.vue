<script setup>

const isModal = useState("isModal");

const random = () => {

    isModal.value = false;
};
//add animation to
</script>

<template>
  <div
    class="absolute w-screen h-screen bg-gray-900 opacity-50 z-[9999]"
    @click="random"
  ></div>
  <div class="flex justify-center pt-10">
    <div
      class="absolute gap-3 rounded bg-white w-fit h-fit min-h-[15rem] min-w-[30rem] z-[99999] p-4"
      :attribute="`${isModal}`"
    >
      <h1 class="text-2xl">Add Partner</h1>
      <hr>
<div class="flex flex-col">
    <span>Partner Code</span>
      <input type="text" class="border rounded">
</div>
<hr class="flex items-end">
<div class="flex flex-row justify-end">
    <button class="bg-gray-500">close</button>
<button class="bg-cyan-500">submit</button>
</div>



    </div>
  </div>
</template>
