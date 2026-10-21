import { Check, Clock, MessageCircle } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SectionKicker from '../components/SectionKicker';
import { whatsappHref } from '../components/ContactButton';
import { maintenance, plans, processSteps } from '../data';

export default function PricingSection() {
  return (
    <section
      id="tarifas"
      className="relative z-[35] -mt-10 rounded-t-[40px] bg-ink px-5 pb-32 pt-20 text-paper sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-40 md:pt-32"
    >
      <SectionKicker number="04" label="tarifas y proceso" />
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-6 text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Tarifas
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="mx-auto mb-14 max-w-xl text-center font-light leading-relaxed text-paper/80 sm:mb-20"
        style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
      >
        Precios de partida para que sepas desde el principio a qué atenerte. Tras la primera reunión te envío un
        presupuesto cerrado, sin sorpresas.
      </FadeIn>

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 md:gap-6">
        {plans.map((plan, i) => (
          <FadeIn
            key={plan.name}
            delay={i * 0.1}
            className={`group relative flex flex-col rounded-[32px] p-7 transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:p-8 ${
              plan.featured ? 'bg-paper text-ink shadow-2xl shadow-black/30' : 'border border-paper/20 bg-forest/40'
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-sun px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                La más pedida
              </span>
            )}
            <h3 className="text-lg font-medium uppercase tracking-wider">{plan.name}</h3>
            <p className={`mt-1 text-sm font-light ${plan.featured ? 'text-ink/70' : 'text-paper/70'}`}>{plan.summary}</p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className={`text-sm font-light ${plan.featured ? 'text-ink/70' : 'text-paper/70'}`}>desde</span>
              <span className="font-black leading-none" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.4rem)' }}>
                {plan.price}
              </span>
            </p>
            <ul className="mt-6 flex flex-1 flex-col gap-3 text-[0.95rem] font-light">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-meadow' : 'text-sky-pale'}`} />
                  {f}
                </li>
              ))}
            </ul>
            <p className={`mt-6 flex items-center gap-2 text-sm ${plan.featured ? 'text-ink/70' : 'text-paper/70'}`}>
              <Clock className="h-4 w-4" /> {plan.timeline}
            </p>
            <a
              href={whatsappHref(`Hola Daniel, me interesa el plan «${plan.name}». ¿Podemos hablar?`)}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
                plan.featured ? 'bg-ink text-paper hover:bg-meadow' : 'border-2 border-paper text-paper hover:bg-paper/10'
              }`}
            >
              <MessageCircle className="h-4 w-4" /> Pedir presupuesto
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn
        delay={0.1}
        className="mx-auto mt-5 flex max-w-6xl flex-col gap-4 rounded-[32px] border border-paper/20 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8 md:mt-6"
      >
        <div>
          <h3 className="text-lg font-medium uppercase tracking-wider">{maintenance.name}</h3>
          <p className="mt-1 max-w-xl text-sm font-light text-paper/70">{maintenance.summary}</p>
        </div>
        <p className="shrink-0 font-black leading-none" style={{ fontSize: 'clamp(2rem, 3vw, 2.6rem)' }}>
          {maintenance.price}
          <span className="text-base font-light text-paper/70">{maintenance.unit}</span>
        </p>
      </FadeIn>
      <p className="mx-auto mt-5 max-w-6xl text-center text-sm font-light text-paper/60">
        Precios orientativos sin IVA (21 % aparte). El dominio y el alojamiento, si los necesitas, se presupuestan aparte.
      </p>

      <div className="mx-auto mt-24 max-w-6xl sm:mt-32">
        <FadeIn
          as="h3"
          y={30}
          className="mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16"
          style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
        >
          Cómo trabajo
        </FadeIn>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <FadeIn as="li" key={step.title} delay={i * 0.12} className="border-t border-paper/20 pt-6">
              <span className="font-serif text-sun" style={{ fontVariationSettings: '"opsz" 72' }}>
                Paso {i + 1}
              </span>
              <h4 className="mt-2 text-xl font-medium uppercase tracking-wider">{step.title}</h4>
              <p className="mt-3 font-light leading-relaxed text-paper/80">{step.text}</p>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
