<template>
  <main id="layout" class="w-full h-screen">
    <nav id="nav" class="">
      <h1 class="text-lg bold">Supabase & Vue Slack Clone</h1>
      <button @click="handleLogout" class="underline right-0">Log Out</button>
    </nav>
    <div id="sidebar" class="border overflow-y-auto">
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
    <div id="chat" class=" border overflow-y-auto">
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
    <div id="users" class="border overflow-y-auto">
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
    <div id="input" class="border">
      <MessageInput />
    </div>
    <footer id="footer">
      <Footer />
    </footer>
  </main>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent } from "vue";
import Channels from "@/components/Channels.vue";
import Messages from "@/components/Messages.vue";
import MessageInput from "@/components/MessageInput.vue";
import Users from "@/components/Users.vue";
import Footer from "@/components/Footer.vue";
import Loading from "@/components/Loading.vue";
import { handleLogout } from "@/vuetils/useAuth";
export default defineComponent({
  name: "Main",
  components: {
    Channels,
    Messages,
    MessageInput,
    Users,
    Loading,
    Footer
  },
  setup() {
    return {
      handleLogout
    };
  }
});
</script>

<style>
/* css grid code */
#layout {
  display: grid;
  grid-template:
    " nav nav " auto
    " sidebar chat " 3fr
    " users chat " 3fr
    " input input " 1fr
    " footer footer " auto
    / 1fr 3fr;
}

#nav {
  grid-area: nav;
}

#sidebar {
  grid-area: sidebar;
}

#chat {
  grid-area: chat;
}

#users {
  grid-area: users;
}

#input {
  grid-area: input;
}

#footer {
  grid-area: footer;
}
</style>
