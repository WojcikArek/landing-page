import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue"
import ContactView from "../views/ContactView.vue"
import ProjectView from "../views/ProjectView.vue"
import PrivatePolicyView from "../views/PrivatePolicyView.vue"
import CookiesView from "../views/CookiesView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path:"/about",
      name:"about",
      component: AboutView
    },
    {
      path:"/contact",
      name:"contact",
      component: ContactView
    },
    {
      path:"/project",
      name:"project",
      component: ProjectView
    },
    {
      path:"/policy",
      name:"policy",
      component: PrivatePolicyView
    },
    {
      path:"/cookies",
      name:"cookies",
      component: CookiesView
    }
  ],
});

export default router;
