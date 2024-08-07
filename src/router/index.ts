import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/",
      name: "layout",
      component: () => import("../views/LayoutView.vue"),
    },
    {
      path: "/table",
      name: "table",
      component: () => import("../views/TableView.vue"),
    },
    {
      path: "/book",
      name: "book",
      component: () => import("../views/BookView.vue"),
    },
  ],
});

export default router;
