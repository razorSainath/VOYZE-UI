<template>
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-flex align-items-center justify-content-between"
      >
        <h4 class="mb-0">Content Post</h4>

        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Dashboard</a>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Content</a>
            </li>
            <li class="breadcrumb-item active">Post</li>
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
            <h4 class="mb-1 mt-1"><span data-plugin="counterup">152</span></h4>
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

          </div>
          <div>
            <h4 class="mb-1 mt-1"><span data-plugin="counterup">43</span></h4>
            <p class="text-muted mb-0">Published</p>
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
            <h4 class="mb-1 mt-1"><span data-plugin="counterup">54</span></h4>
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
  <!--filter start-->
  <div class="row py-2">
    <div class="col-md-3">
      <label for="">Select Platform</label>
      <select name="" id="" class="form-control">
        <!-- <option value="0">Select Platform</option> -->
        <option value="1">LinkedIn</option>
        <option value="2">Twitter</option>
        <option value="3">Facebook</option>
        <option value="4">Instagram</option>
      </select>
    </div>
    <div class="col-md-3">
      <label for="">Selct Date:</label>
      <div>
        <input type="datetime-local" name="" id="" class="form-control" />
      </div>
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-2">
        <label for="">&nbsp;</label>
        <input
        type="button"
        class="btn btn-primary mb-2 float-md-end form-control"
        data-toggle="modal"
        data-target="#myModal"
        value="+ New Draft"
      />
      
    </div>
  </div>
  <!--filter end-->

  <div class="row">
    <div class="col-xl-12 col-lg-12">
      <div class="card" style="border-radius: 10px">
        <div class="card-body">
          <div>
            <div class="row">
              <div class="col-md-6">
                <div>
                  <ol class="breadcrumb p-0 bg-transparent mb-2">
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0);">Post</a>
                    </li>
                    <li class="breadcrumb-item active">Draft</li>
                  </ol>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-inline float-md-end">
                  <div class="search-box ms-2">
                    <div class="position-relative">
                      <input
                        type="text"
                        class="form-control bg-light border-light rounded"
                        placeholder="Search..."
                      />
                      <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tr-job-posted section-padding">
              <div class="container-fluid">
                <div class="job-tab">
                  <ul
                    class="nav nav-tab nav-tabs-custom mt-3 mb-2 ecommerce-sortby-list"
                    role="tablist"
                  >
                    <li role="presentation" class="active nav-item">
                      <a
                        class="active show nav-link"
                        href="#draft"
                        aria-controls="draft"
                        role="tab"
                        data-toggle="tab"
                        aria-selected="true"
                        >Draft</a
                      >
                    </li>
                    <li role="presentation" class="active nav-item">
                      <a
                        href="#review"
                        aria-controls="review"
                        role="tab"
                        data-toggle="tab"
                        class="nav-link"
                        aria-selected="false"
                        >Review</a
                      >
                    </li>
                    <li role="presentation" class="active nav-item">
                      <a
                        href="#client"
                        aria-controls="client"
                        role="tab"
                        data-toggle="tab"
                        class="nav-link"
                        aria-selected="false"
                        >Client Review</a
                      >
                    </li>
                    <li role="presentation" class="active nav-item">
                      <a
                        href="#rejected"
                        aria-controls="rejected"
                        role="tab"
                        data-toggle="tab"
                        class="nav-link"
                        aria-selected="false"
                        >Rejected</a
                      >
                    </li>
                    <li role="presentation" class="active nav-item">
                      <a
                        href="#scheduled"
                        aria-controls="scheduled"
                        role="tab"
                        data-toggle="tab"
                        class="nav-link"
                        aria-selected="false"
                        >Scheduled</a
                      >
                    </li>
                    <li role="presentation" class="active nav-item">
                      <a
                        href="#published"
                        aria-controls="published"
                        role="tab"
                        data-toggle="tab"
                        class="nav-link"
                        aria-selected="false"
                        >Published</a
                      >
                    </li>
                    <li role="presentation" class="active nav-item">
                      <a
                        href="#expired"
                        aria-controls="expired"
                        role="tab"
                        data-toggle="tab"
                        class="nav-link"
                        aria-selected="false"
                        >Expired</a
                      >
                    </li>
                  </ul>
                  <div class="tab-content text-left">
                    <div
                      role="tabpanel"
                      class="tab-pane fade active show"
                      id="draft"
                    >
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div
                                  class="col-md-6"
                                  style="display: flex; justify-content: start; text-align:center"
                                >
                                  <div>
                                    <i
                                      class="fa-brands fa-linkedin text-primary fa-2x"
                                    ></i
                                    >&nbsp;&nbsp;
                                    <small><b>Bussiness Post</b>
                                    </small>&nbsp;&nbsp;
                                    <small
                                      >28/12/2022 10:21</small
                                    >
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
<div class="d-flex">
    <div><i class="fa-solid fa-comment text-primary"></i><span class="badge badge-danger">4</span></div>
    <div><i class="fa-solid fa-pen-to-square text-primary"></i></div>
    <div class="btn-group" style="position:relative;top:-7px;">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle-split"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ><i class="fa-solid fa-ellipsis-vertical"></i></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
