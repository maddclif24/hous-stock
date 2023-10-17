import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store";
import "@/assets/scss/normalize.scss";

createApp(App).use(store).mount("#app");
