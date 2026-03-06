export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 text-xs uppercase tracking-[0.22em] text-neutral-400">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-relaxed text-neutral-300">{description}</p> : null}
    </div>
  );
}
