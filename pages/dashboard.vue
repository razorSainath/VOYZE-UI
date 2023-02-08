<script setup>
let pageTitle = useState('pageTitle')
      pageTitle.value = "Dashboard" 
// let dashboard = useState('dashboard')
//       dashboard.value = true


const chartOptions = {
  chart: {
    id: "vuechart-example",
    selection: false,
    toolbar: {
      show: true,
      tools: {
        download: false,
      },
    },
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
];


</script>

<template>
 <head>
        <title>Dashboard | Voyze</title>
    </head>

  <!-- card -->
<div class="flex gap-3">

                <div class="flex-shrink max-w-full w-full mb-6">
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                    <div class="flex flex-wrap flex-row items-center">
                      <div class="flex-shrink max-w-full w-1/2">
                        <h5 class="text-gray-500 mb-1">Total view</h5>
                        <h3 class="text-lg font-bold mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline-block ltr:mr-2 rtl:ml-2 -mt-1 bi bi-eye" viewbox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                          </svg> 143.210
                        </h3>
                        <p class="text-sm text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-4 h-4 bi bi-arrow-up-short" viewbox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"></path>
                          </svg>
                          46.2%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full  w-full mb-6">
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                    <div class="flex flex-wrap flex-row items-center">
                      <div class="flex-shrink max-w-full w-1/2">
                        <h5 class="text-gray-500 mb-1">Total likes</h5>
                        <h3 class="text-lg font-bold mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline-block ltr:mr-2 rtl:ml-2 -mt-1 bi bi-hand-thumbs-up" viewbox="0 0 16 16">
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                          </svg> 24.310
                        </h3>
                        <p class="text-sm text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-4 h-4 bi bi-arrow-up-short" viewbox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"></path>
                          </svg>
                          16.2%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full  w-full mb-6">
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                    <div class="flex flex-wrap flex-row items-center">
                      <div class="flex-shrink max-w-full w-1/2">
                        <h5 class="text-gray-500 mb-1">Total Comments</h5>
                        <h3 class="text-lg font-bold mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline-block ltr:mr-2 rtl:ml-2 -mt-1 bi bi-chat-left-text" viewbox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"></path>
                          </svg> 54.350
                        </h3>
                        <p class="text-sm text-green-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-4 h-4 bi bi-arrow-up-short" viewbox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"></path>
                          </svg>
                          11.2%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-shrink max-w-full w-full mb-6">
                  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
                    <div class="flex flex-wrap flex-row items-center">
                      <div class="flex-shrink max-w-full w-1/2">
                        <h5 class="text-gray-500 mb-1">Total Share</h5>
                        <h3 class="text-lg font-bold mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="inline-block ltr:mr-2 rtl:ml-2 -mt-1 bi bi-share" viewbox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
                          </svg> 9.110
                        </h3>
                        <p class="text-sm text-pink-500">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-4 h-4 bi bi-arrow-down-short" viewbox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"></path>
                          </svg>
                          6.2%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div><!-- end card -->
  <!-- end row-->

  <div class="flex gap-3">
    <div class="w-9/12">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <h4 class="mb-4">Post Analytics</h4>

          <div class="grid grid-cols-3 mt-4">
              <div class="text-center mt-3">
                <p class="text-2xl">2,371 <span class="gap-5 text-grey-200 text-base">Income</span></p>
              </div>
              <div class="text-center mt-3">
                <p class="text-2xl">258 <span class="gap-5 text-grey-200 text-base">Sales</span></p>
              </div>
              <div class="text-center mt-3">
                <p class="text-2xl">3.6% <span class="gap-5 text-grey-200 text-base">Conversation Ratio</span></p>
              </div>
          </div>

          <div class="mt-3">
            <div>
              <ClientOnly>
                <apexchart
                  width="100%"
                  type="bar"
                  :options="chartOptions"
                  :series="series"
                ></apexchart>
              </ClientOnly>
            </div>
          </div>
        <!-- end card-body-->
      </div>
      <!-- end card-->
    </div>
    <!-- end col-->

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 w-3/12 flex-initial">

          <h4 class="card-title mb-4">Top Selling Products</h4>

          <div class="grid grid-cols-2 items-center mt-3">
              <p class="text-truncate mt-1 mb-0">
                <i class="mdi mdi-circle-medium text-primary me-2"></i> Facebook
              </p>
              <div class="flex h-4 overflow-hidden bg-indigo-100 rounded mb-4">
  <div class="flex flex-col justify-center overflow-hidden text-white text-center whitespace-nowrap bg-indigo-400" role="progressbar" style="width: 55%;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
</div>
          </div>
          <!-- end row-->
          <div class="grid grid-cols-2 items-center mt-3">
              <p class="text-truncate mt-1 mb-0">
                <i class="mdi mdi-circle-medium text-primary me-2"></i> LinkedIn
              </p>
              <div class="flex h-4 overflow-hidden bg-indigo-100 rounded mb-4">
  <div class="flex flex-col justify-center overflow-hidden text-white text-center whitespace-nowrap bg-indigo-400" role="progressbar" style="width: 65%;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">65%</div>
</div>
          </div>
          <!-- end row-->
          <div class="grid grid-cols-2 items-center mt-3">
              <p class="text-truncate mt-1 mb-0">
                <i class="mdi mdi-circle-medium text-primary me-2"></i> Twitter
              </p>
              <div class="flex h-4 overflow-hidden bg-indigo-100 rounded mb-4">
  <div class="flex flex-col justify-center overflow-hidden text-white text-center whitespace-nowrap bg-indigo-400" role="progressbar" style="width: 75%;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>
          </div>
          <!-- end row-->
          <div class="grid grid-cols-2 items-center mt-3">
              <p class="text-truncate mt-1 mb-0">
                <i class="mdi mdi-circle-medium text-primary me-2"></i> Instagram
              </p>
              <div class="flex h-4 overflow-hidden bg-indigo-100 rounded mb-4">
  <div class="flex flex-col justify-center overflow-hidden text-white text-center whitespace-nowrap bg-indigo-400" role="progressbar" style="width: 45%;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">45%</div>
</div>
          </div>
          <!-- end row-->
          <div class="grid grid-cols-2 items-center mt-3">
              <p class="text-truncate mt-1 mb-0">
                <i class="mdi mdi-circle-medium text-primary me-2"></i> Instagram
              </p>
              <div class="flex h-4 overflow-hidden bg-indigo-100 rounded mb-4">
  <div class="flex flex-col justify-center overflow-hidden text-white text-center whitespace-nowrap bg-indigo-400" role="progressbar" style="width: 45%;" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">45%</div>
</div>
          </div>
          <!-- end row-->

        <!-- end card-body-->
      </div>
      <!-- end card-->
    <!-- end Col -->
  </div>
  <!-- end row-->

  <div class="grid grid-cols-3 mt-3 gap-3 mb-3">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <h4 class="mb-4">Top Users</h4>

          <!-- table -->

          <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <tbody>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-24"><img src="~/assets/images/users/avatar-1.jpg" alt="" class="rounded-full"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <h6 class="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Nevada
                      </p>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded-full"
                        >Inactive</span
                      >
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >250.00
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-24"><img src="~/assets/images/users/avatar-1.jpg" alt="" class="rounded-full"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <h6 class="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Nevada
                      </p>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded-full"
                        >Active</span
                      >
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >250.00
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-24"><img src="~/assets/images/users/avatar-1.jpg" alt="" class="rounded-full"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <h6 class="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Nevada
                      </p>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-400 text-white rounded-full"
                        >Pending</span
                      >
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >250.00
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-24"><img src="~/assets/images/users/avatar-1.jpg" alt="" class="rounded-full"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <h6 class="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Nevada
                      </p>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-400 text-white rounded-full"
                        >Pending</span
                      >
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >250.00
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-24"><img src="~/assets/images/users/avatar-1.jpg" alt="" class="rounded-full"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <h6 class="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Nevada
                      </p>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-400 text-white rounded-full"
                        >Pending</span
                      >
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >250.00
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-24"><img src="~/assets/images/users/avatar-1.jpg" alt="" class="rounded-full"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <h6 class="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Nevada
                      </p>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-400 text-white rounded-full"
                        >Pending</span
                      >
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >250.00
              </td>
            </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-24"><img src="~/assets/images/users/avatar-1.jpg" alt="" class="rounded-full"></td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <h6 class="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Nevada
                      </p>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-400 text-white rounded-full"
                        >Pending</span
                      >
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >250.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

          <!-- data-sidebar-->
        <!-- end card-body-->
      </div>
      <!-- end card-->
    <!-- end col -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
        <div class="card-body">

          <h4 class="card-title mb-4">Recent Activity</h4>

          <ol
            class="activity-feed mb-0 ps-2"
            data-simplebar
          >
            <li class="feed-item">
              <div class="feed-item-list">
                <p class="text-muted mb-1 font-size-13">
                  Today<small class="d-inline-block ms-1">12:20 pm</small>
                </p>
                <p class="mb-0">
                  Andrei Coman magna sed porta finibus, risus posted a new
                  article: <span class="text-primary">Forget UX Rowland</span>
                </p>
              </div>
            </li>
            <li class="feed-item">
              <p class="text-muted mb-1 font-size-13">
                22 Jul, 2020 <small class="d-inline-block ms-1">12:36 pm</small>
              </p>
              <p class="mb-0">
                Andrei Coman posted a new article:
                <span class="text-primary">Designer Alex</span>
              </p>
            </li>
            <li class="feed-item">
              <p class="text-muted mb-1 font-size-13">
                18 Jul, 2020 <small class="d-inline-block ms-1">07:56 am</small>
              </p>
              <p class="mb-0">
                Zack Wetass, sed porta finibus, risus Chris Wallace Commented
                <span class="text-primary"> Developer Moreno</span>
              </p>
            </li>
            <li class="feed-item">
              <p class="text-muted mb-1 font-size-13">
                10 Jul, 2020 <small class="d-inline-block ms-1">08:42 pm</small>
              </p>
              <p class="mb-0">
                Zack Wetass, Chris combined Commented
                <span class="text-primary">UX Murphy</span>
              </p>
            </li>

            <li class="feed-item">
              <p class="text-muted mb-1 font-size-13">
                23 Jun, 2020 <small class="d-inline-block ms-1">12:22 am</small>
              </p>
              <p class="mb-0">
                Zack Wetass, sed porta finibus, risus Chris Wallace Commented
                <span class="text-primary"> Developer Moreno</span>
              </p>
            </li>
            <li class="feed-item pb-1">
              <p class="text-muted mb-1 font-size-13">
                20 Jun, 2020 <small class="d-inline-block ms-1">09:48 pm</small>
              </p>
              <p class="mb-0">
                Zack Wetass, Chris combined Commented
                <span class="text-primary">UX Murphy</span>
              </p>
            </li>
          </ol>
        </div>
      </div>

      <!--Social source-->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6">
          <div class="float-right">
<select name="" id="" class="border-0">
  <option value="">Monthly</option>
  <option value="">Yearly</option>
  <option value="">Quarderly</option>
</select>
          </div>

          <h4 class="card-title">Social Source</h4>

          <div class="text-center">
            <div class="avatar-sm mx-auto mb-4">
              <span
                class="avatar-title rounded-circle font-size-24"
                style="background-color: #009dc2"
              >
                <i class="fa-brands fa-linkedin-in text-white"></i>
              </span>
            </div>
            <p class="font-16 text-muted mb-2"></p>
            <h5>
              <a href="#" class="text-dark"
                >LinkedIn - <span class="text-muted font-16">125 posts</span>
              </a>
            </h5>
            <p class="text-muted">
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
              libero venenatis faucibus tincidunt.
            </p>
            <a href="#" class="text-reset font-16"
              >Learn more <i class="mdi mdi-chevron-right"></i
            ></a>
          </div>
          <div class="grid grid-cols-4 mt-4">
              <div class="social-source text-center mt-3">
                <div class="avatar-xs mx-auto mb-3">
                  <span
                    class="avatar-title rounded-circle font-size-16"
                    style="background-color: #009dc2"
                  >
                    <i class="fa-brands fa-linkedin-in text-white"></i>
                  </span>
                </div>
                <h5 class="font-size-15">LinkedIn</h5>
                <p class="text-muted mb-0">125 posts</p>
              </div>
              <div class="social-source text-center mt-3">
                <div class="avatar-xs mx-auto mb-3">
                  <span
                    class="avatar-title rounded-circle font-size-16"
                    style="background-color: #009dc2"
                  >
                    <i class="fa-brands fa-twitter text-white"></i>
                  </span>
                </div>
                <h5 class="font-size-15">Twitter</h5>
                <p class="text-muted mb-0">112 posts</p>
              </div>
              <div class="social-source text-center mt-3">
                <div class="avatar-xs mx-auto mb-3">
                  <span
                    class="avatar-title rounded-circle font-size-16"
                    style="background-color: #009dc2"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </span>
                </div>
                <h5 class="font-size-15">Instagram</h5>
                <p class="text-muted mb-0">12 posts</p>
              </div>
              <div class="social-source text-center mt-3">
                <div class="avatar-xs mx-auto mb-3">
                  <span
                    class="avatar-title rounded-circle font-size-16"
                    style="background-color: #009dc2"
                  >
                    <i class="fa-brands fa-facebook-f"></i>
                  </span>
                </div>
                <h5 class="font-size-15">Facebook</h5>
                <p class="text-muted mb-0">102 posts</p>
              </div>
          </div>

          <div class="mt-3 text-center">
            <a href="#" class="text-primary font-size-14 fw-medium"
              >View All Sources <i class="mdi mdi-chevron-right"></i
            ></a>
          </div>
      </div>
  </div>
</template>
