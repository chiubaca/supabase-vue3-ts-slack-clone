<template>
  <div class=" flex w-full justify-between p-2">
    <h1 class="text-lg bold">Supabase-Vue Slack Clone</h1>
    <button @click="handleLogout" class="underline  right-0">Log Out</button>
  </div>

  <main class="grid grid-cols-5 grid-row-6 gap-2 h-full w-full ">
    <div id="sidebar" class="col-span-1 row-span-4 border">
      <Suspense>
        <template #default>
          <div>
            <Channels />
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
    <div class="col-span-1 row-span-4 border">
      <Suspense>
        <template #default>
          <div>
            <Users />
          </div>
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </div>
    <div id="input" class="col-span-6 border">
      <MessageInput />
    </div>
  </main>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent } from "vue";
import Channels from "@/components/Channels.vue";
import Messages from "@/components/Messages.vue";
import MessageInput from "@/components/MessageInput.vue";
import Users from "@/components/Users.vue";
import Loading from "@/components/Loading.vue";
import { handleLogout } from "@/vuetils/useAuth";
export default defineComponent({
  name: "Main",
  components: {
    Channels,
    Messages,
    MessageInput,
    Users,
    Loading
  },
  setup() {
    return {
      handleLogout
    };
  }
});
</script>
