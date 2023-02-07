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
    style="background-color: #f5f6f8;font-family: Arial, Helvetica, sans-serif;"
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

