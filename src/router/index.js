import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DesView from "../views/DesView.vue";
import DevView from "../views/DevView.vue";
import QAView from "../views/QAView.vue";
import CompanyView from "../views/CompanyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/design",
      name: "design",
      component: DesView,
    },
    {
      path: "/development",
      name: "development",
      component: DevView,
    },
    {
      path: "/qa",
      name: "qa",
      component: QAView,
    },
    {
      path: "/company",
      name: "company",
      component: CompanyView,
    },
  ],
});

export default router;
