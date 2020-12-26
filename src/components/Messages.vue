<template>
  <div
    class="flex  flex-col"
    v-for="(message, index) in allMessages"
    :key="index"
  >
    <!-- Maps userID to username, could refactor this to be directive  -->
    <span> {{ allUsers.get(message["user_id"]).username }}: </span>

    <span> {{ message.message }} </span>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, onMounted, watch } from "vue";
import {
  messageListener,
  fetchMessages,
  allMessages
} from "@/vuetils/useMessage";
import { fetchUsers, allUsers } from "@/vuetils/useUser";
import { currentChannel } from "@/vuetils/useChannel";
export default defineComponent({
  name: "Messages",
  async setup() {
    onMounted(() => {
      messageListener.subscribe();
    });

    // fetch all messages for selected channel
    watch(
      () => currentChannel.value,
      selectedChannel => {
        fetchMessages(selectedChannel);
      }
    );
    // Need users before we can display message as message IDs are mapped to usernames
    await fetchUsers();
    await fetchMessages(currentChannel.value);
    return { allMessages, allUsers };
  }
});
</script>
