<script setup>
let pageTitle = useState('pageTitle')
      pageTitle.value = "Category" 
</script>

<template>

<head>
        <title>Category | Voyze</title>
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
                  href="javascript:void(0);"
                  class="btn btn-primary waves-effect waves-light"
                  data-bs-toggle="modal" data-bs-target="#category"
                  ><i class="fa-solid fa-plus me-2"></i> Add Category</a
                >
              </div>
              <!-- The Modal -->
            </div>
          </div>

          <!--category modal-->
          <div class="modal fade" id="category" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
                          <!-- Modal Header -->
                          <div class="modal-header">
                            <h4 class="modal-title">Add New Category</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                    
                          <!-- Modal body -->
                          <div class="modal-body">
                           <!-- Nav tabs -->

                           <ul class="nav nav-pills" id="myTab" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="existing-tab" data-bs-toggle="tab" href="#tab-existing" role="tab" aria-controls="tab-existing" aria-selected="true">Select From Existing</a></li>
  <li class="nav-item"><a class="nav-link" id="new-tab" data-bs-toggle="tab" href="#tab-new" role="tab" aria-controls="tab-new" aria-selected="false">Add New</a></li>
</ul>
<div class="tab-content mt-3" id="myTabContent">
  <div class="tab-pane fade show active" id="tab-existing" role="tabpanel" aria-labelledby="home-tab"><label for="">Tagged input using dropdown</label>
                        <select name="" id="" class="form-control">
                          <option value="0">Select Category</option>
                          <option value="1">ArtificialIntellige</option>
                          <option value="2">Blockchain</option>
                          <option value="3">Business Post</option>
                          <option value="4">Crypto Currency</option>
                          <option value="5">Data Structure</option>
                          <option value="6">Environment</option>
                          <option value="7">Experimental</option>
                          <option value="8">Gaming</option>
                          <option value="9">Geometry</option>
                          <option value="10">Jumba</option>
                          <option value="11">Regular Post</option>
                          <option value="12">Rubics</option>
                          <option value="13">Rubix</option>
                          <option value="14">Serverless</option>
                          <option value="15">Social Post</option>
                          <option value="16">Tech Articles</option>
                        </select></div>
  <div class="tab-pane fade" id="tab-new" role="tabpanel" aria-labelledby="profile-tab"><div class="row">
                          <div class="col-md-12">
                              <label for="">Category Name</label>
                              <input type="text" name="" id="" class="form-control" placeholder="Enter category">
                              <small class="text-danger">Name must be 3-20 characters long.</small>
                          </div>
                        </div>
                        <div class="row py-1">
                          <div class="col-md-12">
                              <label for="">Category Description</label>
                              <textarea name="" id="" cols="30" rows="5" class="form-control"></textarea>
                              <small class="text-danger">Description must be 15-100 characters long.</small>
                          </div>
                        </div></div>
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
                  <th scope="col" style="width:25px;">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Active</th>
                  <th scope="col" style="width: 25px;">Action</th>
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
                  <td>Add new cat</td>
                  <td>Add New cat add new cat</td>
                  <td>2022-11-04</td>
                  <td>No</td>
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
                          <a class="dropdown-item" href="#" data-bs-toggle="offcanvas" data-bs-target="#edit" aria-controls="offcanvasWithBothOptions">Edit</a>
                          <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete">Delete</a>
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
                  <td>1</td>
                  <td>Add new cat</td>
                  <td>Add New cat add new cat</td>
                  <td>2022-11-04</td>
                  <td>No</td>
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
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Delete</a>
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
                  <td>1</td>
                  <td>Add new cat</td>
                  <td>Add New cat add new cat</td>
                  <td>2022-11-04</td>
                  <td>No</td>
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
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Delete</a>
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
                  <td>1</td>
                  <td>Add new cat</td>
                  <td>Add New cat add new cat</td>
                  <td>2022-11-04</td>
                  <td>No</td>
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
                          <a class="dropdown-item" href="#">Edit</a>
                          <a class="dropdown-item" href="#">Delete</a>
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Edit Modal -->
          <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="edit" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Edit Category</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="row">
      <div class="col-12">
        <label for="">Category Name</label>
        <input type="text" name="" id="" class="form-control">
        </div>
      </div>
      <div class="row py-2">
      <div class="col-12">
        <label for="">Category Description</label>
        <textarea name="" id="" cols="30" rows="3" class="form-control"></textarea>
        </div>
      </div>
    <span class="py-2"><input type="checkbox" name="" id=""> Active</span>  

  </div>
  <div class="offcanvas-footer">
    <button type="button" class="btn btn-primary mb-2 mr-2 float-end" data-bs-dismiss="offcanvas">Submit</button>
    </div>
</div>

<!-- Delete Modal -->
<div class="modal fade" id="delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete Category</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you want to delete this category?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Delete</button>
      </div>
    </div>
  </div>
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
</template>

