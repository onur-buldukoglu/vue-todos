import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: () => {
        if (
          sessionStorage.getItem("isAuthenticated") &&
          JSON.parse(sessionStorage.getItem("isAuthenticated")!)
        ) {
          return true;
        }
        sessionStorage.setItem("isAuthenticated", "false");
        return { name: "login" };
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      beforeEnter() {
        if (JSON.parse(sessionStorage.isAuthenticated)) {
          return { name: "home" };
        }
      },
    },
  ],
});

export default router;
