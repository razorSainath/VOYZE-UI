<template>
   <head>
        <title>Curation | Voyze</title>
    </head>
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
    <div class="col-md-1">
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
    <div class="col-md-3 filter">
      <label for="">&nbsp;</label>
      <input class="btn btn-primary form-control" data-bs-toggle="offcanvas" data-bs-target="#filters" aria-controls="offcanvasExample" value="Filters" type="button">
    </div>
  </div>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="filters" aria-labelledby="offcanvasExampleLabel">
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
         <input type="datetime-local" name="" id="" class="form-control">
            </div>
        </div>
  </div>
</div>

  <div class="row py-2">
    <div class="col-xl-9">
      <div class="row">
        <div class="col-xl-4 d-flex align-items-stretch flex-wrap">
          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><br><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" style="top:10px;position:absolute;">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/dhirendra_shastri-sixteen_nine.jpg?size=948:533" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Kanjhawala case: Delhi girl, hit and dragged by car, was with a friend who fled from spot</a></h5>
                    <p class="text-muted mb-2">The Delhi Police on Tuesday said that the 20-year-old woman who was killed after her scooter was hit by a car and dragged several kilometres two days ...</p>
                    </div>
                    <div class="card-footer">
                      <div class="row">
                        <div class="col-md-6"><b>Create Draft:</b></div>
                        <div class="col-md-6">
                          <div class="btn-group float-md-end" role="group">
                    <span class=" text-truncate" title="LinkedIn "><a href="#"><i class="fa-brands fa-linkedin me-1 fa-2x text-primary"></i></a></span>
                    <span class=" text-truncate" title="Twitter"><a href="#"><i class="fa-brands fa-square-twitter me-1 fa-2x text-primary"></i></a></span>
                </div>
                        </div>
                      </div>
                      
                    </div>
            </div>
        </div>
        <div class="col-xl-4">
          <div class="card" style="border: 1px solid #f3f8fb;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><br><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" style="top:10px;position:absolute;">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/untitled_design_-_2023-01-23t090253.330-sixteen_nine.jpg?size=948:533" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">UP: नकल करना 'पाप' ही नहीं देश की सुरक्षा के लिए भी 'खतरा', लगेगा NSA, जानिए कानून में क्या प्रावधान?</a></h5>
                    <p class="text-muted mb-2">देश में उत्तर प्रदेश और बिहार जैसे राज्यों में नकल को लेकर सरकारों की खूब फजीहत होती रही है. ऐसे में अब योगी सरकार ने दावा किया है कि इस बार बोर्ड परी...</p>
                    </div>
                    <div class="card-footer">
                      <div class="row">
                        <div class="col-md-6"><b>Create Draft:</b></div>
                        <div class="col-md-6">
                          <div class="btn-group float-md-end" role="group">
                    <span class=" text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1 fa-2x text-primary"></i></span>
                    <span class=" text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1 fa-2x text-primary"></i></span>
                </div>
                        </div>
                      </div>
                      
                    </div>
            </div>
        </div>
        <div class="col-xl-4">
          <div class="card" style="border: 1px solid #f3f8fb;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                <div class="card-header">
                    <div class="float-start">
                        <small><span><b>Date Of Publication:</b></span><br><small>January 4th 2021, 14:26</small></small>
                    </div>
                    <div class="dropdown float-end">
                        <a class="text-body font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" style="top:10px;position:absolute;">
                          <i class="fa-solid fa-ellipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">View</a>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="mb-2">
                        <img src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/babar-azam-sixteen_nine.jpg?size=948:533" alt="" class="img-fluid img">
                    </div>
                    <div class="card-body">
                      <h5 class="font-size-16 mb-1"><a href="#" class="text-dark">Babar Azam: 'हिन्दुस्तान से सीखो...', न्यूजीलैंड सीरीज के बीच बाबर आजम पर भड़का PAK दिग्गज</a></h5>
                    <p class="text-muted mb-2">पाकिस्तान टीम को घर में लगातार कई हार झेलनी पड़ी हैं, जिस न्यूजीलैंड ने पाकिस्तान को उसकेे घर में हरा दिया था. उसी टीम को टीम इंडिया ने अपने घर में घु...</p>
                    </div>

                    <div class="card-footer">
                      <div class="row">
                        <div class="col-md-6"><b>Create Draft:</b></div>
                        <div class="col-md-6">
                          <div class="btn-group float-md-end" role="group">
                    <span class=" text-truncate" title="LinkedIn "><i class="fa-brands fa-linkedin me-1 fa-2x text-primary"></i></span>
                    <span class=" text-truncate" title="Twitter"><i class="fa-brands fa-square-twitter me-1 fa-2x text-primary"></i></span>
                </div>
                        </div>
                      </div>
                      
                    </div>
            </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 filter1">
    <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
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
<input type="date" name="" id="" class="form-control">
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
.filter{
  display: none;
}
.pagination{
  --bs-pagination-border-color:#dcdcdc !important;
}
.img{
  height: 300px;
                                width: 100%;
                                object-fit: cover;
}
.fa-3x {
  font-size: 2.5rem !important;
}
.offcanvas-size-xl {
    --bs-offcanvas-width: min(95vw, 600px) !important;
}
.offcanvas-size-xxl {
    --bs-offcanvas-width: min(95vw, 90vw) !important;
}
.offcanvas-size-md { /* add Responsivenes to default offcanvas */
    --bs-offcanvas-width: min(95vw, 400px) !important;
}
.offcanvas-size-sm {
    --bs-offcanvas-width: min(95vw, 250px) !important;
}
@media screen and (max-width: 996px) {
  .fa-3x {
    font-size: 1.75rem !important;
  }
  .fa-2x{
    font-size:1.25rem !important;
  }
  .filter{
    display: grid;
  }
  .filter1{
    display: none;
  }
  .small{
    font-size: 12px !important;
  }
  small{
    font-size:10px !important;
  }
  .img{
    height: 200px;
                                width: 100%;
                                object-fit: cover;
  }
  p{
    font-size:12px !important;
  }
  div>ul>li{
    font-size:10px;
    margin-top:5px;
  }
}
@media screen and (max-width: 400px) {
  .fa-3x {
    font-size: 1.25rem !important;
  }
  .fa-2x{
    font-size:.75rem !important;
  }
  .filter{
    display: grid;
  }
  .filter1{
    display: none;
  }
  small{
    font-size:8px !important;
  }
  .img{
    height: 100px;
                                width: 100%;
                                object-fit: cover;
  }
}
</style>
