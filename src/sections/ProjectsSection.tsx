import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import SectionKicker from '../components/SectionKicker';
import { projects, type Project, type ProjectImage as ProjectImageData } from '../data';

const IMAGE_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectImage({ image, className = '', style }: { image: ProjectImageData; className?: string; style?: CSSProperties }) {
  return (
    <div className={`overflow-hidden ${IMAGE_RADIUS} ${className}`} style={style}>
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
      />
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 h-[85vh] md:top-32">
      <motion.div
        className="relative origin-top rounded-[40px] border-2 border-paper bg-forest p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ scale, top: `${index * 28}px` }}
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
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

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

      <div ref={containerRef} className="mx-auto max-w-7xl">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
