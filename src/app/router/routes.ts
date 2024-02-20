import { RouteRecordRaw } from "vue-router";
import VHomeView from "../views/VHomeView.vue";
import VNotFoundView from "../views/VNotFoundView.vue";

export const routes: RouteRecordRaw[] = [
  {
    name: "home",
    path: "/",
    component: VHomeView,
  },
  {
    name: "notFound ",
    path: "/:notFound",
    component: VNotFoundView,
  },
];
