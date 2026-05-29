export default function TechBadge({ children }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-black text-slate-100 transition hover:border-neon/50 hover:text-neon hover:shadow-neon">
      {children}
    </span>
  );
}
