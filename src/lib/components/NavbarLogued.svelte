<script>
  import { Link } from "svelte-routing";
  import { userStorage } from "../storage/userStorage";

  let user = $userStorage;

  const routes = [
    {
      title: user.name,
      href: "/profile",
    },
    {
      title: "Salir",
      href: "/logout",
    },
  ];
</script>

<nav
  class="w-full max-w-[1480px] mx-auto h-20 px-2 md:px-5 flex justify-between items-center"
>
  <article class="flex items-center gap-5">
    <Link
      class="px-3 sm:px-6 py-3 rounded-md bg-gray-800 text-sm font-medium transition-all hover:bg-gray-700"
      to="/"
    >
      Inicio
    </Link>
    <Link
      class="hidden md:inline-flex hover:text-gray-500"
      target="_blank"
      to="#uni"
    >
      arse.unellez.edu.ve
    </Link>
  </article>

  <!-- <ul> es un contenedor de listas -->
  <ul class="flex items-center gap-2 md:gap-5 list-none">
    {#each routes as route}
      <!-- aqui va la lista -->
      <li>
        <Link
          class="px-2 py-3 sm:px-4 rounded-md bg-gray-800 text-sm font-medium transition-all hover:bg-gray-700 {route.className ??
            ''}"
          to={route.href}
        >
          {route.title}
        </Link>
      </li>
    {/each}
  </ul>
</nav>
