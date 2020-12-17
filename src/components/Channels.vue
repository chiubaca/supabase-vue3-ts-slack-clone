<template>
  <div>

    <ul v-for="(channel, index) in allChannels" :key="index">
      <li>{{ channel.slug }}</li>
    </ul>
    <button @click="createChannel" class="btn-black">Add Channel</button>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent } from "vue";
import {
  allChannels,
  fetchChannels,
  createChannel
} from "@/vuetils/useChannel";
export default defineComponent({
  name: "Channels",
  async setup() {
    await fetchChannels();

    return { allChannels, createChannel };
  }
});
</script>
