<template>
  <div>
    <Header />
    <div class="container-fluid" style="padding-top:70px">
      <div class="row">
        <div class="sidebar col-lg-2 ">
          <div class="position">
            <Sidebar />
          </div>
        </div>
        <div class="col ">
          <div class="container-fluid dashboard p-3">
            <h5 class="dashboard-title ">Dashboard</h5>
            <!-- <div class=" mt-3"> -->
            <div class="row mt-3">
              <div class="col-lg-8 mb-3">
                <div class="dashboard-container bg-white p-4 ">
                  <div class="row text-center">
                    <div class="col">
                      <span class="text-danger">Urgent</span>
                      <h3 class="text-danger">232.232</h3>
                    </div>
                    <div class="col dashboard-center text-warning ">
                      <span class="">Waiting</span>
                      <h3 class="">232.232</h3>
                    </div>
                    <div class="col text-dark">
                      <span class="">Spam</span>
                      <h3 class="r">232.232</h3>
                    </div>
                  </div>
                </div>

                <!-- chart -->
                <div class="dashboard-container bg-white p-4 mt-4">
                  <DetailGrafik />
                </div>
                <div class="dashboard-container bg-white p-4 mt-4">
                  <DetailGrafikTotal />
                </div>
              </div>
              <div class="col-lg-4 mb-3">
                <div class="notification-new bg-white p-3">
                  <h6 class="notification-title">Notification</h6>
                  <div class="notification-detail container-fluid" v-for="notif in NotifLimit" :key="notif.id">
                    <router-link to="/ChatCustomer" class="text-decoration-none">
                      <div class="info-user row">
                        <!-- <img src="../assets/avatar.png" alt="avatar" class="" width="50" height="50" /> -->
                        <div class="info-user-detail col">
                          <div>
                            <b-icon variant="warning" icon="exclamation-square-fill" aria-hidden="true"></b-icon>

                            <span class="ml-2 name">{{ notif.nama }} </span> <br />
                            <p class="isi-chat">{{ notif.isi_pengaduan }}</p>
                            <p class="time"><b-icon icon="clock-history"></b-icon> {{ notif.Tanggal }}</p>
                          </div>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- </div> -->
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
import DetailGrafikTotal from "@/components/DetailGrafikTotal";
import { mapActions, mapState } from "vuex";
export default {
  name: "Dashboard",
  components: {
    Header,
    Sidebar,
    DetailGrafikTotal,
    DetailGrafik,
  },
  data() {
    return {
      chart: 2,
    };
  },
  mounted() {
    this.retrieveDataNotifLimit();
  },
  computed: {
    ...mapState(["data"]),
    NotifLimit: function() {
      return this.data?.NotifLimit;
    },
  },
  methods: {
    ...mapActions(["retrieveDataNotifLimit"]),
  },
};
</script>
<style></style>
