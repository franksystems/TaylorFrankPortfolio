import { profile } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 py-4">
      <div className="container-shell">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-300">{profile.name}</div>
            <div className="text-xs text-neutral-400">{profile.title}</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#work" className="hover:text-white transition-colors">Systems</a>
            <a href="#decisions" className="hover:text-white transition-colors">Architecture</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
