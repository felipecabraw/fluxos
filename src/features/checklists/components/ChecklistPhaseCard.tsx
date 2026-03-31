import type { ChecklistPhase, ChecklistProgress } from '../../../shared/types/checklist';
import { ChecklistTaskItem } from './ChecklistTaskItem';

type ChecklistPhaseCardProps = {
  phase: ChecklistPhase;
  progress: ChecklistProgress;
  onToggleTask: (taskId: string) => void;
};

export function ChecklistPhaseCard({ phase, progress, onToggleTask }: ChecklistPhaseCardProps) {
  return (
    <section className="mb-7 last:mb-0 sm:mb-9">
      <div className="mb-4 flex items-start gap-3 rounded-2xl border border-[#d7e0eb] bg-[var(--color-surface-alt)] px-4 py-3 text-[0.95rem] font-bold text-[var(--color-primary-strong)] sm:items-center sm:text-base">
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
