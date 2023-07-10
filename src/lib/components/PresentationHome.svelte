<section class="bg-gray-900 text-white flex justify-start">
  <div class="max-w-screen-xl px-8 py-32 lg:flex lg:h-[85vh] lg:items-start">
    <div class="mx-auto max-w-3xl text-start">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl intro-texto"
      >
        SERVICIO COMUNITARIO <br /> UNELLEZ VPDS 2023<span class="cursor"
          >|</span
        >
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed" />
      <div class="mt-8 flex flex-wrap justify-start gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transform transition-transform hover:scale-105"
          href="#mapa"
        >
          Ubicación</a
        >

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto transform transition-transform hover:scale-105"
          href="#contacto"
        >
          Contacto
        </a>
      </div>
    </div>
  </div>
</section>

<style scoped>
  /* efecto escritura de maquina en texto */
  .intro-texto {
    font-family: monospace;
    white-space: nowrap;
    width: 20ch;
    animation: escribiendo 3s steps(20) 2;
    overflow: hidden;
  }

  /* cursor efect  */
  .cursor {
    animation: 0.6s parpadeo-cursor infinite;
    color: #fff;
  }

  /* keyframes */
  @keyframes escribiendo {
    from {
      width: 0;
    }
  }

  @keyframes parpadeo-cursor {
    50% {
      opacity: 0;
    }
  }

  @keyframes word {
    0% {
      transform: translateY(100%);
    }
    15% {
      transform: translateY(-10%);
      animation-timing-function: ease-out;
    }

    20% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-110%);
    }
  }
</style>
