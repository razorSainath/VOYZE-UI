<script setup>
const isRightOffcanvasOpen = useState("isRightOffcanvasOpen");
const random = () => {
  isRightOffcanvasOpen.value = false;
};
//add animation to
</script>

<template>
  <div
    class="absolute w-screen h-screen bg-gray-900 opacity-50 z-[9999]"
    @click="random"
  ></div>
  <div
    class="absolute gap-3 bg-white w-fit h-screen right-0 z-[99999] pl-4 pt-4 box-shadow rounded-l-lg"
    :attribute="`${isRightOffcanvasOpen}`"
  >
    <h1 class="text-xl pl-[10px]">Add New User</h1>
    <div class="grid grid-cols-2 pt-10">
      <div class="relative flex flex-col w-fit h-fit m-3">
        <label>Email</label>
        <input type="text" class="border border-gray-300 rounded" />
      </div>
      <div class="relative flex flex-col w-fit h-fit m-3">
        <label>Email</label>
        <input type="text" class="border border-gray-300 rounded" />
      </div>
      <div class="relative flex flex-col w-fit h-fit m-3">
        <label>Email</label>
        <input type="text" class="border border-gray-300 rounded" />
      </div>
    </div>
  </div>
</template>