import { type CSSProperties } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import SectionKicker from '../components/SectionKicker';
import { projects, type Project, type ProjectImage as ProjectImageData } from '../data';

const IMAGE_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

// Each card presents itself as it enters the viewport: the frame rises in, then
// its three captures uncover one after another. Nothing is pinned, so the page
// keeps scrolling at its normal pace.
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT, staggerChildren: 0.12, delayChildren: 0.15 } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 24, clipPath: 'inset(12% 0% 0% 0% round 40px)' },
  shown: { opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0% round 0px)', transition: { duration: 0.7, ease: EASE_OUT } },
};

function ProjectImage({ image, className = '', style }: { image: ProjectImageData; className?: string; style?: CSSProperties }) {
  return (
    <motion.div variants={imageVariants} className={`overflow-hidden ${IMAGE_RADIUS} ${className}`} style={style}>
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-left-top transition-transform duration-700 ease-out hover:scale-105"
      />
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="relative rounded-[40px] border-2 border-paper bg-forest p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      variants={reduceMotion ? undefined : cardVariants}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="shown"
      viewport={{ once: true, amount: 0.2 }}
    >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-1">
              <span className="flex flex-wrap items-center gap-2">
                <span
                  className="font-serif text-sun"
                  style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.1rem)', fontVariationSettings: '"opsz" 72' }}
                >
                  {project.category}
                </span>
                {project.concept && (
                  <span className="rounded-full border border-paper/40 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-paper/80">
                    Proyecto concepto
                  </span>
                )}
              </span>
              <h3 className="font-medium uppercase text-paper" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.url} name={project.name} />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <ProjectImage image={project.col1[0]} style={{ height: 'clamp(130px, 16vw, 230px)' }} />
            <ProjectImage image={project.col1[1]} style={{ height: 'clamp(160px, 22vw, 340px)' }} />
          </div>
          <ProjectImage image={project.col2} className="w-[60%]" />
        </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-30 -mt-10 rounded-t-[40px] bg-forest px-5 pb-28 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-36 md:pt-32"
    >
      <SectionKicker number="03" label="trabajo seleccionado" />
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading mb-6 text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Proyectos
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="mx-auto mb-16 max-w-xl text-center font-light leading-relaxed text-paper/80 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)' }}
      >
        Negocios ficticios que he creado para enseñar cómo trabajo. Abre cada web y pruébala como lo haría un cliente.
      </FadeIn>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10 md:gap-14">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
