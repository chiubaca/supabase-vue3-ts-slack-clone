<template>
  <div class="flex h-full">
    <textarea
      v-model="message"
      v-on:keyup.enter="send"
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
import { currentChannel } from "@/vuetils/useChannel";

export default {
  setup() {
    const message = ref("");

    function send() {
      console.log("sending message", message.value);
      addMessage(
        message.value,
        currentChannel.value,
        userSession.value.user.id
      );
      message.value = "";
    }

    return { message, send };
  }
};
</script>

<style lang="scss" scoped></style>
