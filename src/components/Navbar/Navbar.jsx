import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-void/58 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Harish Pranav V home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-neon/30 bg-neon/10 text-neon shadow-neon">
            <Sparkles size={18} aria-hidden="true" />
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold text-slate-300 transition hover:text-neon focus:outline-none focus:ring-2 focus:ring-neon/60 focus:ring-offset-2 focus:ring-offset-void lg:text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <span className="hidden h-9 w-9 md:block" aria-hidden="true" />
      </nav>
    </motion.header>
  );
}