</div>
                                </div>
                              </div>
                            </div>
<<<<<<< HEAD
                            <div class="col-md-6">
                                <div class="form-inline float-md-end">
                                    <div class="search-box ms-2">
                                        <div class="position-relative">
                                            <input type="text" class="form-control bg-light border-light rounded"
                                                placeholder="Search...">
                                            <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tr-job-posted section-padding">
                            <div class="container-fluid">
                                <div class="job-tab">
                                    <ul class="nav nav-tab nav-tabs-custom mt-3 mb-2 ecommerce-sortby-list"
                                        role="tablist">
                                        <li role="presentation" class="active nav-item">
                                            <a class="active show nav-link" href="#draft" aria-controls="draft"
                                                role="tab" data-toggle="tab" aria-selected="true">Draft</a>
                                        </li>
                                        <li role="presentation" class="active nav-item"><a href="#review"
                                                aria-controls="review" role="tab" data-toggle="tab" class="nav-link"
                                                aria-selected="false">Review</a></li>
                                        <li role="presentation" class="active nav-item"><a href="#client"
                                                aria-controls="client" role="tab" data-toggle="tab" class="nav-link"
                                                aria-selected="false">Client Review</a></li>
                                        <li role="presentation" class="active nav-item"><a href="#rejected"
                                                aria-controls="rejected" role="tab" data-toggle="tab" class="nav-link"
                                                aria-selected="false">Rejected</a></li>
                                        <li role="presentation" class="active nav-item"><a href="#scheduled"
                                                aria-controls="scheduled" role="tab" data-toggle="tab" class="nav-link"
                                                aria-selected="false">Scheduled</a></li>
                                        <li role="presentation" class="active nav-item"><a href="#published"
                                                aria-controls="published" role="tab" data-toggle="tab" class="nav-link"
                                                aria-selected="false">Published</a></li>
                                        <li role="presentation" class="active nav-item"><a href="#expired"
                                                aria-controls="expired" role="tab" data-toggle="tab" class="nav-link"
                                                aria-selected="false">Expired</a></li>
                                    </ul>
                                    <div class="tab-content text-left">
                                        <div role="tabpanel" class="tab-pane fade active show" id="draft">
                                            <div class="row">
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6"
                                                                    style="display: flex;justify-content: start;">
                                                                    <div><i
                                                                            class="fa-brands fa-square-twitter fa-2x text-primary"></i>&nbsp;&nbsp;
                                                                            <span style="position: absolute;top:-2px;">Bussiness Post</span>
                                                                        <span
                                                                            style="position: absolute;top:16px; font-size:10px;">28/12/2022
                                                                            10:21</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn position-relative">
                                                                                    💬
                                                                                    <span
                                                                                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                                                                        9+
                                                                                        <span
                                                                                            class="visually-hidden">unread
                                                                                            messages</span>
                                                                                    </span>
                                                                                </button>
                                                                                <span
                                                                                    class="btn text-primary dropdown-toggle-split fa fa-check-square-o">
                                                                                </span>
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle-split"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">&#8942;
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li data-toggle="modal"
                                                                                        data-target="#myModal1"><a
                                                                                            class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/main_photo_0-sixteen_nine.jpg?size=948:533"
                                                            alt="" class="img-fluid">
                                                        <div class="card-body">
                                                            <small>ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर
                                                                होम टाउन रूड़की जा रहे थे. इसी दौरान
                                                                झपकी आई और उनकी कार डिवाइडर से टकराकर
                                                                दुर्घटना ग्रस्त हो गई. पंत को सिर और
                                                                घु...<span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/sports/...</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8"
                                                                    style="display: flex;justify-content: start;">
                                                                    <div style="font-size: 10px;">Publish
                                                                        Schedule:</div>
                                                                    &nbsp;
                                                                    <div style="font-size: 10px;">Auto
                                                                        Published on
                                                                        Approval</div>
                                                                </div>
                                                                <div class="col-md-4"
                                                                    style="display: flex;justify-content: end;">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6"
                                                                    style="display: flex;justify-content: start;">
                                                                    <div><i
                                                                            class="fa-brands fa-linkedin fa-2x text-primary"></i>&nbsp;&nbsp;
                                                                            <span style="position: absolute;top:-2px;">Bussiness Post</span>
                                                                        <span
                                                                            style="position: absolute;top:16px; font-size:10px;">28/12/2022 10:21</span>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn position-relative">
                                                                                    💬
                                                                                    <span
                                                                                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                                                                                        9+
                                                                                        <span
                                                                                            class="visually-hidden">unread
                                                                                            messages</span>
                                                                                    </span>
                                                                                </button>
                                                                                <span
                                                                                    class="btn text-primary dropdown-toggle-split fa fa-check-square-o">
                                                                                </span>
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle-split"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">&#8942;
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li data-toggle="modal"
                                                                                        data-target="#myModal1"><a
                                                                                            class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/main_photo_0-sixteen_nine.jpg?size=948:533"
                                                            alt="" class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8"
                                                                    style="display: flex;justify-content: start;">
                                                                    <div style="font-size: 10px;">Publish
                                                                        Schedule:</div>
                                                                    &nbsp;
                                                                    <div style="font-size: 10px;">Auto
                                                                        Published on
                                                                        Approval</div>
                                                                </div>
                                                                <div class="col-md-4"
                                                                    style="display: flex;justify-content: end;">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- /.tab-pane -->
                                        <div role="tabpanel" class="tab-pane fade in" id="review">
                                            <div class="row">
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-linkedin fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li data-toggle="modal"
                                                                                        data-target="#myModal2"><a
                                                                                            class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to Client review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;View
                                                                                            In
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Archive</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-twitter-square fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- /.tab-pane -->
                                        <div role="tabpanel" class="tab-pane fade in" id="client">
                                            <div class="row">
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-linkedin fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-twitter-square fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- /.tab-pane -->
                                        <div role="tabpanel" class="tab-pane fade in" id="rejected">
                                            <div class="row">
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-linkedin fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-twitter-square fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- /.tab-pane -->
                                        <div role="tabpanel" class="tab-pane fade in" id="scheduled">
                                            <div class="row">
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-twitter fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-twitter-square fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- /.tab-pane -->
                                        <div role="tabpanel" class="tab-pane fade in" id="published">
                                            <div class="row">
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-linkedin fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-twitter-square fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- /.tab-pane -->
                                        <div role="tabpanel" class="tab-pane fade in" id="expired">
                                            <div class="row">
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-linkedin fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success fa-2x"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger fa-2x"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                    <div class="card">
                                                        <div class="card-header"
                                                            style="background-color: transparent;border: none;">
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                    <div><i
                                                                            class="fa-brands fa-twitter-square fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                            class="mt-2">28/12/2022
                                                                            10:21</span></div>
                                                                </div>
                                                                <div class="col-md-6 d-flex justify-content-end">
                                                                    <div>
                                                                        <span>
                                                                            <!-- Example split danger button -->
                                                                            <div class="btn-group">
                                                                                <button type="button"
                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                            Edit</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move
                                                                                            to
                                                                                            review</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Post
                                                                                            Details</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="#"><i
                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Something
                                                                                            else
                                                                                            here</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src="assets/images/covid_8-sixteen_nine.webp" alt=""
                                                            class="img-fluid">
                                                        <div class="card-body">
                                                            <p><b>Doesn't it feel cold? Rahul Gandhi
                                                                    said - Only T Shirt is
                                                                    working...when it will not work, we
                                                                    will see</b></p>
                                                            <small>Congress is celebrating its
                                                                foundation day today. During
                                                                this, Rahul Gandhi reached the Congress
                                                                office in T-shirt
                                                                only. When Rahul Gandhi was asked a
                                                                <span><a href="#">Read
                                                                        more...</a></span></small>
                                                            <br><small class="btn btn-outline-primary btn-rounded"
                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                        </div>
                                                        <div class="card-footer"
                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                            <div class="row">
                                                                <div class="col-md-8">
                                                                    <div class="row">
                                                                        <div class="col-md-3">
                                                                            <i
                                                                                class="fa-solid fa-clock-rotate-left fa-2x"></i>
                                                                        </div>
                                                                        <div class="col-md-9">
                                                                            <small style="font-size: 12px;">Publish
                                                                                Schedule:</small><br>
                                                                            <span><small
                                                                                    style="font-size: 12px;color: #090909;">Auto
                                                                                    Published on
                                                                                    Approval</small></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-4 d-flex justify-content-end">
                                                                    <ul class="nav" style="gap: 10px;">
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-pen-to-square"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-regular fa-circle-check text-success"></i>
                                                                        </li>
                                                                        <li class="nav-item"><i
                                                                                class="fa-solid fa-trash-can text-danger"></i>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><!-- /.tab-pane -->
                                    </div>
                                </div><!-- /.job-tab -->
                            </div><!-- /.container -->
                        </div>
                        <!-- end row -->

                        <div class="row mt-4">
                            <div class="col-sm-6">
                                <div>
                                    <p class="mb-sm-0">Page 2 of 84</p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="float-sm-end">
                                    <ul class="pagination pagination-rounded mb-sm-0">
                                        <li class="page-item disabled">
                                            <a href="#" class="page-link"><i class="mdi mdi-chevron-left"></i></a>
                                        </li>
                                        <li class="page-item active">
                                            <a href="#" class="page-link">1</a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link">2</a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link">3</a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link">4</a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link">5</a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link"><i class="mdi mdi-chevron-right"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
