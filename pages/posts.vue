<template>
                        <!-- start page title -->
                        <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-flex align-items-center justify-content-between">
                                <h4 class="mb-0">Content Post</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Dashboard</a></li>
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Content</a></li>
                                        <li class="breadcrumb-item active">Post</li>
                                    </ol>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6"></div>
                                <div class="col-md-6"> <button type="submit" class="btn btn-primary mb-2 float-md-end"
                                        data-toggle="modal" data-target="#myModal"><span><i
                                                class="fa-solid fa-plus"></i></span> New Draft</button></div>
                            </div>

                        </div>
                    </div>
                    <!-- end page title -->

                    <div class="row">
                        <div class="col-xl-9 col-lg-8">
                            <div class="card" style="border-radius: 10px;">
                                <div class="card-body">
                                    <div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div>
                                                    <ol class="breadcrumb p-0 bg-transparent mb-2">
                                                        <li class="breadcrumb-item"><a
                                                                href="javascript: void(0);">Post</a></li>
                                                        <li class="breadcrumb-item active">Draft</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-inline float-md-end">
                                                    <div class="search-box ms-2">
                                                        <div class="position-relative">
                                                            <input type="text"
                                                                class="form-control bg-light border-light rounded"
                                                                placeholder="Search...">
                                                            <i class="fa-solid fa-magnifying-glass search-icon"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="tr-job-posted section-padding">
                                            <div class="container">
                                                <div class="job-tab">
                                                    <ul class="nav nav-tab nav-tabs-custom mt-3 mb-2 ecommerce-sortby-list"
                                                        role="tablist">
                                                        <li role="presentation" class="active nav-item">
                                                            <a class="active show nav-link" href="#draft"
                                                                aria-controls="draft" role="tab" data-toggle="tab"
                                                                aria-selected="true">Draft</a>
                                                        </li>
                                                        <li role="presentation" class="active nav-item"><a
                                                                href="#review" aria-controls="review" role="tab"
                                                                data-toggle="tab" class="nav-link"
                                                                aria-selected="false">Review</a></li>
                                                        <li role="presentation" class="active nav-item"><a
                                                                href="#client" aria-controls="client" role="tab"
                                                                data-toggle="tab" class="nav-link"
                                                                aria-selected="false">Client Review</a></li>
                                                        <li role="presentation" class="active nav-item"><a
                                                                href="#rejected" aria-controls="rejected" role="tab"
                                                                data-toggle="tab" class="nav-link"
                                                                aria-selected="false">Rejected</a></li>
                                                        <li role="presentation" class="active nav-item"><a
                                                                href="#scheduled" aria-controls="scheduled" role="tab"
                                                                data-toggle="tab" class="nav-link"
                                                                aria-selected="false">Scheduled</a></li>
                                                        <li role="presentation" class="active nav-item"><a
                                                                href="#published" aria-controls="published" role="tab"
                                                                data-toggle="tab" class="nav-link"
                                                                aria-selected="false">Published</a></li>
                                                        <li role="presentation" class="active nav-item"><a
                                                                href="#expired" aria-controls="expired" role="tab"
                                                                data-toggle="tab" class="nav-link"
                                                                aria-selected="false">Expired</a></li>
                                                    </ul>
                                                    <div class="tab-content text-left">
                                                        <div role="tabpanel" class="tab-pane fade active show"
                                                            id="draft">
                                                            <div class="row">
                                                                <div class="col-xl-6 col-sm-6 col-md-6">
                                                                    <div class="card">
                                                                        <div class="card-header"
                                                                            style="background-color: transparent;border: none;">
                                                                            <div class="row">
                                                                                <div class="col-md-6" style="display: flex;justify-content: start;">
                                                                                    <div><i
                                                                                            class="fa-brands fa-linkedin fa-2x text-primary"></i>&nbsp;&nbsp;
                                                                                            <span
                                                                                            class="mt-2" style="position: absolute;top:-4px;">28/12/2022
                                                                                            10:21</span></div>
                                                                                </div>
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
                                                                                                    <li data-toggle="modal" data-target="#myModal1"><a class="dropdown-item"
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
                                                                        <img src="~/assets/images/modi_mother_12-sixteen_nine.webp"
                                                                            alt="" class="img-fluid">
                                                                        <div class="card-body">
                                                                            <p><b>Rishabh Pant car accident: 'जलती कार
                                                                                    से दूर किया, चादर लपेटकर अस्पताल
                                                                                    भेजा...' ऋषभ पंत के लिए मसीहा बनकर
                                                                                    आया ये बस ड्राइवर</b></p>
                                                                            <small>ऋषभ पंत अपनी मर्सिडीज कार खुद चलाकर
                                                                                होम टाउन रूड़की जा रहे थे. इसी दौरान
                                                                                झपकी आई और उनकी कार डिवाइडर से टकराकर
                                                                                दुर्घटना ग्रस्त हो गई. पंत को सिर और
                                                                                घु...<span><a href="#">Read
                                                                                        more...</a></span></small>
                                                                            <br><br><small
                                                                                class="btn btn-outline-primary btn-rounded"
                                                                                style="overflow: none;">https://www.aajtak.in/sports/...</small>
                                                                        </div>
                                                                        <div class="card-footer"
                                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                                            <div class="row">
                                                                                <div class="col-md-8" style="display: flex;justify-content: start;">
                                                                                    <div
                                                                                    style="font-size: 10px;">Publish
                                                                                    Schedule:</div>
                                                                                    &nbsp;
                                                                                <div style="font-size: 10px;">Auto
                                                                                        Published on
                                                                                        Approval</div>
                                                                                </div>
                                                                                <div class="col-md-4" style="display: flex;justify-content: end;">
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
                                                                                <div class="col-md-6" style="display: flex;justify-content: start;">
                                                                                    <div><i
                                                                                            class="fa-brands fa-twitter fa-2x text-primary"></i>&nbsp;&nbsp;
                                                                                            <span
                                                                                            class="mt-2" style="position: absolute;top:-4px;">28/12/2022
                                                                                            10:21</span></div>
                                                                                </div>
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="~/assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><br><small
                                                                                class="btn btn-outline-primary btn-rounded"
                                                                                style="overflow: none;">https://www.aajtak.in/coronavirus/story/....</small>
                                                                        </div>
                                                                        <div class="card-footer"
                                                                            style="background-color: rgba(147, 241, 183, 0.2);">
                                                                            <div class="row">
                                                                                <div class="col-md-8" style="display: flex;justify-content: start;">
                                                                                    <div
                                                                                    style="font-size: 10px;">Publish
                                                                                    Schedule:</div>
                                                                                    &nbsp;
                                                                                <div style="font-size: 10px;">Auto
                                                                                        Published on
                                                                                        Approval</div>
                                                                                </div>
                                                                                <div class="col-md-4" style="display: flex;justify-content: end;">
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
                                                                                                    <li data-toggle="modal" data-target="#myModal2"><a class="dropdown-item"
                                                                                                            href="#"><i
                                                                                                                class="fa-solid fa-pencil"></i>&nbsp;
                                                                                                            Edit</a>
                                                                                                    </li>
                                                                                                    <li><a class="dropdown-item"
                                                                                                            href="#"><i
                                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;Move to Client review</a>
                                                                                                    </li>
                                                                                                    <li><a class="dropdown-item"
                                                                                                            href="#"><i
                                                                                                                class="fa-solid fa-arrow-right"></i>&nbsp;View In
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
                                                                        <img src="~/assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                            class="fa-brands fa-linkedin fa-2x text-primary"></i>&nbsp;&nbsp;<span
                                                                                            class="mt-2">28/12/2022
                                                                                            10:21</span></div>
                                                                                </div>
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                                                <div
                                                                                    class="col-md-6 d-flex justify-content-end">
                                                                                    <div>
                                                                                        <span>
                                                                                            <!-- Example split danger button -->
                                                                                            <div class="btn-group">
                                                                                                <button type="button"
                                                                                                    class="btn text-primary dropdown-toggle dropdown-toggle-split fa-solid fa-ellipsis-vertical"
                                                                                                    data-bs-toggle="dropdown"
                                                                                                    aria-expanded="false">
                                                                                                </button>
                                                                                                <ul
                                                                                                    class="dropdown-menu">
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
                                                                        <img src="assets/images/covid_8-sixteen_nine.webp"
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
                                                                            <br><small
                                                                                class="btn btn-outline-primary btn-rounded"
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
                                                                                            <small
                                                                                                style="font-size: 12px;">Publish
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
                                                            <a href="#" class="page-link"><i
                                                                    class="mdi mdi-chevron-left"></i></a>
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
                                                            <a href="#" class="page-link"><i
                                                                    class="mdi mdi-chevron-right"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-lg-4">
                            <div class="card" style="border-radius: 10px;">
                                <div class="card-header bg-transparent border-bottom">
                                    <h5 class="mb-0">Filters</h5>
                                </div>

                                <div class="p-4">
                                    <div class="custom-accordion">
                                        <select name="" id="" class="form-control" multiple>
                                            <!-- <option value="0">Select Platform</option> -->
                                            <option value="1">LinkedIn</option>
                                            <option value="2">Twitter</option>
                                            <option value="3">Facebook</option>
                                            <option value="4">Instagram</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="p-4 border-top">
                                    <div>
                                        <input type="datetime-local" name="" id="" class="form-control">
                                    </div>
                                </div>

                                <div class="custom-accordion">
                                    <div class="p-4 border-top">
                                        <div>
                                            <h5 class="font-size-14 mb-0"><a href="#filtersizes-collapse"
                                                    class="text-dark d-block" data-bs-toggle="collapse">Sizes <i
                                                        class="mdi mdi-chevron-up float-end accor-down-icon"></i></a>
                                            </h5>

                                            <div class="collapse show" id="filtersizes-collapse">
                                                <div class="mt-4">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-grow-1">
                                                            <h5 class="font-size-15 mb-0">Select Sizes</h5>
                                                        </div>
                                                        <div class="w-xs">
                                                            <select class="form-select">
                                                                <option value="1">3</option>
                                                                <option value="2">4</option>
                                                                <option value="3">5</option>
                                                                <option value="4">6</option>
                                                                <option value="5" selected>7</option>
                                                                <option value="6">8</option>
                                                                <option value="7">9</option>
                                                                <option value="8">10</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="p-4 border-top">
                                        <div>
                                            <h5 class="font-size-14 mb-0"><a href="#filterprodductcolor-collapse"
                                                    class="text-dark d-block" data-bs-toggle="collapse">Colors <i
                                                        class="mdi mdi-chevron-up float-end accor-down-icon"></i></a>
                                            </h5>

                                            <div class="collapse show" id="filterprodductcolor-collapse">
                                                <div class="mt-4">
                                                    <div class="form-check mt-2">
                                                        <input type="checkbox" class="form-check-input"
                                                            id="productcolorCheck1">
                                                        <label class="form-check-label" for="productcolorCheck1"><i
                                                                class="mdi mdi-circle text-dark mx-1"></i> Black</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="checkbox" class="form-check-input"
                                                            id="productcolorCheck2">
                                                        <label class="form-check-label" for="productcolorCheck2"><i
                                                                class="mdi mdi-circle text-light mx-1"></i>
                                                            White</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="checkbox" class="form-check-input"
                                                            id="productcolorCheck3">
                                                        <label class="form-check-label" for="productcolorCheck3"><i
                                                                class="mdi mdi-circle text-secondary mx-1"></i>
                                                            Gray</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="checkbox" class="form-check-input"
                                                            id="productcolorCheck4">
                                                        <label class="form-check-label" for="productcolorCheck4"><i
                                                                class="mdi mdi-circle text-primary mx-1"></i>
                                                            Blue</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="checkbox" class="form-check-input"
                                                            id="productcolorCheck5">
                                                        <label class="form-check-label" for="productcolorCheck5"><i
                                                                class="mdi mdi-circle text-success mx-1"></i>
                                                            Green</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="checkbox" class="form-check-input"
                                                            id="productcolorCheck6">
                                                        <label class="form-check-label" for="productcolorCheck6"><i
                                                                class="mdi mdi-circle text-danger mx-1"></i> Red</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="checkbox" class="form-check-input"
                                                            id="productcolorCheck7">
                                                        <label class="form-check-label" for="productcolorCheck7"><i
                                                                class="mdi mdi-circle text-warning mx-1"></i>
                                                            Yellow</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="checkbox" class="form-check-input"
                                                            id="productcolorCheck8">
                                                        <label class="form-check-label" for="productcolorCheck8"><i
                                                                class="mdi mdi-circle text-purple mx-1"></i>
                                                            Purple</label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="p-4 border-top">
                                        <div>
                                            <h5 class="font-size-14 mb-0"><a href="#filterproduct-color-collapse"
                                                    class="text-dark d-block" data-bs-toggle="collapse">Customer Rating
                                                    <i class="mdi mdi-chevron-up float-end accor-down-icon"></i></a>
                                            </h5>

                                            <div class="collapse show" id="filterproduct-color-collapse">
                                                <div class="mt-4">
                                                    <!-- <div class="form-check mt-2">
                                                        <input type="radio" id="productratingRadio1"
                                                            name="productratingRadio1" class="form-check-input">
                                                        <label class="form-check-label" for="productratingRadio1">4 <i
                                                                class="mdi mdi-star text-warning"></i> & Above</label>
                                                    </div> -->
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- <div class="p-4 border-top">
                                        <div>
                                            <h5 class="font-size-14 mb-0"><a href="#filterproduct-discount-collapse"
                                                    class="collapsed text-dark d-block"
                                                    data-bs-toggle="collapse">Discount <i
                                                        class="mdi mdi-chevron-up float-end accor-down-icon"></i></a>
                                            </h5>

                                            <div class="collapse" id="filterproduct-discount-collapse">
                                                <div class="mt-4">
                                                    <div class="form-check mt-2">
                                                        <input type="radio" id="productdiscountRadio1"
                                                            name="productdiscountRadio" class="form-check-input">
                                                        <label class="form-check-label" for="productdiscountRadio1">50%
                                                            or more</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="radio" id="productdiscountRadio2"
                                                            name="productdiscountRadio" class="form-check-input">
                                                        <label class="form-check-label" for="productdiscountRadio2">40%
                                                            or more</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="radio" id="productdiscountRadio3"
                                                            name="productdiscountRadio" class="form-check-input">
                                                        <label class="form-check-label" for="productdiscountRadio3">30%
                                                            or more</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="radio" id="productdiscountRadio4"
                                                            name="productdiscountRadio" class="form-check-input">
                                                        <label class="form-check-label" for="productdiscountRadio4">20%
                                                            or more</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="radio" id="productdiscountRadio5"
                                                            name="productdiscountRadio" class="form-check-input">
                                                        <label class="form-check-label" for="productdiscountRadio5">10%
                                                            or more</label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input type="radio" id="productdiscountRadio6"
                                                            name="productdiscountRadio" class="form-check-input">
                                                        <label class="form-check-label" for="productdiscountRadio6">Less
                                                            than 10%</label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div> -->

                                </div>

                            </div>
                        </div>

                    </div>
                    <!-- end row -->
</template>