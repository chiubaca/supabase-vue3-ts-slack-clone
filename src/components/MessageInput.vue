<template>
  <div class="flex h-full">
    <textarea
      v-model="message"
      placeholder="Type your message here"
      class=" border  w-full h-full"
    ></textarea>
    <button @click="send" class=" btn-black">Send</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { addMessage } from "@/vuetils/useMessage";
import { userSession } from "@/vuetils/useAuth";

export default {
  setup() {
    const message = ref("");

    function send() {
      console.log("sending message", message.value);
      addMessage(message.value, 1, userSession.value.user.id);
    }

    return { message, send };
  }
};
</script>

<style lang="scss" scoped></style>
