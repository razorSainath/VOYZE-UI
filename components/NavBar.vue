<script>
import VueMultiselect from "vue-multiselect";
export default {
  components: { VueMultiselect },
  data() {
    return {
      selected: null,
      options: ["orgnization1", "orgnization2", "orgnization3","orgnization4"],
    };
  },
  methods: {
    limitText(count) {
      return `and ${count} more`;
    },
  },
};
</script>

<script setup>
let isSidebarOpen = useState("isSidebarOpen")
let pageTitle = useState("pageTitle", () => "");

const just = ()=>{
  console.log("beforeClick" ,isSidebarOpen.value)
  isSidebarOpen.value = !isSidebarOpen.value
  console.log("afterClick" ,isSidebarOpen.value)

}
</script>


<template>
  
          <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
              <a class="logo logo-dark">
                <span class="logo-sm">
                  <img src="~/assets/images/logo-sm-removebg-preview.png" alt="" height="22" />
                </span>
                <span class="logo-lg">
                  <img src="~/assets/images/logo-light.svg" alt="" height="20" />
                </span>
              </a>
            </div>

            <button
              type="button"  class="button-fixed"
               @click="just"
            >
              <i class="fa fa-fw fa-bars"></i>
            </button>
          </div>
          <div
        
      >
        <h6 class="page-title">{{ pageTitle }}</h6>

      </div>

          <div class="flex">
                        <!-- organisation dropdown-->
                        <select name="" id="" class="display border-none" style="margin-left:15px;">
                <option value="1">Edelman</option>
                <option value="2">Razorpod</option>
                <option value="3">Infosys</option>
              </select>
              <div x-data="{ show: false }" class="relative ltr:mr-4 rtl:ml-4">
  <button @click="show = ! show" type="button" class="flex py-2 px-4 text-center rounded-md leading-normal text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-700 hover:ring-0 hover:border-indigo-700 focus:bg-indigo-700 focus:border-indigo-700 focus:outline-none focus:ring-0">
    <div class="relative">
  <a href="#">
    <img class="inline-block rounded-full shadow-xl w-12 h-12 max-w-full bg-gray-300 dark:bg-gray-800 ltr:-mr-4 rtl:-ml-4 border-2 border-gray-200 transform hover:-translate-y-1" src="~/assets/images/users/avatar-2.jpg" alt="Image Description">
  </a>
  </div>
  </button>
  <div x-show="show" @click.away="show = false" class="absolute bg-white z-10 rounded border border-gray-200 dark:bg-gray-800 dark:border-gray-700" style="min-width:12rem">
      <a class="block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900" href="#">Action</a>
      <a class="block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900" href="#">Another action</a>
      <a class="block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900" href="#">Something else here</a>
      <hr class="border-t border-gray-200 dark:border-gray-700 my-0">
      <a class="block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900" href="#">Separated link</a>
  </div>
</div>
            <div class="inline-block">
              <button
                type="button"
                class="btn header-item waves-"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="rounded-circle header-profile-user"
                  src="~/assets/images/users/avatar-2.jpg"
                  alt="Header Avatar"
                />
                <span
                  class="xl:inline-block ms-1 fw-medium font-size-15 flex-shrink"
                  >Nibhash</span
                >
                <i
                  class="fa-solid fa-angle-down xl:inline-block font-size-15"
                ></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <!-- item-->
                <a class="dropdown-item" href="#"
                  ><i
                    class="fa-solid fa-user-circle font-size-18 align-middle text-muted me-1"
                  ></i>
                  <span class="align-middle">View Profile</span></a
                >
                <a class="dropdown-item" href="#"
                  ><i
                    class="fa-sharp fa-solid fa-display font-size-18 align-middle me-1 text-muted"
                  ></i>
                  <span class="align-middle">Lock screen</span></a
                >
                <a class="dropdown-item" href="#"
                  ><i
                    class="fa-solid fa-sign-out-alt font-size-18 align-middle me-1 text-muted"
                  ></i>
                  <span class="align-middle">Sign out</span></a
                >
              </div>
            </div>
          </div>
        </div>
      </header>
</template>

<style scoped>
.page-title{
  position:absolute;
  display: flex;
  top:22px;
  font-family: "Gill Sans", sans-serif;
  font-weight:600;
}
.display1{
  display: none !important;
}

@media(max-width: 960px){
  .button-fixed{
position: fixed;
left:100px;
top: 24px;
}

.page-title{
  left:140px;
  font-size:19px ;
}
.display1{
  display: contents;
}
}
@media(max-width: 420px){

.page-title{
display: none;
}
.display1{
  display: contents;
}
}

@media(min-width: 960px){.button-fixed{
position: relative;
left:10px;

}
.display1{
  display: contents;
}
.page-title{
  left:50px;
}

}

.display-button{
  display: none;
}
@media only screen and (max-width: 820px) {
  .display {
    display: content;
  }
  .display-win {
    display: grid;
  }
  .display-button{
    display: flex;
    top:28px;
  }
}
</style>

