import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { CheckCircle2, Route, Target } from 'lucide-react';
import ProjectHero from '../components/ProjectHero.jsx';
import ProjectSection from '../components/ProjectSection.jsx';
import TechBadge from '../components/TechBadge.jsx';
import OutputGallery from '../components/OutputGallery.jsx';
import BackButton from '../components/BackButton.jsx';
import { getProjectBySlug } from '../data/projectsData.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main>
      <ProjectHero project={project} />

      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-20 sm:px-6 lg:px-8">
        <ProjectSection title="Project Overview" eyebrow="Overview">
          <div className="space-y-5 text-sm leading-8 text-slate-300 sm:text-base">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7 rounded-md border border-neon/25 bg-neon/10 p-5">
            <div className="flex items-start gap-4">
              <Target className="mt-1 shrink-0 text-neon" size={22} aria-hidden="true" />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-neon">Objective</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{project.objective}</p>
              </div>
            </div>
          </div>
        </ProjectSection>

        <ProjectSection title="Core Features" eyebrow="Features">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <div key={feature} className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-neon/35 hover:shadow-neon">
                <CheckCircle2 className="mb-4 text-neon" size={21} aria-hidden="true" />
                <p className="font-bold leading-7 text-slate-100">{feature}</p>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection title="Technology Stack" eyebrow="Stack">
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection title="Workflow / How It Works" eyebrow="Process">
          <div className="space-y-4">
            {project.workflow.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-md border border-white/10 bg-white/[0.04] p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-electric/30 bg-electric/10 text-sm font-black text-electric shadow-electric">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <Route className="mb-2 text-neon" size={18} aria-hidden="true" />
                  <p className="font-bold leading-7 text-slate-100">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection title="Outputs & Screenshots" eyebrow="Gallery">
          <OutputGallery outputs={project.outputs} />
        </ProjectSection>

        <div className="grid gap-6 lg:grid-cols-2">
          <ProjectSection title="Challenges Faced" eyebrow="Build Notes">
            <p className="text-sm leading-8 text-slate-300 sm:text-base">{project.challenges}</p>
          </ProjectSection>

          <ProjectSection title="Learnings / Outcomes" eyebrow="Growth">
            <p className="text-sm leading-8 text-slate-300 sm:text-base">{project.learnings}</p>
          </ProjectSection>
        </div>

        <div className="pt-4">
          <BackButton />
        </div>
      </div>
    </main>
  );
}
