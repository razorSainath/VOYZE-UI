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
let pageTitle = useState("pageTitle")
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
              <a href="index.html" class="logo logo-dark">
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
        <h4 class="page-title">{{ pageTitle }}</h4>

      </div>

          <div class="d-flex">
                        <!-- organisation dropdown-->
                        <select name="" id="" class="display border-none" style="margin-left:15px;">
                <option value="0">Select Organisation</option>
                <option value="1">Edelman</option>
                <option value="2">Razorpod</option>
                <option value="3">Infosys</option>
              </select>

            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa-solid fa-bell"></i>
                <span class="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div class="p-3">
                  <div class="row align-items-center">
                    <div class="col">
                      <h5 class="m-0 font-size-16">Notifications</h5>
                    </div>
                    <div class="col-auto">
                      <a href="#!" class="small"> Mark all as read</a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style="max-height: 230px">
                  <a
                    href="javascript:void(0);"
                    class="text-reset notification-item"
                  >
                    <div class="d-flex align-items-start">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar-xs">
                          <span
                            class="avatar-title bg-primary rounded-circle font-size-16"
                          >
                            <i class="uil-shopping-basket"></i>
                          </span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-1">Your order is placed</h6>
                        <div class="font-size-12 text-muted">
                          <p class="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p class="mb-0">
                            <i class="mdi mdi-clock-outline"></i> 3 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-reset notification-item"
                  >
                    <div class="d-flex align-items-start">
                      <div class="flex-shrink-0 me-3">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          class="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-1">James Lemire</h6>
                        <div class="font-size-12 text-muted">
                          <p class="mb-1">
                            It will seem like simplified English.
                          </p>
                          <p class="mb-0">
                            <i class="mdi mdi-clock-outline"></i> 1 hour ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="text-reset notification-item"
                  >
                    <div class="d-flex align-items-start">
                      <div class="flex-shrink-0 me-3">
                        <div class="avatar-xs">
                          <span
                            class="avatar-title bg-success rounded-circle font-size-16"
                          >
                            <i class="uil-truck"></i>
                          </span>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-1">Your item is shipped</h6>
                        <div class="font-size-12 text-muted">
                          <p class="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p class="mb-0">
                            <i class="mdi mdi-clock-outline"></i> 3 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="javascript:void(0);"
                    class="text-reset notification-item"
                  >
                    <div class="d-flex align-items-start">
                      <div class="flex-shrink-0 me-3">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          class="rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                      </div>
                      <div class="flex-grow-1">
                        <h6 class="mb-1">Salena Layfield</h6>
                        <div class="font-size-12 text-muted">
                          <p class="mb-1">
                            As a skeptical Cambridge friend of mine occidental.
                          </p>
                          <p class="mb-0">
                            <i class="mdi mdi-clock-outline"></i> 1 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="p-2 border-top">
                  <div class="d-grid">
                    <a
                      class="btn btn-sm btn-link font-size-14 text-center"
                      href="javascript:void(0)"
                    >
                      <i class="uil-arrow-circle-right me-1"></i> View More..
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="btn header-item waves-effect"
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
                  class="d-none d-xl-inline-block ms-1 fw-medium font-size-15"
                  >Nibhash</span
                >
                <i
                  class="fa-solid fa-angle-down d-none d-xl-inline-block font-size-15"
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
}
@media(max-width: 420px){

.page-title{
display: none;
}
}

@media(min-width: 960px){.button-fixed{
position: relative;
left:10px;

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
    display: none;
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

