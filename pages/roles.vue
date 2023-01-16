<template>
                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 class="mb-0">Role Management</h4>

                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                            <li class="breadcrumb-item active">Role Management</li>
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
                                            <div class="col-md-3"></div>
                                            <div class="col-md-6">
                                                <div class="mb-3  float-md-end">
                                                    <a href="javascript:void(0);"
                                                        class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#role"><i
                                                            class="fa-solid fa-plus me-2"></i> Create Roles</a>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end row -->
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
                                                                <input type="checkbox" class="form-check-input"
                                                                    id="contacusercheck1">
                                                                <label class="form-check-label"
                                                                    for="contacusercheck1"></label>
                                                            </div>
                                                        </th>
                                                        <td>1
                                                        </td>
                                                        <td>Client Admin</td>
                                                        <td>N.A.</td>
                                                        <td>Edelman</td>
                                                        <td>
                                                            <div class="badge bg-pill bg-soft-success font-size-12">Active
                                                            </div>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>01-12-2022</td>
                                                        <td>
                                                            <ul class="list-inline mb-0">
                                                                <li class="list-inline-item dropdown">
                                                                    <a class="text-muted font-size-18 px-2"
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
<!-- The Modal -->
<div class="modal modal-xl" id="role">
    <div class="modal-dialog">
      <div class="modal-content">
  
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Create Role</h4>
          <button type="button" class="btn-close" data-dismiss="modal"></button>
        </div>
  
        <!-- Modal body -->
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
                <label for="">Role Name</label>
                <input type="text" name="" id="" class="form-control" placeholder="Enter role name">
            </div>
            <div class="col-md-6">
                <label for="">Select Parent Role</label>
                <select name="" id="" class="form-control">
                    <option value="0">Select role</option>
                    <option value="1">Client Admin</option>
                </select>
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-6">
                <label for="">Select Organisation</label>
                <select name="" id="" class="form-control">
                    <option value="0">Select Organisation</option>
                    <option value="1">Razorlabz</option>
                    <option value="2">Edelman</option>
                </select>
            </div>
          </div>
          <hr>
          <label for="">Select Features & Permissions</label>
          <hr>
          <div class="table-responsive" style="flex-wrap:wrap;">
            <table data-v-0b9674a2="" class="table table-center table-hover dataTable no-footer table-nowrap"><tr data-v-0b9674a2=""><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Client Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Profile Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;User Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Content Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Role Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Review Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Reply Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Notification Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Category Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Content Curation
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Partners Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Post Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Leader Management
            </th><th data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;Analytics Management
            </th></tr> <tr data-v-0b9674a2=""><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;CREATE
              </td></tr><tr data-v-0b9674a2=""><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td></tr><tr data-v-0b9674a2=""><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;UPDATE
              </td></tr><tr data-v-0b9674a2=""><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;READ
              </td><td data-v-0b9674a2=""><input data-v-0b9674a2="" type="checkbox" name="" id="">&nbsp;DELETE
              </td></tr></table>
          </div>
        </div>
  
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Create</button>
        </div>
  
      </div>
    </div>
  </div>
</template>