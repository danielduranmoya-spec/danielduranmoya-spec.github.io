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

// Capturas reales de las webs, en public/projects/. La imagen grande (col2) es siempre el hero.
export const projects: Project[] = [
  {
    name: 'ÁNCORA Fisioterapia',
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
