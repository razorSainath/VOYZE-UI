<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6" style="font-size:12px;">
          © 2021 - {{ new Date().getFullYear() }} Razorlabz Software Private
          Limited.
        </div>
        <div class="col-sm-6">
          <div class="text-sm-end d-none d-sm-block" style="font-size:12px;">All rights reserved</div>
        </div>
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
