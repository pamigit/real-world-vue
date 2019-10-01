import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dashboard from "./views/Dashboard.vue";
import Shortcuts from "./views/Shortcuts.vue";
import Overview from "./views/Overview.vue";
import Events from "./views/Events.vue";
import Profile from "./views/Profile.vue";
import Status from "./views/Status.vue";

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
      component: Dashboard
    },
    {
      path: "/shortcuts",
      name: "shortcuts",
      component: Shortcuts
    },
    {
      path: "/overview/:Pid",
      name: "overview",
      component: Overview
    },
    {
      path: "/events",
      name: "events",
      component: Events
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/status",
      name: "status",
      component: Status
    }
  ]
});
