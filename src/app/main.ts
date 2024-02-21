import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import { createApp } from "vue";
import VApp from "./VApp.vue";
import { router } from "./router";
import "./styles/index.css";

createApp(VApp).use(router).mount("#app");
