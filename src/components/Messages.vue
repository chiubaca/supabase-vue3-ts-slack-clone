<template>
  <div class="flex  flex-col" v-for="(message, index) in allMessages" :key="index">
    <span> {{ message.author.username }}: </span>
    <span> {{ message.message }} </span>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, onMounted } from "vue";
import {
  messageListener,
  fetchMessages,
  allMessages
} from "@/vuetils/useMessage";
export default defineComponent({
  name: "Channels",
  async setup() {
    onMounted(() => {
      messageListener.subscribe();
    });

    await fetchMessages(1);

    return { allMessages };
  }
});
</script>
