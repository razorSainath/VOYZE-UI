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

<script setup>
let pageTitle = useState('pageTitle')
      pageTitle.value = "Leaders" 
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<template>

<head>
        <title>Leader | Voyze</title>
    </head>
  <!-- start page title -->
  <div class="flex">
    <div class="col-12">
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


  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-4">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-sm">
                <span
                  class="avatar-title bg-soft-primary text-cyan-500 text-base rounded-circle"
                >
                  SR
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate text-base mb-1">
                  <a href="#" class="text-dark">Sainath Reddy</a>
                </h5>
                <p class="text-slate-600">
                  <i class="fa-solid fa-envelope text-cyan-500"></i> sainath@razorlabz.com
                </p>
              </div>
              <hr>
              <div class="grid grid-cols-3">
                  <div class="mt-3">
                    <p class="text-slate-600 mb-2 text-sm">Approved</p>
                    <h5 class="text-sm mb-0">94</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-slate-600 mb-2 text-sm">Rejected</p>
                    <h5 class="text-sm mb-0">$9,852</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-slate-600 mb-2 text-sm">Published</p>
                    <h5 class="text-sm mb-0">94</h5>
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
                  class="avatar-title bg-soft-primary text-cyan-500 text-base rounded-circle"
                >
                  SK
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate text-base mb-1">
                  <a href="#" class="text-dark">Sunil Kumar</a>
                </h5>
                <p class="text-slate-600">
                  <i class="fa-solid fa-envelope text-cyan-500"></i> sunil@razorlabz.com
                </p>
              </div>
              <hr>
              <div class="grid grid-cols-3">
                  <div class="mt-3">
                    <p class="text-slate-600 mb-2 text-sm">Approved</p>
                    <h5 class="text-sm mb-0">94</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-slate-600 mb-2 text-sm">Rejected</p>
                    <h5 class="text-sm mb-0">$9,852</h5>
                  </div>
                  <div class="mt-3">
                    <p class="text-slate-600 mb-2 text-sm">Published</p>
                    <h5 class="text-sm mb-0">94</h5>
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
                  class="avatar-title bg-soft-primary text-cyan-500 text-base rounded-circle"
                >
                  NM
                </span>
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom pb-1">
                <h5 class="text-truncate text-base mb-1">
                  <a href="#" class="text-dark">Nibhash Mishra</a>
                </h5>
                <p class="text-slate-600">
                  <i class="fa-solid fa-envelope text-cyan-500"></i> nibhash@razorlabz.com
                </p>
              </div>
              <hr>
              <div class="grid grid-cols-3">
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-slate-600 mb-2 text-sm">Approved</p>
                    <h5 class="text-sm mb-0">94</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-slate-600 mb-2 text-sm">Rejected</p>
                    <h5 class="text-sm mb-0">$9,852</h5>
                  </div>
                </div>
                <div class="col-4">
                  <div class="mt-3">
                    <p class="text-slate-600 mb-2 text-sm">Published</p>
                    <h5 class="text-sm mb-0">94</h5>
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
        <a href="javascript:void(0);" class="text-cyan-500"
          ><i
            class="fa-solid fa-spinner fa-spin text-lg align-middle me-2"
          ></i>
          Load more
        </a>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>
