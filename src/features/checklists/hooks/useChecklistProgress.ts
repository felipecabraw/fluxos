import { useEffect, useMemo, useState } from 'react';

import type { ChecklistFlow } from '../../../shared/types/checklist';
import { clearChecklistProgress, loadChecklistProgress, saveChecklistProgress } from '../utils/checklistStorage';
import { calculateCompletedCount, calculateCompletionPercentage, createInitialProgress } from '../utils/progress';

export function useChecklistProgress(flow: ChecklistFlow) {
  const [progress, setProgress] = useState(() => loadChecklistProgress(flow));
  const [lastUpdated, setLastUpdated] = useState<string>('--:--');

  useEffect(() => {
    setProgress(loadChecklistProgress(flow));
  }, [flow]);

  useEffect(() => {
    saveChecklistProgress(flow, progress);
    setLastUpdated(
      new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    );
  }, [flow, progress]);

  const completedCount = useMemo(() => calculateCompletedCount(progress), [progress]);
  const percentage = useMemo(
    () => calculateCompletionPercentage(completedCount, flow.totalTasks),
    [completedCount, flow.totalTasks],
  );

  function toggleTask(taskId: string) {
    setProgress((current) => ({
      ...current,
      [taskId]: !current[taskId],
    }));
  }

  function resetChecklist() {
    clearChecklistProgress(flow);
    setProgress(createInitialProgress(flow));
    setLastUpdated(
      new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    );
  }

  return {
    progress,
    completedCount,
    percentage,
    lastUpdated,
    toggleTask,
    resetChecklist,
  };
}
