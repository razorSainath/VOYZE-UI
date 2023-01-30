<script setup>
let isSidebarOpen = useState("isSidebarOpen")
</script>


<template>

  <section
  :class="`${!isSidebarOpen ? '' : 'sidebar-enable'}`"
  :data-sidebar-size="`${isSidebarOpen ? 'lg' : 'sm'}`"
  >
    <NavBar/>

<Sidebar2/>
  <div class="main-content" >
  <div class="page-content" >
    <div class="container-fluid" >
<slot/>

    </div>
  </div>
</div>

  <Footer/>
  </section>

</template>




