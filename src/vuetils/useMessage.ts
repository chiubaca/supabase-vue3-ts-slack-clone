import { ref } from "vue";
import { supabase } from "@/lib/supabase";

const allMessages = ref<any>([])

const messageListener = supabase.from("messages").on("INSERT", payload => {
  console.log("Got new message", payload.new);
  allMessages.value.push(payload.new);
});

/**
 * Fetch all messages and their authors
 * @param {number} channelId
 */
async function fetchMessages(channelId: number) {
  try {
    const { data: messages, error } = await supabase
      .from("messages")
      .select(`*, author:user_id(*)`)
      .eq("channel_id", channelId)
      .order('inserted_at');
    // store response to allChannels
    allMessages.value = messages;
    console.log("got messages", allMessages.value);
  } catch (error) {
    console.log("error fetch messages", error);
  }
}

export { allMessages, fetchMessages, messageListener };
