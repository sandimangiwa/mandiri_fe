import Vue from "vue";
import Vuex from "vuex";
// import axios from "@/axios";
import router from "@/router";
import axios from "axios";

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
    retrieveDataInbox({ commit }) {
      commit("loading");
      axios
        .get("PengaduanAdmin")
        .then((res) => {
          commit("success", { inbox: res?.data });
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
        .get("https://609b7fd72b549f00176e38c5.mockapi.io/api/Grafik")
        // .get("Grafik")
        .then((res) => {
          commit("success", { grafik: res?.data });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    signup({ commit }, payload) {
      commit("loading");
      axios
        .post("Auth", payload)
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
        .post("Auth/login", payload)
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
  },
});
