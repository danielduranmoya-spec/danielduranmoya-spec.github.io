import { ArrowDown, ArrowRight, BarChart3, CalendarClock, Globe, Mail, MessageCircle, Sheet, Star, BellRing, Workflow } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SectionKicker from '../components/SectionKicker';
import { whatsappHref } from '../components/ContactButton';
import { automationCases } from '../data';

const CASE_ICONS = [BellRing, CalendarClock, Star, BarChart3];

const OUTPUTS = [
  { icon: MessageCircle, label: 'Aviso a tu WhatsApp' },
  { icon: Sheet, label: 'Fila en tu hoja de contactos' },
  { icon: Mail, label: 'Respuesta al cliente' },
];

function FlowNode({ icon: Icon, label, strong = false }: { icon: typeof Globe; label: string; strong?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-5 py-4 ${
        strong ? 'bg-paper text-ink shadow-xl shadow-black/20' : 'border border-paper/25 bg-forest/30 text-paper'
      }`}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="text-sm font-medium uppercase tracking-wider">{label}</span>
    </div>
  );
}

// Example flow, drawn with plain boxes so it reflows from a row (desktop) to a column (mobile).
function FlowDiagram() {
  const Arrow = () => (
    <>
      <ArrowRight className="hidden h-6 w-6 shrink-0 text-sun md:block" aria-hidden="true" />
      <ArrowDown className="h-6 w-6 shrink-0 text-sun md:hidden" aria-hidden="true" />
    </>
  );

  return (
    <figure className="mx-auto max-w-5xl">
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
        <FlowNode icon={Globe} label="Formulario de tu web" />
        <Arrow />
        <FlowNode icon={Workflow} label="Automatización" strong />
        <Arrow />
        <div className="flex flex-col gap-3">
          {OUTPUTS.map((o) => (
            <FlowNode key={o.label} icon={o.icon} label={o.label} />
          ))}
        </div>
      </div>
      <figcaption className="mt-6 text-center text-sm font-light text-paper/70">
        Ejemplo: un cliente rellena el formulario y, en segundos, tú lo sabes, queda guardado y él recibe respuesta.
      </figcaption>
    </figure>
  );
}

export default function AutomationsSection() {
  return (
    <section
      id="automatizaciones"
      className="relative z-[25] -mt-10 rounded-t-[40px] bg-meadow-deep px-5 py-20 text-paper sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <SectionKicker number="02" label="automatizaciones" />
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-6 text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(1.6rem, 7.2vw, 120px)' }}
      >
        Automatizaciones
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="mx-auto mb-14 max-w-2xl text-center font-light leading-relaxed text-paper/85 sm:mb-20"
        style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
      >
        Las tareas que repites cada día (avisar, apuntar, recordar, responder) las puede hacer un flujo automático. Lo
        construyo con n8n, una herramienta de código abierto, y lo conecto con lo que ya usas: tu web, WhatsApp, el correo y
        tus hojas de cálculo.
      </FadeIn>

      <FadeIn delay={0.1}>
        <FlowDiagram />
      </FadeIn>

      <ul className="mx-auto mt-16 grid max-w-6xl gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {automationCases.map((c, i) => {
          const Icon = CASE_ICONS[i % CASE_ICONS.length];
          return (
            <FadeIn as="li" key={c.title} delay={i * 0.1} className="rounded-[28px] border border-paper/20 bg-forest/25 p-7">
              <Icon className="h-6 w-6 text-sun" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-medium uppercase tracking-wider">{c.title}</h3>
              <p className="mt-2 font-light leading-relaxed text-paper/80">{c.text}</p>
            </FadeIn>
          );
        })}
      </ul>

      <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-light text-paper/70">
        Los flujos funcionan en un servidor en la nube, las 24 horas. Solo escriben a personas que ya son clientes tuyos o
        que han dado su permiso.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href={whatsappHref('Hola Daniel, me gustaría automatizar una tarea de mi negocio. ¿Podemos hablar?')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-medium uppercase tracking-widest text-ink transition-colors duration-200 hover:bg-sun"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> Cuéntame qué repites
        </a>
        <a
          href="#tarifas"
          className="rounded-full border-2 border-paper px-7 py-3 text-sm font-medium uppercase tracking-widest text-paper transition-colors duration-200 hover:bg-paper/10"
        >
          Cómo se cobra
        </a>
      </div>
    </section>
  );
}
