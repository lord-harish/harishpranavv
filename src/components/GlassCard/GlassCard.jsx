import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(0,255,157,0.42)',
        boxShadow: '0 24px 80px rgba(0,217,255,0.16), 0 0 32px rgba(0,255,157,0.12)',
      }}
      className={`glass-panel rounded-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}
