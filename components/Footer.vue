<template>
  <footer class="footer">
    <div class="container">
      <div class="grid grid-cols-2">
        <div class="text-sm">
          © 2021 - {{ new Date().getFullYear() }} Razorlabz Software Private
          Limited.
        </div>
          <div class="sm:text-right md:hidden sm:block text-sm">All rights reserved</div>
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
