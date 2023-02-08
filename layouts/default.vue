<script setup>
let isSidebarOpen = useState("isSidebarOpen");
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
  <div id="layout-wrapper" class="min-h-screen">
    <NavBar/>


    <Sidebar />
    <div class="main-content" @click="random">
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

