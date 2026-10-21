import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const total = text.length;
  const words = text.split(' ');
  let index = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, w) => {
        // Words are kept as inline-block so lines never break mid-word.
        const chars = word.split('').map((char) => {
          const start = index / total;
          const end = start + 1 / total;
          index += 1;
          return <Char key={index} char={char} progress={scrollYProgress} range={[start, end]} />;
        });
        index += 1; // account for the space
        return (
          <span key={w} className="inline-block whitespace-nowrap">
            {chars}
            {w < words.length - 1 && ' '}
          </span>
        );
      })}
    </p>
  );
}
