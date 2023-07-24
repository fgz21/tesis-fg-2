<script>
  import Icon from "@iconify/svelte";
  import { onDestroy, onMount } from "svelte";
  import { userStorage } from "../../lib/storage/userStorage";
  import DashboardAdmin from "./DashboardAdmin.svelte";

  //script tiempo real

  let datetime = new Date();
  const interval = setInterval(() => {
    datetime = new Date();
  }, 1000);

  onMount(() => {
    // Actualizar la fecha y hora cada segundo
    setInterval(() => {
      datetime = new Date();
    }, 1000);
  });

  onDestroy(() => {
    // Limpiar el intervalo cuando se destruye el componente
    clearInterval(interval);
  });

  //script comentario

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment) {
      // Agregar el comentario a la lista de comentarios
      comments = [
        ...comments,
        { author: "Usuario", date: new Date(), text: comment },
      ];
      // Limpiar el campo de comentario
      comment = "";
    }
  };

  onMount(() => {
    // Obtener la lista de comentarios guardada en el almacenamiento local
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      comments = JSON.parse(storedComments);
    }
  });

  $: {
    // Guardar la lista de comentarios en el almacenamiento local cada vez que se actualiza
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  let user = $userStorage;
  let comment = "";
  let comments = [];
</script>

{#if user.role === "admin"}
  <DashboardAdmin />
{:else}
  <main class="w-full min-h-[80vh] px-6 py-5">
    <h1 class="text-2xl flex items-center gap-1 mb-6">
      <Icon icon="material-symbols:dashboard-outline" />
      Dashboard
    </h1>
    <h1>Bienvenido!, {user.name}</h1>
    <br />

    <!-- seccion de comentario -->

    <div class="flex items-center justify-center mt-5">
      <div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <div class="flex w-full items-center justify-between border-b pb-3">
          <div class="flex items-center space-x-3">
            <div class="h-8 w-8 rounded-full bg-slate-400" />
            <div class="text-lg font-bold text-slate-700">
              Lcdo.Avirio Vergara {datetime.toLocaleString()}
            </div>
          </div>
          <div class="flex items-center space-x-8">
            <button
              class="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold text-gray-900"
              >Coordinador
            </button>
            <div class="text-xs text-neutral-500" />
          </div>
        </div>

        <div class="mt-4 mb-6">
          <div class="mb-3 text-xl font-bold text-gray-900">
            ¡Bienvenidos nuevos estudiantes del servicio comunitario de la
            UNELLEZ!
          </div>
          <div class="text-sm text-neutral-600">
            Nos complace darles la bienvenida a esta experiencia transformadora
            de aprendizaje y servicio. En UNELLEZ, estamos comprometidos en
            fomentar una cultura de servicio y colaboración en nuestra
            comunidad, y estamos seguros de que su participación en el servicio
            comunitario será una exelente experiencia para ustedes y para las
            comunidades a las que servirán. Los alentamos a trabajar juntos para
            crear un impacto positivo y significativo en nuestras comunidades, y
            esperamos que su tiempo en el servicio comunitario les brinde la
            oportunidad de desarrollar habilidades valiosas, establecer
            conexiones y hacer una diferencia real en el mundo.
          </div>
        </div>

        <!--comentario-->

        <div class="text-gray-900">
          <form on:submit={handleSubmit}>
            <label for="comment">Agregar un comentario:</label>
            <textarea id="comment" bind:value={comment} />
            <button type="submit">Enviar</button>
          </form>
          <div>
            <div>
              <!--localstorage-->
              <div class="text-lg font-bold text-gray-900 mt-6">
                Comentarios:
              </div>
              {#each comments as comment}
                <div class=" text-gray-900 border rounded-md p-3 mt-3">
                  <div class="text-gray-900 mb-1">
                    {comment.author} - {comment.date.toLocaleString()}
                  </div>
                  <div class="text-gray-900">{comment.text}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- seccion de comentario -->
      </div>
    </div>
  </main>
{/if}
