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
    <div class="col-md-2">
      <label for=""><b>Results:</b></label>
      <select name="" id="" class="form-control">
        <option value="0">10</option>
        <option value="1">25</option>
        <option value="2">50</option>
        <option value="3">100</option>
      </select>
    </div>
    <div class="col-md-2">
      <label for="">&nbsp;</label>
      <input
        type="button"
        value="Search"
        class="btn btn-primary form-control"
      />
    </div>
    <div class="col-md-2">
      <label for="">&nbsp;</label>
      <button class="btn btn-primary form-control" type="button" data-bs-toggle="offcanvas" data-bs-target="#filter" aria-controls="offcanvasExample">
  Filters
</button>
    </div>
  </div>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="filter" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filters</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
          <div class="row">
            <div class="col-xl-12" >
              <label for="" class="py-2"><b>Enter Location:</b></label>
          <select name="" id="" class="form-control">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
            </div>
        </div>
        <div class="row">
          <div class="col-xl-12">
              <label for="" class="py-2"><b>Categories:</b></label>
          <select name="" id="" class="form-control">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
            </div>
            <div class="col-xl-12">
              <label for="" class="py-2"><b>Sources:</b></label>
          <select name="" id="" class="form-control">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
            </div>
            <div class="col-xl-12">
              <label for="" class="py-2"><b>Authors:</b></label>
          <select name="" id="" class="form-control">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
            </div>
            <div class="col-xl-12" >
              <label for="" class="py-2"><b>Times Of Interest:</b></label>
          <input type="date" name="" id="" class="form-control" />
            </div>
        </div>
  </div>
</div>

  <div class="row">
    <div class="col-xl-12">
      <div class="row">
        <div class="col-xl-4 col-sm-12 col-md-6">
          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>

                    <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Facebook"><i class="fa-brands fa-square-facebook me-1"></i> </button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Instagram"><i class="fa-brands fa-square-instagram me-1"></i></button>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-12 col-md-6">
          <div class="card" style="border: 1px solid #f3f8fb;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>

                    <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Facebook"><i class="fa-brands fa-square-facebook me-1"></i> </button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Instagram"><i class="fa-brands fa-square-instagram me-1"></i></button>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-12 col-md-6">
          <div class="card" style="border: 1px solid #f3f8fb;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>

                    <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Facebook"><i class="fa-brands fa-square-facebook me-1"></i> </button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Instagram"><i class="fa-brands fa-square-instagram me-1"></i></button>
                </div>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-sm-12 col-md-6">
          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>

                    <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Facebook"><i class="fa-brands fa-square-facebook me-1"></i> </button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Instagram"><i class="fa-brands fa-square-instagram me-1"></i></button>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-12 col-md-6">
          <div class="card" style="border: 1px solid #f3f8fb;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>

                    <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Facebook"><i class="fa-brands fa-square-facebook me-1"></i> </button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Instagram"><i class="fa-brands fa-square-instagram me-1"></i></button>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-12 col-md-6">
          <div class="card" style="border: 1px solid #f3f8fb;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>

                    <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Facebook"><i class="fa-brands fa-square-facebook me-1"></i> </button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Instagram"><i class="fa-brands fa-square-instagram me-1"></i></button>
                </div>
            </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-sm-12 col-md-6">
          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>

                    <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Facebook"><i class="fa-brands fa-square-facebook me-1"></i> </button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Instagram"><i class="fa-brands fa-square-instagram me-1"></i></button>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-12 col-md-6">
          <div class="card" style="border: 1px solid #f3f8fb;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>

                    <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Facebook"><i class="fa-brands fa-square-facebook me-1"></i> </button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Instagram"><i class="fa-brands fa-square-instagram me-1"></i></button>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-12 col-md-6">
          <div class="card" style="border: 1px solid #f3f8fb;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                      
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>

                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-primary text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1"></i></button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Facebook"><i class="fa-brands fa-square-facebook me-1"></i> </button>
                    <button type="button" class="btn btn-outline-primary text-truncate" title="Instagram"><i class="fa-brands fa-square-instagram me-1"></i></button>
                </div>
            </div>
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

  <!--pagination-->
  <div class="row mt-4">
            <div class="col-sm-6">
              <div>
                <p class="mb-sm-0 font">Showing 1 to 10 of 12 entries</p>
              </div>
            </div>
            <div class="col-sm-6">
              <nav aria-label="...">
  <ul class="pagination pagination-sm justify-content-end">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
            </div>
          </div>
  <!-- end row -->
</template>
<style scoped>
.img{
  height: 300px;
  width: 100%;
  object-fit: cover;
}
.pagination{
  --bs-pagination-border-color:#f3f8fb !important;
}
</style>