=======
                            <img
                              src="~/assets/images/modi_mother_12-sixteen_nine.webp" style="height:300px;width:100%; object-fit:cover;"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Rishabh Pant car accident: 'जलती कार से दूर
                                  किया, चादर लपेटकर अस्पताल भेजा...' ऋषभ पंत के
                                  लिए मसीहा बनकर आया ये बस ड्राइवर</b
                                >
                              </p>
                              <small
                                >ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर होम टाउन
                                रूड़की जा रहे थे. इसी दौरान झपकी आई और उनकी कार
                                डिवाइडर से टकराकर दुर्घटना ग्रस्त हो गई. पंत को
                                सिर और घु...<span
                                  ><a href="#">Read more...</a></span
                                ></small
                              >
                              <br><br>
                              <div style="border: 1px solid #dcdcdc;border-radius: 50rem;" class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-xs">
                  <img src="~/assets/images/users/avatar-1.jpg" alt="" class="avatar-title rounded-circle">
              </div>
>>>>>>> dummy-nibhash
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom">
                <small class="text-truncate font-size-10">
                  <a href="#" class="text-dark">Sainath Reddy</a>
                </small> &nbsp;
                <small class="text-success font-size-10">
                  <i class="fa-solid fa-clock"></i> Approved
                </small>
              </div>
            </div>
          </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
