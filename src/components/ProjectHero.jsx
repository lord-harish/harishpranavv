import { motion } from 'framer-motion';
import { Layers3, Sparkles } from 'lucide-react';
import GlassCard from './GlassCard/GlassCard.jsx';
import TechBadge from './TechBadge.jsx';
import BackButton from './BackButton.jsx';
import { revealContainer, revealItem } from '../hooks/useScrollReveal.js';

export default function ProjectHero({ project }) {
  return (
    <section className="relative z-10 px-4 pb-12 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <BackButton />
        <motion.div
          variants={revealContainer}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <GlassCard className="relative overflow-hidden p-6 sm:p-9 lg:p-10">
            <motion.div
              animate={{ opacity: [0.35, 0.8, 0.35], scale: [1, 1.06, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric/20 blur-3xl"
              aria-hidden="true"
            />
            <motion.div
              animate={{ opacity: [0.28, 0.7, 0.28], scale: [1.04, 1, 1.04] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-neon/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative">
              <motion.div variants={revealItem} className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-md border border-electric/30 bg-electric/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-electric">
                  <Layers3 size={15} aria-hidden="true" />
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-neon/30 bg-neon/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-neon shadow-neon">
                  <Sparkles size={15} aria-hidden="true" />
                  {project.status}
                </span>
              </motion.div>

              <motion.h1 variants={revealItem} className="max-w-5xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                <span className="neon-text">{project.title}</span>
              </motion.h1>

              <motion.p variants={revealItem} className="mt-6 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
                {project.summary}
              </motion.p>

              <motion.div variants={revealItem} className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
