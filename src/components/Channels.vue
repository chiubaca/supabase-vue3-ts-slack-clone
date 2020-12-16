<template>
  <div>
    <button @click="createChannel" class="btn-black">Add Channel</button>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent } from "vue";
import { supabase } from "@/lib/supabase";
export default defineComponent({
  name: "Channels",
  setup() {
    async function createChannel() {
      try {
        const channelName = prompt();

        if (channelName?.length === 0) {
          alert("Enter a name for channel");
          return;
        }

        console.log(channelName);
        const { data, error } = await supabase
          .from("channels")
          .insert({ slug: channelName })
          .single();

        if (error) {
          alert(error.message);
          console.error("There was an error inserting", error);
          return null;
        }

        console.log("created a channel");
        return data;
      } catch (err) {
        alert("Error");
        console.error("Unknown problem inserting channel to db", err);
        return null;
      }
    }

    return { createChannel };
  }
});
</script>
