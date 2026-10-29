// Formulario de Google donde se guardan los mensajes del formulario de contacto.
// formId: lo que va entre /d/e/ y /viewform en el enlace del formulario.
// fields: el número de cada pregunta (entry.NNN), sacado del enlace «Obtener enlace prellenado».
// Mientras formId esté vacío, la sección del formulario no se muestra.
export const GOOGLE_FORM = {
  formId: '',
  fields: {
    nombre: '',
    contacto: '',
    negocio: '',
    mensaje: '',
  },
};

export const isContactFormReady = () =>
  Boolean(GOOGLE_FORM.formId) && Object.values(GOOGLE_FORM.fields).every(Boolean);
