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
