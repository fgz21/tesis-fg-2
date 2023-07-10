export const deleteCookies = (name) => {
  // Creamos una fecha de expiración en el pasado para eliminar la cookie
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};
