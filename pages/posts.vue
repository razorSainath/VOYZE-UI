<script setup>
let pageTitle = useState('pageTitle')
      pageTitle.value = "Posts" 
</script>



<template>

<head>
        <title>Posts | Voyze</title>
    </head>
  <!--analytics bg-white dark:bg-gray-800 rounded-lg shadow h-full p-6s start-->
  <div class="flex gap-3 py-2">
    <div class="w-3/12">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow h-full p-6">
          <div class="float-right mt-2">
            <div id="total-revenue-chart" data-colors='["--bs-primary"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1 text-2xl"><span data-plugin="counterup">152</span></h4>
            <p class="text-slate-400 mb-0">Total Posts</p>
          </div>
          <p class="text-slate-400 mt-3 mb-0">
            <span class="text-green-400 me-1"><i class="mdi mdi-arrow-up-bold me-1"></i>2.65%</span>
            since last week
          </p>
      </div>
    </div>
    <!-- end col-->

    <div class="w-3/12">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow h-full p-6">
          <div class="float-end mt-2"></div>
          <div>
            <h4 class="mb-1 mt-1 text-2xl"><span data-plugin="counterup">43</span></h4>
            <p class="text-slate-400 mb-0">Published</p>
          </div>
          <p class="text-slate-400 mt-3 mb-0">
            <span class="text-red-400 me-1"><i class="mdi mdi-arrow-down-bold me-1"></i>0.82%</span>
            since last week
          </p>
      </div>
    </div>
    <!-- end col-->

    <div class="w-3/12">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow h-full p-6">
          <div class="float-end mt-2">
            <div id="customers-chart" data-colors='["--bs-primary"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1 text-2xl"><span data-plugin="counterup">54</span></h4>
            <p class="text-slate-400 mb-0">Review</p>
          </div>
          <p class="text-slate-400 mt-3 mb-0">
            <span class="text-red-400 me-1"><i class="mdi mdi-arrow-down-bold me-1"></i>6.24%</span>
            since last week
          </p>
      </div>
    </div>
    <!-- end col-->

    <div class="w-3/12">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow h-full p-6">
          <div class="float-end mt-2">
            <div id="growth-chart" data-colors='["--bs-warning"]'></div>
          </div>
          <div>
            <h4 class="mb-1 mt-1 text-2xl">
              + <span data-plugin="counterup">12.58</span>%
            </h4>
            <p class="text-slate-400 mb-0">Growth</p>
          </div>
          <p class="text-slate-400 mt-3 mb-0">
            <span class="text-green-400 me-1"><i class="mdi mdi-arrow-up-bold me-1"></i>10.51%</span>
            since last week
          </p>
      </div>
    </div>
    <!-- end col-->
  </div>
  <!--analtics bg-white dark:bg-gray-800 rounded-lg shadow h-full p-6s end-->
  <!-- end page title -->
  <!--filter start-->
  <div class="flex py-2 gap-3">
    <div class="w-3/12 py-1">
                  <div class="search-box">
                    <div class="relative">
                      <input type="text" class="" placeholder="Search..." style="display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;">
                      <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    </div>
                  </div>
    </div>
    <div class="w-3/12 py-1">
      <select name="" id="" class="border-1" style="display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;">
        <option value="0">Select Platform</option>
        <option value="1">LinkedIn</option>
        <option value="2">Twitter</option>
        <option value="3">Facebook</option>
        <option value="4">Instagram</option>
      </select>
    </div>
    <div class="w-3/12 py-1">
      <div>
        <input type="datetime-local" name="" id="" class="" style="display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;" />
      </div>
    </div>
    <div class="w-1/12"></div>
    <div class="w-2/12">
      <button type="button" class="bg-cyan-500 rounded-lg p-2 text-white float-right small md:float-right" data-bs-toggle="offcanvas" data-bs-target="#newDraft" aria-controls="offcanvasExample" >
        <i class="fa-solid fa-plus"></i> New Draft
      </button>
    </div>
  </div>
  <!--filter end-->

<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Draft</button>
        </li>
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Profile</button>
        </li>
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Client Review</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Rejected</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Scheduled</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Published</button>
        </li>
        <li role="presentation">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Expired</button>
        </li>
    </ul>
</div>
<div id="myTabContent">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>
</div>
</template>

<style scoped>
.img{
  height: 300px;
                                width: 100%;
                                object-fit: cover;
}
.search-box .form-control{
  border-radius: none !important;
}
.fa-3x {
  font-size: 2.5rem !important;
}
.fa-2x{
  font-size:15px !important;
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
