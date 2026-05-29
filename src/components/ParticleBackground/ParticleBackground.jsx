import { motion } from 'framer-motion';

const particles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  size: 2 + (index % 4),
  delay: (index % 8) * 0.35,
  duration: 8 + (index % 7),
}));

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="grid-mask absolute inset-0 opacity-70" />
      <motion.div
        animate={{ opacity: [0.18, 0.38, 0.18], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-neon/15 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.12, 0.34, 0.12], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-32 top-32 h-80 w-80 rounded-full bg-electric/15 blur-3xl"
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-100"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow: '0 0 18px rgba(0,217,255,0.72)',
          }}
          animate={{ y: [0, -28, 0], opacity: [0.15, 0.85, 0.15] }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
