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
                <small v-if="countNotif != 0" class="text-white bg-danger rounded-circle" style="padding:2px 6px;font-size:10px">{{ countNotif }}</small>
              </div>
            </template>
            <div class="notification-data">
              <b-dropdown-group id="dropdown-group-1" header="Notification">
                <b-dropdown-text v-if="countNotif != 0" style="width: 300px;">
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
                </b-dropdown-text>
                <b-dropdown-text v-if="countNotif == 0">
                  <div class="text-center">
                    <h6 class="text-info">Tidak ada Notification</h6>
                  </div>
                </b-dropdown-text>
              </b-dropdown-group>
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

            <b-dropdown-item href="#"><small></small> <b-icon icon="person" variant="dark"></b-icon> Akun</b-dropdown-item>
            <b-dropdown-item href="#"><b-icon icon="gear" variant="dark"></b-icon> Setting</b-dropdown-item>
            <b-dropdown-item href="#"><b-icon icon="box-arrow-in-right" variant="dark"></b-icon> Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </div>
      </b-navbar-nav>
    </b-navbar>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      id: 0,
      notif: "",
    };
  },

  mounted() {
    this.retrieveDataNotifLimit();
    this.retrieveDataNotifWarning();
  },
  computed: {
    ...mapState(["data"]),
    NotifLimit: function() {
      return this.data?.NotifLimit;
    },
    NotifWarning: function() {
      return this.data?.NotifWarning;
    },
    countNotif: function() {
      if (this.NotifWarning) {
        let count = (parseInt(this.NotifLimit?.length) || 0) + (parseInt(this.NotifWarning?.length) || 0);
        // console.log(this.NotifWarning?.length);
        // console.log("info", parseInt(this.NotifLimit?.length) || 0);
        return count;
      }
      return 0;
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

/* .btn-notification .btn-all {
  border-radius: px;
} */
/*

 * Navbar
 */
@import "../assets/css/header.css";
</style>
