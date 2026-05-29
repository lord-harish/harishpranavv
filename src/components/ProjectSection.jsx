import { motion } from 'framer-motion';
import GlassCard from './GlassCard/GlassCard.jsx';

export default function ProjectSection({ title, eyebrow, children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative z-10 ${className}`}
    >
      <GlassCard className="p-6 sm:p-8">
        {eyebrow ? <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-neon">{eyebrow}</p> : null}
        <h2 className="text-2xl font-black text-white sm:text-3xl">{title}</h2>
        <div className="mt-6">{children}</div>
      </GlassCard>
    </motion.section>
  );
}
