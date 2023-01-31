<script setup>

import { ref } from "vue";
let isSidebarOpen = useState("isSidebarOpen", () => false);

let dashboard = useState("dashboard", () => false);
let workspace = useState("workspace", () => false);
let leaders = useState("leaders", () => false);
let analytics = useState("analytics", () => false);
let posts = useState("posts", () => false);
let curation = useState("curation", () => false);
let category = useState("category", () => false);
let users = useState("users", () => false);
let roles = useState("roles", () => false);
let partners = useState("partners", () => false);

//set the pageTitle & as user click the particular page suitable page comes in

const redirectTo = (page) => {
  //iam gonna put the variable in backround colour parameter & set the respective values as whight-black button is clicked
  //first implement for the 1 button

  switch (page) {
    case "dashboard":
      navigateTo("/dashboard");
      isSidebarOpen.value = false;

      dashboard.value = true;
      workspace.value = false;
      leaders.value = false;
      analytics.value = false;
      posts.value = false;
      curation.value = false;
      category.value = false;
      users.value = false;
      roles.value = false;
      partners.value = false;

   
      break;
    case "workspace":
      navigateTo("/organizations/sasdf/workspaces");
      isSidebarOpen.value = false;

      dashboard.value = false;
      workspace.value = true;
      leaders.value = false;
      analytics.value = false;
      posts.value = false;
      curation.value = false;
      category.value = false;
      users.value = false;
      roles.value = false;
      partners.value = false;

      break;
    case "leaders":
      navigateTo("/leaders");
      isSidebarOpen.value = false;

      dashboard.value = false;
      workspace.value = false;
      leaders.value = true;
      analytics.value = false;
      posts.value = false;
      curation.value = false;
      category.value = false;
      users.value = false;
      roles.value = false;
      partners.value = false;


      break;
    case "analytics":
      navigateTo("/analytics");
      isSidebarOpen.value = false;

      dashboard.value = false;
      workspace.value = false;
      leaders.value = false;
      analytics.value = true;
      posts.value = false;
      curation.value = false;
      category.value = false;
      users.value = false;
      roles.value = false;
      partners.value = false;



      break;
    case "posts":
      navigateTo("/posts");
      isSidebarOpen.value = false;

      dashboard.value = false;
      workspace.value = false;
      leaders.value = false;
      analytics.value = false;
      posts.value = true;
      curation.value = false;
      category.value = false;
      users.value = false;
      roles.value = false;
      partners.value = false;

      break;
    case "curation":
      navigateTo("/curation");
      isSidebarOpen.value = false;

      dashboard.value = false;
      workspace.value = false;
      leaders.value = false;
      analytics.value = false;
      posts.value = false;
      curation.value = true;
      category.value = false;
      users.value = false;
      roles.value = false;
      partners.value = false;


      break;
    case "category":
      navigateTo("/categories");
      isSidebarOpen.value = false;

      dashboard.value = false;
      workspace.value = false;
      leaders.value = false;
      analytics.value = false;
      posts.value = false;
      curation.value = false;
      category.value = true;
      users.value = false;
      roles.value = false;
      partners.value = false;


      break;
    case "user-management":
      navigateTo("/users");
      isSidebarOpen.value = false;

      dashboard.value = false;
      workspace.value = false;
      leaders.value = false;
      analytics.value = false;
      posts.value = false;
      curation.value = false;
      category.value = false;
      users.value = true;
      roles.value = false;
      partners.value = false;


      break;
    case "role-management":
      navigateTo("/roles");
      isSidebarOpen.value = false;


      dashboard.value = false;
      workspace.value = false;
      leaders.value = false;
      analytics.value = false;
      posts.value = false;
      curation.value = false;
      category.value = false;
      users.value = false;
      roles.value = true;
      partners.value = false;


      break;
    case "partners-management":
      navigateTo("/partners");
      isSidebarOpen.value = false;


      dashboard.value = false;
      workspace.value = false;
      leaders.value = false;
      analytics.value = false;
      posts.value = false;
      curation.value = false;
      category.value = false;
      users.value = false;
      roles.value = false;
      partners.value = true;


      break;
  }
};
//as the user clicks the button on dashboard
//the it is redirected to that page & also the button text need to be styled differently
// i need to create a function which will create take in the page & hilight

// const panels = document.querySelectorAll('.li')
// console.log(panels);
</script>

<template>
  <!--- Sidemenu -->
  <div class="vertical-menu mm-active" style="z-index: 99999999999">
    <!-- LOGO -->
    <div class="navbar-brand-box">
      <a class="logo logo-dark">
        <span class="logo-sm" style="position: relative; right: 15px">
          <img
            src="~/assets/images/logo-sm-removebg-preview.png"
            alt=""
            height="22"
          />
        </span>
        <span class="logo-lg">
          <img src="~/assets/images/logo-light.svg" alt="" height="20" />
        </span>
      </a>
    </div>

    <div data-simplebar class="sidebar-menu-scroll mm-show">
      <!--- Sidemenu -->
      <div id="sidebar-menu" class="mm-active">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled mm-show" id="side-menu">
          <li class="menu-title">Menu</li>

          <li :class="`${dashboard ? 'mm-active' : ''}`">
            <a @click="redirectTo('dashboard')" class="waves-effect">
              <i class="fa-solid fa-dashboard"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li class="menu-title">Sub-menu</li>
          <li :class="`${workspace ? 'mm-active' : ''}`">
            <a @click="redirectTo('workspace')" class="waves-effect">
              <i class="fa-solid fa-folder-tree"></i>
              <span>Workspace</span>
            </a>
          </li>

          <li :class="`${leaders ? 'mm-active' : ''}`">
            <a @click="redirectTo('leaders')" class="waves-effect">
              <i class="fa-solid fa-user"></i>
              <span>Leaders</span>
            </a>
          </li>

          <li :class="`${analytics ? 'mm-active' : ''}`">
            <a @click="redirectTo('analytics')" class="waves-effect">
              <i class="fa-solid fa-chart-simple"></i>
              <span>Analytics</span>
            </a>
          </li>
          <li class="menu-title">Content</li>
          <li :class="`${posts ? 'mm-active' : ''}`">
            <a @click="redirectTo('posts')" class="waves-effect">
              <i class="fa-solid fa-envelopes-bulk"></i>
              <span>Posts</span>
            </a>
          </li>
          <li :class="`${curation ? 'mm-active' : ''}`">
            <a @click="redirectTo('curation')" class="waves-effect">
              <i class="fa-solid fa-file-lines"></i>
              <span>Curation</span>
            </a>
          </li>

          <li class="menu-title">Manage</li>

          <li :class="`${category ? 'mm-active' : ''}`">
            <a @click="redirectTo('category')" class="waves-effect">
              <i class="fa-solid fa-bars-progress"></i>
              <span>Category</span>
            </a>
          </li>

          <li :class="`${users ? 'mm-active' : ''}`">
            <a @click="redirectTo('user-management')" class="waves-effect">
              <i class="fa-solid fa-users"></i>
              <span>Users</span>
            </a>
          </li>

          <li :class="`${roles ? 'mm-active' : ''}`">
            <a @click="redirectTo('role-management')" class="waves-effect">
              <i class="fa-solid fa-list-check"></i>
              <span>Roles</span>
            </a>
          </li>
          <li :class="`${partners ? 'mm-active' : ''}`">
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
</template>
