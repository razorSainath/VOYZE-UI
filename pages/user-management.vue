<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-flex align-items-center justify-content-between"
      >
        <h4 class="mb-0">Manage Users</h4>

        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Dashboard</a>
            </li>
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
                  href="javascript:void(0);"
                  class="btn btn-primary waves-effect waves-light"
                  data-toggle="modal"
                  data-target="#addUser"
                  ><i class="fa-solid fa-plus me-2"></i> Add User</a
                >
              </div>
            </div>
          </div>
          <!-- end row -->
          <div class="table-responsive mb-4">
            <table class="table table-centered table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col" style="width: 50px">
                    <div class="form-check font-size-16">
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
                  <th scope="col">Index</th>
                  <th scope="col">Name</th>
                  <th scope="col">Reporting Manager</th>
                  <th scope="col">Email</th>
                  <th scope="col">User Type</th>
                  <th scope="col">Role</th>
                  <th scope="col">Timezone</th>
                  <th scope="col">Last Login</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div class="form-check font-size-16">
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
                  <td>1</td>
                  <td>
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-xs rounded-circle me-2"
                    />
                    <span>Nibhash Mishra</span>
                  </td>
                  <td>Megha Seth</td>
                  <td>nibhash@razorlabz.com</td>
                  <td>Leader, Admin</td>
                  <td>Client Admin</td>
                  <td>Asia/Kolkata</td>
                  <td>2021-01-03</td>
                  <td>2022-12-06</td>
                  <td>
                    <div class="badge bg-pill bg-soft-success font-size-12">
                      Active
                    </div>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item dropdown">
                        <a
                          class="text-muted dropdown-toggle font-size-18 px-2"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Change Timezone</a>
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
                  <td>2</td>
                  <td>
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-xs rounded-circle me-2"
                    />
                    <span>Nibhash Mishra</span>
                  </td>
                  <td>Megha Seth</td>
                  <td>nibhash@razorlabz.com</td>
                  <td>Leader, Admin</td>
                  <td>Client Admin</td>
                  <td>Asia/Kolkata</td>
                  <td>2021-01-03</td>
                  <td>2022-12-06</td>
                  <td>
                    <div class="badge bg-pill bg-soft-success font-size-12">
                      Active
                    </div>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item dropdown">
                        <a
                          class="text-muted dropdown-toggle font-size-18 px-2"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Change Timezone</a>
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
                  <td>3</td>
                  <td>
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-xs rounded-circle me-2"
                    />
                    <span>Nibhash Mishra</span>
                  </td>
                  <td>Megha Seth</td>
                  <td>nibhash@razorlabz.com</td>
                  <td>Leader, Admin</td>
                  <td>Client Admin</td>
                  <td>Asia/Kolkata</td>
                  <td>2021-01-03</td>
                  <td>2022-12-06</td>
                  <td>
                    <div class="badge bg-pill bg-soft-success font-size-12">
                      Active
                    </div>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item dropdown">
                        <a
                          class="text-muted dropdown-toggle font-size-18 px-2"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Change Timezone</a>
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
                  <td>4</td>
                  <td>
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-xs rounded-circle me-2"
                    />
                    <span>Nibhash Mishra</span>
                  </td>
                  <td>Megha Seth</td>
                  <td>nibhash@razorlabz.com</td>
                  <td>Leader, Admin</td>
                  <td>Client Admin</td>
                  <td>Asia/Kolkata</td>
                  <td>2021-01-03</td>
                  <td>2022-12-06</td>
                  <td>
                    <div class="badge bg-pill bg-soft-success font-size-12">
                      Active
                    </div>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item dropdown">
                        <a
                          class="text-muted dropdown-toggle font-size-18 px-2"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Change Timezone</a>
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
                  <td>5</td>
                  <td>
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-xs rounded-circle me-2"
                    />
                    <span>Nibhash Mishra</span>
                  </td>
                  <td>Megha Seth</td>
                  <td>nibhash@razorlabz.com</td>
                  <td>Leader, Admin</td>
                  <td>Client Admin</td>
                  <td>Asia/Kolkata</td>
                  <td>2021-01-03</td>
                  <td>2022-12-06</td>
                  <td>
                    <div class="badge bg-pill bg-soft-success font-size-12">
                      Active
                    </div>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item dropdown">
                        <a
                          class="text-muted dropdown-toggle font-size-18 px-2"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Change Timezone</a>
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
                  <td>6</td>
                  <td>
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-xs rounded-circle me-2"
                    />
                    <span>Nibhash Mishra</span>
                  </td>
                  <td>Megha Seth</td>
                  <td>nibhash@razorlabz.com</td>
                  <td>Leader, Admin</td>
                  <td>Client Admin</td>
                  <td>Asia/Kolkata</td>
                  <td>2021-01-03</td>
                  <td>2022-12-06</td>
                  <td>
                    <div class="badge bg-pill bg-soft-danger font-size-12">
                      Inactive
                    </div>
                  </td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item dropdown">
                        <a
                          class="text-muted dropdown-toggle font-size-18 px-2"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                        >
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" href="#">Change Timezone</a>
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
                    <a href="#" class="page-link"
                      ><i class="mdi mdi-chevron-left"></i
                    ></a>
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
                    <a href="#" class="page-link"
                      ><i class="mdi mdi-chevron-right"></i
                    ></a>
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
