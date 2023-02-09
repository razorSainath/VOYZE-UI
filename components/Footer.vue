<template>
  <footer class="footer bg-white fixed-bottom ">
    <div class="container-fluid">
      <div class="flex">
        <div class="text-sm w-6/12">
         <p class="text-left"> © 2021 - {{ new Date().getFullYear() }} Razorlabz Software Private
          Limited.</p>
        </div>
          <div class="w-6/12"><p class="text-right text-sm">All rights reserved</p></div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@media (max-width:700px ) {
  section[data-sidebar-size=sm] .footer {
    left: 0px;
}
}
</style>
