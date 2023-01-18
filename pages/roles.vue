<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-flex align-items-center justify-content-between"
      >
        <h4 class="mb-0">Role</h4>

        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Role</li>
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
                  data-bs-toggle="modal"
                  data-bs-target="#role"
                  ><i class="fa-solid fa-plus me-2"></i> Create Roles</a
                >
              </div>
            </div>
          </div>
          <!-- end row -->
          <div class="table-responsive mb-4">
            <table class="table table-centered table-nowrap mb-0 table-sm">
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
                  <th scope="col">S. No.</th>
                  <th scope="col">Role Name</th>
                  <th scope="col">Parent Role</th>
                  <th scope="col">Created For</th>
                  <th scope="col">Status</th>
                  <th scope="col">Created by</th>
                  <th scope="col">Updated by</th>
                  <th scope="col">Updated on</th>
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
                  <td>Client Admin</td>
                  <td>N.A.</td>
                  <td>Edelman</td>
                  <td>
                    <div class="badge bg-pill bg-soft-success font-size-12">
                      Active
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td>01-12-2022</td>
                  <td>
                    <ul class="list-inline mb-0">
                      <li class="list-inline-item dropdown">
                        <a
                          class="text-muted font-size-18 px-2"
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
  <!-- The Modal -->
  <div
    class="modal fade"
    id="role"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create Roles</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <label for="">Role Name</label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder="Enter role name"
              />
            </div>
            <div class="col-md-4">
              <label for="">Select Parent Role</label>
              <select name="" id="" class="form-control">
                <option value="0">Select role</option>
                <option value="1">Client Admin</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="">Select Organisation</label>
              <select name="" id="" class="form-control">
                <option value="0">Select Organisation</option>
                <option value="1">Razorlabz</option>
                <option value="2">Edelman</option>
              </select>
            </div>
          </div>
          <hr />
          <label for="">Select Features & Permissions - Management</label>
          <hr />
          <div class="accordion accordion-flush" id="accordionFlushExample">
<div class="row">
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Client
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Profile
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        User
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        Content
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        Role
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
        Review
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
</div>
<div class="row">
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
        Reply
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
        Notification
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading9">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
        Category
      </button>
    </h2>
    <div id="flush-collapse9" class="accordion-collapse collapse" aria-labelledby="flush-heading9" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading10">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
        Content Curation
      </button>
    </h2>
    <div id="flush-collapse10" class="accordion-collapse collapse" aria-labelledby="flush-heading10" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading11">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse11" aria-expanded="false" aria-controls="flush-collapse11">
        Partner
      </button>
    </h2>
    <div id="flush-collapse11" class="accordion-collapse collapse" aria-labelledby="flush-heading11" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading12">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse12" aria-expanded="false" aria-controls="flush-collapse12">
        Post
      </button>
    </h2>
    <div id="flush-collapse12" class="accordion-collapse collapse" aria-labelledby="flush-heading12" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
</div>
<div class="row">
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading13">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse13" aria-expanded="false" aria-controls="flush-collapse13">
        Leaders
      </button>
    </h2>
    <div id="flush-collapse13" class="accordion-collapse collapse" aria-labelledby="flush-heading13" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
      </div>
    </div>
  </div>
    </div>
    <div class="col-md-2">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading14">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse14" aria-expanded="false" aria-controls="flush-collapse14">
        Analytic
      </button>
    </h2>
    <div id="flush-collapse14" class="accordion-collapse collapse" aria-labelledby="flush-heading14" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
</div>

</div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>
