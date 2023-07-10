<script>
  import Icon from "@iconify/svelte";
  import axios from "axios";
  import { Link, navigate } from "svelte-routing";
  import { getFormData } from "../../lib/config/getFormData";
  import { setCookies } from "../../lib/config/setCookies";
  import { showToast } from "../../lib/config/toastConfig";
  import { userStorage } from "../../lib/storage/userStorage";

  

  const URL_LOGIN = `https://fgt.alwaysdata.net/auth`;

  // Manejando el envio del formulario
  const handleSubmit = async (event) => {
    // Evitando recarga de la página
    event.preventDefault();

    // Almacenando los campos en una constante
    const formValues = getFormData(event.target);

    // Validando que ningun campo esté vacio
    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.password === ""
    ) {
      return showToast({
        title: "Faltan datos!",
        description: "Rellene todos los campos",
        type: "error",
      });
    }

    // Haciendo peticion al backend
    await axios
      .post(URL_LOGIN, formValues)
      .then((response) => {
        if (response.status === 200) {
          const { user, message } = response.data;
          // Guardar datos en las cookies
          setCookies("auth", user, 7);

          $userStorage = user;

          // Mostrar notificación
          showToast({
            title: "Excelente!",
            description: message,
            type: "success",
          });

          navigate("/");
        }
      })
      .catch((error) => {
        showToast({
          title: "Error al inciar sesión!",
          description: error.message,
          type: "error",
        });
      });
  };
</script>

<section class="w-full h-[120vh] flex flex-col items-center justify-center">
  <form
    class="w-full max-w-lg flex flex-col items-center p-5 pb-10 bg-gray-800 rounded-xl gap-3 translate-y-[-50px] shadow-md"
    on:submit={handleSubmit}
  >
    <h1 class="flex items-center gap-1 text-2xl mb-5">
      <Icon class="mt-1" icon="material-symbols:login" />
      <p>Iniciar Sesión</p>
    </h1>

    <label
      class="flex items-center gap-1 border border-gray-500 rounded-md px-2 py-1.5"
      for="email"
    >
      <Icon class="text-xl" icon="ic:outline-email" />
      <input
        class="bg-transparent text-white outline-none"
        type="email"
        placeholder="Correo electronico"
        name="email"
        id="email"
      />
    </label>
    <label
      class="flex items-center gap-1 border border-gray-500 rounded-md px-2 py-1.5"
      for="password"
    >
      <Icon class="text-xl" icon="carbon:password" />
      <input
        class="bg-transparent text-white outline-none"
        type="password"
        placeholder="Contraseña"
        name="password"
        id="password"
      />
    </label>
    <article class="mt-5 text-md flex items-center flex-wrap gap-2">
      <button type="submit" class="bg-blue-500 py-1.5 px-2.5 rounded-md">
        Entrar
      </button>
      <button type="reset" class="bg-black py-1.5 px-2.5 rounded-md">
        Limpiar
      </button>
    </article>
    <p class="my-3">- Si no -</p>
    <Link
      class="border border-blue-600 py-1.5 px-2.5 rounded-md hover:bg-blue-600"
      to="/signup"
    >
      Registrate
    </Link>
  </form>
</section>
