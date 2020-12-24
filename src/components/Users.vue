<template>
  <div v-for="(user, index) in allUsers" :key="index">
    <div class="pt-2">
      <span class="text-sm text-gray-400">{{ user[0] }}</span>
      <p>{{ user[1].username }}</p>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, onMounted } from "vue";
import { fetchUsers, userListener, allUsers } from "@/vuetils/useUser";
export default defineComponent({
  name: "Users",
  async setup() {
    onMounted(() => {
      userListener.subscribe();
    });

    await fetchUsers();

    console.log("got users in component", allUsers.value);

    return { allUsers };
  }
});
</script>
