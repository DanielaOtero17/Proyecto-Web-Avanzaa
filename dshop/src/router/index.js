import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import PopupPanel from "../components/PopupPanel";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/Dialog",
    name: "Popup",
    component: PopupPanel,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
