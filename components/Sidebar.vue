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

let dashboardTextColour = ref("#7b8190");
let workspaceTextColor = ref("#7b8190");
let leadersTextColour = ref("#7b8190");
let analyticsTextColour = ref("#7b8190");
let postsTextColour = ref("#7b8190");
let curationTextColour = ref("#7b8190");
let categoryTextColour = ref("#7b8190");
let usersTextColour = ref("#7b8190");
let rolesTextColour = ref("#7b8190");
let partnersTextColour = ref("#7b8190");


const redirectTo = (page) => {

//iam gonna put the variable in backround colour parameter & set the respective values as whight-black button is clicked
//first implement for the 1 button 

switch (page) {
  case 'dashboard':
  navigateTo("/dashboard")
  dashboardColour.value = "#f3f8fb";
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");

 dashboardTextColour.value = "#099cd2";
 workspaceTextColor = ref("#7b8190");
 leadersTextColour = ref("#7b8190");
 analyticsTextColour = ref("#7b8190");
 postsTextColour = ref("#7b8190");
 curationTextColour = ref("#7b8190");
 categoryTextColour = ref("#7b8190");
 usersTextColour = ref("#7b8190");
 rolesTextColour = ref("#7b8190");
 partnersTextColour = ref("#7b8190");

    break
  case 'workspace':
  navigateTo("/organizations/sasdf/workspaces")
  dashboardColour = ref("white");
  workspaceColour.value = "#f3f8fb";
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");

 dashboardTextColour = ref("#7b8190");  
 workspaceTextColor.value = "#099cd2";
 leadersTextColour = ref("#7b8190");
 analyticsTextColour = ref("#7b8190");
 postsTextColour = ref("#7b8190");
 curationTextColour = ref("#7b8190");
 categoryTextColour = ref("#7b8190");
 usersTextColour = ref("#7b8190");
 rolesTextColour = ref("#7b8190");
 partnersTextColour = ref("#7b8190");

  break
  case 'leaders':
  navigateTo("/leaders")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour.value = "#f3f8fb";
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");

  
 dashboardTextColour = ref("#7b8190");  
 workspaceTextColor = ref("#7b8190");
 leadersTextColour.value = "#099cd2";
 analyticsTextColour = ref("#7b8190");
 postsTextColour = ref("#7b8190");
 curationTextColour = ref("#7b8190");
 categoryTextColour = ref("#7b8190");
 usersTextColour = ref("#7b8190");
 rolesTextColour = ref("#7b8190");
 partnersTextColour = ref("#7b8190");
    break;
  case 'analytics':
  navigateTo("/analytics")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour.value = "#f3f8fb";
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");


 
 dashboardTextColour = ref("#7b8190");  
 workspaceTextColor = ref("#7b8190");
 leadersTextColour = ref("#7b8190");
 analyticsTextColour.value = "#099cd2";
 postsTextColour = ref("#7b8190");
 curationTextColour = ref("#7b8190");
 categoryTextColour = ref("#7b8190");
 usersTextColour = ref("#7b8190");
 rolesTextColour = ref("#7b8190");
 partnersTextColour = ref("#7b8190");
    break;
  case 'posts':
  navigateTo("/posts")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour.value = "#f3f8fb";
 curationColour = ref("white");
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");


 
 dashboardTextColour = ref("#7b8190");  
 workspaceTextColor = ref("#7b8190");
 leadersTextColour = ref("#7b8190");
 analyticsTextColour= ref("#7b8190");
 postsTextColour.value  = "#099cd2";
 curationTextColour = ref("#7b8190");
 categoryTextColour = ref("#7b8190");
 usersTextColour = ref("#7b8190");
 rolesTextColour = ref("#7b8190");
 partnersTextColour = ref("#7b8190");
    break;
  case 'curation':
  navigateTo("/curation")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour.value = "#f3f8fb";
 categoryColour = ref("white");
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");

 
 dashboardTextColour = ref("#7b8190");  
 workspaceTextColor = ref("#7b8190");
 leadersTextColour = ref("#7b8190");
 analyticsTextColour= ref("#7b8190");
 postsTextColour = ref("#7b8190");
 curationTextColour.value  = "#099cd2";
 categoryTextColour = ref("#7b8190");
 usersTextColour = ref("#7b8190");
 rolesTextColour = ref("#7b8190");
 partnersTextColour = ref("#7b8190");

    break;
  case 'category':
  navigateTo("/categories")
  dashboardColour = ref("white");
  workspaceColour = ref("white");
 leadersColour = ref("white");
 analyticsColour = ref("white");
 postsColour = ref("white");
 curationColour = ref("white");
 categoryColour.value = "#f3f8fb";
 usersColour = ref("white");
 rolesColour = ref("white");
 partnersColour = ref("white");

  
 dashboardTextColour = ref("#7b8190");  
 workspaceTextColor = ref("#7b8190");
 leadersTextColour = ref("#7b8190");
 analyticsTextColour= ref("#7b8190");
 postsTextColour = ref("#7b8190");
 curationTextColour = ref("#7b8190");
 categoryTextColour.value  = "#099cd2";
 usersTextColour = ref("#7b8190");
 rolesTextColour = ref("#7b8190");
 partnersTextColour = ref("#7b8190");

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
 usersColour.value = "#f3f8fb";
 rolesColour = ref("white");
 partnersColour = ref("white");

 dashboardTextColour = ref("#7b8190");  
 workspaceTextColor = ref("#7b8190");
 leadersTextColour = ref("#7b8190");
 analyticsTextColour= ref("#7b8190");
 postsTextColour = ref("#7b8190");
 curationTextColour = ref("#7b8190");
 categoryTextColour  = ref("#7b8190");
 usersTextColour.value = "#099cd2";
 rolesTextColour = ref("#7b8190");
 partnersTextColour = ref("#7b8190");

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
 rolesColour.value = "#f3f8fb";
 partnersColour = ref("white");
 
 dashboardTextColour = ref("#7b8190");  
 workspaceTextColor = ref("#7b8190");
 leadersTextColour = ref("#7b8190");
 analyticsTextColour= ref("#7b8190");
 postsTextColour = ref("#7b8190");
 curationTextColour = ref("#7b8190");
 categoryTextColour  = ref("#7b8190");
 usersTextColour = ref("#7b8190");
 rolesTextColour.value =  "#099cd2";
 partnersTextColour = ref("#7b8190");



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
 partnersColour.value = "#f3f8fb";

 
 dashboardTextColour = ref("#7b8190");  
 workspaceTextColor = ref("#7b8190");
 leadersTextColour = ref("#7b8190");
 analyticsTextColour= ref("#7b8190");
 postsTextColour = ref("#7b8190");
 curationTextColour = ref("#7b8190");
 categoryTextColour  = ref("#7b8190");
 usersTextColour = ref("#7b8190");
 rolesTextColour = ref("#7b8190");
 partnersTextColour.value =  "#099cd2";
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
      <a  class="logo logo-dark">
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
              <i class="fa-solid fa-dashboard" :style="{'color': dashboardTextColour }"></i>
              <span :style="{'color': dashboardTextColour }">Dashboard</span>
            </a>
          </li>
          <li class="menu-title">Sub-menu</li>
          <li :style="{'background-color': workspaceColour}">
            <a @click="redirectTo('workspace')" class="waves-effect">
              <i class="fa-solid fa-folder-tree" :style="{'color': workspaceTextColor }"></i>
              <span :style="{'color': workspaceTextColor }">Workspace</span>
            </a>
          </li>
          <li :style="{'background-color': leadersColour}">
            <a @click="redirectTo('leaders')" class="waves-effect">
              <i class="fa-solid fa-user" :style="{'color': leadersTextColour }"></i>
              <span :style="{'color': leadersTextColour }">Leaders</span>
            </a>
          </li>
          <li :style="{'background-color': analyticsColour}">
            <a @click="redirectTo('analytics')" class="waves-effect">
              <i class="fa-solid fa-chart-simple" :style="{'color': analyticsTextColour }"></i>
              <span :style="{'color': analyticsTextColour }">Analytics</span>
            </a>
          </li>
          <li class="menu-title">Content</li>
          <li :style="{'background-color': postsColour}">
            <a @click="redirectTo('posts')" class="waves-effect">
              <i class="fa-solid fa-envelopes-bulk" :style="{'color': postsTextColour }"></i>
              <span :style="{'color': postsTextColour }">Posts</span>
            </a>
          </li>
          <li :style="{'background-color': curationColour}">
            <a @click="redirectTo('curation')" class="waves-effect">
              <i class="fa-solid fa-file-lines" :style="{'color': curationTextColour }"></i>
              <span :style="{'color': curationTextColour }">Curation</span>
            </a>
          </li>

          <li class="menu-title">Manage</li>

          <li :style="{'background-color': categoryColour}">
            <a @click="redirectTo('category')" class="waves-effect">
              <i class="fa-solid fa-bars-progress" :style="{'color': categoryTextColour }"></i>
              <span :style="{'color': categoryTextColour }">Category</span>
            </a>
          </li>

          <li :style="{'background-color': usersColour}">
            <a @click="redirectTo('user-management')" class="waves-effect">
              <i class="fa-solid fa-users" :style="{'color': usersTextColour }"></i>
              <span :style="{'color': usersTextColour }">Users</span>
            </a>
          </li>

          <li :style="{'background-color': rolesColour}">
            <a @click="redirectTo('role-management')" class="waves-effect">
              <i class="fa-solid fa-list-check" :style="{'color': rolesTextColour }"></i>
              <span :style="{'color': rolesTextColour }">Roles</span>
            </a>
          </li>
          <li :style="{'background-color': partnersColour}">
            <a @click="redirectTo('partners-management')" class="waves-effect">
              <i class="fa-solid fa-handshake" :style="{'color': partnersTextColour }"></i>
              <span :style="{'color': partnersTextColour }">Partners</span>
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
