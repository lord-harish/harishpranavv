import { motion } from 'framer-motion';
import GlassCard from '../GlassCard/GlassCard.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { skillCategories } from '../../data/portfolio.js';
import { revealContainer, revealItem } from '../../hooks/useScrollReveal.js';

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Stack"
          title="Skills & Technologies"
          description="Technologies, tools, and frameworks I use to build intelligent and impactful solutions."
        />

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map(({ title, description, skills, icon: Icon }, index) => (
            <motion.div key={title} variants={revealItem} className={index === 0 ? 'xl:col-span-1' : ''}>
              <GlassCard className="group h-full overflow-hidden p-6">
                <div className="mb-5 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-neon">Category</p>
                    <h3 className="mt-2 text-2xl font-black text-white">{title}</h3>
                  </div>
                  <motion.span
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-electric/30 bg-electric/10 text-electric shadow-electric transition group-hover:border-neon/50 group-hover:text-neon"
                  >
                    <Icon size={23} aria-hidden="true" />
                  </motion.span>
                </div>

                <p className="min-h-20 text-sm leading-7 text-slate-300">{description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-200 transition group-hover:border-neon/20 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
