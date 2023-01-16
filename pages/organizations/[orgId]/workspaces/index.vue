<script>
import VueMultiselect from "vue-multiselect";
export default {
  components: { VueMultiselect },
  data() {
    return {
      selected: null,
      options: ["orgnization1", "orgnization2", "orgnization3","orgnization4"],
    };
  },
  methods: {
    limitText(count) {
      return `and ${count} more`;
    },
  },
};

</script>
<script setup>

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
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-flex align-items-center justify-content-between"
      >
        <h4 class="mb-0">Workspace</h4>

        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Voyze</a>
            </li>
            <li class="breadcrumb-item active">Workspace</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->

  <div class="row mb-2">
                            <div class="col-md-3">
                                <div class="form-inline mb-3">
                                    <div class="search-box ms-2">
                                        <div class="position-relative">
                                            <input type="text" class="form-control rounded border-0" placeholder="Search...">
                                            <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <button type="button" class="btn btn-primary float-md-end" @click="toggleWorkspaceModal" data-toggle="modal" data-target="#exampleModal">
                                    <span><i class="fa-solid fa-plus"></i>&nbsp;</span>Add New Workspace
                                  </button>
                            </div>

                        </div>
  <!-- end row -->
  <div class="row mb-2">
  <div class="col-md-4">
    <VueMultiselect
      v-model="selected"
      :options="options"
      :multiple="true"
      placeholder="Select organization/s"
      :limit="2"
      :limit-text="limitText"
    >
    </VueMultiselect>
</div>
</div>

  <div class="row">
    <div class="col-xl-4 col-sm-6">
      <div class="card">
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
      <div class="card">
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
      <div class="card">
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
      <div class="card">
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
      <div class="card">
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
      <div class="card">
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
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New Workspace</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <label for="">Workspace Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder=""
            class="form-control"
          />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-success">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
