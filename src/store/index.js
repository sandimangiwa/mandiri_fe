import Vue from "vue";
import Vuex from "vuex";
import axios from "@/axios";
import router from "@/router";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    isLoding: false,
  },
  modules: {},
  mutations: {
    success(state, data) {
      if (data) {
        state.data = { ...state.data, ...data };
        state.isLoding = false;
      }
    },
    loading(state) {
      state.isLoading = true;
    },
  },
  actions: {
    signup({ commit }, payload) {
      commit("loading");
      axios
        .post("Auth/Regist", payload)
        .then((res) => {
          router.push("/Login");
          commit("success", { signup: res?.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    signin({ commit }, payload) {
      commit("loading");
      axios
        .post("Auth/Login", payload)
        .then((res) => {
          commit("success", { signin: res?.data });
          if (res?.data.status == true) {
            router.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retrieveDataInbox({ commit }) {
      commit("loading");
      axios
        .get("PengaduanAdmin")
        .then((res) => {
          commit("success", { inbox: res?.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retrieveDataInboxOffline({ commit }) {
      commit("loading");
      axios
        .get("PengaduanAdmin/offline")
        .then((res) => {
          commit("success", { offline: res?.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateDataInbox({ commit }, payload) {
      commit("loading");
      axios
        .put("PengaduanAdmin", payload)
        .then((res) => {
          console.log(res);
          commit("success", {});
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addDataInbox({ commit }, payload) {
      commit("loading");
      axios
        .post("PengaduanAdmin", payload)
        .then((res) => {
          console.log(res);
          commit("success", {});
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retrieveDataGrafik({ commit }) {
      commit("loading");
      axios
        // .get("https://609b7fd72b549f00176e38c5.mockapi.io/api/Grafik")
        .get("Grafik")
        .then((res) => {
          commit("success", { grafik: res?.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retrieveDataNotifAll({ commit }) {
      commit("loading");
      axios
        .get("notif")
        // .get("Grafik")
        .then((res) => {
          commit("success", { NotifAll: res?.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retrieveDataNotifWarning({ commit }) {
      commit("loading");
      axios
        .get("notif/Warning")
        // .get("Grafik")
        .then((res) => {
          commit("success", { NotifWarning: res?.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retrieveDataNotifLimit({ commit }) {
      commit("loading");
      axios
        .get("notif/NotifLimit")
        // .get("Grafik")
        .then((res) => {
          commit("success", { NotifLimit: res?.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateDataNotifLimit({ commit }, payload) {
      commit("loading");
      console.log(payload);
      axios
        .put("notif/NotifLimit/", payload)
        // .get("Grafik")
        .then((res) => {
          console.log(res);
          commit("success", {});
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteDataNotifInbox({ commit }, payload) {
      commit("loading");
      axios
        .put("notif", payload)
        // .get("Grafik")
        .then((res) => {
          console.log(res.data);
          commit("success", {});
        })
        .catch((err) => {
          console.log(err);
        });
    },
    retrieveDataChat({ commit }, payload) {
      commit("loading");
      // this.$forceUpdate();
      console.log(payload);
      let id = "";
      if (payload) {
        id = payload;
      } else if (router.currentRoute.params.id) {
        id = router.currentRoute.params.id;
      }
      console.log(router.currentRoute.params.id);
      console.log(id);
      axios
        .get("PengaduanCustomer/?user_id=" + router.currentRoute.params.id)
        // .get("Grafik")
        .then((res) => {
          commit("success", { chat: res?.data.data, data_user: res?.data.data_user });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addDataChat({ commit }, payload) {
      commit("loading");
      // this.$forceUpdate();

      axios
        .post("PengaduanCustomer", payload)
        // .get("Grafik")
        .then((res) => {
          axios
            .get("PengaduanCustomer/?user_id=" + payload.receiver_id)
            // .get("Grafik")
            .then((res) => {
              commit("success", { chat: res?.data.data, data_user: res?.data.data_user });
            })
            .catch((err) => {
              console.log(err);
            });
          console.log(res.data);
          commit("success", {});
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addDataPengaduanOffline({ commit }, payload) {
      console.log(payload);
      axios
        .post("PengaduanAdmin/offline/", payload)
        // .get("Grafik")
        .then((res) => {
          console.log(res.data);
          commit("success", {});
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // this.$route.params.id
  },
});
