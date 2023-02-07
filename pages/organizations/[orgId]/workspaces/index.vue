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
    <div class="grid grid-col-2">

                                <div class="mb-3">
                                    <div class="search-box ms-2">
                                        <div class="position-relative"> 
                                            <input type="text" class="form-control rounded border-0" placeholder="Search...">
                                            <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                        </div>
                                    </div>
                                </div>

                            <div class="col-6">
                                <button type="button" class="btn btn-primary float-end mb-2" data-bs-toggle="modal" data-bs-target="#workspace">
                                    <span><i class="fa-solid fa-plus"></i>&nbsp;</span><span class="display">Add New Workspace</span>
                                  </button>
                            </div>

                        </div>
  <!-- end row -->

  <div class="row">
    <div class="col-xl-4 col-sm-6">
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="card-body">
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
              <div class="row">
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-sm-6">
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="card-body">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-success text-primary font-size-16 rounded-circle"
                >
                  R
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Razorpod</a>
                </h5>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-sm-6">
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="card-body">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-danger text-primary font-size-16 rounded-circle"
                >
                  R
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Razorlabz</a>
                </h5>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-sm-6">
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="card-body">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  I
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Infoysis</a>
                </h5>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-sm-6">
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="card-body">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  T
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Tata Consultancy Services</a>
                </h5>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-4 col-sm-6">
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="card-body">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  W
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Wipro</a>
                </h5>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Social Profile</p>
                    <h5 class="font-size-16 mb-0">29</h5>
                  </div>
                </div>
                <div class="col-6">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Users</p>
                    <h5 class="font-size-16 mb-0">60</h5>
                  </div>
                </div>
              </div>
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

  <!-- The Modal -->
  <div class="modal fade" id="workspace" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New Workspace</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <label for="">Workspace Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Please select Workspace....."
            class="form-control"
          />
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Submit</button>
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
