<script>
  // @ts-nocheck
  import { useLocation } from "svelte-routing";
  import { FlatToast, ToastContainer } from "svelte-toasts";
  import Footer from "../lib/components/Footer.svelte";
  import Header from "../lib/components/Header.svelte";

  let location = useLocation();
  let path = $location.pathname;
  let disableFooter;

  $: disableFooter = () => {
    path = $location.pathname;
    if (path === "/" || path === "/profile") {
      return true;
    }
  };
</script>

<ToastContainer placement="bottom-right" let:data>
  <FlatToast {data} />
</ToastContainer>
<main class="min-h-screen bg-gray-900 text-white">
  <Header />
  <slot />
  {#if !disableFooter()}
    <Footer />
  {/if}
</main>
