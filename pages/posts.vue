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
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
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
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
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
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
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
      <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
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
    <div class="col-md-3 col-sm-4 col-xs-4">
      <label for="">Select Platform</label>
      <select name="" id="" class="form-control">
        <!-- <option value="0">Select Platform</option> -->
        <option value="1">LinkedIn</option>
        <option value="2">Twitter</option>
        <option value="3">Facebook</option>
        <option value="4">Instagram</option>
      </select>
    </div>
    <div class="col-md-3 col-sm-4 col-xs-4">
      <label for="">Selct Date:</label>
      <div>
        <input type="datetime-local" name="" id="" class="form-control" />
      </div>
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-2 col-sm-2">
      <label for="">&nbsp;</label>
      <button type="button" class="btn btn-primary form-control small" data-bs-toggle="offcanvas" data-bs-target="#newDraft" aria-controls="offcanvasExample">
        <i class="fa-solid fa-plus"></i> New Draft
      </button>
    </div>
  </div>
  <!--filter end-->

  <!-- The newDraft offcanvas  -->

  <div class="offcanvas offcanvas-end offcanvas-size-xl" tabindex="-1" id="newDraft" aria-labelledby="offcanvasExampleLabel" data-bs-scroll="true">
  <div class="offcanvas-header bg-light text-white">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">New Draft</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
<!--social platform-->
<p>Social Platform</p>
          <div class="row">
            <div class="col" style="display:flex;flex-direction:row;align-items:center;">
              <i class="fa-brands fa-linkedin fa-2x text-primary"></i>&nbsp;<span>LinkedIn</span>
            </div>
            <div class="col" style="display:flex;flex-direction:row;align-items:center;">
              <i class="fa-brands fa-twitter fa-2x text-primary"></i>&nbsp;<span>Twitter</span>
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
          <div class="row py-1">
            <div class="col-md-12">
              <label for="">Label</label>
              <input type="text" name="" id="" class="form-control" />
            </div>
          </div>
  </div>
  <div class="offcanvas-footer ml-2 mb-2 bg-light">
          <button type="button" class="btn btn-primary ml-2">Save changes</button>
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

            <ul class="nav nav-underline" id="myTab" role="tablist">
  <li class="nav-item"><a class="nav-link active" id="draft-tab" data-bs-toggle="tab" href="#tab-draft" role="tab" aria-controls="tab-draft" aria-selected="true">Drafts</a></li>
  <li class="nav-item"><a class="nav-link" id="review-tab" data-bs-toggle="tab" href="#tab-review" role="tab" aria-controls="tab-review" aria-selected="false">Profile</a></li>
  <li class="nav-item"><a class="nav-link" id="client-review-tab" data-bs-toggle="tab" href="#tab-client-review" role="tab" aria-controls="tab-client-review" aria-selected="false">Client Review</a></li>
  <li class="nav-item"><a class="nav-link" id="rejected-tab" data-bs-toggle="tab" href="#tab-rejected" role="tab" aria-controls="tab-rejected" aria-selected="false">Rejected</a></li>
  <li class="nav-item"><a class="nav-link" id="scheduled-tab" data-bs-toggle="tab" href="#tab-scheduled" role="tab" aria-controls="tab-scheduled" aria-selected="false">Scheduled</a></li>
  <li class="nav-item"><a class="nav-link" id="published-tab" data-bs-toggle="tab" href="#tab-published" role="tab" aria-controls="tab-published" aria-selected="false">Published</a></li>
  <li class="nav-item"><a class="nav-link" id="expired-tab" data-bs-toggle="tab" href="#tab-expired" role="tab" aria-controls="tab-expired" aria-selected="false">Expired</a></li>
