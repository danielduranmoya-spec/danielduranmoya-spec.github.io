import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CompassMark from '../components/CompassMark';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from '../components/ContactButton';
import { LEGAL_DOCS } from '../components/LegalDialog';
import { useInViewPlayback } from '../hooks/useInViewPlayback';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260928_144832_2b6b23aa-4416-4fcb-9df4-132349c59edc.mp4';

const footerLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: `mailto:${CONTACT_EMAIL}` },
];

export default function FooterSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useInViewPlayback(videoRef);

  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, (v) => v * 0.15);

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
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        disablePictureInPicture
      >
        <source src={VIDEO_URL} type="video/mp4" />
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
          La ruta panorámica hacia proyectos memorables. Diseño, 3D y web, de la primera idea al lanzamiento.
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
