import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  paragraphs: string[];
  className?: string;
  paragraphClassName?: string;
  style?: CSSProperties;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ word, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span className="inline-block whitespace-nowrap" style={{ opacity }}>
      {word}
    </motion.span>
  );
}

// Reveals the paragraphs word by word as one sequence: a paragraph only starts
// lighting up once the previous one is fully revealed. A hidden copy of each paragraph
// lets screen readers read it once, not word by word.
export default function AnimatedText({ paragraphs, className, paragraphClassName, style }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const total = paragraphs.reduce((n, text) => n + text.split(' ').length, 0);
  let index = 0;

  return (
    <div ref={ref} className={className}>
      {paragraphs.map((text, p) => (
        <p key={p} className={paragraphClassName} style={style}>
          <span className="sr-only">{text}</span>
          {text.split(' ').map((word, w, words) => {
            const start = index / total;
            index += 1;
            return (
              <span key={w} aria-hidden="true">
                <Word word={word} progress={scrollYProgress} range={[start, start + 1 / total]} />
                {w < words.length - 1 && ' '}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}
