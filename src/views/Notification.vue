<template>
  <div>
    <div class="Notification">
      <Header />
      <div class="container-fluid" style="padding-top:70px">
        <div class="row">
          <div class="sidebar col-lg-2">
            <div class="position">
              <Sidebar />
            </div>
          </div>

          <div class="col mt-2 mb-2">
            <div class="Notification p-3">
              <h5 class="text-drak">Notification</h5>

              <h6 v-if="NotifWarning" class="Notification-title">Harus Dikerjakan</h6>
              <!-- {{ NotifWarning }} -->
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-3" v-for="notif in NotifWarning" :key="notif.id">
                  <b-card class="border border-danger" style="border-radius:20px;">
                    <b-media>
                      <template #aside>
                        <h1>
                          <b-icon variant="danger" icon="exclamation-square-fill" aria-hidden="true"></b-icon>
                        </h1>
                      </template>
                      <div class="">
                        <h6 class="mb-0 w-100">{{ notif.nama }}</h6>
                        <small class="time mb-0"><b-icon icon="clock-history"></b-icon> {{ notif.tgl_masuk }}</small>
                      </div>
                    </b-media>
                    <p
                      class=" mb-0"
                      style=" white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;"
                    >
                      {{ notif.isi_pengaduan }}
                    </p>
                    <div class="row mt-2">
                      <div class="col">
                        <router-link class="text-decoration-none" :to="'/ChatCustomer/' + notif.user_id">
                          <b-button pill size="sm" block variant="info">info</b-button>
                        </router-link>
                      </div>
                    </div>
                  </b-card>
                </div>
              </div>
              <h6 v-if="NotifAll" class="text-dark">Chat terbaru</h6>
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-3" v-for="notif in NotifAll" :key="notif.id">
                  <b-card style="border-radius:20px;">
                    <b-media>
                      <template #aside>
                        <h1>
                          <b-icon variant="warning" icon="exclamation-square-fill" aria-hidden="true"></b-icon>
                        </h1>
                      </template>
                      <div class="">
                        <h6 class="mb-0 w-100">{{ notif.nama }}</h6>
                        <small class="time mb-0"><b-icon icon="clock-history"></b-icon> {{ notif.Tanggal }}</small>
                      </div>
                    </b-media>
                    <p
                      class=" mb-0"
                      style=" white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;"
                    >
                      {{ notif.isi_pengaduan }}
                    </p>
                    <div class="row mt-2">
                      <div class="col-6">
                        <b-button pill size="sm" block variant="outline-secondary" @click="deleteNotif(notif.id)">Hapus</b-button>
                      </div>
                      <div class="col-6">
                        <router-link class="text-decoration-none" :to="'/ChatCustomer/' + notif.user_id">
                          <b-button pill size="sm" block variant="info">info</b-button>
                        </router-link>
                      </div>
                    </div>
                  </b-card>
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
// import Swal from "sweetalert2";
import { mapActions, mapState } from "vuex";
export default {
  name: "Notification",
  components: {
    Header,
    Sidebar,
  },
  data() {
    return {
      datas: "",
    };
  },
  mounted() {
    this.retrieveDataNotifAll();
  },
  computed: {
    ...mapState(["data"]),
    NotifAll: function() {
      return this.data?.NotifAll;
    },
    NotifWarning: function() {
      return this.data?.NotifWarning;
    },
  },
  methods: {
    ...mapActions(["retrieveDataNotifAll", "retrieveDataNotifWarning", "deleteDataNotifInbox"]),
    deleteNotif(id) {
      this.$swal
        .fire({
          title: "Delete?",
          text: "Anda tidak akan dapat mengembalikan ini!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Delete it",
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#6c757d",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            console.log(id);
            const data = {
              id: parseInt(id),
              notif_all: "TRUE",
            };
            this.deleteDataNotifInbox(data);
            this.retrieveDataNotifAll();
          }
        });
    },
  },
};
</script>

<style></style>
