import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappHref } from './ContactButton';

// Floating shortcut to start a WhatsApp chat from anywhere on the page.
export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbeme por WhatsApp (se abre en una pestaña nueva)"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-lg shadow-black/25 transition-transform duration-200 hover:-translate-y-0.5 md:bottom-7 md:right-7"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      <span className="hidden pr-1 text-sm font-medium md:inline">WhatsApp</span>
    </motion.a>
  );
}
