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
      <div className="mb-4 flex items-center gap-3 rounded-2xl border border-[#d7e0eb] bg-[var(--color-surface-alt)] px-4 py-3 text-base font-bold text-[var(--color-primary-strong)]">
        <span className="h-5 w-1 rounded-full bg-[var(--color-primary)]" aria-hidden />
        <h2>{phase.title}</h2>
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
