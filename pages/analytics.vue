<script setup>

const chartOptions = {
  chart: {
    id: "vuechart-example",
    selection:false,
  toolbar: {
    show: true,
    tools: {
      download: false
    }
  }


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
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-flex align-items-center justify-content-between"
      >
        <h4 class="mb-0">Analytics</h4>

        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Edelman</a>
            </li>
            <li class="breadcrumb-item LinkedIn">Analtics</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->

  <div class="row">
    <div class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-body">
          <div class="float-end mt-2">
            <div id="total-revenue-chart" data-colors='["--bs-primary"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1"><span data-plugin="counterup">10</span></h4>
            <p class="text-muted mb-0">Total Posts</p>
          </div>
          <p class="text-muted mt-3 mb-0">
            <span class="text-success me-1"
              ><i class="mdi mdi-arrow-up-bold me-1"></i>2.65%</span
            >
            since last week
          </p>
        </div>
      </div>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-body">
          <div class="float-end mt-2">
            <div id="orders-chart" data-colors='["--bs-success"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1"><span data-plugin="counterup">8</span></h4>
            <p class="text-muted mb-0">Publish</p>
          </div>
          <p class="text-muted mt-3 mb-0">
            <span class="text-danger me-1"
              ><i class="mdi mdi-arrow-down-bold me-1"></i>0.82%</span
            >
            since last week
          </p>
        </div>
      </div>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-body">
          <div class="float-end mt-2">
            <div id="customers-chart" data-colors='["--bs-primary"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1"><span data-plugin="counterup">2</span></h4>
            <p class="text-muted mb-0">Review</p>
          </div>
          <p class="text-muted mt-3 mb-0">
            <span class="text-danger me-1"
              ><i class="mdi mdi-arrow-down-bold me-1"></i>6.24%</span
            >
            since last week
          </p>
        </div>
      </div>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-body">
          <div class="float-end mt-2">
            <div id="growth-chart" data-colors='["--bs-warning"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1">
              + <span data-plugin="counterup">12.58</span>%
            </h4>
            <p class="text-muted mb-0">Growth</p>
          </div>
          <p class="text-muted mt-3 mb-0">
            <span class="text-success me-1"
              ><i class="mdi mdi-arrow-up-bold me-1"></i>10.51%</span
            >
            since last week
          </p>
        </div>
      </div>
    </div>
    <!-- end col-->
  </div>
  <!-- end row-->

  <div class="row">
    <div class="col-xl-8">
      <div class="card">
        <div class="card-body">
          <div class="float-end">
            <div class="dropdown">
              <a
                class="dropdown-toggle text-reset"
                href="#"
                id="dropdownMenuButton5"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="fw-semibold">Sort By:</span>
                <span class="text-muted"
                  >Yearly<i class="mdi mdi-chevron-down ms-1"></i
                ></span>
              </a>

              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton5"
              >
                <a class="dropdown-item" href="#">Monthly</a>
                <a class="dropdown-item" href="#">Yearly</a>
                <a class="dropdown-item" href="#">Weekly</a>
              </div>
            </div>
          </div>
          <h4 class="card-title mb-4">Post Analytics</h4>

          <div class="mt-1">
            <ul class="list-inline main-chart mb-0">
              <li class="list-inline-item chart-border-left me-0 border-0">
                <h3 class="text-primary">
                  $<span data-plugin="counterup">2,371</span
                  ><span class="text-muted d-inline-block font-size-15 ms-3"
                    >Income</span
                  >
                </h3>
              </li>
              <li class="list-inline-item chart-border-left me-0">
                <h3>
                  <span data-plugin="counterup">258</span
                  ><span class="text-muted d-inline-block font-size-15 ms-3"
                    >Sales</span
                  >
                </h3>
              </li>
              <li class="list-inline-item chart-border-left me-0">
                <h3>
                  <span data-plugin="counterup">3.6</span>%<span
                    class="text-muted d-inline-block font-size-15 ms-3"
                    >Conversation Ratio</span
                  >
                </h3>
              </li>
            </ul>
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
        </div>
        <!-- end card-body-->
      </div>
      <!-- end card-->
    </div>
    <!-- end col-->

    <div class="col-xl-4">
      <div class="card">
        <div class="card-body">
          <div class="float-end">
            <div class="dropdown">
              <a
                class="dropdown-toggle text-reset"
                href="#"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="fw-semibold">Sort By:</span>
                <span class="text-muted"
                  >Yearly<i class="mdi mdi-chevron-down ms-1"></i
                ></span>
              </a>

              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton1"
              >
                <a class="dropdown-item" href="#">Monthly</a>
                <a class="dropdown-item" href="#">Yearly</a>
                <a class="dropdown-item" href="#">Weekly</a>
              </div>
            </div>
          </div>

          <h4 class="card-title mb-4">Top 10 Posts</h4>

          <div class="row align-items-center g-0 mt-3">
            <div class="col-sm-3">
              <p class="text-truncate mt-1 mb-0">
                <i class="mdi mdi-circle-medium text-primary me-2"></i> LinkedIn
              </p>
            </div>

            <div class="col-sm-9">
              <div class="progress mt-1" style="height: 6px">
                <div
                  class="progress-bar progress-bar bg-primary"
                  role="progressbar"
                  style="width: 52%"
                  aria-valuenow="52"
                  aria-valuemin="0"
                  aria-valuemax="52"
                ></div>
              </div>
            </div>
          </div>
          <!-- end row-->

          <div class="row align-items-center g-0 mt-3">
            <div class="col-sm-3">
              <p class="text-truncate mt-1 mb-0">
                <i class="mdi mdi-circle-medium text-info me-2"></i> Twitter
              </p>
            </div>
            <div class="col-sm-9">
              <div class="progress mt-1" style="height: 6px">
                <div
                  class="progress-bar progress-bar bg-info"
                  role="progressbar"
                  style="width: 45%"
                  aria-valuenow="45"
                  aria-valuemin="0"
                  aria-valuemax="45"
                ></div>
              </div>
            </div>
          </div>
          <!-- end row-->

          <div class="row align-items-center g-0 mt-3">
            <div class="col-sm-3">
              <p class="text-truncate mt-1 mb-0">
                <i class="mdi mdi-circle-medium text-success me-2"></i> Facebook
              </p>
            </div>
            <div class="col-sm-9">
              <div class="progress mt-1" style="height: 6px">
                <div
                  class="progress-bar progress-bar bg-success"
                  role="progressbar"
                  style="width: 48%"
                  aria-valuenow="48"
                  aria-valuemin="0"
                  aria-valuemax="48"
                ></div>
              </div>
            </div>
          </div>
          <!-- end row-->

          <div class="row align-items-center g-0 mt-3">
            <div class="col-sm-3">
              <p class="text-truncate mt-1 mb-0">
                <i class="mdi mdi-circle-medium text-warning me-2"></i>
                Instagram
              </p>
            </div>
            <div class="col-sm-9">
              <div class="progress mt-1" style="height: 6px">
                <div
                  class="progress-bar progress-bar bg-warning"
                  role="progressbar"
                  style="width: 38%"
                  aria-valuenow="78"
                  aria-valuemin="0"
                  aria-valuemax="78"
                ></div>
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <!-- end card-body-->
      </div>
      <!-- end card-->
    </div>
    <!-- end Col -->
  </div>
  <!-- end row-->

  <div class="row">
    <div class="col-xl-6">
      <div class="card">
        <div class="card-body">
          <div class="float-end">
            <div class="dropdown">
              <a
                class="dropdown-toggle"
                href="#"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-muted"
                  >All Members<i class="mdi mdi-chevron-down ms-1"></i
                ></span>
              </a>

              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton2"
              >
                <a class="dropdown-item" href="#">Locations</a>
                <a class="dropdown-item" href="#">Revenue</a>
                <a class="dropdown-item" href="#">Join Date</a>
              </div>
            </div>
          </div>
          <h4 class="card-title mb-4">Top Users</h4>

          <div data-simplebar style="max-height: 339px; overflow: auto">
            <div class="table-responsive">
              <table class="table table-borderless table-centered table-nowrap">
                <tbody>
                  <tr>
                    <td style="width: 20px">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        class="avatar-xs rounded-circle"
                        alt="..."
                      />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Glenn Holden</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Nevada
                      </p>
                    </td>
                    <td>
                      <span class="badge bg-soft-primary font-size-12"
                        >LinkedIn</span
                      >
                    </td>
                    <td class="text-muted fw-semibold text-end">
                      <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >$250.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="assets/images/users/avatar-5.jpg"
                        class="avatar-xs rounded-circle"
                        alt="..."
                      />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Lolita Hamill</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Texas
                      </p>
                    </td>
                    <td>
                      <span class="badge bg-soft-success font-size-12"
                        >Success</span
                      >
                    </td>
                    <td class="text-muted fw-semibold text-end">
                      <i
                        class="icon-xs icon me-2 text-danger"
                        data-feather="trending-down"
                      ></i
                      >$110.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="assets/images/users/avatar-6.jpg"
                        class="avatar-xs rounded-circle"
                        alt="..."
                      />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Robert Mercer</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> California
                      </p>
                    </td>
                    <td>
                      <span class="badge bg-soft-info font-size-12"
                        >LinkedIn</span
                      >
                    </td>
                    <td class="text-muted fw-semibold text-end">
                      <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >$420.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="assets/images/users/avatar-7.jpg"
                        class="avatar-xs rounded-circle"
                        alt="..."
                      />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Montana
                      </p>
                    </td>
                    <td>
                      <span class="badge bg-soft-warning font-size-12"
                        >Twitter</span
                      >
                    </td>
                    <td class="text-muted fw-semibold text-end">
                      <i
                        class="icon-xs icon me-2 text-danger"
                        data-feather="trending-down"
                      ></i
                      >$120.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="assets/images/users/avatar-8.jpg"
                        class="avatar-xs rounded-circle"
                        alt="..."
                      />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Sonya Henshaw</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Colorado
                      </p>
                    </td>
                    <td>
                      <span class="badge bg-soft-info font-size-12"
                        >LinkedIn</span
                      >
                    </td>
                    <td class="text-muted fw-semibold text-end">
                      <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >$112.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="assets/images/users/avatar-2.jpg"
                        class="avatar-xs rounded-circle"
                        alt="..."
                      />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> Australia
                      </p>
                    </td>
                    <td>
                      <span class="badge bg-soft-success font-size-12"
                        >Success</span
                      >
                    </td>
                    <td class="text-muted fw-semibold text-end">
                      <i
                        class="icon-xs icon me-2 text-danger"
                        data-feather="trending-down"
                      ></i
                      >$120.00
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="assets/images/users/avatar-1.jpg"
                        class="avatar-xs rounded-circle"
                        alt="..."
                      />
                    </td>
                    <td>
                      <h6 class="font-size-15 mb-1 fw-normal">Sonya Henshaw</h6>
                      <p class="text-muted font-size-13 mb-0">
                        <i class="mdi mdi-map-marker"></i> India
                      </p>
                    </td>
                    <td>
                      <span class="badge bg-soft-danger font-size-12"
                        >LinkedIn</span
                      >
                    </td>
                    <td class="text-muted fw-semibold text-end">
                      <i
                        class="icon-xs icon me-2 text-success"
                        data-feather="trending-up"
                      ></i
                      >$112.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- enbd table-responsive-->
          </div>
          <!-- data-sidebar-->
        </div>
        <!-- end card-body-->
      </div>
      <!-- end card-->
    </div>
    <!-- end col -->

    <div class="col-xl-6">
      <div class="card">
        <div class="card-body">
          <div class="float-end">
            <div class="dropdown">
              <a
                class="dropdown-toggle"
                href="#"
                id="dropdownMenuButton4"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="text-muted"
                  >Monthly<i class="mdi mdi-chevron-down ms-1"></i
                ></span>
              </a>

              <div
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton4"
              >
                <a class="dropdown-item" href="#">Yearly</a>
                <a class="dropdown-item" href="#">Monthly</a>
                <a class="dropdown-item" href="#">Weekly</a>
              </div>
            </div>
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
          <div class="row mt-4">
            <div class="col-6">
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
            </div>
            <div class="col-6">
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
            </div>
            <!-- <div class="col-4">
                                                <div class="social-source text-center mt-3">
                                                    <div class="avatar-xs mx-auto mb-3">
                                                        <span class="avatar-title rounded-circle bg-pink font-size-16">
                                                                <i class="mdi mdi-instagram text-white"></i>
                                                            </span>
                                                    </div>
                                                    <h5 class="font-size-15">Instagram</h5>
                                                    <p class="text-muted mb-0">104 sales</p>
                                                </div>
                                            </div> -->
          </div>

          <div class="mt-3 text-center">
            <a href="#" class="text-primary font-size-14 fw-medium"
              >View All Sources <i class="mdi mdi-chevron-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>
