import type { ChecklistPhase, ChecklistProgress } from '../../../shared/types/checklist';
import { ChecklistTaskItem } from './ChecklistTaskItem';

type ChecklistPhaseCardProps = {
  phase: ChecklistPhase;
  progress: ChecklistProgress;
  onToggleTask: (taskId: string) => void;
};

export function ChecklistPhaseCard({ phase, progress, onToggleTask }: ChecklistPhaseCardProps) {
  return (
    <section className="mb-9 last:mb-0">
      <div className="mb-4 flex flex-col gap-2 rounded-2xl border border-[#d7e0eb] bg-[var(--color-surface-alt)] px-4 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-base font-bold text-[var(--color-primary-strong)]">
          <span className="h-5 w-1 rounded-full bg-[var(--color-primary)]" aria-hidden />
          <h2>{phase.title}</h2>
        </div>

        <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--color-text-muted)] ring-1 ring-[#d4deea]">
          {`${phase.tasks.length.toString().padStart(2, '0')} etapas`}
        </span>
      </div>

      {phase.tasks.map((task) => (
        <ChecklistTaskItem
          key={task.id}
          task={task}
          checked={progress[task.id] ?? false}
          onToggle={onToggleTask}
        />
      ))}
    </section>
  );
}
