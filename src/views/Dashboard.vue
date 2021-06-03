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
                      <h3 class="text-danger">9</h3>
                    </div>
                    <div class="col grafik-center text-warning ">
                      <span class="">Waiting</span>
                      <h3 class="">10</h3>
                    </div>
                    <div class="col text-dark">
                      <span class="">Total Pengaduan</span>
                      <h3 class="r">19</h3>
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
                  <span v-for="notif in NotifLimit" :key="notif.id">
                    <div @click="updateNotif(notif.user_id, notif.id)" class="text-decoration-none " style="cursor:pointer">
                      <div class="mb-2 p-2 detile-notification border border-info">
                        <b-icon variant="info" icon="info-square-fill" aria-hidden="true"></b-icon>
                        <span class="ml-2 name">{{ notif.nama }} </span> <br />
                        <p class="isi-chat text-secondary">{{ notif.isi_pengaduan }}</p>
                        <p class="time text-secondary"><b-icon icon="clock-history"></b-icon> {{ notif.Tanggal }}</p>
                      </div>
                    </div>
                  </span>
                  <span v-for="notif in NotifWarning" :key="notif.id">
                    <div @click="updateNotif(notif.user_id, notif.progress)" class="text-decoration-none " style="cursor:pointer">
                      <div class="mb-2 p-2 detile-notification border border-danger">
                        <b-icon variant="danger" icon="exclamation-square-fill" aria-hidden="true"></b-icon>
                        <span class="ml-2 name">{{ notif.nama }} </span> <br />
                        <p class="isi-chat text-secondary">{{ notif.isi_pengaduan }}</p>
                        <p class="time text-secondary">
                          <span class="text-danger border border-danger p-1 rounded">{{ notif.progress }}</span> <b-icon icon="clock-history"></b-icon> {{ notif.tgl_masuk }}
                        </p>
                      </div>
                    </div>
                  </span>
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
    NotifWarning: function() {
      return this.data?.NotifWarning;
    },
  },
  methods: {
    ...mapActions(["retrieveDataNotifLimit", "updateDataNotifLimit", "retrieveDataNotifWarning"]),
    updateNotif(id, info) {
      console.log(id, info);
      const data = {
        id: parseInt(info),
        notif: "TRUE",
      };
      if (info == "pending" || info == "progress") {
        this.$router.push(`/ChatCustomer/${id}`);
      } else {
        this.$router.push(`/ChatCustomer/${id}`);
        this.updateDataNotifLimit(data);
        this.retrieveDataNotifLimit();
      }
    },
  },
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
</style>
