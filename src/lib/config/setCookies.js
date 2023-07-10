export const setCookies = (name, obj, daysToExpire) => {
  // Convertimos el objeto a una cadena de texto en formato JSON
  const objStr = JSON.stringify(obj);

  // Creamos la fecha de expiración de la cookie
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + daysToExpire * 24 * 60 * 60 * 1000
  );

  // Guardamos el objeto en la cookie
  document.cookie = `${name}=${objStr};expires=${expirationDate.toUTCString()};path=/`;
};
