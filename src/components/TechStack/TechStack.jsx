import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { techStack } from '../../data/portfolio.js';

const marqueeItems = [...techStack, ...techStack];

export default function TechStack() {
  return (
    <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <SectionTitle
          eyebrow="Toolkit"
          title="Technologies I Work With"
          description="Tools and technologies powering my ideas."
        />

        <div className="glass-panel relative overflow-hidden rounded-lg py-5">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-void to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-void to-transparent" />
          <div className="marquee-track flex w-max gap-3">
            {marqueeItems.map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="rounded-md border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-black text-slate-100 shadow-glass transition hover:border-neon/50 hover:text-neon hover:shadow-neon"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
