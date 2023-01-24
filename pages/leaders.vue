<script>
import VueMultiselect from 'vue-multiselect'
export default {
  components: { VueMultiselect },
  data () {
    return {
      selected: null,
      options: ['razorlabz', 'razorpod', 'edelmen']
    }
  },
  methods:{
    limitText(count) {
      return `and ${count} more`;
    },
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-flex align-items-center justify-content-between"
      >
        <h4 class="mb-0">Workspace Leader</h4>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="page-title-left">

          
    <VueMultiselect
      v-model="selected"
      :options="options"
      :multiple="true"
      placeholder="Select Workspace/s"
      :limit="2"
      :limit-text="limitText"
      >
    </VueMultiselect>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->

  <div class="row py-2">
    <div class="col-xl-4 col-sm-6">
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
        <div class="card-body">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-primary font-size-16 rounded-circle"
                >
                  SR
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Sainath Reddy</a>
                </h5>
                <p class="text-muted">
                  <i class="fa-solid fa-envelope"></i> sainath@razorlabz.com
                </p>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-muted mb-2 font-size-12">Approved</p>
                    <h5 class="font-size-13 mb-0">94</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-muted mb-2 font-size-12">Rejected</p>
                    <h5 class="font-size-13 mb-0">$9,852</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-muted mb-2 font-size-12">Published</p>
                    <h5 class="font-size-13 mb-0">94</h5>
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
                  SK
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Sunil Kumar</a>
                </h5>
                <p class="text-muted">
                  <i class="fa-solid fa-envelope"></i> sunil@razorlabz.com
                </p>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-muted mb-2 font-size-12">Approved</p>
                    <h5 class="font-size-13 mb-0">94</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-muted mb-2 font-size-12">Rejected</p>
                    <h5 class="font-size-13 mb-0">$9,852</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-muted mb-2 font-size-12">Published</p>
                    <h5 class="font-size-13 mb-0">94</h5>
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
                  NM
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate font-size-16 mb-1">
                  <a href="#" class="text-dark">Nibhash Mishra</a>
                </h5>
                <p class="text-muted">
                  <i class="fa-solid fa-envelope"></i> nibhash@razorlabz.com
                </p>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-muted mb-2 font-size-12">Approved</p>
                    <h5 class="font-size-13 mb-0">94</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-muted mb-2 font-size-12">Rejected</p>
                    <h5 class="font-size-13 mb-0">$9,852</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-muted mb-2 font-size-12">Published</p>
                    <h5 class="font-size-13 mb-0">94</h5>
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
</template>
