import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Rocket, Zap } from 'lucide-react';
import GlassCard from '../GlassCard/GlassCard.jsx';
import { focusItems, roles, signals } from '../../data/profile.js';
import { emailUrl, resumeUrl } from '../../data/links.js';
import { revealContainer, revealItem } from '../../hooks/useScrollReveal.js';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={revealItem} className="mb-6 inline-flex items-center gap-2 rounded-md border border-neon/25 bg-neon/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-neon">
            <Zap size={15} aria-hidden="true" />
            Student Portfolio
          </motion.div>

          <motion.h1
            variants={revealItem}
            className="text-balance text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="neon-text">Harish Pranav V</span>
          </motion.h1>

          <motion.p
            variants={revealItem}
            className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-electric sm:text-xl"
          >
            {roles}
          </motion.p>

          <motion.p variants={revealItem} className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Diploma graduate transitioning into a lateral B.E/B.Tech journey, passionate about building intelligent
            systems using AI, Machine Learning, IoT, Automation, and Data Analytics to solve real-world problems.
          </motion.p>

          <motion.div variants={revealItem} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-neon px-5 text-sm font-extrabold text-slate-950 shadow-neon transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-void"
            >
              <Rocket size={18} aria-hidden="true" />
              Explore My Projects
            </a>
            <a
              href={emailUrl}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:border-neon/60 hover:text-neon hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-void"
            >
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GlassCard className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent" />
              <div className="mb-7">
                <div className="relative mx-auto aspect-square w-44 overflow-hidden rounded-lg border border-neon/30 bg-white/[0.04] shadow-neon sm:w-52">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-transparent to-electric/15" />
                  <img
                    src={`${import.meta.env.BASE_URL}assets/me.png`}
                    alt="Portrait of Harish Pranav V"
                    className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="mb-7 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-neon">Status</p>
                  <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.12em] text-white">
                    Building The Future
                  </h2>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-electric/30 bg-electric/10 text-electric shadow-electric">
                  <Rocket size={22} aria-hidden="true" />
                </span>
              </div>

              <div className="mb-7 grid gap-3 sm:grid-cols-2">
                {signals.map(({ label, icon: Icon }) => (
                  <div key={label} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <Icon className="mb-3 text-electric" size={22} aria-hidden="true" />
                    <p className="text-sm font-bold text-slate-200">{label}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="mb-4 text-sm font-extrabold text-white">Current Focus:</p>
                <ul className="space-y-3">
                  {focusItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                      <ArrowDown className="-rotate-90 text-neon" size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
