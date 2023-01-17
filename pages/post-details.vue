<template>
  <div>
    <div class="right-bar">
      <div data-simplebar class="h-100">
        <div
          class="rightbar-title d-flex align-items-center p-3 bg-light text-primary"
        >
          <h5 class="m-0 me-2">Post Deatils - Comment</h5>

          <a href="javascript:void(0);" class="right-bar-toggle ms-auto">
            <i class="fa-solid fa-close noti-icon"></i>
          </a>
        </div>

        <!-- Settings -->
        <hr class="m-0" />

        <div class="p-4">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div
                  class="col-md-6"
                  style="
                    display: flex;
                    justify-content: start;
                    text-align: center;
                  "
                >
                  <div style="display: flex">
                    <i class="fa-brands fa-linkedin text-primary fa-3x"></i>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        text-align: start;
                        margin-left: 10px;
                      "
                    >
                      <small><b>Bussiness Post</b> </small>
                      <small style="display: flex; flex-direction: column"
                        >28/12/2022 10:21</small
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6"
                  style="
                    display: flex;
                    justify-content: end;
                    text-align: center;
                  "
                >
                  <div style="display: flex">
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-xs rounded-circle me-2"
                    />
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        text-align: start;
                        margin-left: 10px;
                      "
                    >
                      <small><b>Nibhash Mishra</b> </small>
                      <small style="display: flex; flex-direction: column"
                        >Dec 19 ,2022</small
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div
                  class="col-md-6"
                  style="
                    display: flex;
                    justify-content: start;
                    text-align: center;
                  "
                >
                  <div style="display: flex">
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      alt=""
                      class="avatar-xs rounded-circle me-2"
                    />
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        text-align: start;
                        margin-left: 10px;
                      "
                    >
                      <small><b>Nibhash Mishra</b> </small>
                      <small style="display: flex; flex-direction: column"
                        >Dec 19 ,2022</small
                      >
                    </div>
                  </div>
                </div>
              </div>
              <small>Nice advice</small>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-md-10">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                    class="form-control"
                    placeholder="Add Comment"
                  ></textarea>
                </div>
                <div class="col-md-2">
                  <button type="submit" class="form-control text-primary">
                    <i class="fa-sharp fa-solid fa-paper-plane-top"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>
  </div>
</template>
