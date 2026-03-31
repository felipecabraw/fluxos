import type { ChecklistTask } from '../../../shared/types/checklist';

type ChecklistTaskItemProps = {
  task: ChecklistTask;
  checked: boolean;
  onToggle: (taskId: string) => void;
};

export function ChecklistTaskItem({ task, checked, onToggle }: ChecklistTaskItemProps) {
  const isCritical = task.critical === true;
  const statusLabel = checked ? 'Concluído' : 'Pendente';

  return (
    <label
      className={[
        'mb-3 block cursor-pointer rounded-2xl border px-5 py-4 transition hover:border-slate-300 hover:shadow-[0_10px_20px_rgba(20,33,61,0.05)]',
        checked
          ? 'border-[#b9d9c9] bg-[linear-gradient(180deg,#f5fbf7,#dcefe5)]'
          : isCritical
            ? 'border-[#e4c7c7] bg-[linear-gradient(180deg,#fbf4f4,#efd4d4)]'
            : 'border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f9fbfd)]',
        isCritical ? 'border-l-[5px] border-l-[var(--color-danger)]' : 'border-l-[5px] border-l-[var(--color-primary)]',
        checked && 'border-l-[var(--color-success)]',
      ].join(' ')}
    >
      <div className="flex items-start gap-4">
        <input
          checked={checked}
          onChange={() => onToggle(task.id)}
          type="checkbox"
          className="mt-1 h-6 w-6 shrink-0 accent-[var(--color-primary)]"
        />

        <div
          className={[
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-[inset_0_-2px_0_rgba(255,255,255,0.14)]',
            checked
              ? 'bg-[var(--color-success)]'
              : isCritical
                ? 'bg-[var(--color-danger)]'
                : 'bg-[var(--color-primary)]',
          ].join(' ')}
        >
          {task.order}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {`Passo ${task.order.toString().padStart(2, '0')}`}
              </div>

              <div className="text-base font-bold leading-6 text-slate-900">
                {task.title}
                {isCritical ? (
                  <span className="ml-2 inline-block rounded-md bg-[var(--color-danger)] px-2 py-0.5 text-[10px] font-bold text-white align-middle">
                    CRÍTICO
                  </span>
                ) : null}
              </div>
            </div>

            <span
              className={[
                'w-fit shrink-0 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em]',
                checked
                  ? 'bg-[var(--color-success-soft)] text-[var(--color-success)]'
                  : isCritical
                    ? 'bg-[#fde2df] text-[#b34343]'
                    : 'bg-[#eaf0f6] text-[var(--color-text-muted)]',
              ].join(' ')}
            >
              {statusLabel}
            </span>
          </div>

          {task.details ? (
            <p className="mt-2 text-[0.95rem] leading-7 text-[var(--color-text-muted)]">
              {task.details}
            </p>
          ) : null}
        </div>
      </div>
    </label>
  );
}
