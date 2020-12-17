<template>
  <div>
    <button @click="createChannel" class="btn-black">Add Channel</button>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent } from "vue";
import { createChannel } from "@/vuetils/useChannel";
export default defineComponent({
  name: "Channels",
  setup() {
    return { createChannel };
  }
});
</script>
