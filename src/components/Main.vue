<template>
  <h1 class="">Slack Clone</h1>
  <main class="grid grid-cols-3 grid-row-5 gap-2 h-full w-full ">
    <div id="sidebar" class="col-span-1 row-span-4 border">
      <Suspense>
        <template #default>
          <div>
            <Channels />
            <button @click="handleLogout" class="btn-black">Log Out</button>
          </div>
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </div>
    <div id="chat" class="col-span-3 row-span-4 border">
      <Suspense>
        <template #default>
          <div>
            <Messages />
          </div>
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </div>
    <div id="input" class="col-span-4 border">
      <input type="text" placeholder="Type Your Message Here" />
    </div>
  </main>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent } from "vue";
import Channels from "@/components/Channels.vue";
import Messages from "@/components/Messages.vue";
import Loading from "@/components/Loading.vue";
import { handleLogout } from "@/vuetils/useAuth";
export default defineComponent({
  name: "Main",
  components: {
    Channels,
    Messages,
    Loading
  },
  setup() {
    return {
      handleLogout
    };
  }
});
</script>
