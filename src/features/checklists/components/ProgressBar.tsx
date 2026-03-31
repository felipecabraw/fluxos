type ProgressBarProps = {
  title: string;
  subtitle: string;
  completedCount: number;
  totalTasks: number;
  percentage: number;
};

export function ProgressBar({
  title,
  subtitle,
  completedCount,
  totalTasks,
  percentage,
}: ProgressBarProps) {
  return (
    <section className="border-b border-[#d3dde8] bg-[var(--color-surface-alt)] px-5 py-7 md:px-9">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-[1.15rem] font-bold text-[var(--color-primary-strong)]">{title}</h3>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{subtitle}</p>
        </div>

        <div className="w-fit rounded-full border border-[#c7d4e1] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-primary)]">
          {`${completedCount.toString().padStart(2, '0')} / ${totalTasks.toString().padStart(2, '0')} etapas`}
        </div>
      </div>

      <div className="mb-3 flex flex-col gap-2 text-sm font-semibold text-[var(--color-text-muted)] md:flex-row md:justify-between">
        <span>Progresso geral do fluxo</span>
        <span>{`${completedCount} de ${totalTasks} etapas concluídas`}</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-[#d5dee9] ring-1 ring-[#c9d5e2]">
        <div
          className="flex h-full items-center justify-end bg-[linear-gradient(90deg,#9b7430_0%,#e2b457_22%,#35557a_100%)] pr-2 text-[10px] font-bold tracking-[0.02em] text-white transition-[width]"
          style={{ width: `${percentage}%` }}
        >
          {`${percentage}%`}
        </div>
      </div>
      <p className="mt-2 text-xs text-[var(--color-text-muted)]">
        O progresso é atualizado automaticamente conforme as etapas são marcadas.
      </p>
    </section>
  );
}
