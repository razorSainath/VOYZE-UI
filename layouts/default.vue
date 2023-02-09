<script setup>
let isSidebarOpen = useState("isSidebarOpen");
const isRightOffcanvasOpen = useState("isRightOffcanvasOpen",()=>false)
const isModal = useState("isModal",()=>false)
const random = ()=>{
  isSidebarOpen.value = false

}


</script>

<template>
  <section
    :class="`${!isSidebarOpen ? '' : 'sidebar-enable'}`"
    :data-sidebar-size="`${isSidebarOpen ? 'lg' : 'sm'}`"
    class="bg-slate-200"
  >
  
  <div id="layout-wrapper" class="min-h-screen" >
    <NavBar/>
<Modal v-if="isModal" />
<RightOffcanvas v-if="isRightOffcanvasOpen"/>
    <Sidebar />
    <div class="main-content min-h-screen" @click="random">
      <div class="page-content">
        <div class="container-fluid" >
          <slot />
        </div>
      </div>
   



  </div>
</div>
<div class="relative">
  <Footer/>
</div>

  </section>


</template>

