import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers3, ScanSearch, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../GlassCard/GlassCard.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { projectIcon as ProjectIcon, projects } from '../../data/portfolio.js';
import { revealContainer, revealItem } from '../../hooks/useScrollReveal.js';

function ProjectActions({ featured, slug }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Link
        to={`/projects/${slug}`}
        className="inline-flex h-10 items-center gap-2 rounded-md border border-neon/30 px-3 text-sm font-bold text-neon transition hover:bg-neon/10 hover:shadow-neon"
      >
        <ExternalLink size={16} aria-hidden="true" />
        View Details
      </Link>
      <a
        href="https://github.com/"
        className="inline-flex h-10 items-center gap-2 rounded-md border border-white/10 px-3 text-sm font-bold text-slate-200 transition hover:border-electric/40 hover:text-electric"
      >
        <Github size={16} aria-hidden="true" />
        GitHub
      </a>
      {featured ? (
        <Link
          to={`/projects/${slug}`}
          className="inline-flex h-10 items-center gap-2 rounded-md border border-electric/30 px-3 text-sm font-bold text-electric transition hover:bg-electric/10 hover:shadow-electric"
        >
          <ScanSearch size={16} aria-hidden="true" />
          System Overview
        </Link>
      ) : null}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const isFeatured = project.featured;

  return (
    <motion.div
      variants={revealItem}
      whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ duration: 0.25 }}
      className={isFeatured ? 'lg:col-span-2' : ''}
    >
      <GlassCard
        className={`group relative h-full overflow-hidden p-6 ${
          isFeatured ? 'border-neon/40 shadow-neon before:absolute before:inset-0 before:animate-pulse before:bg-neon/5 before:content-[""] sm:p-8' : ''
        }`}
      >
        <div className="relative">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-md border border-electric/25 bg-electric/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-electric">
              <Layers3 size={14} aria-hidden="true" />
              {project.category}
            </span>
            <span className="rounded-md border border-neon/25 bg-neon/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-neon">
              {project.status}
            </span>
            {isFeatured ? (
              <span className="inline-flex items-center gap-2 rounded-md border border-neon/40 bg-neon/15 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-white shadow-neon">
                <Star size={14} aria-hidden="true" />
                Featured Project
              </span>
            ) : null}
          </div>

          <div className="flex items-start gap-4">
            <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-neon/30 bg-neon/10 text-neon shadow-neon">
              <ProjectIcon size={23} aria-hidden="true" />
            </span>
            <div>
              <h3 className={`${isFeatured ? 'text-3xl' : 'text-2xl'} font-black leading-tight text-white`}>
                {project.title}
              </h3>
              {project.priority ? <p className="mt-2 text-sm font-bold text-electric">{project.priority}</p> : null}
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300">{project.description}</p>

          <div className={`mt-6 grid gap-3 ${isFeatured ? 'sm:grid-cols-2' : ''}`}>
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon shadow-neon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-200">
                {tech}
              </span>
            ))}
          </div>

          <ProjectActions featured={isFeatured} slug={project.slug} />

          {project.note ? <p className="mt-5 text-sm font-semibold text-slate-400">{project.note}</p> : null}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Work"
          title="Featured Projects"
          description="A collection of real-world projects focused on AI, automation, analytics, and smart systems."
        />

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
