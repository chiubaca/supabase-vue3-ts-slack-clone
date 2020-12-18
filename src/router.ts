import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "@/components/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login/Signup",
    component: () => import("@/components/Auth.vue")
  },
  {
    path: "/channels/:id",
    name: "Main",
    component: Main
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) console.warn('no match')
  next()
})

export default router;
