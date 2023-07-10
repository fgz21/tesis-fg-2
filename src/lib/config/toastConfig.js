import { toasts } from "svelte-toasts";

export const showToast = ({title, description, type}) => {
    const toast = toasts.add({
      title,
      description,
      duration: 3000,
      placement: "top-left",
      type,
      theme: "dark",
      onClick: () => toast.remove(),
    });
  };