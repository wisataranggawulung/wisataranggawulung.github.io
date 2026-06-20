import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./services/router.ts";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as HiIcons from "oh-vue-icons/icons/hi";

const app = createApp(App);

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const Hi = Object.values({ ...HiIcons });
addIcons(...Hi);

app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
