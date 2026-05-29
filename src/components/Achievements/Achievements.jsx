import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import { achievements } from '../../data/portfolio.js';

function getAssetUrl(path) {
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

function ImageSlideshow({ achievement }) {
  const images = achievement.images || [achievement.image].filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] || '/assets/achievements/achievement-placeholder.png';

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group/image relative aspect-video overflow-hidden rounded-2xl border border-dashed border-neon/45 bg-white/[0.04] shadow-neon"
    >
      <img
        key={activeImage}
        src={getAssetUrl(activeImage)}
        alt={`${achievement.title} visual ${activeIndex + 1}`}
        loading="lazy"
        className="h-full w-full object-cover opacity-0 transition duration-500 group-hover/image:scale-105"
        onLoad={(event) => {
          event.currentTarget.classList.remove('opacity-0');
          event.currentTarget.nextElementSibling?.classList.add('hidden');
        }}
        onError={(event) => {
          event.currentTarget.classList.add('hidden');
          event.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-neon/10 via-void to-electric/10 p-6 text-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-neon">Image Holder</p>
          <p className="mt-3 text-lg font-black text-white">Add Achievement Image</p>
          <p className="mt-2 break-all text-xs leading-5 text-slate-400">{activeImage}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/35 via-transparent to-electric/10" />

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-void/70 text-slate-200 backdrop-blur-xl transition hover:border-neon/50 hover:text-neon hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon/60"
            aria-label={`Previous image for ${achievement.title}`}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md border border-white/10 bg-void/70 text-slate-200 backdrop-blur-xl transition hover:border-electric/50 hover:text-electric hover:shadow-electric focus:outline-none focus:ring-2 focus:ring-electric/60"
            aria-label={`Next image for ${achievement.title}`}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-md border border-white/10 bg-void/70 px-3 py-2 backdrop-blur-xl">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition ${
                  index === activeIndex ? 'w-6 bg-neon shadow-neon' : 'w-2 bg-slate-500 hover:bg-electric'
                }`}
                aria-label={`Show image ${index + 1} for ${achievement.title}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </motion.div>
  );
}

function AchievementShowcase({ achievement, index }) {
  const isEven = index % 2 === 1;
  const Icon = achievement.icon;

  return (
    <motion.article
      initial={{ opacity: 0, x: isEven ? 42 : -42, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -8,
        borderColor: 'rgba(0,255,157,0.42)',
        boxShadow: '0 28px 90px rgba(0,217,255,0.16), 0 0 36px rgba(0,255,157,0.14)',
      }}
      className="glass-panel group relative overflow-hidden rounded-lg p-5 sm:p-6 lg:p-8"
    >
      <motion.span
        animate={{ opacity: [0.2, 0.55, 0.2], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.25 }}
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-electric/10 blur-3xl"
        aria-hidden="true"
      />
      <motion.span
        animate={{ opacity: [0.16, 0.45, 0.16], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: index * 0.18 }}
        className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-neon/10 blur-3xl"
        aria-hidden="true"
      />

      <div
        className={`relative grid items-center gap-7 lg:grid-cols-[0.92fr_1.08fr] ${
          isEven ? 'lg:grid-cols-[1.08fr_0.92fr]' : ''
        }`}
      >
        <div className={isEven ? 'lg:order-2' : ''}>
          <ImageSlideshow achievement={achievement} />
        </div>

        <div className={isEven ? 'lg:order-1' : ''}>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md border border-neon/30 bg-neon/10 text-neon shadow-neon transition group-hover:border-electric/50 group-hover:text-electric">
              <Icon size={22} aria-hidden="true" />
            </span>
            <span className="rounded-md border border-electric/30 bg-electric/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-electric shadow-electric">
              {achievement.badge}
            </span>
          </div>

          <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">{achievement.title}</h3>
          <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">{achievement.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {achievement.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-200 transition group-hover:border-neon/25 group-hover:text-white"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Achievements() {
  return (
    <section className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Milestones"
          title="Achievements & Certifications"
          description="Milestones, research work, and continuous learning."
        />

        <div className="space-y-7">
          {achievements.map((achievement, index) => (
            <AchievementShowcase key={achievement.title} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
