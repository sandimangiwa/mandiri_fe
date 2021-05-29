import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
// css custom
import "./assets/css/grafik.css";
import "./assets/css/inputpengaduan.css";
import "./assets/css/kontakmasuk.css";
import "./assets/css/dashboard.css";
import "./assets/css/chat.css";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;
Vue.mixin({
  methods: {
    togelOpen: function() {
      var width = "Total Width: " + screen.width;
      console.log(width);
      var x = document.querySelector(".sidebar");
      if (x.style.display == "none") {
        console.log("chage to block");
        x.style.display = "block";
      } else {
        console.log("chage to none");
        x.style.display = "none";
      }
    },
  },
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
