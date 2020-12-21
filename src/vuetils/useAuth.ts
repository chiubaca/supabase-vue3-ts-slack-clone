import { ref } from "vue";
import router from "@/router";
import { supabase } from "@/lib/supabase";
import { Session, Provider } from "@supabase/gotrue-js/dist/main/lib/types";

const userSession = ref<Session | null>(null);

/*
 * Handles user login via email + password into a supabase session.
 * If not password is empty, it will send a magic link to the users email address.
 */
async function handleLogin(credentials: Credentials) {
  try {
    const { error, user } = await supabase.auth.signIn({
      email: credentials.email,
      password: credentials.password
    });
    if (error) {
      alert("Error logging in: " + error.message);
      return;
    }
    // No error throw, but no user detected so send magic link
    if (!error && !user) {
      alert("Check your email for the login link!");
      return;
    }

    alert("You've logged in up")
    console.log("user", user)

    router.push("/channels/1");
  } catch (error) {
    console.error("Error thrown:", error.message);
    alert(error.error_description || error);
  }
}

/*
 * Handles signup provided a valid credentials object.
 */
async function handleSignup(credentials: Credentials) {
  try {
    const { email, password } = credentials;
    // prompt user if they have not filled populated thier credentials
    if (!email || !password) {
      alert("Please provide both your email and password.");
      return;
    }
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
      console.error(error, error.message);
      return;
    }

    alert("You've signed up")
    console.log("user", user)
    await supabase.from("users").insert([{id: user?.id, username: user?.email}])
   
    router.push("/channels/1");

  } catch (err) {
    alert("Fatal error signing up");
    console.error("signup error", err);
  }
}

/**
 * Handles password reset. Will send an email to the given email address .
 */
async function handlePasswordReset() {
  const email = prompt("Please enter your email:");
  if (email === null || email === "") {
    window.alert("You must enter your email.");
  } else {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email);
    if (error) {
      console.log("Error: ", error.message);
    } else {
      alert("Password recovery email has been sent.");
    }
  }
}

/**
 * Handles logging a user out of a superbase session
 */
async function handleLogout() {
  console.log("logging out");
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("Error signing out");
      console.error("Error", error);
      return;
    }

    alert("You have signed out!");
  } catch (err) {
    alert("Unknown error signing out");
    console.error("Error", err);
  }
}

export {
  userSession,
  handleLogin,
  handleSignup,
  handleLogout,
  handlePasswordReset
};
