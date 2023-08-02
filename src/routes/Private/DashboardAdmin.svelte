<script>
  import { userStorage } from "../../lib/storage/userStorage";
  import { onDestroy, onMount } from "svelte";
  import Icon from "@iconify/svelte";
  export let onSubmit;



  let user = userStorage;
   let title = '';
  let content = '';

   function handleSubmit() {
    // Aquí se puede enviar los datos a un servidor o guardarlos localmente
    console.log({ title, content });
  }

</script>


<h1 class="text-start ml-3">Dashboard Admin, {$user.name}</h1>

<br>

<div class="flex h-screen bg-gray-900">
  <div class="bg-gray-800 w-64">
    <div class="flex items-center justify-center h-16 text-white">
      <h1 class="text-2xl font-bold">Sidebar</h1>
    </div>
    <nav class="mt-6">
      <ul>
        <li class="px-4 py-2 hover:bg-gray-700">
          <a href="#" class="text-white flex items-center">
            <span class="mr-3">🏠</span> Inicio
          </a>
        </li>
        <li class="px-4 py-2 hover:bg-gray-700">
          <a href="#" class="text-white flex items-center">
            <span class="mr-3">👤</span> Perfil
          </a>
        </li>
        <li class="px-4 py-2 hover:bg-gray-700">
          <a href="#" class="text-white flex items-center">
            <span class="mr-3">⚙️</span> Configuración
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="flex-1 p-10">

    

  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
   <h1 class="text-3xl font-bold mb-8">Contenido principal</h1>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" on:submit|preventDefault={handleSubmit}>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="title">Título:</label>
      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" bind:value={title}>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 font-bold mb-2" for="content">Contenido:</label>
      <textarea class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="content" bind:value={content}></textarea>
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Publicar
      </button>
    </div>
  </form>
  </div>
</div>

</div>
