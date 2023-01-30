<script setup>
import { ref } from "vue";

const dashboard = ref(false);
// const  = ref(true)
let isSidebarOpen = useState("isSidebarOpen", () => false);
const redirectTo = (page) => {
  //iam gonna put the variable in backround colour parameter & set the respective values as whight-black button is clicked
  //first implement for the 1 button

  switch (page) {
    case "dashboard":
      navigateTo("/dashboard");
      isSidebarOpen.value = false
      break;
    case "workspace":
      navigateTo("/organizations/sasdf/workspaces");
      isSidebarOpen.value = false
      break;
    case "leaders":
      navigateTo("/leaders");
      isSidebarOpen.value = false

      break;
    case "analytics":
      navigateTo("/analytics");
      isSidebarOpen.value = false

      break;
    case "posts":
      navigateTo("/posts");
      isSidebarOpen.value = false

      break;
    case "curation":
      navigateTo("/curation");
      isSidebarOpen.value = false

      break;
    case "category":
      navigateTo("/categories");
      isSidebarOpen.value = false

      break;
    case "user-management":
      navigateTo("/users");
      isSidebarOpen.value = false

      break;
    case "role-management":
      navigateTo("/roles");
      isSidebarOpen.value = false

      break;
    case "partners-management":
      navigateTo("/partners");
      isSidebarOpen.value = false

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
  <div class="vertical-menu mm-active" style="z-index: 1">
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

          <li>
            <a @click="redirectTo('dashboard')" class="waves-effect">
                <i class="fa-solid fa-dashboard"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li class="menu-title">Sub-menu</li>
          <li class="mm-active">
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
</template>
