<script setup>

const isShow = useState("isShow");

const just = ()=>{
  console.log("beforeClick" ,isShow.value)
  isShow.value = !isShow.value
  console.log("afterClick" ,isShow.value)

}
</script>



<template>
  <!-- start page title -->

<div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0">Manage Users</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                        <li class="breadcrumb-item active">Manage Users</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- end page title -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col-md-3">
                                            <div class="form-inline mb-3">
                                                <div class="search-box ms-2">
                                                    <div class="position-relative">
                                                        <input type="text"
                                                            class="form-control rounded bg-light border-0"
                                                            placeholder="Search...">
                                                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-6">
                                            <div class="mb-3  float-md-end">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-primary waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#addUser"><i
                                                        class="fa-solid fa-plus me-2"></i> Add User</a>
                                            </div>
                                        </div>
                                    </div>

                                    <!--addUser modal-->

                                    <!-- Modal -->
<div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Add New User</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <!-- Modal body -->
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
              <label for="">Email</label>
              <input type="text" name="" id="" class="form-control" placeholder="Enter user email">
          </div>
          <div class="col-md-6">
              <label for="">Name</label>
              <input type="text" name="" id="" class="form-control" placeholder="Enter user name">
          </div>
        </div>
        <div class="row py-1">
          <div class="col-md-6">
              <label for="">Select Reporting Manager</label>
              <select class="form-control">
                  <option value="0" class="active">Select a Reporting Manager</option>
                  <option value="1">Nibhash Mishra</option>
                  <option value="2">Sunil Kumar</option>
              </select>
          </div>
          <div class="col-md-6">
              <label for="">Select Workspaces</label>
              <select class="form-control">
                  <option value="0" class="active">Select a Workspace</option>
                  <option value="1">Edelman</option>
                  <option value="2">Razorpod</option>
              </select>
          </div>
        </div>
        <div class="row py-1">
          <div class="col-md-6">
              <label for="">Select User Type</label>
              <select class="form-control">
                  <option value="0" class="active">Select User Type</option>
                  <option value="1">User</option>
                  <option value="2">Leader</option>
              </select>
          </div>
          <div class="col-md-6">
              <label for="">Select Role</label>
              <select class="form-control">
                  <option value="0" class="active">Please select a role</option>
                  <option value="1">Admin</option>
                  <option value="2">Leader</option>
              </select>
          </div>
        </div>
        <div class="row py-1">
          <div class="col-md-6">
              <label for="">Select Timezone</label>
              <select name="" id="" class="form-control">
                  <option value="0">Select timezone</option>
                  <option value="1"></option>
                  <option value="2"></option>
                  <option value="3"></option>
              </select>
          </div>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Add</button>
      </div>
    </div>
    </div>
    </div>
                                    <!-- end row -->

                                    <RightSidebar/>

                                    <div class="table-responsive mb-4">
                                        <table class="table table-centered table-nowrap mb-0 table-sm">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style="width: 50px;">
                                                        <div class="form-check font-size-16">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="contacusercheck">
                                                            <label class="form-check-label"
                                                                for="contacusercheck"></label>
                                                        </div>
                                                    </th>
                                                    <th scope="col">Index</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Reporting Manager</th>
                                                    <th scope="col" class="display">User Type</th>
                                                    <th scope="col" class="display">Role</th>
                                                    <th scope="col" class="display">Last Login</th>
                                                    <th scope="col" class="display">Created At</th>
                                                    <th scope="col" class="display">Status</th>
                                                    <th scope="col" class="display">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div class="form-check font-size-16">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="contacusercheck1">
                                                            <label class="form-check-label"
                                                                for="contacusercheck1"></label>
                                                        </div>
                                                    </th>
                                                    <td>1
                                                    </td>
                                                    <td>
                                                        <div class="d-flex flex-row">
                                                            <img src="~/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded-circle me-2">
                                                        <div class="d-flex flex-column">Nibhash Mishra <span><small title="email">nibhash@razorlabz.com</small></span><span><small title="Time Zone">Asia/Kolkata</small></span></div>
                                                        </div></td>
                                                    <td>Megha Seth</td>
                                                    <td class="display">Leader, Admin</td>
                                                    <td class="display">Client Admin</td>
                                                    <td class="display">2021-01-03</td>
                                                    <td class="display">2022-12-06</td>
                                                    <td class="display">
                                                        <div class="badge bg-pill bg-soft-success font-size-12">Active
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item dropdown">
                                                                <a class="text-muted  font-size-18 px-2"
                                                                    href="#" role="button" data-bs-toggle="dropdown"
                                                                    aria-haspopup="true">
                                                                    <i class="fa-solid fa-ellipsis-v"></i>
                                                                </a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <a class="dropdown-item display-win" @click="just">View more</a>
                                                                    <a class="dropdown-item" href="#" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">Change
                                                                        Timezone</a>
                                                                    <a class="dropdown-item" href="#">Update Profile</a>
                                                                    <a class="dropdown-item" href="#">Align Managers</a>
                                                                    <a class="dropdown-item" href="#">Remove Manager</a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><b>User Details</b></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <hr class="m-0" />

<div class="row mt-2">
    <div class="col-xl-6">
        <label class="form-check-label" for="layout-mode-light">Name</label>
        <input class="form-control" type="text" disabled>
    </div>
    <div class="col-xl-6">
        <label class="form-check-label" for="layout-mode-light">Reporting Manager</label>
        <input class="form-control" type="text" disabled>
    </div>
