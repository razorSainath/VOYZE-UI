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
  >
  <div id="layout-wrapper">
    <NavBar/>


    <Sidebar />
    <div class="main-content" @click="random">
      <div class="page-content">
        <div class="container-fluid">
          <slot />
        </div>
      </div>
   


  <Footer/>
  </div>
</div>
  </section>
</template>
