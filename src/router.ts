import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { supabase } from "./lib/supabase";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login/Signup",
    component: () => import("@/components/Auth.vue"),
    beforeEnter: (to, from, next) => {
      // If supabase session is present direct back to channels
      if (supabase.auth.user()) {
        next("/channels/1");
      }

      console.log("router got session?", supabase.auth.user());
      next();
    }
  },
  {
    path: "/channels/:id",
    name: "Main",
    component: () => import("@/components/Main.vue"),
    beforeEnter: (to, from, next) => {
      // redirect to login if no user session is present
      if (supabase.auth.user() === null) {
        next("/");
      }
      next();
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next) => {
//   if (!to.matched.length) console.warn('no match')
//   next()
// })

export default router;
