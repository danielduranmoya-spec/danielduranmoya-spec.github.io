import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { useInViewPlayback } from '../hooks/useInViewPlayback';
import { MEADOW_VIDEO } from '../media';

const STORY = [
  'Diseño webs a medida para negocios que quieren que su web trabaje: que quien entra te escriba, reserve o pida presupuesto. Cuando encaja, añado escenas 3D y animaciones para que se recuerde.',
  'También conecto la web con WhatsApp, el correo y tus hojas de cálculo para que las tareas repetitivas se hagan solas y tú dediques el tiempo a tus clientes.',
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
            Sobre mí — creo webs y automatizaciones con un único propósito: que tu negocio consiga más clientes
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
              preload="none"
              aria-hidden="true"
              className="block h-full w-full object-cover object-bottom"
            >
              <source src={MEADOW_VIDEO} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
