import { ref } from "vue";
import { supabase } from "@/lib/supabase";

const allChannels = ref<any>([]);
const currentChannel = ref<number>(1);

const channelListener = supabase.from("channels").on("INSERT", payload => {
  console.log("Got new channel", payload.new);
  allChannels.value.push(payload.new);
});

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

async function fetchChannels() {
  try {
    const { data: channels, error } = await supabase
      .from("channels")
      .select("*");

    if (error) {
      console.log("error", error);
      return;
    }
    // handle for when no todos are returned
    if (channels === null) {
      allChannels.value = [];
      return;
    }
    // store response to allChannels
    allChannels.value = channels;
    console.log("got channels", allChannels.value);
  } catch (err) {
    alert("Error");
    console.error("Unknown problem retrieving channels", err);
    return null;
  }
}

function setCurrentChannel(channel: number) {
  currentChannel.value = channel;
  console.log("update channel?", currentChannel.value);
  localStorage.setItem("channel", String(channel));
}

export {
  allChannels,
  currentChannel,
  setCurrentChannel,
  createChannel,
  fetchChannels,
  channelListener
};
