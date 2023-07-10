<script>
  import { Route } from "svelte-routing";
  import { userStorage } from "../lib/storage/userStorage";
  import Dashboard from "./Private/Dashboard.svelte";
  import Logout from "./Private/Logout.svelte";
  import Profile from "./Private/Profile.svelte";
  import Home from "./Public/Home/Home.svelte";
  import NotFound from "./Public/NotFound.svelte";
</script>

<Route path="/" component={!$userStorage ? Home : Dashboard} />
<Route path="/profile" component={Profile} />
<Route path="/logout" component={!$userStorage ? NotFound : Logout} />
