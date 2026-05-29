import { Github, Linkedin, Mail } from 'lucide-react';
import { emailAddress, emailUrl, githubUrl, linkedinUrl } from '../../data/links.js';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-midnight/80">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neon to-transparent shadow-neon" />

        <div className="grid gap-8 py-10 lg:grid-cols-[1fr_1.2fr_auto] lg:items-start">
          <div>
            <p className="text-2xl font-black text-white">Harish Pranav V</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
              Building intelligent systems for a smarter future.
            </p>
            <a
              href={emailUrl}
              className="mt-4 inline-flex text-sm font-bold text-electric transition hover:text-neon"
            >
              {emailAddress}
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-bold text-slate-300 transition hover:border-neon/40 hover:text-neon"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:justify-end">
            <a
              href={githubUrl}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-neon/40 hover:text-neon hover:shadow-neon"
              aria-label="GitHub profile"
            >
              <Github size={19} aria-hidden="true" />
            </a>
            <a
              href={linkedinUrl}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-electric/40 hover:text-electric hover:shadow-electric"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>
            <a
              href={emailUrl}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-neon/40 hover:text-neon hover:shadow-neon"
              aria-label="Send email"
            >
              <Mail size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Harish Pranav V. All Rights Reserved.</p>
          <p className="font-semibold text-slate-400">AI/ML Student - IoT Innovator - Full Stack Learner</p>
        </div>
      </div>
    </footer>
  );
}
