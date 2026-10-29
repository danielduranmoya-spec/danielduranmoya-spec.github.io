import { useEffect, useRef } from 'react';
import { projects } from '../data';

// Strip of real captures from the portfolio projects, alternated between the two rows.
const captures = projects.flatMap((p) => [p.col2, ...p.col1]).map((img) => img.src);
const row1 = captures.filter((_, i) => i % 2 === 0);
const row2 = captures.filter((_, i) => i % 2 === 1);
const tripled = (images: string[]) => [...images, ...images, ...images];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      // Rows start one set to the left (-33.333%) so neither edge ever shows a gap.
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(calc(-33.333% + ${offset - 200}px))`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(calc(-33.333% + ${-(offset - 200)}px))`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-forest pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        {[
          { ref: row1Ref, images: row1 },
          { ref: row2Ref, images: row2 },
        ].map(({ ref, images }, r) => (
          <div
            key={r}
            ref={ref}
            aria-hidden="true"
            className="flex w-max gap-3"
            style={{ transform: 'translateX(-33.333%)', willChange: 'transform' }}
          >
            {tripled(images).map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                width={420}
                height={270}
                loading="lazy"
                decoding="async"
                className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover object-top ring-1 ring-sage/20 transition duration-300 hover:-translate-y-1 hover:ring-sky-pale/60"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
