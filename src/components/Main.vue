<template>
  <h1 class="">Slack Clone</h1>
  <main class="grid grid-cols-3 grid-row-5 gap-2 h-full w-full ">
    <div id="sidebar" class="col-span-1 row-span-4 border">
      This is the side bar
    </div>
    <div id="chat" class="col-span-3 row-span-4 border">
      conversation happens here
    </div>
    <div id="input" class="col-span-4 border">
      <input type="text" placeholder="Type Your Message Here" />
    </div>
  </main>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent } from "vue";
export default defineComponent({
  name: "Main"
});
</script>
