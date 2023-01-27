<script setup>
let isSidebarOpen = useState("isSidebarOpen")
</script>


<template>

  <body
  :class="`${!isSidebarOpen ? '' : 'sidebarClosed'}`"
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
  </body>

</template>




