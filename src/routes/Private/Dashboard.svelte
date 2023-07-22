<script>
  import Icon from "@iconify/svelte";
  import { userStorage } from "../../lib/storage/userStorage";

  let user = $userStorage;
  let comment = '';
  let comments = [];

</script>

<main class="w-full min-h-[80vh] px-6 py-5">
  <h1 class="text-2xl flex items-center gap-1 mb-6">
    <Icon icon="material-symbols:dashboard-outline" />
    Dashboard
  </h1>
  <h1>Bienvenido!, {user.name}</h1>

<!-- seccion de comentario -->
<div class="flex items-center ">
  <div class="mx-auto">
    <div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
      <div class="relative flex gap-4">
          <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy">
          <div class="flex flex-col w-full">
              <div class="flex flex-row justify-between">
                  <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">COMMENTOR</p>
                  <a class="text-gray-500 text-xl" href="#"><i class="fa-solid fa-trash"></i></a>
              </div>
              <p class="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
          </div>
      </div>
      <p class="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Maxime quisquam vero adipisci beatae voluptas dolor ame.</p>
    </div>
  </div>
</div>
<!-- seccion de comentario -->


</main>
