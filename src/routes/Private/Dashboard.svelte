<script>
  import Icon from "@iconify/svelte";
  import { userStorage } from "../../lib/storage/userStorage";

  let user = $userStorage;
</script>

<main class="w-full min-h-[80vh] px-6 py-5">
  <h1 class="text-2xl flex items-center gap-1 mb-6">
    <Icon icon="material-symbols:dashboard-outline" />
    Dashboard
  </h1>
  <h1>Hola, {user.name}</h1>
</main>
