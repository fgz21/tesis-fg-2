<script>
  import Icon from "@iconify/svelte";
  import notFundImg from "/404.png";
</script>

<main
  class="w-full min-h-[80vh] flex flex-col gap-5 justify-center items-center"
>
  <article
    class="flex flex-wrap md:justify-start justify-center items-center gap-0 md:gap-2"
  >
    <Icon class="text-8xl" icon="tabler:error-404" />
    <div class="text-center sm:text-left px-5">
      <h1 class="text-2xl">Error página no encontrada</h1>
      <h2 class="text-xl md:px-0">
        Prueba probablemente no tengas acceso o no exista la página
      </h2>
    </div>
  </article>
  <img
    class="w-[30vw] max-w-xl h-[auto] pointer-events-none"
    src={notFundImg}
    alt="Error 404"
  />
</main>