import VHomeView from "@/views/VHomeView.vue";
import VNotFoundView from "@/views/VNotFoundView.vue";
import { RouteRecordRaw } from "vue-router";

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
