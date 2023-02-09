<script>
let pageTitle = useState('pageTitle')
      pageTitle.value = "Roles" 
</script>




<template>
 <head>
        <title>Roles | Voyze</title>
    </head>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow h-full p-6">
  <div class="flex flex-col">
    <div class="flex mb-2">
            <div class="w-3/12">
              <div class="form-inline mb-3">
                <div class="search-box ms-2">
                  <div class="relative">
                    <input
                      type="text"
                      class="form-control rounded bg-slate-100 border-2 "
                      placeholder="Search..."
                    />
                    <i class="fa-solid fa-magnifying-glass search-icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-3/12"></div>
            <div class="w-6/12">
              <div class="mb-3 float-right">
                <div class="mb-3 float-md-end">
                <a
                  href="javascript:void(0);"
                  class="bg-cyan-500 rounded-lg p-2 hover:bg-cyan-700 text-white waves-effect waves-light"
                  data-bs-toggle="modal" data-bs-target="#partners"
                  ><i class="fa-solid fa-plus me-2"></i> Create Roles</a>
              </div>
              </div>
            </div>
          </div>
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                S.No
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Role-Name
              </th>

              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Parent Role	
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Created For
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Created By
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Updated By
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Updated On
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Client Admin
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                N.A
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Edelman
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-400 text-white rounded-lg">Active</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Viren Jangra
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Viren Jangra
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                2021-01-03
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i class="fa-solid fa-ellipsis-h"></i>
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Client Admin
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                N.A
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Edelman
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-400 text-white rounded-lg">Active</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Viren Jangra
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Viren Jangra
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                2021-01-03
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i class="fa-solid fa-ellipsis-h"></i>
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Client Admin
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                N.A
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Edelman
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-400 text-white rounded-lg">Active</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Viren Jangra
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Viren Jangra
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                2021-01-03
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i class="fa-solid fa-ellipsis-h"></i>
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Client Admin
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                N.A
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Edelman
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-400 text-white rounded-lg">Active</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Viren Jangra
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Viren Jangra
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                2021-01-03
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i class="fa-solid fa-ellipsis-h"></i>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<div class="flex mt-4">
            <div class="w-6/12">
              <div>
                <p class="mb-sm-0">Showing 1 to 10 of 12 entries</p>
              </div>
            </div>
            <div class="w-6/12">
              <div class="float-right">
                
                <div class="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 focus:shadow-none"
          href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">1</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">2</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">3</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
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
  <!-- end row -->
  <!--role offcanvas-->

  <!-- <div class="offcanvas offcanvas-end offcanvas-size-xl" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="role" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Create Roles</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
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
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Client
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
        Profile
      </button>
    </h2>
    <div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading3">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
        User
      </button>
    </h2>
    <div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading4">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
        Content
      </button>
    </h2>
    <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading5">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
        Role
      </button>
    </h2>
    <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading6">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
        Review
      </button>
    </h2>
    <div id="flush-collapse6" class="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading7">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
        Reply
      </button>
    </h2>
    <div id="flush-collapse7" class="accordion-collapse collapse" aria-labelledby="flush-heading7" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading8">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
        Notification
      </button>
    </h2>
    <div id="flush-collapse8" class="accordion-collapse collapse" aria-labelledby="flush-heading8" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading9">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
        Category
      </button>
    </h2>
    <div id="flush-collapse9" class="accordion-collapse collapse" aria-labelledby="flush-heading9" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading10">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
        Content Curation
      </button>
    </h2>
    <div id="flush-collapse10" class="accordion-collapse collapse" aria-labelledby="flush-heading10" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading11">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse11" aria-expanded="false" aria-controls="flush-collapse11">
        Partners
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-heading11" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading12">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse12" aria-expanded="false" aria-controls="flush-collapse12">
        Post
      </button>
    </h2>
    <div id="flush-collapse12" class="accordion-collapse collapse" aria-labelledby="flush-heading12" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading13">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse13" aria-expanded="false" aria-controls="flush-collapse13">
        Leader
      </button>
    </h2>
    <div id="flush-collapse13" class="accordion-collapse collapse" aria-labelledby="flush-heading13" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Delete</label>
            </div>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
<div class="row py-2">
    <div class="col-md-12 col-sm-12">
        <div class="accordion-item">
    <h2 class="accordion-header" id="flush-heading14">
      <button class="accordion-button collapsed bg-primary text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse14" aria-expanded="false" aria-controls="flush-collapse14">
        Analtics
      </button>
    </h2>
    <div id="flush-collapse14" class="accordion-collapse collapse" aria-labelledby="flush-heading14" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <div class="row">
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Create</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Read</label>
            </div>
            <div class="col-md-3">
                <input type="checkbox" name="" id="">&nbsp;<label for="">Update</label>
            </div>
            <div class="col-md-3">
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
  <div class="offcanvas-footer">
    <button type="button" class="btn btn-primary ml-2 mb-2">Create</button>
  </div>

</div> -->
</template>
<style scoped>
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
</style>