</div>
<div class="row mt-2">
    <div class="col-xl-6">
        <label class="form-check-label" for="layout-mode-light">User Type</label>
        <select name="" id="" class="form-control">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>
    </div>
    <div class="col-xl-6">
        <label class="form-check-label" for="layout-mode-light">Role</label>
        <input class="form-control" type="text" disabled>
    </div>
</div>
<div class="row mt-2">
    <div class="col-xl-6">
        <label class="form-check-label" for="layout-mode-light">Last Login</label>
        <input class="form-control" type="text" disabled>
    </div>
    <div class="col-xl-6">
        <label class="form-check-label" for="layout-mode-light">Created At</label>
        <input class="form-control" type="text" disabled>
    </div>
</div>
<div class="row mt-2">
    <div class="col-xl-6">
        <label class="form-check-label" for="layout-mode-light">Status</label>
        <input class="form-control" type="text" disabled>
    </div>
    <div class="col-xl-6">
        <label class="form-check-label" for="layout-mode-light">Action</label>
        <input class="form-control" type="text" disabled>
    </div>
</div>
      </div>
    </div>
                                                <tr>
                                                    <th scope="row">
                                                        <div class="form-check font-size-16">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="contacusercheck1">
                                                            <label class="form-check-label"
                                                                for="contacusercheck1"></label>
                                                        </div>
                                                    </th>
                                                    <td>2
                                                    </td>
                                                    <td>
                                                        <div class="d-flex flex-row">
                                                            <img src="~/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded-circle me-2">
                                                        <div class="d-flex flex-column">Nibhash Mishra <span><small title="email">nibhash@razorlabz.com</small></span><span><small title="Time Zone">Asia/Kolkata</small></span></div>
                                                        </div></td>
                                                    <td>Megha Seth</td>
                                                    <td class="display">Leader, Admin</td>
                                                    <td class="display">Client Admin</td>
                                                    <td class="display">2021-01-03</td>
                                                    <td class="display">2022-12-06</td>
                                                    <td class="display">
                                                        <div class="badge bg-pill bg-soft-success font-size-12">Active
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item dropdown">
                                                                <a class="text-muted  font-size-18 px-2"
                                                                    href="#" role="button" data-bs-toggle="dropdown"
                                                                    aria-haspopup="true">
                                                                    <i class="fa-solid fa-ellipsis-v"></i>
                                                                </a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <a class="dropdown-item" href="#">Change
                                                                        Timezone</a>
                                                                    <a class="dropdown-item" href="#">Update Profile</a>
                                                                    <a class="dropdown-item" href="#">Align Managers</a>
                                                                    <a class="dropdown-item" href="#">Remove Manager</a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div class="form-check font-size-16">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="contacusercheck1">
                                                            <label class="form-check-label"
                                                                for="contacusercheck1"></label>
                                                        </div>
                                                    </th>
                                                    <td>3
                                                    </td>
                                                    <td>
                                                        <div class="d-flex flex-row">
                                                            <img src="~/assets/images/users/avatar-2.jpg" alt="" class="avatar-md rounded-circle me-2">
                                                        <div class="d-flex flex-column">Nibhash Mishra <span><small title="email">nibhash@razorlabz.com</small></span><span><small title="Time Zone">Asia/Kolkata</small></span></div>
                                                    
                                                        </div></td>
                                                    <td>William MushkinWilliam MushkinWilliam Mushkin</td>
                                                    <td class="display">Leader, Admin</td>
                                                    <td class="display">Client Admin</td>
                                                    <td class="display">2021-01-03</td>
                                                    <td class="display">2022-12-06</td>
                                                    <td class="display">
                                                        <div class="badge bg-pill bg-soft-success font-size-12">Active
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item dropdown">
                                                                <a class="text-muted  font-size-18 px-2"
                                                                    href="#" role="button" data-bs-toggle="dropdown"
                                                                    aria-haspopup="true">
                                                                    <i class="fa-solid fa-ellipsis-v"></i>
                                                                </a>
                                                                <div class="dropdown-menu dropdown-menu-end">
                                                                    <a class="dropdown-item" href="#">Change
                                                                        Timezone</a>
                                                                    <a class="dropdown-item" href="#">Update Profile</a>
                                                                    <a class="dropdown-item" href="#">Align Managers</a>
                                                                    <a class="dropdown-item" href="#">Remove Manager</a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-sm-6">
                                            <div>
                                                <p class="mb-sm-0">Showing 1 to 10 of 12 entries</p>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="float-sm-end">
                                                <ul class="pagination mb-sm-0">
                                                    <li class="page-item disabled">
                                                        <a href="#" class="page-link"><i
                                                                class="mdi mdi-chevron-left"></i></a>
                                                    </li>
                                                    <li class="page-item active">
                                                        <a href="#" class="page-link">1</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a href="#" class="page-link">2</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a href="#" class="page-link">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a href="#" class="page-link"><i
                                                                class="mdi mdi-chevron-right"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
  <!-- end row -->
</template>

<!-- <script>
export default {
  name: "ToggleDiv",
  data: function () {
    return {
    //   isShow: true,
    };
  },

  props: {
    msg: String,
  },
};
</script> -->



<style scoped>
.display-win{
    display: none;
}
.notShown {
  visibility: hidden !important;
}
@media only screen and (max-width: 820px) {
 .display{
    display: none;
 }
 .display-win{
    display: grid;
}
}
</style>
