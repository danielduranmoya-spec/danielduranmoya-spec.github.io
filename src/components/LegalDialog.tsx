import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from './ContactButton';
import { isContactFormReady } from '../contactForm';

// Datos del titular (art. 10 LSSI-CE). Completa los campos vacíos antes de publicar:
// mientras estén vacíos se muestran resaltados como «pendiente» en los textos legales.
const TITULAR = {
  nombre: 'Daniel Durán Moya',
  nif: '09214432B',
  domicilio: 'Calle Comarca Ribera del Tajo, 57, 06800 Mérida (Badajoz)',
  registroMercantil: '', // solo si actúas como sociedad; vacío = persona física
};
const ULTIMA_ACTUALIZACION = '29 de octubre de 2026';

export const LEGAL_DOCS = {
  'aviso-legal': 'Aviso legal',
  privacidad: 'Política de privacidad',
  cookies: 'Política de cookies',
} as const;
type LegalKey = keyof typeof LEGAL_DOCS;

const isLegalKey = (v: string): v is LegalKey => v in LEGAL_DOCS;
const keyFromHash = (): LegalKey | null => {
  const h = window.location.hash.slice(1);
  return isLegalKey(h) ? h : null;
};

function Field({ value, label }: { value: string; label: string }) {
  if (value) return <>{value}</>;
  return <mark className="rounded bg-sun/40 px-1 text-ink">[pendiente: {label}]</mark>;
}

const Mail = () => <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
const Phone = () => <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>;

function Titular() {
  return (
    <ul>
      <li>Titular: <Field value={TITULAR.nombre} label="nombre y apellidos" /></li>
      <li>NIF: <Field value={TITULAR.nif} label="NIF" /></li>
      <li>Domicilio: <Field value={TITULAR.domicilio} label="domicilio" /></li>
      <li>Correo electrónico: <Mail /></li>
      <li>Teléfono: <Phone /></li>
    </ul>
  );
}

function AvisoLegal() {
  return (
    <>
      <h3>1. Datos identificativos</h3>
      <p>En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de esta web:</p>
      <Titular />
      <p>
        {TITULAR.registroMercantil
          ? `Inscripción en el Registro Mercantil: ${TITULAR.registroMercantil}.`
          : 'El titular ejerce su actividad como persona física y no está inscrito en el Registro Mercantil.'}{' '}
        La actividad (diseño y desarrollo web y automatización de procesos) no está sujeta a autorización
        administrativa ni a colegiación profesional.
      </p>

      <h3>2. Objeto y condiciones de uso</h3>
      <p>Esta web es el portfolio profesional del titular: presenta sus servicios y una selección de proyectos de muestra, y facilita el contacto para solicitar información o presupuesto. Su uso es libre y gratuito. Al navegar por ella aceptas usarla de forma lícita y no dañar su funcionamiento ni sus contenidos.</p>

      <h3>3. Propiedad intelectual e industrial</h3>
      <p>Los textos, el diseño y el código de esta web son del titular o se usan con permiso. No se permite su reproducción, distribución ni transformación con fines comerciales sin autorización por escrito.</p>
      <p>Los proyectos del apartado «Proyectos» son negocios ficticios creados por el titular como muestra de su trabajo; cualquier parecido con negocios reales es casual.</p>
      <p>Tipografías Kanit, Fraunces, Manrope y Marck Script, de Google Fonts, bajo la licencia SIL Open Font License 1.1. Iconos de Lucide, bajo licencia ISC.</p>

      <h3>4. Responsabilidad</h3>
      <p>El titular procura que la información de esta web sea exacta y esté actualizada, pero tiene carácter orientativo: los presupuestos y condiciones de cada encargo solo son vinculantes cuando se acuerdan por escrito. No se garantiza que la web esté disponible sin interrupciones ni libre de errores.</p>
      <p>Los enlaces a webs de terceros se ofrecen solo como referencia. El titular no controla esas webs ni responde de sus contenidos.</p>

      <h3>5. Legislación aplicable</h3>
      <p>Este aviso legal se rige por la legislación española. Si eres consumidor, serán competentes los juzgados de tu domicilio.</p>
    </>
  );
}

