<template>
  <div>
    <button @click="createChannel" class="btn-black">Add Channel</button>
    <ul>
      <li
        v-for="(channel, index) in allChannels"
        :key="index"
        @click="setCurrentChannel(channel.id)"
      >
        <router-link :to="`${channel.id}`"># {{ channel.slug }}</router-link>
      </li>
    </ul>
  </div>

  <div>Current Channel: {{ currentChannel }}</div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, onMounted } from "vue";
import {
  allChannels,
  fetchChannels,
  currentChannel,
  setCurrentChannel,
  createChannel,
  channelListener
} from "@/vuetils/useChannel";
export default defineComponent({
  name: "Channels",
  async setup() {
    onMounted(() => {
      channelListener.subscribe();
    });

    await fetchChannels();

    return { allChannels, createChannel, currentChannel, setCurrentChannel };
  }
});
</script>
