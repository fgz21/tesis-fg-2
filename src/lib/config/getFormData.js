// Obtener campos del formulario
export const getFormData = (form) => {
    const formData = new FormData(form);
    const values = {};

    for (const [key, value] of formData.entries()) {
      values[key] = value;
    }

    return values;
  };