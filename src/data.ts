export const services = [
  {
    name: 'Webs que captan clientes',
    description:
      'Webs a medida, rápidas y adaptadas a móvil, pensadas para que quien entra te escriba, reserve o pida presupuesto. Con SEO local y textos legales incluidos.',
  },
  {
    name: 'Automatizaciones',
    description:
      'Conecto tu web con WhatsApp, el correo y tus hojas de cálculo para que las tareas repetitivas se hagan solas: avisos de contacto, recordatorios de cita o peticiones de reseña.',
  },
  {
    name: 'Mantenimiento y mejoras',
    description:
      'Cambios de contenido, copias de seguridad y actualizaciones para que tu web y tus automatizaciones sigan funcionando con el tiempo.',
  },
];

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  name: string;
  /** Negocio ficticio creado como muestra de trabajo. */
  concept?: boolean;
  category: string;
  url: string;
  col1: [ProjectImage, ProjectImage];
  col2: ProjectImage;
}

// Capturas reales de las webs, en public/projects/. La imagen grande (col2) es siempre el hero.
export const projects: Project[] = [
  {
    name: 'ÁNCORA Fisioterapia',
    concept: true,
    category: 'Landing page',
    url: 'https://danielduranmoya-spec.github.io/ancora-fisio/',
    col1: [
      {
        src: '/projects/ancora-zonas.webp',
        alt: 'Mapa corporal interactivo de ÁNCORA para elegir la zona del dolor y ver cómo se trata',
      },
      {
        src: '/projects/ancora-tarifas.webp',
        alt: 'Tabla de tarifas de ÁNCORA con sesiones y bonos a precio cerrado',
      },
    ],
    col2: {
      src: '/projects/ancora-inicio.webp',
      alt: 'Portada de ÁNCORA Fisioterapia: «Dolor resuelto, no aplazado» y la tarjeta de primera valoración en 48 horas',
    },
  },
  {
    name: 'LUMBRE Asador',
    concept: true,
    category: 'Web de negocio',
    url: 'https://danielduranmoya-spec.github.io/lumbre-asador/',
    col1: [
      {
        src: '/projects/lumbre-carta.webp',
        alt: 'Carta de LUMBRE «Todo pasa por la brasa» con categorías y precios',
      },
      {
        src: '/projects/lumbre-reservas.webp',
        alt: 'Reserva de mesa de LUMBRE en tres pasos con calendario y resumen',
      },
    ],
    col2: {
      src: '/projects/lumbre-inicio.webp',
      alt: 'Portada de LUMBRE: «Fuego de encina. Carne de dehesa.» con brasas y horario',
    },
  },
  {
    name: 'LAJA Bodega',
    concept: true,
    category: 'Web interactiva 3D',
    url: 'https://danielduranmoya-spec.github.io/laja-bodega/',
    col1: [
      {
        src: '/projects/laja-etiqueta.webp',
        alt: 'Primer plano 3D de la etiqueta numerada de LAJA Tempranillo Crianza 2021',
      },
      {
        src: '/projects/laja-uvas.webp',
        alt: 'La botella de LAJA convertida en un racimo de uvas 3D en la sección «De la botella a la cepa»',
      },
    ],
    col2: {
      src: '/projects/laja-inicio.webp',
      alt: 'Portada de LAJA con la botella de vino en 3D y el titular «Vino de pizarra, hecho a 620 metros»',
    },
  },
];

export interface Plan {
  name: string;
  price: string;
  unit?: string;
  summary: string;
  features: string[];
  timeline: string;
  featured?: boolean;
}

// Precios orientativos sin IVA; edítalos aquí.
export const plans: Plan[] = [
  {
    name: 'Landing page',
    price: '390 €',
    summary: 'Una página a medida para presentar tu negocio o una campaña.',
    features: ['Diseño a medida adaptado a móvil', 'Botón de WhatsApp y contacto', 'SEO básico y textos legales', '2 rondas de revisiones'],
    timeline: '1–2 semanas',
  },
  {
    name: 'Web de negocio',
    price: '890 €',
    summary: 'La web completa de tu negocio, lista para captar clientes.',
    features: ['Hasta 5 secciones', 'Reservas online o catálogo', 'Mapa, horario y reseñas', 'Animaciones y textos legales'],
    timeline: '3–4 semanas',
    featured: true,
  },
  {
    name: 'Web interactiva 3D',
    price: '1.690 €',
    summary: 'Una experiencia que nadie olvida, con escenas 3D o vídeo interactivo.',
    features: ['Escena 3D o vídeo interactivo', 'Personajes o productos en 3D', 'Todo lo de la web de negocio', 'Optimizada para móvil'],
    timeline: '4–6 semanas',
  },
];

export const maintenance = {
  name: 'Mantenimiento',
  price: '35 €',
  unit: '/mes',
  summary: 'Cambios de contenido, copias de seguridad y actualizaciones para que tu web siga al día.',
};

export const processSteps = [
  { title: 'Hablamos', text: 'Una llamada o reunión gratuita de 30 minutos para entender tu negocio. Te envío un presupuesto cerrado en 48 horas.' },
  { title: 'Diseño', text: 'Preparo la propuesta visual y la ajustamos juntos. Incluye dos rondas de revisiones.' },
  { title: 'Desarrollo', text: 'Construyo la web adaptada a móvil, con textos legales y SEO básico, y te la enseño antes de publicarla.' },
  { title: 'Lanzamiento', text: 'Publicamos con el dominio a tu nombre: la web es tuya. Tienes 30 días de soporte gratuito.' },
];

export interface AutomationCase {
  title: string;
  text: string;
}

// Ejemplos de flujos que se ofrecen; cada uno se adapta a las herramientas del negocio.
export const automationCases: AutomationCase[] = [
  {
    title: 'Ningún contacto se pierde',
    text: 'Cada mensaje del formulario de tu web te llega al momento por WhatsApp o correo y queda apuntado en una hoja de cálculo.',
  },
  {
    title: 'Recordatorio de cita',
    text: 'Tus clientes reciben un aviso el día antes de su cita o reserva. Menos huecos vacíos en la agenda.',
  },
  {
    title: 'Más reseñas en Google',
    text: 'Después de la visita, el cliente recibe un mensaje con el enlace para dejar su reseña.',
  },
  {
    title: 'Resumen semanal',
    text: 'Cada lunes, un resumen con los contactos, reservas y presupuestos de la semana anterior.',
  },
];

export const automationPricing = {
  name: 'Automatizaciones',
  summary: 'Cada flujo depende de tus herramientas y de cuánto hay que conectar, así que el precio se calcula en la primera reunión.',
  setup: {
    label: 'Puesta en marcha',
    price: 'A medida',
    detail: 'Pago único según la complejidad y las horas de trabajo.',
  },
  monthly: {
    label: 'Cuota mensual',
    price: 'A medida',
    detail: 'Servidor en la nube y mantenimiento del flujo, según el uso.',
  },
};
