<script setup>
const isShow = useState("isShow");

const just = () => {
  console.log("beforeClick", isShow.value);
  isShow.value = !isShow.value;
  console.log("afterClick", isShow.value);
};
</script>

<template>
 <head>
        <title>Users | Voyze</title>
    </head>
  <div class="row">
    <div class="col-lg-12">
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="card-body">
          <div class="row mb-2">
            <div class="col-md-3">
              <div class="form-inline mb-3">
                <div class="search-box ms-2">
                  <div class="position-relative">
                    <input
                      type="text"
                      class="form-control rounded bg-light border-0"
                      placeholder="Search..."
                    />
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-6">
              <div class="mb-3 float-md-end">
                <a
                  class="btn btn-primary waves-effect waves-light"
                  data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar1" aria-controls="offcanvasNavbar"
                  ><i class="fa-solid fa-plus me-2"></i> Add User</a
                >
              </div>
            </div>
          </div>

          <div class="offcanvas offcanvas-end offcanvas-size-xl" tabindex="-1" id="offcanvasNavbar1" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel1">Add New User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <hr>
      <div class="offcanvas-body">
        <div class="row">
                    <div class="col-xl-6">
                      <label for="">Email</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="Enter user email"
                      />
                    </div>
                    <div class="col-xl-6">
                      <label for="">Name</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        class="form-control"
                        placeholder="Enter user name"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-md-6">
                      <label for="">Manager</label>
                      <select class="form-control">
                        <option value="0" class="active">
                          Select Manager
                        </option>
                        <option value="1">Nibhash Mishra</option>
                        <option value="2">Sunil Kumar</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="">Workspaces</label>
                      <select class="form-control">
                        <option value="0" class="active">
                          Select a Workspace
                        </option>
                        <option value="1">Edelman</option>
                        <option value="2">Razorpod</option>
                      </select>
                    </div>
                  </div>
                  <div class="row py-1">
                    <div class="col-md-6">
                      <label for="">User Type</label>
                      <select class="form-control">
                        <option value="0" class="active">
                          Select User Type
                        </option>
                        <option value="1">User</option>
                        <option value="2">Leader</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="">User Role</label>
                      <select class="form-control">
                        <option value="0" class="active">
                          Please select a role
                        </option>
                        <option value="1">Admin</option>
                        <option value="2">Leader</option>
                      </select>
                    </div>
                  </div>
                  <div class="row py-1">
                    <div class="col-md-6">
                      <label for="">Timezone</label>
                      <select name="" id="" class="form-control">
                        <option value="0">Select timezone</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                      </select>
                    </div>
                  </div>

      </div>
      <div class="offcanvas-footer">
        <button
                    type="button"
                    class="btn btn-primary mr-2 mb-2 float-end "
                    data-dismiss="modal"
                  >
                    Add
                  </button>
      </div>
    </div>
          <!-- end row -->

          <div class="table-responsive mb-4">
            <table class="table table-centered table-nowrap mb-0 table-sm">
              <thead>
                <tr>
                  <th scope="col" style="width: 50px">
                    <div class="form-check font-size-16 display">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="contacusercheck"
                      />
                      <label
                        class="form-check-label"
                        for="contacusercheck"
                      ></label>
                    </div>
                  </th>
                  <th scope="col" class="display">Index</th>
                  <th scope="col" class="center">Name</th>
                  <th scope="col" class="display">Manager</th>
                  <th scope="col" class="display">User Type</th>
                  <th scope="col" class="display">Role</th>
                  <th scope="col" class="display">Status</th>
                  <th scope="col" class="display"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div class="form-check font-size-16 display">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="contacusercheck1"
                      />
                      <label
                        class="form-check-label"
                        for="contacusercheck1"
                      ></label>
                    </div>
                  </th>
                  <td class="display">1</td>
                  <td>
                    <div class="d-flex flex-row">
                      <img
                        src="~/assets/images/users/avatar-2.jpg"
                        alt=""
                        class="avatar-xs rounded-circle me-2"
                      />
                      <div class="mt-2">
                        Nibhash Mishra
                      </div>
                    </div>
                  </td>
                  <td class="display">Megha Seth</td>
                  <td class="display">Leader, Admin</td>
                  <td class="display">Client Admin</td>
                  <td class="display">
                    <div class="badge bg-pill bg-soft-success font-size-12">
                      Active
                    </div>
                  </td>
                  <td class="display text-muted font-size-18 px-2" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar">
                            <i class="fa-solid fa-pen-to-square"></i>
                  </td>
                </tr>
                <div
                  class="offcanvas offcanvas-end offcanvas-size-xl"
                  tabindex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                      <b>Edit User Details</b>
                    </h5>
                    <button
                      type="button"
                      class="btn-close mr-2"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body">
                    <hr class="m-0" />

                    <div class="row mt-2">
                      <div class="col-xl-6">
                        <label class="form-check-label" for="layout-mode-light"
                          >Name</label
                        >
                        <input class="form-control-plaintext" type="text" readonly value="Nibhash Mishra" />
                      </div>
                      <div class="col-xl-6">
                        <label class="form-check-label" for="layout-mode-light"
                          >Manager</label
                        >
                        <input class="form-control-plaintext" type="text" readonly value="Megha Seth"/>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-xl-6">
                        <label class="form-check-label" for="layout-mode-light"
                          >Email</label
                        >
                        <input class="form-control" type="text"/>
                      </div>
                      <div class="col-xl-6">
                        <label class="form-check-label" for="layout-mode-light"
                          >User Type</label
                        >
                        <select name="" id="" class="form-control">
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                        </select>
                      </div>
                    </div>
                    <div class="row mt-2">
                     
                      <div class="col-xl-6">
                        <label class="form-check-label" for="layout-mode-light"
                          >Role</label
                        >
                        <select name="" id="" class="form-control">
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                        </select>
                      </div>
                      <div class="col-xl-6">
                        <label class="form-check-label" for="layout-mode-light"
                          >Status</label
                        >
                        <select name="" id="" class="form-control">
                          <option value="0">Active</option>
                          <option value="1">Inactive</option>
                          <option value="3">Archive</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-xl-6">
                        <label for="">Timezone</label>
                        <select name="" id="" class="form-control">
                          <option value="">Select Timezone</option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                        </select>
                      </div>
                      <div class="col-xl-6">
                        <label for="">Workspace Manager</label>
                        <select name="" id="" class="form-control">
                          <option value="">Select your Manager</option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                          <option value=""></option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="offcanvas-footer">
                    <button type="submit" class="btn btn-primary mr-2 mb-2 float-end">Update</button>
                  </div>
                </div>
              </tbody>
            </table>
          </div>
          <div class="row mt-4">
            <div class="col-sm-6">
              <div>
                <p class="mb-sm-0 font">Showing 1 to 10 of 12 entries</p>
              </div>
            </div>
            <div class="col-sm-6">
              <nav aria-label="...">
  <ul class="pagination pagination-sm justify-content-end">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
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
.display-win {
  display: none;
}
.notShown {
  visibility: hidden !important;
}
.offcanvas-size-xl {
    --bs-offcanvas-width: min(95vw, 600px) !important;
}
.offcanvas-size-xxl {
    --bs-offcanvas-width: min(95vw, 90vw) !important;
}
.offcanvas-size-md { /* add Responsivenes to default offcanvas */
    --bs-offcanvas-width: min(95vw, 400px) !important;
}
.offcanvas-size-sm {
    --bs-offcanvas-width: min(95vw, 250px) !important;
}
.offcanvas-body{
  overflow: none;
}
@media only screen and (max-width: 820px) {
  .display {
    display: none;
  }
  .display-win {
    display: grid;
  }
  .font{
    font-size:12px;
  }
}
@media only screen and (max-width: 400px) {
  .display {
    display: none;
  }
  .display-win {
    display: grid;
  }
  .center{
    text-align: center;
  }
  .font{
    font-size:8px;
  }
}
</style>
