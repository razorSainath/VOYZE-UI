<script setup>
import {ref} from 'vue'
let dashboardColour = ref("white");
let workspaceColour = ref("white");
let leadersColour = ref("white");
let analyticsColour = ref("white");
let postsColour = ref("white");
let curationColour = ref("white");
let categoryColour = ref("white");
let usersColour = ref("white");
let rolesColour = ref("white");
let partnersColour = ref("white");


const redirectTo = (page) => {

//iam gonna put the variable in backround colour parameter & set the respective values as whight-black button is clicked
//first implement for the 1 button 

switch (page) {
  case 'dashboard':
  navigateTo("/dashboard")
  dashboardColour.value = "#009cd2";
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");
    break
  case 'workspace':
  navigateTo("/organizations/sasdf/workspaces")
  dashboardColour = ref("white");
  workspaceColour.value = "#009cd2";
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");
  break
  case 'leaders':
  navigateTo("/leaders")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour.value = "#009cd2";
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");
    break;
  case 'analytics':
  navigateTo("/analytics")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour.value = "#009cd2";
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");
    break;
  case 'posts':
  navigateTo("/posts")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour.value = "#009cd2";
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");
    break;
  case 'curation':
  navigateTo("/curation")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour.value = "#009cd2";
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");
    break;
  case 'category':
  navigateTo("/categories")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour.value = "#009cd2";
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");
    break;
  case 'user-management':
  navigateTo("/users")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour=  ref("white");
 usersColour.value = "#009cd2";
 rolesColour = ref("white");
 partnersColour = ref("white");

    break;
  case 'role-management':
  navigateTo("/roles")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour=  ref("white");
 usersColour = ref("white");
 rolesColour.value = "#009cd2";
 partnersColour = ref("white");
    break;
  case 'partners-management':
  navigateTo("/partners")

  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour=  ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour.value = "#009cd2";
    break;
}
};
//as the user clicks the button on dashboard
//the it is redirected to that page & also the button text need to be styled differently
// i need to create a function which will create take in the page & hilight 

const isSidebarOpen = useState("isSidebarOpen",()=>true)


</script>

<template>



  <!--- Sidemenu -->
  <div class="vertical-menu" v-if="isSidebarOpen">
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


    <div data-simplebar class="sidebar-menu-scroll">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="menu-title">Menu</li>

          <li class="nav-item" :style="{'background-color': dashboardColour}">
            <a @click="redirectTo('dashboard')"  class="waves-effect nav-link active">
              <i class="fa-solid fa-dashboard"></i>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="menu-title">Sub-menu</li>
          <li :style="{'background-color': workspaceColour}">
            <a @click="redirectTo('workspace')" class="waves-effect">
              <i class="fa-solid fa-folder-tree"></i>
              <span>Workspace</span>
            </a>
          </li>
          <li :style="{'background-color': leadersColour}">
            <a @click="redirectTo('leaders')" class="waves-effect">
              <i class="fa-solid fa-user"></i>
              <span>Leaders</span>
            </a>
          </li>
          <li :style="{'background-color': analyticsColour}">
            <a @click="redirectTo('analytics')" class="waves-effect">
              <i class="fa-solid fa-chart-simple"></i>
              <span>Analytics</span>
            </a>
          </li>
          <li class="menu-title">Content</li>
          <li :style="{'background-color': postsColour}">
            <a @click="redirectTo('posts')" class="waves-effect">
              <i class="fa-solid fa-envelopes-bulk"></i>
              <span>Posts</span>
            </a>
          </li>
          <li :style="{'background-color': curationColour}">
            <a @click="redirectTo('curation')" class="waves-effect">
              <i class="fa-solid fa-file-lines"></i>
              <span>Curation</span>
            </a>
          </li>

          <li class="menu-title">Manage</li>

          <li :style="{'background-color': categoryColour}">
            <a @click="redirectTo('category')" class="waves-effect">
              <i class="fa-solid fa-bars-progress"></i>
              <span>Category</span>
            </a>
          </li>

          <li :style="{'background-color': usersColour}">
            <a @click="redirectTo('user-management')" class="waves-effect">
              <i class="fa-solid fa-users"></i>
              <span>Users</span>
            </a>
          </li>

          <li :style="{'background-color': rolesColour}">
            <a @click="redirectTo('role-management')" class="waves-effect">
              <i class="fa-solid fa-list-check"></i>
              <span>Roles</span>
            </a>
          </li>
          <li :style="{'background-color': partnersColour}">
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

  
  <div class="vertical-menu" v-else="isSidebarOpen" style="display: flex;z-index:1;">
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
