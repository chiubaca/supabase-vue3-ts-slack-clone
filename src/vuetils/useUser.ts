import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import { definitions } from "@/types/supabase";

const allUsers = ref(new Map());

const userListener = supabase.from("users").on("INSERT", payload => {
  console.log("New user joined", payload.new);
  // allChannels.value.push(payload.new);
});

async function fetchUsers() {
  try {
    const { data: users, error } = await supabase.from("users").select("*");

    if (error) {
      console.error("error getting users", error);
      return;
    }
    if (users === null) return;
    

    // console.log("got users", users);
    allUsers.value = new Map(users.map(user => [user.id, user]));

  } catch (error) {
    console.error("error fetching users", error);
  }
}

export { fetchUsers, userListener, allUsers };
