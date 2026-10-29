import { useState, type FormEvent } from 'react';
import { Check, Send } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SectionKicker from '../components/SectionKicker';
import { whatsappHref } from '../components/ContactButton';
import { GOOGLE_FORM, isContactFormReady } from '../contactForm';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'w-full rounded-2xl border border-paper/25 bg-forest/40 px-4 py-3 text-paper placeholder:text-paper/45 focus:border-sun focus:outline-none';

// Sends the message to a Google Form, which stores it in a sheet; the n8n workflow
// on Daniel's laptop picks new rows up from there. Google does not allow reading the
// response from another site (no-cors), so a request that reaches Google counts as sent.
async function submitToGoogleForm(data: Record<keyof typeof GOOGLE_FORM.fields, string>) {
  const body = new URLSearchParams();
  for (const [key, entry] of Object.entries(GOOGLE_FORM.fields)) {
    body.append(`entry.${entry}`, data[key as keyof typeof data]);
  }
  await fetch(`https://docs.google.com/forms/d/e/${GOOGLE_FORM.formId}/formResponse`, {
    method: 'POST',
    mode: 'no-cors',
    body,
  });
}

export default function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');

  if (!isContactFormReady()) return null;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    // Honeypot: real visitors never see or fill this field.
    if (fd.get('web')) return;
    setStatus('sending');
    try {
      await submitToGoogleForm({
        nombre: String(fd.get('nombre') ?? '').trim(),
        contacto: String(fd.get('contacto') ?? '').trim(),
        negocio: String(fd.get('negocio') ?? '').trim(),
        mensaje: String(fd.get('mensaje') ?? '').trim(),
      });
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="escribeme"
      className="relative z-[38] -mt-10 rounded-t-[40px] bg-forest px-5 pb-32 pt-20 text-paper sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-40 md:pt-32"
    >
      <SectionKicker number="05" label="hablemos" />
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-6 text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(2.4rem, 10vw, 140px)' }}
      >
        Escríbeme
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="mx-auto mb-12 max-w-xl text-center font-light leading-relaxed text-paper/80"
        style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
      >
        Cuéntame qué necesitas y te respondo en menos de 48 horas. Este formulario funciona con la misma automatización
        que puedo montar en tu negocio.
      </FadeIn>

      {status === 'sent' ? (
        <div role="status" className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-[28px] border border-paper/20 p-8 text-center">
          <Check className="h-8 w-8 text-sun" aria-hidden="true" />
          <p className="text-lg font-medium">Mensaje recibido. Gracias.</p>
          <p className="font-light text-paper/75">Te contesto en menos de 48 horas.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mx-auto grid max-w-xl gap-4">
          <label className="grid gap-1.5">
            <span className="text-sm font-medium uppercase tracking-wider">Nombre</span>
            <input name="nombre" required autoComplete="name" maxLength={120} className={inputClass} />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium uppercase tracking-wider">Email o teléfono</span>
            <input name="contacto" required autoComplete="email" maxLength={160} className={inputClass} />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium uppercase tracking-wider">
              Negocio <span className="font-light normal-case text-paper/60">(opcional)</span>
            </span>
            <input name="negocio" autoComplete="organization" maxLength={160} className={inputClass} />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium uppercase tracking-wider">¿Qué necesitas?</span>
            <textarea name="mensaje" required rows={5} maxLength={2000} className={inputClass} />
          </label>
          <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <label className="flex items-start gap-3 text-sm font-light text-paper/80">
            <input type="checkbox" required className="mt-1 h-4 w-4 accent-[#f2c94c]" />
            <span>
              He leído la{' '}
              <a href="#privacidad" className="underline underline-offset-2">
                política de privacidad
              </a>{' '}
              y acepto que se usen mis datos para responder a mi consulta.
            </span>
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-paper px-7 py-4 text-sm font-medium uppercase tracking-widest text-ink transition-colors duration-200 hover:bg-sun disabled:opacity-60"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>
          {status === 'error' && (
            <p role="alert" className="text-center text-sm text-sun">
              No se ha podido enviar. Escríbeme por{' '}
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="underline">
                WhatsApp
              </a>
              .
            </p>
          )}
        </form>
      )}
    </section>
  );
}
