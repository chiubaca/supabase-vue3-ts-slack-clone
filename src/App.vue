<template>
  <div
    class="flex flex-col items-center justify-items-center justify-center h-screen"
  >
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { userSession, handleLogout } from "@/vuetils/useAuth";

export default {
  components: {
    Footer
  },
  setup() {
    return { userSession, handleLogout };
  }
};
</script>
