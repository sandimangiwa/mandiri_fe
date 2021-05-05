<template>
  <div>
    <div>
      <b-navbar class="header fixed-top shadow-sm" toggleable="lg" type="light" variant="white">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand class=" brend col-md-3 col-lg-2 text-center p-0 m-0" href="#">
          <img src="../assets/logo.png" width="100" alt="Logo MTF" class="img-fluid" />
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div class="notification">
              <b-icon icon="bell"></b-icon>
            </div>
            <div class="profile">
              <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret right>
                <template #button-content class="icon">
                  <div class="profile-icon">
                    <img src="../assets/avatar.png" alt="avatar" class="img-fluid" />
                  </div>
                </template>
                <b-dropdown-item href="#">Action</b-dropdown-item>
                <b-dropdown-item href="#">Another action</b-dropdown-item>
                <b-dropdown-item href="#">Logout</b-dropdown-item>
              </b-dropdown>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/*
 * Navbar
 */
@import "../assets/css/header.css";
</style>
