import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  href: string;
  name: string;
}

export default function LiveProjectButton({ href, name }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver proyecto ${name} (se abre en una pestaña nueva)`}
      className="group flex items-center gap-2 rounded-full border-2 border-paper px-8 py-3 text-sm font-medium uppercase tracking-widest text-paper transition-colors duration-200 hover:bg-paper/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      Ver proyecto
      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
    </a>
  );
}
