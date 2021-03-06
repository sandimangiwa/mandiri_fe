import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Login
  {
    name: "Login",
    path: "/Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    name: "Signup",
    path: "/Signup",
    component: () => import("../views/auth/Signup.vue"),
  },

  {
    path: "",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    name: "Grafik",
    path: "/Grafik",
    component: () => import("../views/Grafik.vue"),
  },
  {
    name: "KontakMasuk",
    path: "/KontakMasuk",
    component: () => import("../views/Inbox/index.vue"),
  },
  {
    name: "InputPengaduan",
    path: "/InputPengaduan",
    component: () => import("../views/InputPengaduan.vue"),
  },
  {
    name: "Notification",
    path: "/Notification",
    component: () => import("../views/Notification.vue"),
  },
  {
    name: "ChatCustomer",
    path: "/ChatCustomer/:id",
    component: () => import("../views/ChatCustomer.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
