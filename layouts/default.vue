<template>
    <NavBar/>
    <div data-sidebar-size="sm"><Sidebar/></div>
    
    <div class="main-content" >
    <div class="page-content" >
      <div class="container-fluid" >
        
<slot/>

      </div>
    </div>
  </div>

    <Footer/>
</template>




