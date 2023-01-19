<script setup>

import { ref } from 'vue'

let sidebarSize = ref("lg")
let sidebarClass = ref('')
const bodyContainer = ref(null)
const roughVariable =ref("blue")

const styleObject = reactive({

"background-color": roughVariable,
})

const toggleSidebar = ()=>{
    roughVariable.value = "red"
    console.log("got hit ")
    console.log("this is body container",bodyContainer)
    sidebarSize.value = "sm"
    sidebarClass.value='sidebar-enable'
    console.log("this the attributes of body container",bodyContainer.value.attributes)

}
//bodycontainer is a variable
</script>

<template>
              <button @click="toggleSidebar">golu</button>
            <div :style="styleObject">TEST TEXT TO BE TESTED</div>
  <div
    ref="bodyContainer"
    id="body-container"
    :class="sidebarClass"
    :data-sidebar-size="sidebarSize"
  >
    <!-- <body data-layout="horizontal" data-topbar="colored"> -->

    <!-- Begin page -->
    <div id="layout-wrapper">
      <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
              <a href="index.html" class="logo logo-dark">
                <span class="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="" height="22" />
                </span>
                <span class="logo-lg">
                  <img src="assets/images/logo-light.svg" alt="" height="20" />
                </span>
              </a>
            </div>

            <button
              type="button"
              class="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
            >
              <i class="fa fa-fw fa-bars"></i>
            </button>



            <!-- App Search-->
            <form class="app-search d-none d-lg-block">
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <span class="fa-solid fa-magnifying-glass"></span>
              </div>
            </form>
          </div>

          <div class="d-flex">
            <div class="dropdown d-inline-block d-lg-none ms-2">
              <button
                type="button"
                class="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="uil-search"></i>
              </button>
              <div
                class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form class="p-3">
                  <div class="m-0">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="submit">
                          <i class="mdi mdi-magnify"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="dropdown d-none d-lg-inline-block ms-1">
              <button
                type="button"
                class="btn header-item noti-icon waves-effect"
                data-bs-toggle="fullscreen"
              >
                <i class="fa-solid fa-expand"></i>
              </button>
            </div>

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
                  src="assets/images/users/avatar-2.jpg"
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

            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i class="fa-solid fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <!-- ========== Left Sidebar Start ========== -->
      <div class="vertical-menu">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a href="index.html" class="logo logo-dark">
            <span class="logo-sm" style="position: relative; right: 15px">
              <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span class="logo-lg">
              <img src="assets/images/logo-light.svg" alt="" height="20" />
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
                <a href="index.html">
                  <i class="fa-solid fa-dashboard"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li class="menu-title">Sub-menu</li>
              <li>
                <a href="workspace.html" class="waves-effect">
                  <i class="fa-solid fa-folder-tree"></i>
                  <span>Workspace</span>
                </a>
              </li>
              <li>
                <a href="leader.html" class="waves-effect">
                  <i class="fa-solid fa-user"></i>
                  <span>Leaders</span>
                </a>
              </li>
              <li>
                <a href="calendar.html" class="waves-effect">
                  <i class="fa-solid fa-chart-simple"></i>
                  <span>Analytics</span>
                </a>
              </li>
              <li class="menu-title">Content</li>
              <li>
                <a href="content-post.html" class="waves-effect">
                  <i class="fa-solid fa-envelopes-bulk"></i>
                  <span>Posts</span>
                </a>
              </li>
              <li>
                <a href="calendar.html" class="waves-effect">
                  <i class="fa-solid fa-file-lines"></i>
                  <span>Curation</span>
                </a>
              </li>

              <li class="menu-title">Manage</li>

              <li>
                <a href="calendar.html" class="waves-effect">
                  <i class="fa-solid fa-bars-progress"></i>
                  <span>Category</span>
                </a>
              </li>

              <li>
                <a href="chat.html" class="waves-effect">
                  <i class="fa-solid fa-users"></i>
                  <span>Users</span>
                </a>
              </li>

              <li>
                <a href="file-manager.html" class="waves-effect">
                  <i class="fa-solid fa-list-check"></i>
                  <span>Roles</span>
                </a>
              </li>
              <li>
                <a href="file-manager.html" class="waves-effect">
                  <i class="fa-solid fa-handshake"></i>
                  <span>Partners</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- Sidebar -->
        </div>
      </div>
      <!-- Left Sidebar End -->

      <!-- ============================================================== -->
      <!-- Start right Content here -->
      <!-- ============================================================== -->
      <div class="main-content">
        <div class="page-content">

          <!-- container-fluid -->
        </div>
        <!-- End Page-content -->

        <footer class="footer">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                © 2021 -{{ new Date().getFullYear() }}Razorlabz Software Private
                Limited.
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end d-none d-sm-block">
                  All rights reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <!-- end main content-->
    </div>
    <!-- END layout-wrapper -->

    <!-- Right Sidebar -->
    <div class="right-bar">
      <div data-simplebar class="h-100">
        <div class="rightbar-title d-flex align-items-center p-3">
          <h5 class="m-0 me-2">Settings</h5>

          <a href="javascript:void(0);" class="right-bar-toggle ms-auto">
            <i class="fa-solid fa-close noti-icon"></i>
          </a>
        </div>

        <!-- Settings -->
        <hr class="m-0" />

        <div class="p-4">
          <h6 class="mb-3">Layout</h6>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="layout"
              id="layout-vertical"
              value="vertical"
            />
            <label class="form-check-label" for="layout-vertical"
              >Vertical</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="layout"
              id="layout-horizontal"
              value="horizontal"
            />
            <label class="form-check-label" for="layout-horizontal"
              >Horizontal</label
            >
          </div>

          <h6 class="mt-4 mb-3 pt-2">Layout Mode</h6>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="layout-mode"
              id="layout-mode-light"
              value="light"
            />
            <label class="form-check-label" for="layout-mode-light"
              >Light</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="layout-mode"
              id="layout-mode-dark"
              value="dark"
            />
            <label class="form-check-label" for="layout-mode-dark">Dark</label>
          </div>

          <h6 class="mt-4 mb-3 pt-2">Layout Width</h6>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="layout-width"
              id="layout-width-fuild"
              value="fuild"
              onchange="document.body.setAttribute('data-layout-size', 'fluid')"
            />
            <label class="form-check-label" for="layout-width-fuild"
              >Fluid</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="layout-width"
              id="layout-width-boxed"
              value="boxed"
              onchange="document.body.setAttribute('data-layout-size', 'boxed')"
            />
            <label class="form-check-label" for="layout-width-boxed"
              >Boxed</label
            >
          </div>

          <h6 class="mt-4 mb-3 pt-2">Layout Position</h6>

          <h6 class="mt-4 mb-3 pt-2">Topbar Color</h6>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="topbar-color"
              id="topbar-color-light"
              value="light"
              onchange="document.body.setAttribute('data-topbar', 'light')"
            />
            <label class="form-check-label" for="topbar-color-light"
              >Light</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="topbar-color"
              id="topbar-color-dark"
              value="dark"
              onchange="document.body.setAttribute('data-topbar', 'dark')"
            />
            <label class="form-check-label" for="topbar-color-dark">Dark</label>
          </div>

          <h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Size</h6>

          <div class="form-check sidebar-setting">
            <input
              class="form-check-input"
              type="radio"
              name="sidebar-size"
              id="sidebar-size-default"
              value="default"
              onchange="document.body.setAttribute('data-sidebar-size', 'lg')"
            />
            <label class="form-check-label" for="sidebar-size-default"
              >Default</label
            >
          </div>
          <div class="form-check sidebar-setting">
            <input
              class="form-check-input"
              type="radio"
              name="sidebar-size"
              id="sidebar-size-compact"
              value="compact"
              onchange="document.body.setAttribute('data-sidebar-size', 'small')"
            />
            <label class="form-check-label" for="sidebar-size-compact"
              >Compact</label
            >
          </div>
          <div class="form-check sidebar-setting">
            <input
              class="form-check-input"
              type="radio"
              name="sidebar-size"
              id="sidebar-size-small"
              value="small"
              onchange="document.body.setAttribute('data-sidebar-size', 'sm')"
            />
            <label class="form-check-label" for="sidebar-size-small"
              >Small (Icon View)</label
            >
          </div>

          <h6 class="mt-4 mb-3 pt-2 sidebar-setting">Sidebar Color</h6>

          <div class="form-check sidebar-setting">
            <input
              class="form-check-input"
              type="radio"
              name="sidebar-color"
              id="sidebar-color-light"
              value="light"
              onchange="document.body.setAttribute('data-sidebar', 'light')"
            />
            <label class="form-check-label" for="sidebar-color-light"
              >Light</label
            >
          </div>
          <div class="form-check sidebar-setting">
            <input
              class="form-check-input"
              type="radio"
              name="sidebar-color"
              id="sidebar-color-dark"
              value="dark"
              onchange="document.body.setAttribute('data-sidebar', 'dark')"
            />
            <label class="form-check-label" for="sidebar-color-dark"
              >Dark</label
            >
          </div>
          <div class="form-check sidebar-setting">
            <input
              class="form-check-input"
              type="radio"
              name="sidebar-color"
              id="sidebar-color-colored"
              value="colored"
              onchange="document.body.setAttribute('data-sidebar', 'colored')"
            />
            <label class="form-check-label" for="sidebar-color-colored"
              >Colored</label
            >
          </div>

          <h6 class="mt-4 mb-3 pt-2">Direction</h6>

          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="layout-direction"
              id="layout-direction-ltr"
              value="ltr"
            />
            <label class="form-check-label" for="layout-direction-ltr"
              >LTR</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="layout-direction"
              id="layout-direction-rtl"
              value="rtl"
            />
            <label class="form-check-label" for="layout-direction-rtl"
              >RTL</label
            >
          </div>
        </div>
      </div>
      <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>
