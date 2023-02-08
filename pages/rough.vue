
<script setup>
definePageMeta({
  layout: "empty",
});
</script>
  <!-- @click="options=!options" -->

<template>
  <!-- The add partners Modal -->
  <div class="modal" id="partners" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Add Parters</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <label for="">Partner Code</label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder="Enter Partner Code"
              />
            </div>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send Request</button>
        </div>
      </div>
    </div>
  </div>

  <!-- The manage user Modal -->
  <div class="modal" id="manageUser">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Razorlabz User's</h4>
          <button type="button" class="btn-close" data-dismiss="modal"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <div class="row py-1">
            <div class="col-md-6">
              <label for="">Username</label>
              <input
                type="text"
                name=""
                id=""
                class="form-control"
                placeholder="Enter User's username"
              />
            </div>
            <div class="col-md-6">
              <label for="">Select Role</label>
              <select name="" id="" class="form-control">
                <option value="0">Select a Role</option>
                <option value="1">Leader</option>
                <option value="2">Client Admin</option>
              </select>
            </div>
          </div>
          <div class="row py-1">
            <div class="col-md-12">
              <label for="">Select Workspaces</label>
              <select name="" id="" class="form-control">
                <option value="0">Select Workspaces</option>
                <option value="1">Edelman</option>
                <option value="2">Razorlabz</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">
            Add User
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- The revoke Modal -->
  <div class="modal" id="revoke">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Confirmation</h4>
          <button type="button" class="btn-close" data-dismiss="modal"></button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <p>Do you really want to revoke the request?</p>
          <div class="row py-1">
            <label for="">Remarks</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              class="form-control"
              placeholder="Enter Remarks"
            ></textarea>
          </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">
            Close
          </button>
          <button class="btn btn-primary">Revoke</button>
        </div>
      </div>
    </div>
  </div>

</template>


