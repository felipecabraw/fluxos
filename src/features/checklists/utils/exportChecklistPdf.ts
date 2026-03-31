import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { APP_LOCALE } from '../../../shared/constants/locale';
import type { ChecklistFlow, ChecklistProgress } from '../../../shared/types/checklist';

const PDF_COLORS = {
  primary: [41, 72, 109] as const,
  primarySoft: [219, 228, 239] as const,
  success: [47, 143, 91] as const,
  warning: [226, 180, 87] as const,
  danger: [200, 90, 90] as const,
  text: [31, 47, 74] as const,
  muted: [95, 113, 136] as const,
  border: [210, 221, 232] as const,
};

async function loadImageAsDataUrl(url: string) {
  const response = await fetch(url);
  const blob = await response.blob();

  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Não foi possível carregar a imagem para o PDF.'));
    reader.readAsDataURL(blob);
  });
}

function drawSummaryCard(
  doc: jsPDF,
  x: number,
  y: number,
  width: number,
  label: string,
  value: string,
  fillColor: readonly [number, number, number],
) {
  doc.setFillColor(...fillColor);
  doc.roundedRect(x, y, width, 18, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...PDF_COLORS.text);
  doc.text(label, x + 4, y + 6);

  doc.setFontSize(18);
  doc.text(value, x + 4, y + 14);
}

export async function downloadChecklistPdf(flow: ChecklistFlow, progress: ChecklistProgress) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const today = new Date();
  const formattedDate = today.toLocaleDateString(APP_LOCALE);
  const formattedTime = today.toLocaleTimeString(APP_LOCALE, { hour: '2-digit', minute: '2-digit' });
  const totalTasks = flow.totalTasks;
  const completedCount = Object.values(progress).filter(Boolean).length;
  const pendingCount = totalTasks - completedCount;
  const criticalPendingCount = flow.phases
    .flatMap((phase) => phase.tasks)
    .filter((task) => task.critical && !progress[task.id]).length;

  try {
    const logo = await loadImageAsDataUrl('/policia-penal-rn.png');
    doc.addImage(logo, 'PNG', 14, 10, 18, 18);
  } catch {
    // A exportação deve continuar mesmo sem a logo.
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(...PDF_COLORS.primary);
  doc.text('SEAP FLUXOGRAMAS', 36, 17);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...PDF_COLORS.text);
  doc.text('Sistema de Controle de Fluxo de Processos Licitatórios', 36, 23);
  doc.text(`Fluxo: ${flow.title.replace('Checklist Dinâmico — ', '')}`, 14, 34);
  doc.text(`Emitido em ${formattedDate}, às ${formattedTime}`, pageWidth - 14, 34, {
    align: 'right',
  });

  drawSummaryCard(doc, 14, 42, 42, 'Etapas totais', totalTasks.toString().padStart(2, '0'), PDF_COLORS.primarySoft);
  drawSummaryCard(doc, 60, 42, 42, 'Concluídas', completedCount.toString().padStart(2, '0'), [220, 239, 229]);
  drawSummaryCard(doc, 106, 42, 42, 'Pendentes', pendingCount.toString().padStart(2, '0'), [247, 241, 221]);
  drawSummaryCard(doc, 152, 42, 44, 'Críticas', criticalPendingCount.toString().padStart(2, '0'), [239, 212, 212]);

  let currentY = 70;

  for (const phase of flow.phases) {
    doc.setFillColor(...PDF_COLORS.primary);
    doc.roundedRect(14, currentY, pageWidth - 28, 10, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(255, 255, 255);
    doc.text(phase.title, 18, currentY + 6.5);

    currentY += 12;

    autoTable(doc, {
      startY: currentY,
      margin: { left: 14, right: 14 },
      head: [['Passo', 'Etapa', 'Detalhamento', 'Status']],
      body: phase.tasks.map((task) => {
        const completed = progress[task.id] ?? false;

        return [
          task.order.toString().padStart(2, '0'),
          `${task.title}${task.critical ? ' [CRÍTICO]' : ''}`,
          task.details ?? '-',
          completed ? 'Concluído' : 'Pendente',
        ];
      }),
      styles: {
        font: 'helvetica',
        fontSize: 9,
        textColor: [...PDF_COLORS.text],
        lineColor: [...PDF_COLORS.border],
        lineWidth: 0.2,
        cellPadding: 3,
        valign: 'middle',
      },
      headStyles: {
        fillColor: [...PDF_COLORS.primarySoft],
        textColor: [...PDF_COLORS.primary],
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [248, 251, 254],
      },
      columnStyles: {
        0: { cellWidth: 16, halign: 'center' },
        1: { cellWidth: 56 },
        2: { cellWidth: 88 },
        3: { cellWidth: 26, halign: 'center' },
      },
      didParseCell: (data) => {
        if (data.section !== 'body' || data.column.index !== 3) {
          return;
        }

        const value = String(data.cell.raw);

        if (value === 'Concluído') {
          data.cell.styles.fillColor = [...PDF_COLORS.success];
          data.cell.styles.textColor = [255, 255, 255];
          data.cell.styles.fontStyle = 'bold';
        } else {
          data.cell.styles.fillColor = [...PDF_COLORS.warning];
          data.cell.styles.textColor = [...PDF_COLORS.text];
          data.cell.styles.fontStyle = 'bold';
        }
      },
    });

    currentY = (doc as jsPDF & { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? currentY;
    currentY += 8;
  }

  doc.save(`${flow.id}_${today.toISOString().split('T')[0]}.pdf`);
}
