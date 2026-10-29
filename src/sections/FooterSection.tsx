import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import CompassMark from '../components/CompassMark';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, whatsappHref } from '../components/ContactButton';
import { LEGAL_DOCS } from '../components/LegalDialog';
import { useInViewPlayback } from '../hooks/useInViewPlayback';
import { FOOTER_VIDEO } from '../media';

const footerLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Automatizaciones', href: '#automatizaciones' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'Contacto', href: `mailto:${CONTACT_EMAIL}` },
];

export default function FooterSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useInViewPlayback(videoRef);

  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, (v) => (reduceMotion ? 0 : v * 0.15));

  return (
    // An engraved stone viaduct; the video's white ground multiplies into the sage paper.
    <footer id="contacto" className="footer relative z-40 -mt-10 rounded-t-[40px] sm:-mt-12 sm:rounded-t-[50px] md:-mt-14 md:rounded-t-[60px]">
      <video
        ref={videoRef}
        className="footer__video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/media/footer-viaduct.webp"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      >
        <source src={FOOTER_VIDEO} type="video/mp4" />
      </video>

      <div className="footer__content">
        <motion.div style={{ rotate }}>
          <CompassMark className="footer__mark" label="Brújula de Daniel" />
        </motion.div>

        <p className="footer__brand">
          <a href="#" aria-label="Daniel, inicio">
            daniel
          </a>
        </p>

        <p className="footer__tagline">
          La ruta panorámica hacia proyectos memorables. Webs y automatizaciones para negocios, de la primera idea al lanzamiento.
        </p>

        <nav className="footer__nav" aria-label="Pie de página">
          <ul>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="link-draw">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={`mailto:${CONTACT_EMAIL}`} className="footer__mail link-draw">
          {CONTACT_EMAIL}
        </a>
        <a href={CONTACT_PHONE_HREF} className="footer__mail link-draw">
          {CONTACT_PHONE}
        </a>
        <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="footer__mail link-draw">
          Escríbeme por WhatsApp
        </a>

        <p className="footer__copy">
          © {new Date().getFullYear()} Daniel · Creador web. Todos los derechos reservados.
        </p>

        <nav className="footer__legal" aria-label="Textos legales">
          {Object.entries(LEGAL_DOCS).map(([key, label]) => (
            <a key={key} href={`#${key}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
