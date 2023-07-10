<script>
  import { Route, Router } from "svelte-routing";
  import { getCookies } from "./lib/config/getCookies";
  import { userStorage } from "./lib/storage/userStorage";
  import Layout from "./routes/Layout.svelte";
  import ProtectedRoutes from "./routes/ProtectedRoutes.svelte";
  import NotFound from "./routes/Public/NotFound.svelte";
  import PublicRoutes from "./routes/PublicRoutes.svelte";

  // Variable user
  let user = $userStorage;

  // Validando que existan datos de usuario autenticado
  const cookies = getCookies("auth");

  // si existen los datos entonces la variable "user" tendrá esos datos
  if (cookies) $userStorage = cookies;

  $: user = $userStorage;
</script>

<Router>
  <Layout>
    <ProtectedRoutes />
    <PublicRoutes />
    <Route path="*" component={NotFound} />
  </Layout>
</Router>
