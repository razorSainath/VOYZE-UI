<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
        class="page-title-box d-flex align-items-center justify-content-between"
      >
        <h4 class="mb-0">Content Curation</h4>

        <div class="page-title-right">
          <ol class="breadcrumb m-0">
            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Curation</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->

  <div class="row mb-2">
    <div class="col-md-3">
      <label for=""><b>Leader Topics:</b></label>
      <select
        name=""
        id=""
        class="form-control"
        aria-placeholder="Select Topics"
      >
        <option value="0" class="active">Select Topics...</option>
        <option value="1">Education</option>
        <option value="2">Cricket</option>
        <option value="3">Political</option>
        <option value="4">Bussiness</option>
      </select>
    </div>
    <div class="col-md-3">
      <label for=""><b>Enter Query:</b></label>
      <input
        type="text"
        name=""
        id=""
        class="form-control"
        placeholder="Enter queries..."
      />
    </div>
    <div class="col-md-3">
      <label for=""><b>Results:</b></label>
      <select name="" id="" class="form-control">
        <option value="0">10</option>
        <option value="1">25</option>
        <option value="2">50</option>
        <option value="3">100</option>
      </select>
    </div>
    <div class="col-md-3">
      <label for="">&nbsp;</label>
      <input
        type="button"
        value="Search"
        class="btn btn-primary form-control"
      />
    </div>
  </div>

  <div class="row">
    <div class="col-xl-9">
      <div class="row">
        <div class="col-xl-4 col-sm-6">
          <!-- <div class="card">
                <div class="card-body">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><span>January 4th 2021, 14:26</span></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">Edit</a>
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Remove</a>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="assets/images/covid_8-sixteen_nine.webp" alt="" class="img-thumbnail img-fluid">
                    </div>
                    <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    
                </div>

                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-light text-truncate"><i class="fa-brands fa-linkedin me-1"></i> LinkedIn</button>
                    <button type="button" class="btn btn-outline-light text-truncate"><i class="fa-brands fa-square-twitter me-1"></i> Twitter</button>

                </div>
            </div> -->
          <div class="card h-100">
            <div
              class="card-header d-flex align-items-center justify-content-space-between"
            >
              <div
                style="margin-top: 0px; margin-bottom: 0; margin-right: 60px"
              >
                Date Of Publication:
                <br />
                <b>{{ "4 oct 1998" }}</b>
              </div>

              <div class="d-flex">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary block"
                  >View</a
                >
              </div>
            </div>

            <div class="card-body">
              <div style="height: 220px; position: relative">
                <img
                  style="
                    height: 100%;
                    width: 100%;
                    border-radius: 10px;
                    cover: hidden;
                  "
                  class="card-img-top"
                />
              </div>

              <h5 class="card-title mt-3">
                <b>{{ "title......." }}</b>
              </h5>
              <p class="card-text">
                {{ "body.............................." }}
              </p>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <label>Create draft:</label>
              <div class="d-flex justify-content-end">
                <button
                  style="font-size: 0.75rem; margin-right: 10px"
                  target="_blank"
                  class="btn btn-primary block"
                >
                  Twitter
                </button>
                <button
                  style="font-size: 0.75rem"
                  target="_blank"
                  class="btn btn-primary block"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6">
          <div class="card h-100">
            <div
              class="card-header d-flex align-items-center justify-content-space-between"
            >
              <div
                style="margin-top: 0px; margin-bottom: 0; margin-right: 60px"
              >
                Date Of Publication:
                <br />
                <b>{{ "4 oct 1998" }}</b>
              </div>

              <div class="d-flex">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary block"
                  >View</a
                >
              </div>
            </div>

            <div class="card-body">
              <div style="height: 220px; position: relative">
                <img
                  style="
                    height: 100%;
                    width: 100%;
                    border-radius: 10px;
                    cover: hidden;
                  "
                  class="card-img-top"
                />
              </div>

              <h5 class="card-title mt-3">
                <b>{{ "title......." }}</b>
              </h5>
              <p class="card-text">
                {{ "body.............................." }}
              </p>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <label>Create draft:</label>
              <div class="d-flex justify-content-end">
                <button
                  style="font-size: 0.75rem; margin-right: 10px"
                  target="_blank"
                  class="btn btn-primary block"
                >
                  Twitter
                </button>
                <button
                  style="font-size: 0.75rem"
                  target="_blank"
                  class="btn btn-primary block"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6">
          <div class="card h-100">
            <div
              class="card-header d-flex align-items-center justify-content-space-between"
            >
              <div
                style="margin-top: 0px; margin-bottom: 0; margin-right: 60px"
              >
                Date Of Publication:
                <br />
                <b>{{ "4 oct 1998" }}</b>
              </div>

              <div class="d-flex">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary block"
                  >View</a
                >
              </div>
            </div>

            <div class="card-body">
              <div style="height: 220px; position: relative">
                <img
                  style="
                    height: 100%;
                    width: 100%;
                    border-radius: 10px;
                    cover: hidden;
                  "
                  class="card-img-top"
                />
              </div>

              <h5 class="card-title mt-3">
                <b>{{ "title......." }}</b>
              </h5>
              <p class="card-text">
                {{ "body.............................." }}
              </p>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <label>Create draft:</label>
              <div class="d-flex justify-content-end">
                <button
                  style="font-size: 0.75rem; margin-right: 10px"
                  target="_blank"
                  class="btn btn-primary block"
                >
                  Twitter
                </button>
                <button
                  style="font-size: 0.75rem"
                  target="_blank"
                  class="btn btn-primary block"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-sm-6 py-4">
          <div class="card h-100 ">
            <div
              class="card-header d-flex align-items-center justify-content-space-between"
            >
              <div
                style="margin-top: 0px; margin-bottom: 0; margin-right: 60px"
              >
                Date Of Publication:
                <br />
                <b>{{ "4 oct 1998" }}</b>
              </div>

              <div class="d-flex">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary block"
                  >View</a
                >
              </div>
            </div>

            <div class="card-body">
              <div style="height: 220px; position: relative">
                <img
                  style="
                    height: 100%;
                    width: 100%;
                    border-radius: 10px;
                    cover: hidden;
                  "
                  class="card-img-top"
                />
              </div>

              <h5 class="card-title mt-3">
                <b>{{ "title......." }}</b>
              </h5>
              <p class="card-text">
                {{ "body.............................." }}
              </p>
            </div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              <label>Create draft:</label>
              <div class="d-flex justify-content-end">
                <button
                  style="font-size: 0.75rem; margin-right: 10px"
                  target="_blank"
                  class="btn btn-primary block"
                >
                  Twitter
                </button>
                <button
                  style="font-size: 0.75rem"
                  target="_blank"
                  class="btn btn-primary block"
                >
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3">
      <div class="card">
        <div class="card-body">
          <label for="" class="py-2"><b>Enter Location:</b></label>
          <select name="" id="" class="form-control">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
          <label for="" class="py-2"><b>Categories:</b></label>
          <select name="" id="" class="form-control">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
          <label for="" class="py-2"><b>Sources:</b></label>
          <select name="" id="" class="form-control">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
          <label for="" class="py-2"><b>Authors:</b></label>
          <select name="" id="" class="form-control">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
          <label for="" class="py-2"><b>Times Of Interest:</b></label>
          <input type="date" name="" id="" class="form-control" />
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->

  <div class="row mt-3">
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
