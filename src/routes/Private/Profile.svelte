<script>
  import Icon from "@iconify/svelte";
  import { userStorage } from "../../lib/storage/userStorage";

  let user = $userStorage;
</script>

<main class="w-full min-h-[80vh] px-6 py-5">
  <h1 class="text-2xl flex items-center gap-1">
    <Icon icon="ph:user" />
    Mi perfil
  </h1>
  <section class="mt-7">
    <h1 class="border-b mb-5 border-gray-700">Información Básica</h1>
    <div class="w-full flex flex-wrap items-center gap-10">
      <article>
        <p class="flex items-center gap-1">
          <Icon icon="icon-park-outline:edit-name" />
          Name
        </p>
        <strong class="ml-2 flex items-center flex-wrap">
          <Icon icon="tabler:point-filled" />
          {user.name}
        </strong>
      </article>
      <article>
        <p class="flex items-center gap-1">
          <Icon icon="ic:outline-email" />
          Email
        </p>
        <strong class="ml-2 flex items-center flex-wrap">
          <Icon icon="tabler:point-filled" />
          {user.email}
        </strong>
      </article>
    </div>
  </section>
</main>
