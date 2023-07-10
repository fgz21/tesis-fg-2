<script>
  import { FlatToast, ToastContainer } from "svelte-toasts";
  import Footer from "../lib/components/Footer.svelte";
  import Header from "../lib/components/Header.svelte";
</script>

<ToastContainer placement="bottom-right" let:data>
  <FlatToast {data} />
</ToastContainer>
<main class="min-h-screen bg-gray-900 text-white">
  <Header />
  <slot />
  <Footer />
</main>
