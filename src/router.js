import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/Dashboard.vue")
    },
    {
      path: "/shortcuts",
      name: "shortcuts",
      component: () => import("./views/Shortcuts.vue")
    },
    {
      path: "/overview",
      name: "overview",
      component: () => import("./views/Overview.vue")
    },
    {
      path: "/events",
      name: "events",
      component: () => import("./views/Events.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/Profile.vue")
    },
    {
      path: "/status",
      name: "status",
      component: () => import("./views/Status.vue")
    }
  ]
});
