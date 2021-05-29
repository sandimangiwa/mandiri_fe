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
            <!-- {{ chartDetile }} -->
            <!-- grafik -->
            <DetailGrafik />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import DetailGrafik from "@/components/DetailGrafik";
import { mapState, mapActions } from "vuex";
export default {
  name: "Grafik",
  components: {
    Header,
    Sidebar,
    DetailGrafik,
  },
  data() {
    return {
      chart: 2,
    };
  },
  mounted() {
    this.retrieveDataGrafik();
  },
  computed: {
    ...mapState(["data"]),
    chartDetile: function() {
      console.log(this.data?.grafik);
      return this.data?.grafik;
    },
  },
  methods: {
    ...mapActions(["retrieveDataGrafik"]),
  },
};
</script>
