<script setup>
let pageTitle = useState('pageTitle')
      pageTitle.value = "Workspace" 
const state = reactive({
  isWorspaceModelOpen: false,
});

const toggleWorkspaceModal = ()=> {
      console.log("Add New Workspace");
      state.isWorspaceModelOpen = !state.isWorspaceModelOpen;
      // this.workspaceName = null;
    }

</script>


<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<template>
  <!-- as the suitable route is created, now you have to code the dynamic part of page -->
  <head>
        <title>Workspace | Voyze</title>
    </head>
    <div class="flex">

                                <div class="mb-3 flex-none w-10/12">
                                    <div class="search-box ms-2">
                                        <div class="relative"> 
                                            <input type="text" class="rounded-full border-0 form-control -top-2.5" placeholder="Search...">
                                            <i class="fa-solid fa-magnifying-glass search-icon absolute "></i>
                                        </div>
                                    </div>
                                </div>

                            <div class="flex-initial w-2/12">
<button type="button" class="float-right mb-3 inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight rounded-lg shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
  <span><i class="fa-solid fa-plus"></i></span> Add New Workspace

  </button>
                            </div>

                        </div>
  <!-- end row -->

  <div class="grid grid-cols-3 gap-3">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  E
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Edelmen</a>
                </h5>
              </div>
              <div class="grid grid-cols-2">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
              </div>
            </div>
          </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  E
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate text-base mb-1">
                  <a href="#" class="text-dark">Edelmen</a>
                </h5>
              </div>
              <div class="grid grid-cols-2">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="text-base mb-0">29</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-grey-300 mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
              </div>
            </div>
          </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  E
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Edelmen</a>
                </h5>
              </div>
              <div class="grid grid-cols-2">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
              </div>
            </div>
          </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  E
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Edelmen</a>
                </h5>
              </div>
              <div class="grid grid-cols-2">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
              </div>
            </div>
          </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  E
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Edelmen</a>
                </h5>
              </div>
              <div class="grid grid-cols-2">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
              </div>
            </div>
          </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  E
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Edelmen</a>
                </h5>
              </div>
              <div class="grid grid-cols-2">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
              </div>
            </div>
          </div>
    </div>
  </div>
  <!-- end row -->

  <div class="row">
    <div class="col-xl-12">
      <div class="text-center my-3">
        <a href="javascript:void(0);" class="text-primary"
          ><i
            class="fa-solid fa-spinner fa-spin font-size-20 align-middle me-2"
          ></i>
          Load more
        </a>
      </div>
    </div>
  </div>
  <!-- end row -->

<!-- Modal -->

<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollable" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
    <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalCenteredScrollableLabel">
          Modal title
        </h5>
        <button type="button"
          class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body relative p-4">
        <p>This is some placeholder content to show a vertically centered modal. We've added some extra copy here to show how vertically centering the modal works when combined with scrollable modals. We also use some repeated line breaks to quickly extend the height of the content, thereby triggering the scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
    <br><br><br><br><br><br><br><br><br><br>
    <p>Just like that.</p>
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button"
          class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-dismiss="modal">
          Close
        </button>
        <button type="button"
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.display{
  display: contents;
}
@media(max-width: 400px){
  .display{
    display: none;
  }
}
</style>
