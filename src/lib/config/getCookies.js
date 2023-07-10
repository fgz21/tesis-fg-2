export const getCookies = (name) => {
  // Obtenemos todas las cookies del navegador
  const cookies = document.cookie.split("; ");

  // Buscamos la cookie con el nombre especificado
  const cookie = cookies.find((c) => c.startsWith(`${name}=`));

  // Si la cookie no existe, devolvemos null
  if (!cookie) {
    return null;
  }

  // Convertimos el valor de la cookie a un objeto en formato JSON
  const [, value] = cookie.split("=");
  const cookieObj = JSON.parse(decodeURIComponent(value));

  return cookieObj;
};