<span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success" title="Auto Publish"></i></span>&nbsp;&nbsp;
<span><i class="fa-solid fa-calendar-days text-dark" title="Scheduled time and date"></i></span>
                                </div>
                            </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6 d-flex text-align-stretch flex-wrap">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div
                                  class="col-md-6"
                                  style="display: flex; justify-content: start; text-align:center"
                                >
                                  <div>
                                    <i
                                      class="fa-brands fa-twitter-square text-primary fa-2x"
                                    ></i
                                    >&nbsp;&nbsp;
                                    <small><b>Education Post</b>
                                    </small>&nbsp;&nbsp;
                                    <small
                                      >28/12/2022 10:21</small
                                    >
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
<div class="d-flex">
    <div><i class="fa-solid fa-comment text-primary"></i><span class="badge badge-danger">4</span></div>
    <div><i class="fa-solid fa-pen-to-square text-primary"></i></div>
    <div class="btn-group" style="position:relative;top:-7px;">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle-split"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ><i class="fa-solid fa-ellipsis-vertical"></i></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
</div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="~/assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid" style="height:300px;width:100%; object-fit:cover;"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small class="py-2"
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              ><br><br>
                              <div style="border: 1px solid #dcdcdc;border-radius: 50rem;" class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                              
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="d-flex align-items-start">
            <div class="flex-shrink-0 me-4">
              <div class="avatar-xs">
                  <img src="~/assets/images/users/avatar-1.jpg" alt="" class="avatar-title rounded-circle">
              </div>
            </div>
            <div class="flex-grow-1 align-self-center">
              <div class="border-bottom">
                <small class="text-truncate font-size-10">
                  <a href="#" class="text-dark">Sainath Reddy</a>
                </small> &nbsp;
                <small class="text-success font-size-10">
                  <i class="fa-solid fa-clock"></i> Approved
                </small>
              </div>
            </div>
          </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
