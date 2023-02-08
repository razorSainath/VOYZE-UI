<script>
import VueMultiselect from "vue-multiselect";
export default {
  components: { VueMultiselect },
  data() {
    return {
      selected: null,
      options: ["orgnization1", "orgnization2", "orgnization3", "orgnization4"],
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
import {ref} from 'vue'
let isSidebarOpen = useState("isSidebarOpen");
let pageTitle = useState("pageTitle", () => "");

const just = () => {
  // console.log("beforeClick", isSidebarOpen.value);
  isSidebarOpen.value = !isSidebarOpen.value;
  // console.log("afterClick", isSidebarOpen.value);
};

const options= ref(false)
</script>

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <span class="short-logo">
              <img
                src="~/assets/images/logo-sm-removebg-preview.png"
                alt=""
                height="22"
              />
            </span>
      <div class="flex flex-end">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a class="logo logo-dark">
            <span class="logo-sm">
              <img
                src="~/assets/images/logo-sm-removebg-preview.png"
                alt=""
                height="22"
              />
            </span>

          </a>
        </div>

        <button type="button" class="button-fixed" @click="just">
          <i class="fa fa-fw fa-bars"></i>
        </button>
      </div>
      <div>
        <h6 class="page-title">{{ pageTitle }}</h6>
      </div>

      <div class="flex">
        <!-- organisation dropdown-->
        <select
          name=""
          id=""
          class="display border-none"
          style="margin-left: 15px"
        >
          <option value="1">Edelman</option>
          <option value="2">Razorpod</option>
          <option value="3">Infosys</option>
        </select>
        <div class="inline-block">
          <button
            type="button"
            class="relative header-item flex items-center"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="options=!options"
          >
            <img
              class="rounded-circle header-profile-user"
              src="~/assets/images/users/avatar-2.jpg"
              alt="Header Avatar"
            />
            <div class="md:block">
              <span class="font-size-15">Nibhash</span>
              <i
                class="fa-solid fa-angle-down xl:inline-block font-size-15"
              ></i>
            </div>

                              <!-- item-->
                              <div v-if="options" class="absolute top-[70px] right-[-9px] float-right mt- w-[200px] h-[130px]">
            <div
              class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6"
            >
              <div class="flex flex-wrap flex-row items-center">
                <div class="flex-shrink max-w-full">
                  <div class="flex flex-col">
                    <div class="">
                      <a class="dropdown-item" href="#"
                        ><i
                          class="fa-solid fa-user-circle font-size-18 align-middle text-muted me-1"
                        ></i>
                        <span class="align-middle">View Profile</span></a
                      >
                    </div>
                    <div class="">
                      <a class="dropdown-item" href="#"
                        ><i
                          class="fa-sharp fa-solid fa-display font-size-18 align-middle me-1 text-muted"
                        ></i>
                        <span class="align-middle">Lock screen</span></a
                      >
                    </div>
                    <div class="ml-[-24px]">
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
            </div>
          </div>
                    <!-- item-->
          </button>


        </div>

      </div>
    </div>
  </header>
  
</template>

<style scoped>
.page-title {
  position: absolute;
  display: flex;
  top: 22px;
  font-family: "Gill Sans", sans-serif;
  font-weight: 600;
}
.display1 {
  display: none !important;
}

@media (max-width: 960px) {
  .button-fixed {
    position: fixed;
    left: 100px;
    top: 24px;
  }

  .page-title {
    left: 140px;
    font-size: 19px;
  }
  .display1 {
    display: contents;
  }
}
@media (max-width: 420px) {
  .page-title {
    display: none;
  }
  .display1 {
    display: contents;
  }
}

@media (min-width: 960px) {
  .button-fixed {
    position: relative;
    left: 10px;
  }
  .display1 {
    display: contents;
  }
  .page-title {
    left: 50px;
  }
}

.display-button {
  display: none;
}
@media only screen and (max-width: 820px) {
  .display {
    display: content;
  }
  .display-win {
    display: grid;
  }
  .display-button {
    display: flex;
    top: 28px;
  }
}
</style>
