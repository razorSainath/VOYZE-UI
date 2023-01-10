<script setup>
const redirectTo = (page) => {
console.log(page);
switch (page) {
  case 'dashboard':
  navigateTo("/dashboard")
  console.log(page);
    break
  case 'workspace':
  navigateTo("/organizations/sasdf/workspaces")
  console.log(page);
  break
  case 'leaders':
  navigateTo("/organizations/123/workspaces/345/leaders")
  console.log(page);
    break;
  case 'analytics':
  navigateTo("/analytics")
    break;
  case 'posts':
  navigateTo("/posts")
    break;
  case 'curation':
  navigateTo("/curation")
    break;
  case 'category':
  navigateTo("/category-management")
    break;
  case 'user-management':
  navigateTo("/user-management")
    break;
  case 'role-management':
  navigateTo("/role-management")
    break;
  case 'partners-management':
  navigateTo("/partner-management")
    break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
}
};
</script>

<template>
  <!--- Sidemenu -->
  <div class="vertical-menu">
    <!-- LOGO -->
    <div class="navbar-brand-box">
      <a href="index.html" class="logo logo-dark">
        <span class="logo-sm" style="position: relative; right: 15px">
          <img src="assets/images/logo-sm.png" alt="" height="22" />
        </span>
        <span class="logo-lg">
          <img src="~/assets/images/logo-light.svg" alt="" height="20" />
        </span>
      </a>
    </div>

    <button
      type="button"
      class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
    >
      <i class="fa fa-fw fa-bars"></i>
    </button>

    <div data-simplebar class="sidebar-menu-scroll">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="menu-title">Menu</li>

          <li>
            <a @click="redirectTo('dashboard')" class="waves-effect">
              <i class="fa-solid fa-dashboard"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="menu-title">Sub-menu</li>
          <li>
            <a @click="redirectTo('workspace')" class="waves-effect">
              <i class="fa-solid fa-folder-tree"></i>
              <span>Workspace</span>
            </a>
          </li>
          <li>
            <a @click="redirectTo('leaders')" class="waves-effect">
              <i class="fa-solid fa-user"></i>
              <span>Leaders</span>
            </a>
          </li>
          <li>
            <a @click="redirectTo('analytics')" class="waves-effect">
              <i class="fa-solid fa-chart-simple"></i>
              <span>Analytics</span>
            </a>
          </li>
          <li class="menu-title">Content</li>
          <li>
            <a @click="redirectTo('posts')" class="waves-effect">
              <i class="fa-solid fa-envelopes-bulk"></i>
              <span>Posts</span>
            </a>
          </li>
          <li>
            <a @click="redirectTo('curation')" class="waves-effect">
              <i class="fa-solid fa-file-lines"></i>
              <span>Curation</span>
            </a>
          </li>

          <li class="menu-title">Manage</li>

          <li>
            <a @click="redirectTo('category')" class="waves-effect">
              <i class="fa-solid fa-bars-progress"></i>
              <span>Category</span>
            </a>
          </li>

          <li>
            <a @click="redirectTo('user-management')" class="waves-effect">
              <i class="fa-solid fa-users"></i>
              <span>Users</span>
            </a>
          </li>

          <li>
            <a @click="redirectTo('role-management')" class="waves-effect">
              <i class="fa-solid fa-list-check"></i>
              <span>Roles</span>
            </a>
          </li>
          <li>
            <a @click="redirectTo('partners-management')" class="waves-effect">
              <i class="fa-solid fa-handshake"></i>
              <span>Partners</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
  <!-- Sidebar -->
</template>
