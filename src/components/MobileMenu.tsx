import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  links: { label: string; href: string }[];
}

// Full-screen menu for screens where the nav pill is hidden. It is portalled to <body>
// because the nav sits inside a transformed FadeIn, which would trap a fixed overlay.
export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    document.documentElement.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      toggleRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Abrir menú"
        className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-meadow lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open &&
        createPortal(
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            className="fixed inset-0 z-[60] flex flex-col bg-forest px-5 pb-10 pt-5 text-paper"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="ml-auto grid h-11 w-11 place-items-center rounded-full border border-paper/30"
            >
              <X className="h-5 w-5" />
            </button>
            <nav aria-label="Principal" className="mt-10 flex flex-1 flex-col gap-2">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-paper/15 py-4 text-2xl font-medium uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-8 rounded-full bg-paper py-4 text-center text-base font-medium uppercase tracking-widest text-ink"
              >
                Contacto
              </a>
            </nav>
          </div>,
          document.body,
        )}
    </>
  );
}
