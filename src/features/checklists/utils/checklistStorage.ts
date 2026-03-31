import type { ChecklistFlow, ChecklistProgress } from '../../../shared/types/checklist';

import { createInitialProgress } from './progress';

export function loadChecklistProgress(flow: ChecklistFlow): ChecklistProgress {
  if (typeof window === 'undefined') {
    return createInitialProgress(flow);
  }

  const initial = createInitialProgress(flow);
  const saved = window.localStorage.getItem(flow.storageKey);

  if (!saved) {
    return initial;
  }

  try {
    const parsed = JSON.parse(saved) as ChecklistProgress;

    return { ...initial, ...parsed };
  } catch {
    return initial;
  }
}

export function saveChecklistProgress(flow: ChecklistFlow, progress: ChecklistProgress) {
  window.localStorage.setItem(flow.storageKey, JSON.stringify(progress));
}

export function clearChecklistProgress(flow: ChecklistFlow) {
  window.localStorage.removeItem(flow.storageKey);
}
