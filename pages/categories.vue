<script setup>
let pageTitle = useState('pageTitle')
pageTitle.value = "Category" 
</script>

<template>

  <head>
    <title>Category | Voyze</title>
  </head>
  <div class="grid grid-cols-1 mb-2">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow h-full p-6">
      <div class="card-body">
        <div class="flex mb-2">
          <div class="w-3/12">
            <div class="form-inline mb-3">
              <div class="search-box ms-2">
                <div class="position-relative">
                  <input type="text" class="form-control rounded bg-light border-0" placeholder="Search..." />
                  <i class="fa-solid fa-magnifying-glass search-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="w-3/12"></div>
          <div class="w-6/12">
            <div class="mb-3 md:float-right">
              <!-- Button trigger modal -->
              <button type="button"
                class="inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i class="fa-solid fa-plus"></i> Add Category
              </button>
            </div>
            <!-- The Modal -->
          </div>
        </div>

        <!--category modal-->
        <!-- Modal -->
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog relative w-auto pointer-events-none">
            <div
              class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div
                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                  Modal title
                </h5>
                <button type="button"
                  class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body relative p-4">
                ...
              </div>
              <div
                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <button type="button"
                  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-bs-dismiss="modal">Close</button>
                <button type="button"
                  class="inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Understood</button>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b">
                    <tr>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        <div class="form-check text-base">
                          <input type="checkbox" class="form-check-input" id="contacusercheck" />
                          <label class="form-check-label" for="contacusercheck"></label>
                        </div>
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        No.
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Name
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Description
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Created At
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Active
                      </th>
                      <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div class="form-check text-base">
                          <input type="checkbox" class="form-check-input" id="contacusercheck" />
                          <label class="form-check-label" for="contacusercheck"></label>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Add new cat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Add New cat add new cat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2022-11-04
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        No
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div class="flex space-x-2 justify-center items-end">
                          <div class="dropdown relative">
                            <button class="dropdown-toggle inline-block px-4 py-1.5 font-medium text-xs leading-tight uppercase rounded focus:ring-0 transition duration-150 ease-in-out items-center whitespace-nowrap" type="button" id="dropdownMenuSmallButton" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fa-solid fa-ellipsis-v"></i>
                            </button>
                            <ul class=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuSmallButton">
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Action</a>
                              </li>
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Another action</a>
                              </li>
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Something else here</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div class="form-check text-base">
                          <input type="checkbox" class="form-check-input" id="contacusercheck" />
                          <label class="form-check-label" for="contacusercheck"></label>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Add new cat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Add New cat add new cat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2022-11-04
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        No
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div class="flex space-x-2 justify-center items-end">
                          <div class="dropdown relative">
                            <button class="dropdown-toggle inline-block px-4 py-1.5 font-medium text-xs leading-tight uppercase rounded focus:ring-0 transition duration-150 ease-in-out items-center whitespace-nowrap" type="button" id="dropdownMenuSmallButton" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fa-solid fa-ellipsis-v"></i>
                            </button>
                            <ul class=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuSmallButton">
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Action</a>
                              </li>
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Another action</a>
                              </li>
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Something else here</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div class="form-check text-base">
                          <input type="checkbox" class="form-check-input" id="contacusercheck" />
                          <label class="form-check-label" for="contacusercheck"></label>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Add new cat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Add New cat add new cat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2022-11-04
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        No
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div class="flex space-x-2 justify-center items-end">
                          <div class="dropdown relative">
                            <button class="dropdown-toggle inline-block px-4 py-1.5 font-medium text-xs leading-tight uppercase rounded focus:ring-0 transition duration-150 ease-in-out items-center whitespace-nowrap" type="button" id="dropdownMenuSmallButton" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fa-solid fa-ellipsis-v"></i>
                            </button>
                            <ul class=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuSmallButton">
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Action</a>
                              </li>
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Another action</a>
                              </li>
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Something else here</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr><tr class="border-b">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div class="form-check text-base">
                          <input type="checkbox" class="form-check-input" id="contacusercheck" />
                          <label class="form-check-label" for="contacusercheck"></label>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Add new cat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Add New cat add new cat
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        2022-11-04
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        No
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <div class="flex space-x-2 justify-center items-end">
                          <div class="dropdown relative">
                            <button class="dropdown-toggle inline-block px-4 py-1.5 font-medium text-xs leading-tight uppercase rounded focus:ring-0 transition duration-150 ease-in-out items-center whitespace-nowrap" type="button" id="dropdownMenuSmallButton" data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fa-solid fa-ellipsis-v"></i>
                            </button>
                            <ul class=" dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuSmallButton">
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Action</a>
                              </li>
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Another action</a>
                              </li>
                              <li>
                                <a class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent  text-gray-700  hover:bg-gray-100" href="#">Something else here</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- Edit Modal -->
        <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="edit"
          aria-labelledby="offcanvasWithBothOptionsLabel">
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
            <button type="button" class="btn btn-primary mb-2 mr-2 float-end"
              data-bs-dismiss="offcanvas">Submit</button>
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
        <div class="flex">
            <div class="w-6/12">
              <p class="mb-sm-0">Showing 1 to 10 of 12 entries</p>
            </div>
            <div class="w-6/12">
              <div class="flex justify-end">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
          href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">1</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">2</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">3</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a></li>
    </ul>
  </nav>
</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

