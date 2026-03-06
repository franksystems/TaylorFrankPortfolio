import { Container } from "@/components/Container";
import { profile } from "@/data/site";

const nav = [
  { label: "Systems", href: "#work" },
  { label: "Architecture", href: "#decisions" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 py-4">
      <Container>
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl md:px-6">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-200">{profile.name}</div>
            <div className="text-xs text-neutral-400">{profile.title}</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
