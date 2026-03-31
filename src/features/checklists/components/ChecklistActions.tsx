type ChecklistActionsProps = {
  onExport: () => void;
  onReset: () => void;
};

export function ChecklistActions({ onExport, onReset }: ChecklistActionsProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3 border-b border-slate-200 bg-white px-5 py-5 md:px-9">
      <button
        type="button"
        onClick={onExport}
        className="min-w-[210px] rounded-xl border border-[#bccbdd] bg-[var(--color-surface-alt)] px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:border-[#8aa3c0] hover:bg-[#e3ebf4]"
      >
        Exportar checklist em PDF
      </button>
      <button
        type="button"
        onClick={onReset}
        className="min-w-[210px] rounded-xl border border-[#dfb8b8] bg-[var(--color-danger-soft)] px-5 py-3 text-sm font-semibold text-[#9f4444] transition hover:border-[#c85a5a] hover:bg-[#ebcccc]"
      >
        Resetar etapas
      </button>
    </div>
  );
}