</ul>
<div class="tab-content mt-3" id="myTabContent">
  <div class="tab-pane fade show active" id="tab-draft" role="tabpanel" aria-labelledby="draft-tab"><div class="row">
                        <div class="col-xl-4 col-sm-12 col-md-6">
                          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6" style="
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
                                <div class="col-md-6  col-sm-6 d-flex justify-content-end col-xs-6">
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
                                          <a class="dropdown-item" href="#" @click="navigateTo('/post-details')"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" alt="" class="img-fluid img" />
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
                                  border: 1px solid #f3f8fb;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                             <div class="row">
                              <div class="col-md-8 col-sm-9">
                                <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success" style="position:relative;top:3px;"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                  </div>
                              </div>
                              <div class="col-xl-4">
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
                        </div>
                        <div class="col-xl-4 col-sm-12 col-md-6">
                          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6" style="
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
                                <div class="col-md-6  col-sm-6 d-flex justify-content-end col-xs-6">
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
                                                                                    <a class="dropdown-item" href="#" @click="navigateTo('/post-details')"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" alt="" class="img-fluid img" />
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
                                  border: 1px solid #f3f8fb;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                             <div class="row">
                              <div class="col-md-8 col-sm-9">
                                <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success" style="position:relative;top:3px;"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                  </div>
                              </div>
                              <div class="col-xl-4">
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
                        </div>
                        <div class="col-xl-4 col-sm-12 col-md-6">
                          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6" style="
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
                                <div class="col-md-6  col-sm-6 d-flex justify-content-end col-xs-6">
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
                                                                                    <a class="dropdown-item" href="#" @click="navigateTo('/post-details')"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" alt="" class="img-fluid img" />
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
                                  border: 1px solid #f3f8fb;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                             <div class="row">
                              <div class="col-md-8 col-sm-9">
                                <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success" style="position:relative;top:3px;"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                  </div>
                              </div>
                              <div class="col-xl-4">
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
                        </div>

                      </div></div>
  <div class="tab-pane fade" id="tab-review" role="tabpanel" aria-labelledby="review-tab"><div class="row">
                        <div class="col-xl-4 col-sm-12 col-md-6">
                          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6" style="
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
                                <div class="col-md-6  col-sm-6 d-flex justify-content-end col-xs-6">
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
                                                                                    <a class="dropdown-item" href="#" @click="navigateTo('/post-details')"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" alt="" class="img-fluid img" />
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
                                  border: 1px solid #f3f8fb;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                             <div class="row">
                              <div class="col-md-8 col-sm-9">
                                <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success" style="position:relative;top:3px;"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                  </div>
                              </div>
                              <div class="col-xl-4">
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
                        </div>
                      </div></div>
  <div class="tab-pane fade" id="tab-client-review" role="tabpanel" aria-labelledby="client-review-tab"><div class="row">
                        <div class="col-xl-4 col-sm-12 col-md-6">
                          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6" style="
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
                                <div class="col-md-6  col-sm-6 d-flex justify-content-end col-xs-6">
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
                                                                                    <a class="dropdown-item" href="#" @click="navigateTo('/post-details')"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" alt="" class="img-fluid img" />
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
                                  border: 1px solid #f3f8fb;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                             <div class="row">
                              <div class="col-md-8 col-sm-9">
                                <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success" style="position:relative;top:3px;"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                  </div>
                              </div>
                              <div class="col-xl-4">
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
                        </div>
                      </div></div>
  <div class="tab-pane fade" id="tab-rejected" role="tabpanel" aria-labelledby="rejected-tab"><div class="row">
                        <div class="col-xl-4 col-sm-12 col-md-6">
                          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6" style="
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
                                <div class="col-md-6  col-sm-6 d-flex justify-content-end col-xs-6">
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
                                                                                    <a class="dropdown-item" href="#" @click="navigateTo('/post-details')"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" alt="" class="img-fluid img" />
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
                                  border: 1px solid #f3f8fb;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                             <div class="row">
                              <div class="col-md-8 col-sm-9">
                                <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success" style="position:relative;top:3px;"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                  </div>
                              </div>
                              <div class="col-xl-4">
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
                        </div>
                      </div></div>
  <div class="tab-pane fade" id="tab-scheduled" role="tabpanel" aria-labelledby="scheduled-tab"><div class="row">
                        <div class="col-xl-4 col-sm-12 col-md-6">
                          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6" style="
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
                                <div class="col-md-6  col-sm-6 d-flex justify-content-end col-xs-6">
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
                                                                                    <a class="dropdown-item" href="#" @click="navigateTo('/post-details')"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" alt="" class="img-fluid img" />
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
                                  border: 1px solid #f3f8fb;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                             <div class="row">
                              <div class="col-md-8 col-sm-9">
                                <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success" style="position:relative;top:3px;"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                  </div>
                              </div>
                              <div class="col-xl-4">
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
                        </div>
                      </div></div>
  <div class="tab-pane fade" id="tab-published" role="tabpanel" aria-labelledby="published-tab"><div class="row">
                        <div class="col-xl-4 col-sm-12 col-md-6">
                          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6" style="
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
                                <div class="col-md-6  col-sm-6 d-flex justify-content-end col-xs-6">
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
                                                                                    <a class="dropdown-item" href="#" @click="navigateTo('/post-details')"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" alt="" class="img-fluid img" />
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
                                  border: 1px solid #f3f8fb;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                             <div class="row">
                              <div class="col-md-8 col-sm-9">
                                <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success" style="position:relative;top:3px;"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                  </div>
                              </div>
                              <div class="col-xl-4">
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
                        </div>
                      </div></div>
  <div class="tab-pane fade" id="tab-expired" role="tabpanel" aria-labelledby="expired-tab"><div class="row">
                        <div class="col-xl-4 col-sm-12 col-md-6">
                          <div class="card" style="border: 1px solid #f3f8fb; border-radius: 10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
                            <div class="card-header" style="
                                background-color: transparent;
                                border: none;
                              ">
                              <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-6" style="
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
                                <div class="col-md-6  col-sm-6 d-flex justify-content-end col-xs-6">
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
                                                                                    <a class="dropdown-item" href="#" @click="navigateTo('/post-details')"><i
                                              class="fa-solid fa-arrow-right"></i>&nbsp;Post Details</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img src="~/assets/images/modi_mother_12-sixteen_nine.webp" alt="" class="img-fluid img" />
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
                                  border: 1px solid #f3f8fb;
                                  border-radius: 50rem;
                                " class="py-2">
                                <a href="" class="rounded-pill">https://www.aajtak.in/coronavirus/story/....</a>
                              </div>
                            </div>
                            <div class="card-footer" style="background-color: rgba(147, 241, 183, 0.2)">
                             <div class="row">
                              <div class="col-md-8 col-sm-9">
                                <div style="display: flex">
                                <div class="avatar-xs">
                                        <img src="~/assets/images/users/avatar-1.jpg" alt=""
                                          class="avatar-title rounded-circle" />
                                      </div>
                                    <div style="display: flex;flex-direction: column;text-align: start;margin-left: 10px;">
                                      <small><b>Sainath Reddy</b> </small>
                                      <small style="display: flex;flex-direction: row;"><i class="fa-solid fa-clock text-success" style="position:relative;top:3px;"></i><span class="ml-2">Approved</span></small>
                                    </div>
                                  </div>
                              </div>
                              <div class="col-xl-4">
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
                        </div>
                      </div></div>
</div>
            <!-- end row -->

            <div class="row mt-4">
              <div class="col-sm-6 col-xs-6">
                <div>
                  <p class="mb-sm-0">Page 2 of 84</p>
                </div>
              </div>
              <div class="col-sm-6 col-xs-6">
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
