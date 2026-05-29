import { motion } from 'framer-motion';
import GlassCard from '../GlassCard/GlassCard.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { education, experience } from '../../data/portfolio.js';
import { revealContainer, revealItem } from '../../hooks/useScrollReveal.js';

function getAssetUrl(path) {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

function TimelineEntry({ item, mode }) {
  const Icon = item.icon;
  const image = item.images?.[0];

  return (
    <motion.div variants={revealItem} className="relative pl-10">
      <motion.span
        animate={{ scale: [1, 1.28, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-0 top-7 z-10 h-4 w-4 rounded-full border border-neon bg-void shadow-neon"
      />
      <span className="absolute left-[7px] top-12 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-neon via-electric/70 to-transparent" />
      <GlassCard className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-electric/30 bg-electric/10 text-electric shadow-electric">
              <Icon size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-neon">{mode}</p>
              <h3 className="mt-2 text-2xl font-black text-white">{item.company || item.title}</h3>
              {item.role ? <p className="mt-1 text-sm font-bold text-electric">{item.role}</p> : null}
            </div>
          </div>
          {item.status ? (
            <span className="w-fit rounded-md border border-neon/30 bg-neon/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.15em] text-neon">
              {item.status}
            </span>
          ) : null}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-300">{item.description}</p>

        {image ? (
          <div className="mt-6 max-w-56 overflow-hidden rounded-lg border border-neon/25 bg-white/[0.04] shadow-neon">
            <div className="relative aspect-[9/16] overflow-hidden">
              <img
                src={getAssetUrl(image)}
                alt={`${item.company || item.title} visual`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/35 via-transparent to-electric/10" />
            </div>
          </div>
        ) : null}

        {item.contributions ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {item.contributions.map((contribution) => (
              <div key={contribution} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric shadow-electric" />
                <span>{contribution}</span>
              </div>
            ))}
          </div>
        ) : null}
      </GlassCard>
    </motion.div>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Industry"
          title="Experience & Internship"
          description="Hands-on industry exposure and real-world technical experience."
        />
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="space-y-8"
        >
          {experience.map((item) => (
            <TimelineEntry key={item.company} item={item} mode="Experience" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function EducationTimeline() {
  return (
    <section id="education" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Academics"
          title="Education Journey"
          description="My academic journey and continuous growth in technology."
        />
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="space-y-8"
        >
          {education.map((item) => (
            <TimelineEntry key={item.title} item={item} mode="Education" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
