<template>
  <div>
    <!-- <div> -->
    <b-navbar class="header fixed-top shadow-sm" type="light" variant="white">
      <h3 v-on:click="togelOpen" class="mt-2 mr-2" style="cursor:pointer">
        <b-icon icon="list" aria-hidden="true"></b-icon>
      </h3>

      <b-navbar-brand class=" text-center p-0 m-0" href="#">
        <img src="../assets/logo.png" width="100" alt="Logo MTF" class="img-fluid" />
      </b-navbar-brand>

      <b-navbar-nav class=" ml-auto">
        <div class="profile">
          <b-nav-item-dropdown variant="link" toggle-class="text-decoration-none" no-caret right>
            <template #button-content class="icon">
              <div class="notification-info">
                <div class="notification">
                  <b-icon icon="bell" variant="dark"></b-icon>
                </div>
                <small class="text-white bg-danger rounded-circle" style="padding:2px 6px;font-size:10px">1</small>
              </div>
            </template>
            <div class="notification-data">
              <router-link to="/ChatCustomer" class="text-decoration-none">
                <b-dropdown-group id="dropdown-group-1" header="Notification">
                  <b-dropdown-text style="width: 300px;">
                    <div class=" p-2 detile-notification">
                      <b-icon variant="warning" icon="exclamation-square-fill" aria-hidden="true"></b-icon>
                      <span class="ml-2 name">Joshua tege </span> <br />
                      <p class="isi-chat text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, neque?</p>
                      <p class="time text-secondary"><b-icon icon="clock-history"></b-icon> 12:12</p>
                    </div>
                  </b-dropdown-text>
                </b-dropdown-group>
              </router-link>
            </div>
            <div class="text-center btn-notification mt-2 mb-2">
              <router-link to="/Notification">
                <b-button pill class="btn-all pl-4 pr-4" variant="outline-primary" size="sm">See All . . .</b-button>
              </router-link>
            </div>
          </b-nav-item-dropdown>
        </div>

        <div class="profile">
          <b-nav-item-dropdown variant="link" toggle-class="text-decoration-none" no-caret right>
            <template #button-content class="icon">
              <div class="profile-icon">
                <img src="../assets/avatar.png" alt="avatar" class="img-fluid" />
              </div>
            </template>
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </b-navbar-nav>
    </b-navbar>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.notification-info {
  position: relative;
}
.notification-info small {
  position: absolute;
  top: 0;
}

.detile-notification {
  border-radius: 10px;
  background-color: #08205c17;
  height: 6em;
  font-size: 13px;
}

.detile-notification .name {
  font-weight: 500;
  color: black;
}
.detile-notification .isi-chat {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.detile-notification .time {
  margin-top: -14px;
  font-size: 11px;
  /* color: ; */
}

/* .btn-notification .btn-all {
  border-radius: px;
} */
/*

 * Navbar
 */
@import "../assets/css/header.css";
</style>
