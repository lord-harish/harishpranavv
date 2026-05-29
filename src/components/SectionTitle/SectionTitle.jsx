import { motion } from 'framer-motion';

export default function SectionTitle({ eyebrow = 'Profile', title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-neon">{eyebrow}</p>
      <h2 className="text-3xl font-black text-white sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-300">{description}</p> : null}
    </motion.div>
  );
}
