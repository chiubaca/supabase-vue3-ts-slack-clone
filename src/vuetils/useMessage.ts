import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import { definitions } from "@/types/supabase"

const allMessages = ref<definitions["messages"][]>([]);

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
      .order("inserted_at");

      // if no messages are returned set an empty array
      if (messages === null) {
        allMessages.value = [];
        return;
      }
    // store response to allChannels
    allMessages.value = messages;
    console.log("got messages", allMessages.value);
  } catch (error) {
    console.log("error fetch messages", error);
  }
}

/**
 * Insert a new message into the DB
 * @param {string} message The message text
 * @param {number} channelId
 * @param {number} userId The author
 */
async function addMessage(message: string, channelId: number, userId: number) {
  try {
    const { body } = await supabase
      .from("messages")
      .insert([{ 
        'message':message, 
        'channel_id': channelId, 
        'user_id': userId }]);
    return body;
  } catch (error) {
    console.log("error", error);
  }
}

export { allMessages, fetchMessages, messageListener, addMessage };
