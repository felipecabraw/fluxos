import type { ChecklistFlow, ChecklistProgress } from '../../../shared/types/checklist';

export function calculateCompletedCount(progress: ChecklistProgress) {
  return Object.values(progress).filter(Boolean).length;
}

export function calculateCompletionPercentage(completed: number, total: number) {
  if (total === 0) {
    return 0;
  }

  return Math.round((completed / total) * 100);
}

export function createInitialProgress(flow: ChecklistFlow): ChecklistProgress {
  return flow.phases.flatMap((phase) => phase.tasks).reduce<ChecklistProgress>((acc, task) => {
    acc[task.id] = false;
    return acc;
  }, {});
}
