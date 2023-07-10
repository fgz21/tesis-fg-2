<script>
  import { userStorage } from "../storage/userStorage";
  import NavbarLogued from "./NavbarLogued.svelte";
  import NavbarNoLogued from "./NavbarNoLogued.svelte";
</script>

{#if !$userStorage}
  <NavbarNoLogued />
{:else}
  <NavbarLogued />
{/if}
