import FadeIn from '../components/FadeIn';
import SectionKicker from '../components/SectionKicker';
import { services } from '../data';

const BORDER = '1px solid rgba(235, 238, 231, 0.18)';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative z-20 -mt-10 rounded-t-[40px] bg-ink px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <SectionKicker number="02" label="qué hago" />
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Servicios
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, i) => (
          <FadeIn
            key={service.name}
            delay={i * 0.1}
            className="group relative flex items-start gap-6 overflow-hidden py-8 text-paper sm:gap-10 sm:py-10 md:gap-16 md:py-12"
            style={{ borderTop: BORDER, borderBottom: i === services.length - 1 ? BORDER : undefined }}
          >
            {/* Sage wash that sweeps in from the left on hover. */}
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-sage/15 transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
            <span
              className="relative font-black leading-none text-sky-pale transition-colors duration-300 group-hover:text-sun"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="relative flex flex-col gap-2 pt-1 transition-transform duration-500 ease-out group-hover:translate-x-2 sm:gap-3 md:pt-3">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-paper/80"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
