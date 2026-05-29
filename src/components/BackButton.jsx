import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link
      to="/"
      className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 text-sm font-extrabold text-slate-200 transition hover:border-neon/40 hover:text-neon hover:shadow-neon focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-void"
    >
      <ArrowLeft size={17} aria-hidden="true" />
      Back to Portfolio
    </Link>
  );
}
