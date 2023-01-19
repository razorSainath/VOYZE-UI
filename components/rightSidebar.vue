

<script setup>

const isShow = useState("isShow",()=>true);

</script>

<template>
<!-- Right Sidebar -->
<div class="right-bar1" v-if="isShow">
        <div data-simplebar class="h-100 card">
            <div class="rightbar-title d-flex align-items-center p-3">

                <h5 class="m-0 me-2">User Details</h5>
            </div>

            <!-- Settings -->
            <hr class="m-0" />

            <div class="p-4">
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Name</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Reporting Manager</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">User Type</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Role</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Last Login</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Created At</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Status</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Action</label>
                    <input class="form-control" type="text" disabled>
                </div>

            </div>

        </div> <!-- end slimscroll-menu-->
    </div>
    <div v-else="isShow" style="background-color: var(--bs-custom-white);
  -webkit-box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06),
    0 1px 0 0 rgba(0, 0, 0, 0.02);
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
  display: flex;
  align-items: flex-end;
  position: fixed;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  width: 50%;
  z-index: 9999;
  float: left;
  top: 0;
  bottom: 0;">
        <div data-simplebar class="h-100">

            <!-- Settings -->
            <hr class="m-0" />

            <div class="p-4">
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Name</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Reporting Manager</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">User Type</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Role</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Last Login</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Created At</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Status</label>
                    <input class="form-control" type="text" disabled>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label" for="layout-mode-light">Action</label>
                    <input class="form-control" type="text" disabled>
                </div>

            </div>

        </div> <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->
</template>
