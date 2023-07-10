<script>
  import { Route } from "svelte-routing";
  import { userStorage } from "../lib/storage/userStorage";
  import Login from "./Public/Login.svelte";
  import Signup from "./Public/Signup.svelte";
  import Faq from "./Public/Faq.svelte";

</script>

{#if !$userStorage}
  <Route path="/login" component={Login} />
  <Route path="/signup" component={Signup} />
  <Route path="/faq" component={Faq} />
{/if}
