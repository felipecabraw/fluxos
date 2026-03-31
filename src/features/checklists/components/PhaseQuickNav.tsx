type PhaseQuickNavItem = {
  id: string;
  completed: number;
  total: number;
};

type PhaseQuickNavProps = {
  items: PhaseQuickNavItem[];
};

export function PhaseQuickNav({ items }: PhaseQuickNavProps) {
  return (
    <section className="border-b border-[#d3dde8] bg-[var(--color-surface-alt)] px-5 py-4 md:px-9">
      <div className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
        Navegação por fase
      </div>

      <div className="flex flex-wrap gap-2.5">
        {items.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-xl border border-[#d4deea] bg-white px-3 py-2 text-sm text-[var(--color-primary)] transition hover:border-[#a9bed6] hover:bg-[#f7fafc]"
          >
            <span className="block font-semibold">{`Fase ${index + 1}`}</span>
            <span className="block text-xs text-[var(--color-text-muted)]">{`${item.completed}/${item.total} etapas`}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
