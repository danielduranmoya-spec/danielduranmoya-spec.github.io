export const CONTACT_EMAIL = 'danielduranmoya@gmail.com';
export const CONTACT_PHONE = '+34 679 176 087';
export const CONTACT_PHONE_HREF = `tel:${CONTACT_PHONE.replace(/\s/g, '')}`;
// Contact buttons scroll to the footer, where the email and phone are listed.
export const CONTACT_ANCHOR = '#contacto';
export const whatsappHref = (message = 'Hola Daniel, me gustaría pedirte presupuesto para una web.') =>
  `https://wa.me/${CONTACT_PHONE.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;

export default function ContactButton() {
  return (
    <a
      href={CONTACT_ANCHOR}
      className="inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:-translate-y-0.5 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background: 'linear-gradient(123deg, #16324f 7%, #2f7fc4 37%, #5b875c 72%, #f2c94c 100%)',
        // White inner ring drawn as a shadow so the keyboard focus outline stays visible.
        boxShadow: '0px 4px 4px rgba(47, 127, 196, 0.25), inset 0 0 0 2px white, 4px 4px 12px #3b8fd9 inset',
      }}
    >
      Contáctame
    </a>
  );
}
