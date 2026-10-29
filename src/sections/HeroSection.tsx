import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton, { CONTACT_ANCHOR } from '../components/ContactButton';
import MobileMenu from '../components/MobileMenu';
import { useInViewPlayback } from '../hooks/useInViewPlayback';
import { HERO_PLATE, MEADOW_VIDEO } from '../media';

export const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Automatizaciones', href: '#automatizaciones' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Tarifas', href: '#tarifas' },
];

// Soft blue shadow from the scene's art direction; 1u = 100vw / 1440.
const SKY_SHADOW = '0 0.28vw 1.25vw rgba(28, 70, 120, 0.28)';
// Tighter, darker shadow for the small tagline so it stays readable over the clouds.
const TAGLINE_SHADOW = '0 1px 2px rgba(16, 42, 72, 0.7), 0 0 14px rgba(16, 42, 72, 0.45)';

function HeroScene() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  useInViewPlayback(videoRef);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* One 9:8 box that covers the hero, top-anchored; on narrow screens it is
          height-driven and shifted so the boy and dog stay in view. */}
      <div className="absolute left-[18%] top-0 aspect-[9/8] w-[max(100%,112.5vh,630px)] -translate-x-[18%]">
        <img src={HERO_PLATE} alt="" className="absolute inset-0 h-full w-full" />
        {!reduceMotion && (
          // The square video is the plate mirror-padded 120/1920 top and bottom.
          <video
            ref={videoRef}
            src={MEADOW_VIDEO}
            poster={HERO_PLATE}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute left-0 top-[-6.25%] h-[112.5%] w-full"
          />
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-forest md:h-40" />
    </div>
  );
}

export default function HeroSection() {
  return (
    // The sky colour stands in while the plate loads, so the hero is never a blank dark box.
    <section className="relative flex h-screen min-h-[560px] flex-col overflow-hidden bg-[#8ec3ec] supports-[height:100svh]:h-[100svh]">
      <HeroScene />

      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-10 flex items-center justify-between px-5 pt-5 md:px-8 md:pt-4"
      >
        <a href="#" aria-label="Daniel, inicio" className="block transition-transform duration-300 hover:-rotate-3">
          <img
            src="/logo-blanco.webp"
            alt=""
            width={660}
            height={790}
            className="h-16 w-auto drop-shadow-[0_2px_8px_rgba(28,70,120,0.35)] md:h-20"
          />
        </a>

        <div
          className="hidden items-center gap-8 rounded-full px-10 py-3 backdrop-blur-md lg:flex xl:gap-12 xl:px-12"
          style={{ background: 'rgba(173, 196, 174, 0.45)' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-draw text-base font-medium uppercase tracking-wider text-white xl:text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={CONTACT_ANCHOR}
            className="rounded-full bg-white px-5 py-2 text-sm font-medium uppercase tracking-wider text-meadow transition-transform duration-200 hover:-translate-y-0.5 md:px-6 md:py-2.5 md:text-base"
          >
            Contacto
          </a>
          <MobileMenu links={navLinks} />
        </div>
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center px-5 pt-[8vh] text-center md:pt-[7vw]">
        <FadeIn
          as="span"
          delay={0.15}
          y={0}
          blur={10}
          className="text-base font-semibold uppercase tracking-[0.2em] text-white md:text-[2.8vw]"
          style={{ textShadow: SKY_SHADOW }}
        >
          Creador web
        </FadeIn>

        <FadeIn
          as="h1"
          delay={0.3}
          y={40}
          blur={12}
          className="mt-1 whitespace-nowrap text-[9.5vw] font-black uppercase leading-none tracking-tight text-white md:text-[8.5vw]"
          style={{ textShadow: SKY_SHADOW }}
        >
          Hola, soy daniel
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.45}
          y={20}
          className="mt-4 max-w-[300px] font-normal uppercase leading-snug tracking-wide text-white sm:max-w-[420px] md:mt-6 md:max-w-[560px]"
          style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.35rem)', textShadow: TAGLINE_SHADOW }}
        >
          webs y automatizaciones para que tu negocio consiga más clientes
        </FadeIn>

        <FadeIn delay={0.6} y={20} className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8 md:gap-4">
          <ContactButton />
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full px-7 py-3 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md transition-transform duration-200 hover:-translate-y-0.5 sm:py-3.5 sm:text-sm md:px-9 md:py-4 md:text-base"
            style={{ background: 'rgba(63, 107, 70, 0.72)' }}
          >
            Proyectos
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
