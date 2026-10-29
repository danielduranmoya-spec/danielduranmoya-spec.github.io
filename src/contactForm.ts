// Formulario de Google donde se guardan los mensajes del formulario de contacto.
// formId: lo que va entre /d/e/ y /viewform en el enlace del formulario.
// fields: el número de cada pregunta (entry.NNN), sacado del enlace «Obtener enlace prellenado».
// Mientras formId esté vacío, la sección del formulario no se muestra.
export const GOOGLE_FORM = {
  formId: '1FAIpQLSeayZblJ8NS-KMY9AG11HrmOBUxmbjBYc2rznKUhOjFr33FTg',
  fields: {
    nombre: '1082328704',
    contacto: '1533132828',
    negocio: '1328207113',
    mensaje: '89354986',
  },
};

export const isContactFormReady = () =>
  Boolean(GOOGLE_FORM.formId) && Object.values(GOOGLE_FORM.fields).every(Boolean);
