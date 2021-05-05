<template>
  <div>
    <Header />
    <div class="container-fluid" style="padding-top:70px">
      <div class="row">
        <div class="sidebar col-lg-2">
          <div class="position">
            <Sidebar />
          </div>
        </div>
        <div class="col">
          <div class="grafik p-3">
            <h5 class="grafik-title">Grafik Pengaduan</h5>
            <div class="container-fluid InputPengaduan-container bg-white p-4 mt-4">
              <div class="row text-center">
                <div class="col">
                  <span class="text-danger">Urgent</span>
                  <h3 class="text-danger">232.232</h3>
                </div>
                <div class="col grafik-center text-warning ">
                  <span class="">Waiting</span>
                  <h3 class="">232.232</h3>
                </div>
                <div class="col text-dark">
                  <span class="">Spam</span>
                  <h3 class="r">232.232</h3>
                </div>
              </div>
            </div>

            <!-- grafik -->
            <div class="container-fluid InputPengaduan-container bg-white p-4 mt-4">
              <h6 class="grafik-title">Jumlah Pengaduan</h6>
              <div class="row text-center">
                <div class="col">
                  <span class="text-danger">Urgent</span>
                  <h3 class="text-danger">232.232</h3>
                </div>
                <div class="col grafik-center text-warning ">
                  <span class="">Waiting</span>
                  <h3 class="">232.232</h3>
                </div>
                <div class="col text-dark">
                  <span class="">Spam</span>
                  <h3 class="r">232.232</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default {
  name: "Grafik",
  components: {
    Header,
    Sidebar,
  },
};
</script>
<style scoped>
@import "../assets/css/grafik.css";
</style>
