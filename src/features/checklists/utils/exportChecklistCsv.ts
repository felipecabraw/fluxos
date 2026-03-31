import type { ChecklistFlow, ChecklistProgress } from '../../../shared/types/checklist';

function escapeCsvValue(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

export function buildChecklistCsv(flow: ChecklistFlow, progress: ChecklistProgress) {
  const header = 'Número,Etapa,Status,Data de Conclusão';
  const today = new Date().toLocaleDateString('pt-BR');

  const rows = flow.phases.flatMap((phase) =>
    phase.tasks.map((task) => {
      const completed = progress[task.id] ?? false;

      return [
        task.order,
        escapeCsvValue(task.title),
        escapeCsvValue(completed ? 'Concluído' : 'Pendente'),
        escapeCsvValue(completed ? today : ''),
      ].join(',');
    }),
  );

  return [header, ...rows].join('\n');
}

export function downloadChecklistCsv(flow: ChecklistFlow, progress: ChecklistProgress) {
  const csv = buildChecklistCsv(flow, progress);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');

  anchor.href = url;
  anchor.download = `${flow.id}_${new Date().toISOString().split('T')[0]}.csv`;
  anchor.click();

  URL.revokeObjectURL(url);
}
