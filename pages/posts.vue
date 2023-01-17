<template>
  <div class="row">
    <div class="col-12">
      <div class="page-title-box d-flex align-items-center justify-content-between">
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
            <span class="text-success me-1"><i class="mdi mdi-arrow-up-bold me-1"></i>2.65%</span>
            since last week
          </p>
        </div>
      </div>
    </div>
    <!-- end col-->

    <div class="col-md-6 col-xl-3">
      <div class="card">
        <div class="card-body">
          <div class="float-end mt-2"></div>
          <div>
            <h4 class="mb-1 mt-1"><span data-plugin="counterup">43</span></h4>
            <p class="text-muted mb-0">Published</p>
          </div>
          <p class="text-muted mt-3 mb-0">
            <span class="text-danger me-1"><i class="mdi mdi-arrow-down-bold me-1"></i>0.82%</span>
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
            <span class="text-danger me-1"><i class="mdi mdi-arrow-down-bold me-1"></i>6.24%</span>
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
            <span class="text-success me-1"><i class="mdi mdi-arrow-up-bold me-1"></i>10.51%</span>
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
      <button type="button" class="btn btn-primary form-control" data-bs-toggle="modal" data-bs-target="#newDraft">
        <i class="fa-solid fa-plus"></i> New Draft
      </button>
    </div>
  </div>
  <!--filter end-->

  <!-- The Modal -->
  <div class="modal fade" id="newDraft" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Content Drafts</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <!--social platform-->
          <p>Social Platform</p>
          <div class="row">
            <div class="col">
              <i class="fa-brands fa-linkedin fa-2x"></i>&nbsp;<span>LinkedIn</span>
            </div>
            <div class="col">
              <i class="fa-brands fa-twitter fa-2x"></i>&nbsp;<span>Twitter</span>
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
          </div>
          <hr />
          <!--draft content start-->
          <div class="row py-1">
            <div class="col-md-6">
              <label for="">Leader</label>
              <input type="text" name="" id="" disabled placeholder="PuneetLeader" class="form-control" />
            </div>
            <div class="col-md-6">
              <label for="">Categories</label>
              <select name="" id="" class="form-control">
                <option value="0">Select Category</option>
                <option value="1">ArtificialIntellige</option>
                <option value="2">Blockchain</option>
                <option value="3">Business Post</option>
                <option value="4">Crypto Currency</option>
                <option value="5">Data Structure</option>
                <option value="6">Environment</option>
                <option value="7">Experimental</option>
                <option value="8">Gaming</option>
                <option value="9">Geometry</option>
                <option value="10">Jumba</option>
                <option value="11">Regular Post</option>
                <option value="12">Rubics</option>
                <option value="13">Rubix</option>
                <option value="14">Serverless</option>
                <option value="15">Social Post</option>
                <option value="16">Tech Articles</option>
              </select>
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-6">
              <label for="">Content URL</label>
              <input type="text" name="" id="" class="form-control" placeholder="Content URL" />
            </div>
            <div class="col-md-6">
              <label for="">Title</label>
              <input type="text" name="" id="" class="form-control" placeholder="Title" />
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-12">
              <label for="">Post Content
                <span><i class="fa-solid fa-star-of-life text-danger fa-1x"></i></span></label>
              <textarea name="" id="" cols="30" rows="3" class="form-control"></textarea>
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-12">
              <label for="">Upload Media</label>
              <input type="file" name="" id="" class="form-control" accept=".png, .jpeg, .jpg" />
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-12">
              <label for="">Label</label>
              <input type="text" name="" id="" class="form-control" />
            </div>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-success">Save changes</button>
        </div>
      </div>
    </div>
  </div>

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
                      <input type="text" class="form-control bg-light border-light rounded" placeholder="Search..." />
                      <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tr-job-posted section-padding">
              <div class="container-fluid">
                <div class="job-tab">
                  <ul class="nav nav-pills" id="pill-myTab" role="tablist">
                    <li class="nav-item btn-primary">
                      <a class="nav-link active" id="pill-drafts-tab" data-bs-toggle="tab" href="#pill-tab-drafts"
                        role="tab" aria-controls="pill-tab-drafts" aria-selected="true">Drafts</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="pill-review-tab" data-bs-toggle="tab" href="#pill-tab-review" role="tab"
                        aria-controls="pill-tab-review" aria-selected="false">Review</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="pill-client-review-tab" data-bs-toggle="tab"
                        href="#pill-tab-client-review" role="tab" aria-controls="pill-tab-client-review"
                        aria-selected="false">Client Reviews</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="pill-rejected-tab" data-bs-toggle="tab" href="#pill-tab-rejected"
                        role="tab" aria-controls="pill-tab-rejected" aria-selected="true">Rejected</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="pill-scheduled-tab" data-bs-toggle="tab" href="#pill-tab-scheduled"
                        role="tab" aria-controls="pill-tab-scheduled" aria-selected="false">Scheduled</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="pill-published-tab" data-bs-toggle="tab" href="#pill-tab-published"
                        role="tab" aria-controls="pill-tab-published" aria-selected="false">Published</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" id="pill-expired-tab" data-bs-toggle="tab" href="#pill-tab-expired" role="tab"
                        aria-controls="pill-tab-expired" aria-selected="false">Expired</a>
                    </li>
                  </ul>
                  <div class="tab-content border p-3 mt-3" id="pill-myTabContent">
                    <div class="tab-pane fade show active" id="pill-tab-drafts" role="tabpanel"
                      aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div style="display: flex">
                                    <i class="fa-brands fa-linkedin text-primary fa-3x"></i>
                                    <div style="
                                        display: flex;
                                        flex-direction: column;
                                        text-align: start;
                                        margin-left: 10px;
                                      ">
                                      <small><b>Bussiness Post</b> </small>
                                      <small style="
                                          display: flex;
                                          flex-direction: column;
                                        ">28/12/2022 10:21</small>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary fa-2x"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary fa-2x"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " alt="" class="img-fluid" />
                            <div class="card-body">
                              <p>
                                <b>Rishabh Pant car accident: 'जलती कार से दूर
                                  किया, चादर लपेटकर अस्पताल भेजा...' ऋषभ पंत के
                                  लिए मसीहा बनकर आया ये बस ड्राइवर</b>
                              </p>
                              <small>ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर होम टाउन
                                रूड़की जा रहे थे. इसी दौरान झपकी आई और उनकी कार
                                डिवाइडर से टकराकर दुर्घटना ग्रस्त हो गई. पंत को
                                सिर और घु...<span><a href="#">Read more...</a></span></small>
                              <br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                    <div class="d-flex float-md-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success fa-2x"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark fa-2x"
                                      title="Scheduled time and date"></i></span>
                                </div>
                                  </div>
                                
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6 d-flex text-align-stretch flex-wrap">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div>
                                    <i class="fa-brands fa-twitter-square text-primary fa-2x"></i>&nbsp;&nbsp;
                                    <small><b>Education Post</b> </small>&nbsp;&nbsp;
                                    <small>28/12/2022 10:21</small>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " />
                            <div class="card-body">
                              <p>
                                <b>Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b>
                              </p>
                              <small class="py-2">Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small><br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade show active" id="pill-tab-review" role="tabpanel"
                      aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div style="display: flex">
                                    <i class="fa-brands fa-linkedin text-primary fa-3x"></i>
                                    <div style="
                                        display: flex;
                                        flex-direction: column;
                                        text-align: start;
                                        margin-left: 10px;
                                      ">
                                      <small><b>Bussiness Post</b> </small>
                                      <small style="
                                          display: flex;
                                          flex-direction: column;
                                        ">28/12/2022 10:21</small>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary fa-2x"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary fa-2x"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " alt="" class="img-fluid" />
                            <div class="card-body">
                              <p>
                                <b>Rishabh Pant car accident: 'जलती कार से दूर
                                  किया, चादर लपेटकर अस्पताल भेजा...' ऋषभ पंत के
                                  लिए मसीहा बनकर आया ये बस ड्राइवर</b>
                              </p>
                              <small>ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर होम टाउन
                                रूड़की जा रहे थे. इसी दौरान झपकी आई और उनकी कार
                                डिवाइडर से टकराकर दुर्घटना ग्रस्त हो गई. पंत को
                                सिर और घु...<span><a href="#">Read more...</a></span></small>
                              <br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6 d-flex text-align-stretch flex-wrap">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div>
                                    <i class="fa-brands fa-twitter-square text-primary fa-2x"></i>&nbsp;&nbsp;
                                    <small><b>Education Post</b> </small>&nbsp;&nbsp;
                                    <small>28/12/2022 10:21</small>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " />
                            <div class="card-body">
                              <p>
                                <b>Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b>
                              </p>
                              <small class="py-2">Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small><br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade show active" id="pill-tab-client-review" role="tabpanel"
                      aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div style="display: flex">
                                    <i class="fa-brands fa-linkedin text-primary fa-3x"></i>
                                    <div style="
                                        display: flex;
                                        flex-direction: column;
                                        text-align: start;
                                        margin-left: 10px;
                                      ">
                                      <small><b>Bussiness Post</b> </small>
                                      <small style="
                                          display: flex;
                                          flex-direction: column;
                                        ">28/12/2022 10:21</small>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary fa-2x"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary fa-2x"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " alt="" class="img-fluid" />
                            <div class="card-body">
                              <p>
                                <b>Rishabh Pant car accident: 'जलती कार से दूर
                                  किया, चादर लपेटकर अस्पताल भेजा...' ऋषभ पंत के
                                  लिए मसीहा बनकर आया ये बस ड्राइवर</b>
                              </p>
                              <small>ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर होम टाउन
                                रूड़की जा रहे थे. इसी दौरान झपकी आई और उनकी कार
                                डिवाइडर से टकराकर दुर्घटना ग्रस्त हो गई. पंत को
                                सिर और घु...<span><a href="#">Read more...</a></span></small>
                              <br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6 d-flex text-align-stretch flex-wrap">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div>
                                    <i class="fa-brands fa-twitter-square text-primary fa-2x"></i>&nbsp;&nbsp;
                                    <small><b>Education Post</b> </small>&nbsp;&nbsp;
                                    <small>28/12/2022 10:21</small>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " />
                            <div class="card-body">
                              <p>
                                <b>Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b>
                              </p>
                              <small class="py-2">Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small><br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade show active" id="pill-tab-rejected" role="tabpanel"
                      aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div style="display: flex">
                                    <i class="fa-brands fa-linkedin text-primary fa-3x"></i>
                                    <div style="
                                        display: flex;
                                        flex-direction: column;
                                        text-align: start;
                                        margin-left: 10px;
                                      ">
                                      <small><b>Bussiness Post</b> </small>
                                      <small style="
                                          display: flex;
                                          flex-direction: column;
                                        ">28/12/2022 10:21</small>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary fa-2x"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary fa-2x"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " alt="" class="img-fluid" />
                            <div class="card-body">
                              <p>
                                <b>Rishabh Pant car accident: 'जलती कार से दूर
                                  किया, चादर लपेटकर अस्पताल भेजा...' ऋषभ पंत के
                                  लिए मसीहा बनकर आया ये बस ड्राइवर</b>
                              </p>
                              <small>ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर होम टाउन
                                रूड़की जा रहे थे. इसी दौरान झपकी आई और उनकी कार
                                डिवाइडर से टकराकर दुर्घटना ग्रस्त हो गई. पंत को
                                सिर और घु...<span><a href="#">Read more...</a></span></small>
                              <br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6 d-flex text-align-stretch flex-wrap">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div>
                                    <i class="fa-brands fa-twitter-square text-primary fa-2x"></i>&nbsp;&nbsp;
                                    <small><b>Education Post</b> </small>&nbsp;&nbsp;
                                    <small>28/12/2022 10:21</small>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " />
                            <div class="card-body">
                              <p>
                                <b>Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b>
                              </p>
                              <small class="py-2">Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small><br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade show active" id="pill-tab-scheduled" role="tabpanel"
                      aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div style="display: flex">
                                    <i class="fa-brands fa-linkedin text-primary fa-3x"></i>
                                    <div style="
                                        display: flex;
                                        flex-direction: column;
                                        text-align: start;
                                        margin-left: 10px;
                                      ">
                                      <small><b>Bussiness Post</b> </small>
                                      <small style="
                                          display: flex;
                                          flex-direction: column;
                                        ">28/12/2022 10:21</small>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary fa-2x"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary fa-2x"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " alt="" class="img-fluid" />
                            <div class="card-body">
                              <p>
                                <b>Rishabh Pant car accident: 'जलती कार से दूर
                                  किया, चादर लपेटकर अस्पताल भेजा...' ऋषभ पंत के
                                  लिए मसीहा बनकर आया ये बस ड्राइवर</b>
                              </p>
                              <small>ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर होम टाउन
                                रूड़की जा रहे थे. इसी दौरान झपकी आई और उनकी कार
                                डिवाइडर से टकराकर दुर्घटना ग्रस्त हो गई. पंत को
                                सिर और घु...<span><a href="#">Read more...</a></span></small>
                              <br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6 d-flex text-align-stretch flex-wrap">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div>
                                    <i class="fa-brands fa-twitter-square text-primary fa-2x"></i>&nbsp;&nbsp;
                                    <small><b>Education Post</b> </small>&nbsp;&nbsp;
                                    <small>28/12/2022 10:21</small>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " />
                            <div class="card-body">
                              <p>
                                <b>Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b>
                              </p>
                              <small class="py-2">Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small><br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade show active" id="pill-tab-published" role="tabpanel"
                      aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div style="display: flex">
                                    <i class="fa-brands fa-linkedin text-primary fa-3x"></i>
                                    <div style="
                                        display: flex;
                                        flex-direction: column;
                                        text-align: start;
                                        margin-left: 10px;
                                      ">
                                      <small><b>Bussiness Post</b> </small>
                                      <small style="
                                          display: flex;
                                          flex-direction: column;
                                        ">28/12/2022 10:21</small>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary fa-2x"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary fa-2x"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " alt="" class="img-fluid" />
                            <div class="card-body">
                              <p>
                                <b>Rishabh Pant car accident: 'जलती कार से दूर
                                  किया, चादर लपेटकर अस्पताल भेजा...' ऋषभ पंत के
                                  लिए मसीहा बनकर आया ये बस ड्राइवर</b>
                              </p>
                              <small>ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर होम टाउन
                                रूड़की जा रहे थे. इसी दौरान झपकी आई और उनकी कार
                                डिवाइडर से टकराकर दुर्घटना ग्रस्त हो गई. पंत को
                                सिर और घु...<span><a href="#">Read more...</a></span></small>
                              <br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6 d-flex text-align-stretch flex-wrap">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div>
                                    <i class="fa-brands fa-twitter-square text-primary fa-2x"></i>&nbsp;&nbsp;
                                    <small><b>Education Post</b> </small>&nbsp;&nbsp;
                                    <small>28/12/2022 10:21</small>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " />
                            <div class="card-body">
                              <p>
                                <b>Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b>
                              </p>
                              <small class="py-2">Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small><br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade show active" id="pill-tab-expired" role="tabpanel"
                      aria-labelledby="home-tab">
                      <div class="row">
                        <div class="col-xl-6 col-sm-6 col-md-6">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div style="display: flex">
                                    <i class="fa-brands fa-linkedin text-primary fa-3x"></i>
                                    <div style="
                                        display: flex;
                                        flex-direction: column;
                                        text-align: start;
                                        margin-left: 10px;
                                      ">
                                      <small><b>Bussiness Post</b> </small>
                                      <small style="
                                          display: flex;
                                          flex-direction: column;
                                        ">28/12/2022 10:21</small>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary fa-2x"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary fa-2x"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " alt="" class="img-fluid" />
                            <div class="card-body">
                              <p>
                                <b>Rishabh Pant car accident: 'जलती कार से दूर
                                  किया, चादर लपेटकर अस्पताल भेजा...' ऋषभ पंत के
                                  लिए मसीहा बनकर आया ये बस ड्राइवर</b>
                              </p>
                              <small>ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर होम टाउन
                                रूड़की जा रहे थे. इसी दौरान झपकी आई और उनकी कार
                                डिवाइडर से टकराकर दुर्घटना ग्रस्त हो गई. पंत को
                                सिर और घु...<span><a href="#">Read more...</a></span></small>
                              <br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-xl-6 col-sm-6 col-md-6 d-flex text-align-stretch flex-wrap">
                          <div class="card">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6" style="
                                    display: flex;
                                    justify-content: start;
                                    text-align: center;
                                  ">
                                  <div>
                                    <i class="fa-brands fa-twitter-square text-primary fa-2x"></i>&nbsp;&nbsp;
                                    <small><b>Education Post</b> </small>&nbsp;&nbsp;
                                    <small>28/12/2022 10:21</small>
                                  </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end">
                                  <div class="d-flex">
                                    <div>
                                      <i class="fa-solid fa-comment text-primary"></i><span
                                        class="badge badge-danger">4</span>
                                    </div>
                                    <div>
                                      <i class="fa-solid fa-pen-to-square text-primary"></i>
                                    </div>
                                    <div class="btn-group" style="position: relative; top: -7px">
                                      <button type="button" class="btn text-primary dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                      </button>
                                      <ul class="dropdown-menu">
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Move to review</a>
                                        </li>
                                        <li>
                                          <a class="dropdown-item" href="#"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/covid_8-sixteen_nine.webp" alt="" class="img-fluid" style="
                                height: 300px;
                                width: 100%;
                                object-fit: cover;
                              " />
                            <div class="card-body">
                              <p>
                                <b>Doesn't it feel cold? Rahul Gandhi said -
                                  Only T Shirt is working...when it will not
                                  work, we will see</b>
                              </p>
                              <small class="py-2">Congress is celebrating its foundation day
                                today. During this, Rahul Gandhi reached the
                                Congress office in T-shirt only. When Rahul
                                Gandhi was asked a
                                <span><a href="#">Read more...</a></span></small><br /><br />
                              <div style="
                                  border: 1px solid #dcdcdc;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                              <div class="row">
                                <div class="col-md-8">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-shrink-0 me-4">
                                      <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    </div>
                                    <div class="flex-grow-1 align-self-center">
                                      <div class="border-bottom">
                                        <small class="text-truncate font-size-10">
                                          <a href="#" class="text-dark">Sainath Reddy</a>
                                        </small>
                                        &nbsp;
                                        <small class="text-success font-size-10">
                                          <i class="fa-solid fa-clock"></i>
                                          Approved
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 d-flex justify-content-end">
                                  <span><i class="fa-sharp fa-solid fa-clock-rotate-left text-success"
                                      title="Auto Publish"></i></span>&nbsp;&nbsp;
                                  <span><i class="fa-solid fa-calendar-days text-dark"
                                      title="Scheduled time and date"></i></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
      </div>
    </div>
  </div>
</template>

<style scoped>
.fa-3x {
  font-size: 2.5rem !important;
}
</style>
