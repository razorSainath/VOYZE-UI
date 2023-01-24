<script setup>
const isSidebarOpen = useState("isSidebarOpen",()=>false);
const ToggleMenu = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// going to integrate properly our sidebar here
</script>

<template>
  <aside :class="`${isSidebarOpen ? 'isSidebarOpen' : 'sidebarClosed'}`">
    <div class="logo">
      <img
        v-if="!isSidebarOpen"
        src="~/assets/images/logo-sm-removebg-preview.png"
      />
      <img v-if="isSidebarOpen" src="~/assets/images/logo-light.svg" />
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <i id="ham_burger" class="fa fa-fw fa-bars"></i>
      </button>
    </div>
    <!-- Toggle Button -->

    <!-- sidebar-menu -->
<h3>Menu</h3>
<div class ="menu">

    <NuxtLink class="button" to="/dashboard">
    <i class="fa-solid fa-dashboard material-icons"></i>
    <span class="text">Dashboard</span>
</NuxtLink>
</div>
<h3>Sub-menu</h3>
<div class ="menu">

  <NuxtLink class="button" to=/organizations/sasdf/workspaces>
        <i class="fa-solid fa-folder-tree material-icons"></i>
    <span class="text">Workspace</span>
</NuxtLink>

  <NuxtLink class="button" to=/leaders>
    <i class="fa-solid fa-user material-icons"></i>
    <span class="text">Leaders</span>
</NuxtLink>

  <NuxtLink class="button" to=/analytics>
    <i class="fa-solid fa-chart-simple material-icons"></i>
    <span class="text">Analytics</span>
</NuxtLink>


</div>
<h3>Content</h3>
<div class ="menu">
  
<NuxtLink class="button" to=/posts>
    <i class="fa-solid fa-envelopes-bulk material-icons"></i>
    <span class="text">Posts</span>
</NuxtLink>

<NuxtLink class="button" to=/curation>
    <i class="fa-solid fa-file-lines material-icons"></i>
    <span class="text">Curation</span>
</NuxtLink>
</div>
<h3>Manage</h3>
<div class ="menu">
  
<NuxtLink class="button" to=/categories>
    <i class="fa-solid fa-bars-progress material-icons"></i>
    <span class="text">Category</span>
</NuxtLink>

<NuxtLink class="button" to=/users>
    <i class="fa-solid fa-users material-icons"></i>
    <span class="text">Users</span>
</NuxtLink>

<NuxtLink class="button" to=/roles>
    <i class="fa-solid fa-list-check material-icons"></i>
    <span class="text">Roles</span>
</NuxtLink>

<NuxtLink class="button" to=/partners>
    <i class="fa-solid fa-handshake material-icons"></i>
    <span class="text">Partners</span>
</NuxtLink>
</div>


    <!-- <ul class="metismenu list-unstyled" id="side-menu">

          <li :style="{'background-color': partnersColour}">
            <a @click="redirectTo('partners-management')" class="waves-effect">
              <i class="fa-solid fa-handshake" :style="{'color': partnersTextColour }"></i>
              <span :style="{'color': partnersTextColour }">Partners</span>
            </a>
          </li>
        </ul> -->
  </aside>
</template>



<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;

  background-color: #dcdcdc;
  color: #099cd2;

  transition: 0.2s ease-out;
  .logo {
    img {
      width: 2.5rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    position: relative;
    top: 0;
    transition: 00.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;

      &:hover {
        color: blue;
      }
    }
  }
  h3{
color: grey;
font-size: 0.95rem;
text-transform: uppercase;
  }
h3, .button .text {
    opacity: 0;
    transition: 0.0s ease-out;
}
  .menu{
    margin:0 -1rem;

    .button{
        display: flex;
        align-items: center;
        text-decoration: none;
        
        padding: 0.5rem 1rem;
        transition: 0.2s ease-out;
        .material-icons{
            font-size: 2rem;
            color: #099cd2;
            margin-right: 1rem;
            transition: 0.2 ease-out;

        }
        .text{
            color:#099cd2; 
            transition: 0.0s ease-out;

        }
        &:hover, &.router-link-exact-active{
            background-color: blue ;
            .material-icons .text{
                color: black;

            }
        }

        &.router-link-exact-active{
            border-right: 5px solid blue;
        }
    }
  }
  &.isSidebarOpen {
    width: 300px;
    .logo {
      img {
        width: 12rem;
      }
    }

    .menu-toggle-wrap {
      top: -3rem;
}
h3, .button .text {
    opacity: 1;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
    transition: 0s ease-out;
  #ham_burger{
    opacity: 0;
   
    }
  }

  @media (max-width: 415px) {
    position: fixed;
    z-index: 99;
    transition: 0s ease-out;
    &.sidebarClosed{
      display: none;
    }
  #ham_burger{
    opacity: 0;
   
    }

  }
}
</style>