<span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success" title="Auto Publish"></i></span>&nbsp;&nbsp;
<span><i class="fa-solid fa-calendar-days text-dark" title="Scheduled time and date"></i></span>
                                </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div role="tabpanel" class="tab-pane fade in" id="review">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-linkedin fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li
                                            data-toggle="modal"
                                            data-target="#myModal2"
                                          >
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to Client review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;View In Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Archive</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-twitter-square fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div role="tabpanel" class="tab-pane fade in" id="client">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-linkedin fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-twitter-square fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div role="tabpanel" class="tab-pane fade in" id="rejected">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-linkedin fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-twitter-square fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div
                      role="tabpanel"
                      class="tab-pane fade in"
                      id="scheduled"
                    >
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-linkedin fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-twitter-square fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div
                      role="tabpanel"
                      class="tab-pane fade in"
                      id="published"
                    >
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-linkedin fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-twitter-square fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                    <div role="tabpanel" class="tab-pane fade in" id="expired">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-linkedin fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4">
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-pen-to-square fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success fa-2x"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger fa-2x"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div
                              class="card-header"
                              style="
                                background-color: transparent;
                                border: none;
                              "
                            >
                              <div class="row">
                                <div class="col-md-6">
                                  <div>
                                    <i
                                      class="fa-brands fa-twitter-square fa-2x text-primary"
                                    ></i
                                    >&nbsp;&nbsp;<span class="mt-2"
                                      >28/12/2022 10:21</span
                                    >
                                  </div>
                                </div>
                                <div
                                  class="col-md-6 d-flex justify-content-end"
                                >
                                  <div>
                                    <span>
                                      <!-- Example split danger button -->
                                      <div class="btn-group">
                                        <button
                                          type="button"
                                          class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        ></button>
                                        <ul class="dropdown-menu">
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i class="fa-solid fa-pencil"></i
                                              >&nbsp; Edit</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Move to review</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Post Details</a
                                            >
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#"
                                              ><i
                                                class="fa-solid fa-arrow-right"
                                              ></i
                                              >&nbsp;Something else here</a
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              src="assets/images/covid_8-sixteen_nine.webp"
                              alt=""
                              class="img-fluid"
                            />
                            <div class="card-body">
                              <p>
                                <b
                                  >Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b
                                >
                              </p>
                              <small
                                >Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small
                              >
                              <br /><small
                                class="btn btn-outline-primary btn-rounded"
                                style="overflow: none"
                                >https://www.aajtak.in/coronavirus/story/....</small
                              >
                            </div>
                            <div
                              class="card-footer"
                              style="background-color: rgba(147, 241, 183, 0.2)"
                            >
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <i
                                        class="fa-solid fa-clock-rotate-left fa-2x"
                                      ></i>
                                    </div>
                                    <div class="col-md-9">
                                      <small style="font-size: 12px"
                                        >Publish Schedule:</small
                                      ><br />
                                      <span
                                        ><small
                                          style="
                                            font-size: 12px;
                                            color: #090909;
                                          "
                                          >Auto Published on Approval</small
                                        ></span
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="col-md-4 d-flex justify-content-end"
                                >
                                  <ul class="nav" style="gap: 10px">
                                    <li class="nav-item">
                                      <i class="fa-solid fa-pen-to-square"></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-regular fa-circle-check text-success"
                                      ></i>
                                    </li>
                                    <li class="nav-item">
                                      <i
                                        class="fa-solid fa-trash-can text-danger"
                                      ></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.tab-pane -->
                  </div>
                </div>
                <!-- /.job-tab -->
              </div>
              <!-- /.container -->
            </div>
            <!-- end row -->

            <div class="row mt-4">
              <div class="col-sm-6">
                <div>
                  <p class="mb-sm-0">Page 2 of 84</p>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="float-sm-end">
                  <ul class="pagination pagination-rounded mb-sm-0">
                    <li class="page-item disabled">
                      <a href="#" class="page-link"
                        ><i class="mdi mdi-chevron-left"></i
                      ></a>
                    </li>
                    <li class="page-item active">
                      <a href="#" class="page-link">1</a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">2</a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">3</a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">4</a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link">5</a>
                    </li>
                    <li class="page-item">
                      <a href="#" class="page-link"
                        ><i class="mdi mdi-chevron-right"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
