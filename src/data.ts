export const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const services = [
  {
    name: 'Modelado 3D',
    description:
      'Creación de objetos, personajes o entornos detallados adaptados a las necesidades de cada cliente, ideales para videojuegos, productos y visualizaciones.',
  },
  {
    name: 'Renderizado',
    description:
      'Renders fotorrealistas de alta calidad que muestran cada diseño con iluminación, texturas y materiales a medida para dar vida a las ideas.',
  },
  {
    name: 'Motion design',
    description:
      'Animaciones y gráficos en movimiento que aportan energía y narrativa a marcas, productos y experiencias digitales.',
  },
  {
    name: 'Identidad de marca',
    description:
      'Identidades visuales coherentes —del logotipo al sistema de marca completo— que transmiten una presencia clara y memorable.',
  },
  {
    name: 'Diseño web',
    description:
      'Sitios web limpios, modernos y orientados a la conversión, cuidando la maquetación, la tipografía y la experiencia de usuario.',
  },
];

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  name: string;
  category: string;
  url: string;
  col1: [ProjectImage, ProjectImage];
  col2: ProjectImage;
}

// Capturas reales de las webs, en public/projects/.
export const projects: Project[] = [
  {
    name: 'AMV Salón barbería',
    category: 'Cliente',
    url: 'https://danielduranmoya-spec.github.io/amv-salon-barberia/',
    col1: [
      {
        src: '/projects/amv-inicio.webp',
        alt: 'Portada 3D de AMV Salón barbería con el peluquero, el cliente y el selector de servicios de cristal',
      },
      {
        src: '/projects/amv-mapa.webp',
        alt: 'Mapa interactivo con la ruta hasta la barbería junto a la dirección y el horario',
      },
    ],
    col2: {
      src: '/projects/amv-escena.webp',
      alt: 'Escena 3D del servicio completo con tijeras, peine y navaja flotando y la nube de precio',
    },
  },
  {
    name: 'DOTTIES',
    category: 'Concepto',
    url: 'https://danielduranmoya-spec.github.io/dotties-moda/',
    col1: [
      {
        src: '/projects/dotties-escena.webp',
        alt: 'Escena de vídeo de DOTTIES con el modelo sobre una azotea frente al skyline',
      },
      {
        src: '/projects/dotties-catalogo.webp',
        alt: 'Catálogo de la tienda DOTTIES con prendas de lunares, filtros y selector de color y talla',
      },
    ],
    col2: {
      src: '/projects/dotties-inicio.webp',
      alt: 'Portada de DOTTIES con el titular «El punto exacto» y el controlador de escena sobre el vídeo',
    },
  },
  {
    name: 'Melli',
    category: 'Concepto',
    url: 'https://danielduranmoya-spec.github.io/melli-3d/',
    col1: [
      {
        src: '/projects/melli-inicio.webp',
        alt: 'Portada de Melli con una abeja en 3D posada sobre una flor violeta',
      },
      {
        src: '/projects/melli-flor.webp',
        alt: 'Sección de Melli con la abeja 3D volando junto a una pasiflora',
      },
    ],
    col2: {
      src: '/projects/melli-invitacion.webp',
      alt: 'Sección oscura de Melli con la abeja 3D sobre un iris y el texto de invitación',
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
