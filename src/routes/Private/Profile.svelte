<script>
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  let user = {
    name: "",
    email: "",
    cedula: "",
    gender: "",
    career: "",
    semestre: "",
  };

  function saveData() {
    localStorage.setItem("user", JSON.stringify(user));
    showSavedProfile();
  }

  function showSavedProfile() {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      user = savedUser;
    }
  }

  // Obtener los datos del almacenamiento local al cargar el componente
  onMount(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      user = savedUser;
    }
  });
</script>

<main
  class="w-full min-h-screen bg-gray-900 flex items-center justify-center text-[#0ea5e9] pt-6 bt-8"
>
  <div
    class="bg-gray-900 shadow-md px-8 pt-6 pb-8 mb-4 flex flex-col w-full sm:w-2/3 lg:w-1/2"
  >
    <h1 class="text-2xl flex items-center gap-1 mb-5">
      <Icon icon="ph:user" />
      Mi perfil
    </h1>
    <form class="flex flex-wrap gap-4" on:submit|preventDefault={saveData}>
      <div class="w-full sm:w-1/2">
        <label class="flex items-center gap-1" for="name">
          <Icon icon="icon-park-outline:edit-name" />
          Nombre
        </label>
        <input
          class="form-input rounded-md shadow-sm w-full sm:text-sm sm:leading-5"
          type="text"
          id="name"
          bind:value={user.name}
        />
      </div>
      <div class="w-full sm:w-1/2">
        <label class="flex items-center gap-1" for="email">
          <Icon icon="ic:outline-email" />
          Correo electrónico
        </label>
        <input
          class="form-input border border-[#0ea5e9] rounded-md shadow-sm w-full sm:text-sm sm:leading-5"
          type="email"
          id="email"
          bind:value={user.email}
        />
      </div>
      <div class="w-full sm:w-1/2">
        <label class="flex items-center gap-1" for="cedula">
          <Icon icon="ant-design:user-outlined" />
          Número de cédula
        </label>
        <input
          class="form-input rounded-md border border-[#0ea5e9] shadow-sm w-full sm:text-sm sm:leading-5"
          type="text"
          id="cedula"
          bind:value={user.cedula}
        />
      </div>
      <div class="w-full sm:w-1/2">
        <label class="flex items-center gap-1" for="gender">
          <Icon icon="mdi:gender-male" class="w-5 h-5" />
          <Icon icon="mdi:gender-female" class="w-5 h-5" />
          Género
        </label>
        <select
          class="form-select rounded-md border border-[#0ea5e9] shadow-sm w-full sm:text-sm sm:leading-5"
          id="gender"
          bind:value={user.gender}
        >
          <option value="">Selecciona un género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div class="w-full sm:w-1/2">
        <label class="flex items-center gap-1" for="career">
          <Icon icon="bi:file-earmark-person" />
          Carrera
        </label>
        <input
          class="form-input rounded-md border border-[#0ea5e9] shadow-sm w-full sm:text-sm sm:leading-5"
          type="text"
          id="career"
          bind:value={user.career}
        />
      </div>
      <div class="w-full sm:w-1/2">
        <label class="flex items-center gap-1" for="semestre">
          <Icon icon="bx:bxs-calendar-star" />
          Semestre
        </label>
        <select
          class="form-select border border-[#05e9] rounded-md shadow-sm w-full sm:text-sm sm:leading-5"
          id="semestre"
          bind:value={user.semestre}
        >
          <option value="">Selecciona un semestre</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>
      <div class="w-full flex items-center justify-start mt-6">
        <button
          class="bg-[#0ea5e9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Guardar cambios
        </button>
      </div>
    </form>
  </div>
</main>
