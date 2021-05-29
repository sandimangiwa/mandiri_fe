<template>
  <div>
    <div>
      <router-link class="router-link text-decoration-none" to="/">
        <div class="link">
          <!-- <button type="button" class="link btn"> -->
          <span class="icon"> <b-icon icon="house-fill" aria-hidden="true"></b-icon></span>
          <!-- <span class="icon-active"> <b-icon icon="house-fill" aria-hidden="true"></b-icon></span> -->
          <span class="title">Dashboard</span>
          <!-- </button> -->
        </div>
      </router-link>
      <router-link class="router-link text-decoration-none" to="/KontakMasuk">
        <div class="link">
          <!-- <button type="button" class="btn link"> -->
          <!-- <span class="icon"> <b-icon icon="house" aria-hidden="true"></b-icon></span> -->
          <span class="icon"> <b-icon icon="inboxes-fill" aria-hidden="true"></b-icon></span>
          <span class="title">Kontak Masuk</span>
          <!-- </button> -->
        </div>
      </router-link>
      <router-link class="router-link  text-decoration-none" to="/Grafik">
        <div class="link">
          <!-- <button type="button" class="btn link"> -->
          <!-- <span class="icon"> <b-icon icon="house" aria-hidden="true"></b-icon></span> -->
          <span class="icon"> <b-icon icon="bar-chart-line-fill" aria-hidden="true"></b-icon></span>
          <span class="title">Grafik</span>
          <!-- </button> -->
        </div>
      </router-link>
      <router-link class="router-link text-decoration-none" to="/InputPengaduan">
        <div class="link">
          <!-- <button type="button" class="btn link"> -->
          <!-- <span class="icon"> <b-icon icon="house" aria-hidden="true"></b-icon></span> -->
          <span class="icon"> <b-icon icon="file-earmark-plus-fill" aria-hidden="true"></b-icon></span>

          <span class="title">Input Pengaduan</span>
          <!-- </button> -->
        </div>
      </router-link>
      <router-link class="router-link text-decoration-none" to="/Notification">
        <div class="link">
          <!-- <button type="button" class="btn link"> -->
          <!-- <span class="icon"> <b-icon icon="house" aria-hidden="true"></b-icon></span> -->
          <span class="icon"> <b-icon icon="bell-fill" aria-hidden="true"></b-icon></span>
          <span class="title">Notification</span>
          <!-- </button> -->
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style></style>