function Privacidad() {
  return (
    <>
      <h3>1. Responsable del tratamiento</h3>
      <Titular />

      <h3>2. Qué datos tratamos</h3>
      {isContactFormReady() ? (
        <p>Esta web no recoge datos con fines analíticos o publicitarios. Solo tratamos los datos que nos facilitas cuando usas el formulario de contacto, escribes por correo o por WhatsApp o llamas por teléfono: tu nombre, tus datos de contacto, el nombre de tu negocio si lo indicas y la información que compartas sobre tu proyecto.</p>
      ) : (
        <p>Esta web no tiene formularios ni recoge datos con fines analíticos o publicitarios. Solo tratamos los datos que nos facilitas cuando escribes por correo o por WhatsApp o llamas por teléfono: tu nombre, tus datos de contacto y la información que compartas sobre tu proyecto.</p>
      )}
      <p>Esta web se aloja en GitHub Pages, un servicio de GitHub, Inc. Todos sus archivos (textos, tipografías, imágenes y vídeos) se sirven desde ahí, sin recursos de otros servidores. Para enviarte la página, GitHub recibe datos técnicos como tu dirección IP y los trata según su <a href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">declaración de privacidad</a>.</p>

      <h3>3. Para qué y con qué base legal</h3>
      <ul>
        <li><strong>Responder a tu consulta y prepararte un presupuesto</strong>: aplicación de medidas precontractuales a petición tuya (art. 6.1.b del RGPD).</li>
        <li><strong>Gestionar el encargo y la facturación</strong> si llegamos a trabajar juntos: ejecución del contrato (art. 6.1.b) y cumplimiento de obligaciones legales, como las fiscales (art. 6.1.c).</li>
      </ul>
      <p>No tomamos decisiones automatizadas ni elaboramos perfiles con tus datos.</p>

      <h3>4. Cuánto tiempo los conservamos</h3>
      <p>Si solo nos has hecho una consulta, conservamos la conversación mientras sea necesaria para atenderla y, como máximo, 12 meses desde el último contacto. Si eres cliente, durante la relación profesional y, después, durante los plazos legales: 6 años para la documentación mercantil (art. 30 del Código de Comercio) y 4 años para la tributaria.</p>

      <h3>5. A quién se comunican</h3>
      <p>No cedemos tus datos a terceros, salvo obligación legal (por ejemplo, a la Agencia Tributaria). Para atender tu consulta usamos el correo electrónico de Google (Gmail), que actúa como encargado del tratamiento. Google puede tratar datos en Estados Unidos, transferencia amparada en el Marco de Privacidad de Datos UE-EE. UU. (decisión de adecuación de la Comisión Europea de 10 de julio de 2023).</p>
      {isContactFormReady() && (
        <p>Los mensajes del formulario de contacto se guardan en Google Forms y Google Sheets (Google Ireland Limited), que actúa como encargado del tratamiento con las mismas garantías que Gmail. Una automatización que se ejecuta en el ordenador del titular los lee para avisarle y preparar un borrador de respuesta, que el titular revisa antes de enviarlo. El aviso que recibe el titular no incluye tus datos.</p>
      )}
      <p>Si eliges escribir por WhatsApp, la conversación pasa por el servicio de WhatsApp Ireland Limited, que trata tus datos como responsable según su propia política de privacidad. Al pulsar un botón de WhatsApp de esta web solo se abre la aplicación con un mensaje sugerido: no se envía nada hasta que tú lo decides.</p>

      <h3>6. Tus derechos</h3>
      <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a <Mail />. Te responderemos en el plazo máximo de un mes. Si consideras que no hemos atendido bien tu solicitud, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>
    </>
  );
}

function Cookies() {
  return (
    <>
      <h3>1. Qué son las cookies</h3>
      <p>Son pequeños archivos que una web guarda en tu navegador para recordar información entre visitas o para que funcionen algunos servicios.</p>

      <h3>2. Cookies que usa esta web</h3>
      <p>Esta web no instala cookies, ni propias ni de terceros, y no utiliza herramientas analíticas, publicitarias o de seguimiento. Tampoco guarda información en el almacenamiento local de tu navegador.</p>

      <h3>3. Consentimiento</h3>
      <p>Como no se instala ninguna cookie, esta web no muestra un banner de consentimiento. Si en el futuro se incorporan cookies analíticas o publicitarias, se pedirá tu consentimiento previo mediante un aviso en el que rechazar será tan fácil como aceptar.</p>

      <h3>4. Cómo gestionarlas</h3>
      <p>Puedes bloquear o borrar las cookies desde los ajustes de tu navegador (Chrome, Firefox, Safari o Edge).</p>
    </>
  );
}

const CONTENT: Record<LegalKey, () => ReactNode> = {
  'aviso-legal': AvisoLegal,
  privacidad: Privacidad,
  cookies: Cookies,
};

// Legal documents open in a modal driven by the URL hash (#aviso-legal, #privacidad, #cookies),
// so every text has its own shareable link.
export default function LegalDialog() {
  // Read the hash after mount so the prerendered HTML and the first client render match.
  const [doc, setDoc] = useState<LegalKey | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onHash = () => setDoc(keyFromHash());
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (doc && !dialog.open) dialog.showModal();
    if (!doc && dialog.open) dialog.close();
    document.documentElement.style.overflow = doc ? 'hidden' : '';
    if (doc) dialog.scrollTop = 0;
  }, [doc]);

  const close = useCallback(() => {
    if (keyFromHash()) history.replaceState(null, '', window.location.pathname + window.location.search);
    setDoc(null);
  }, []);

  const Body = doc ? CONTENT[doc] : null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="legal-title"
      onClose={close}
      onClick={(e) => e.target === e.currentTarget && close()}
      className="legal m-auto max-h-[88vh] w-[min(760px,calc(100vw-24px))] overflow-y-auto rounded-[28px] bg-paper p-0 text-ink shadow-2xl backdrop:bg-forest/70 backdrop:backdrop-blur-sm"
    >
      {doc && Body && (
        <>
          <header className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-ink/15 bg-paper px-6 py-5 sm:px-8">
            <h2 id="legal-title" className="font-serif text-2xl sm:text-3xl" style={{ fontVariationSettings: '"opsz" 72' }}>
              {LEGAL_DOCS[doc]}
            </h2>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/20 transition-colors hover:bg-ink/5"
            >
              <X className="h-5 w-5" />
            </button>
          </header>
          <div className="legal__body px-6 pb-8 pt-2 sm:px-8">
            <p className="legal__date">Última actualización: {ULTIMA_ACTUALIZACION}</p>
            <Body />
            <nav aria-label="Otros textos legales" className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/15 pt-5">
              {(Object.keys(LEGAL_DOCS) as LegalKey[])
                .filter((k) => k !== doc)
                .map((k) => (
                  <a key={k} href={`#${k}`} className="link-draw font-medium">
                    {LEGAL_DOCS[k]}
                  </a>
                ))}
            </nav>
          </div>
        </>
      )}
    </dialog>
  );
}
