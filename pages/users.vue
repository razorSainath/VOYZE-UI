<script setup>
const isShow = useState("isShow");
let pageTitle = useState('pageTitle')
      pageTitle.value = "Users" 

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
                Name
              </th>

              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Manager
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                User-Type
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Role
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Status
              </th>

            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Nibhash Mishra
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Megha Seth
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Leader,Admin
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Client Admin
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-400 text-white rounded-lg">Active</span>
                <i class="fa-solid fa-ellipsis-h ml-2"></i>
              </td>
            
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

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
</template>



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

  .display-win {
    display: grid;
  }
  .font{
    font-size:12px;
  }
}
@media only screen and (max-width: 400px) {

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
