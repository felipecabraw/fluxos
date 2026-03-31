type ChecklistOverviewProps = {
  totalTasks: number;
  completedCount: number;
  pendingCriticalCount: number;
  lastUpdated: string;
};

export function ChecklistOverview({
  totalTasks,
  completedCount,
  pendingCriticalCount,
  lastUpdated,
}: ChecklistOverviewProps) {
  const pendingCount = totalTasks - completedCount;

  const cards = [
    {
      label: 'Etapas totais',
      value: totalTasks.toString().padStart(2, '0'),
      tone: 'neutral',
    },
    {
      label: 'Etapas concluídas',
      value: completedCount.toString().padStart(2, '0'),
      tone: 'success',
    },
    {
      label: 'Pendências críticas',
      value: pendingCriticalCount.toString().padStart(2, '0'),
      tone: 'danger',
    },
    {
      label: 'Etapas pendentes',
      value: pendingCount.toString().padStart(2, '0'),
      tone: 'neutral',
    },
  ] as const;

  return (
    <section className="border-b border-[#d3dde8] bg-white px-5 py-5 md:px-9">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
            Resumo do fluxo
          </h4>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            Indicadores para acompanhamento rápido da situação atual.
          </p>
        </div>
        <span className="w-fit rounded-full border border-[#d4deea] bg-[var(--color-surface-alt)] px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)]">
          {`Atualizado às ${lastUpdated}`}
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className={[
              'rounded-2xl border px-4 py-4',
              card.tone === 'success'
                ? 'border-[#b9d9c9] bg-[var(--color-success-soft)]'
                : card.tone === 'danger'
                  ? 'border-[#e4c7c7] bg-[var(--color-danger-soft)]'
                  : 'border-[#d7e0eb] bg-[var(--color-surface-alt)]',
            ].join(' ')}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
              {card.label}
            </div>
            <div className="mt-2 text-3xl font-bold text-[var(--color-primary-strong)]">{card.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
