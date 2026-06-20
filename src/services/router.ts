import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/Pages/HomePage.vue";
import AboutPage from "../components/Pages/AboutPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  // Gunakan Hash History di sini
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
