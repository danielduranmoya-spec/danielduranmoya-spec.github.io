import { motion, useScroll, useTransform } from 'framer-motion';
import CompassMark from './CompassMark';
import FadeIn from './FadeIn';

interface SectionKickerProps {
  number: string;
  label: string;
  tone?: 'light' | 'dark';
}

// Small engraved-style chapter label; the compass turns as the page scrolls.
export default function SectionKicker({ number, label, tone = 'light' }: SectionKickerProps) {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, (v) => v * 0.15);
  const color = tone === 'light' ? 'text-sage' : 'text-ink';

  return (
    <FadeIn delay={0} y={20} className={`mb-5 flex items-center justify-center gap-3 sm:mb-6 ${color}`}>
      <motion.span className="block h-7 w-7 sm:h-8 sm:w-8" style={{ rotate }}>
        <CompassMark className="h-full w-full" />
      </motion.span>
      <span
        className="font-serif text-base sm:text-lg md:text-xl"
        style={{ fontVariationSettings: '"opsz" 72' }}
      >
        {number} — {label}
      </span>
    </FadeIn>
  );
}
