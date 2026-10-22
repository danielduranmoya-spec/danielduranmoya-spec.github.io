import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { useInViewPlayback } from '../hooks/useInViewPlayback';

// The original Cloudinary clip is unavailable (account disabled); the hero's
// meadow loop stands in, cropped to the waving grass. Swap the URL to replace it.
const MEADOW_VIDEO_URL =
  'https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/d2cb5bef-f92b-4e91-ae93-8dc6555e56ac.mp4';

const STORY = [
  'Me centro en el branding, el diseño web y la experiencia de usuario, y combino modelado 3D, renderizado y motion design para dar vida a cada idea.',
  'Disfruto de verdad trabajando con empresas que quieren destacar y mostrar su mejor imagen. Tu marca debería contar tu historia, no perderse entre el ruido. ¡Construyamos juntos algo increíble!',
];

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  useInViewPlayback(videoRef);

  return (
    <section
      id="about"
      className="relative z-10 flex min-h-screen w-full flex-col overflow-hidden rounded-t-[40px] bg-meadow-deep font-manrope sm:rounded-t-[50px] md:rounded-t-[60px]"
    >
      <div className="flex w-full flex-1 flex-col items-center pt-[100px] md:pt-[160px]">
        <div className="relative z-20 mx-auto flex h-auto w-full max-w-[900px] flex-col items-center px-8 text-center">
          <FadeIn delay={0} y={20} className="mb-12">
            <img
              src="/logo-blanco.webp"
              alt="Logotipo de Daniel: un cursor con boina que muestra una web"
              width={660}
              height={790}
              loading="lazy"
              className="h-auto w-[120px] transition-transform duration-500 hover:-rotate-3 sm:w-[150px]"
            />
          </FadeIn>

          <FadeIn
            as="h2"
            delay={0.1}
            y={20}
            className="mx-auto mb-[40px] w-full max-w-[420px] text-[16px] uppercase leading-[1.6] tracking-wider text-white"
          >
            Sobre mí — diseño marcas, webs y mundos 3D con un único propósito: que tu proyecto destaque y se
            recuerde
          </FadeIn>

          <FadeIn
            delay={0.2}
            y={30}
            blur={8}
            className="mb-[32px] font-marck text-[96px] leading-none text-white sm:text-[120px]"
          >
            Daniel
          </FadeIn>

          <AnimatedText
            paragraphs={STORY}
            className="mb-16 flex w-full flex-col items-center gap-[24px] font-light leading-[1.6] text-white md:mb-24"
            paragraphClassName="w-[420px] max-w-full text-center text-[16px]"
          />

          <FadeIn delay={0.1} y={20} className="mb-12 md:mb-16">
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      {/* Meadow strip; a gradient melts the section colour into the top of the video. */}
      <div className="relative w-full shrink-0">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-[100px] w-full bg-gradient-to-b from-meadow-deep to-transparent md:h-[160px]" />
        <div className="aspect-[16/7] w-full overflow-hidden md:aspect-[16/5]">
          {!reduceMotion && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              className="block h-full w-full object-cover object-bottom"
            >
              <source src={MEADOW_VIDEO_URL} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
