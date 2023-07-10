<script>
  import { navigate } from "svelte-routing";
  import { deleteCookies } from "../../lib/config/deleteCookies";
  import { userStorage } from "../../lib/storage/userStorage";

  $userStorage = undefined;
  deleteCookies("auth");
  navigate("/");
</script>
