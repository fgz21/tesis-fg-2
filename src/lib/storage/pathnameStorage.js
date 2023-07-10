import { onMount } from "svelte";
import { writable } from "svelte/store";

export const pathnameStorage = () => {
  const currentPathname = writable(location.pathname);

  onMount(() => {
    const updatePathname = () => {
      currentPathname.set(location.pathname);
    };

    window.addEventListener("popstate", updatePathname);
    return () => {
      window.removeEventListener("popstate", updatePathname);
    };
  });

  return currentPathname;
};
