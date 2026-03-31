type ChecklistActionsProps = {
  onExport: () => void;
  onReset: () => void;
};

export function ChecklistActions({ onExport, onReset }: ChecklistActionsProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-200 bg-white px-4 py-4 sm:px-5 sm:py-5 md:flex-row md:flex-wrap md:justify-between md:px-9">
      <button
        type="button"
        onClick={onExport}
        className="w-full rounded-xl border border-[#bccbdd] bg-[var(--color-surface-alt)] px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[#8aa3c0] hover:bg-[#e3ebf4] md:min-w-[210px] md:w-auto"
      >
        Exportar checklist em PDF
      </button>
      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-xl border border-[#dfb8b8] bg-[var(--color-danger-soft)] px-5 py-3 text-sm font-semibold text-[#9f4444] transition hover:border-[#c85a5a] hover:bg-[#ebcccc] md:min-w-[210px] md:w-auto"
      >
        Resetar etapas
      </button>
    </div>
  );
}
