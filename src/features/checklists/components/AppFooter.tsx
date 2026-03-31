type AppFooterProps = {
  lastUpdated: string;
};

export function AppFooter({ lastUpdated }: AppFooterProps) {
  return (
    <footer className="border-t border-[#d3dde8] bg-[var(--color-surface-alt)] px-5 py-5 text-sm text-[var(--color-text-muted)] md:px-9">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>Os registros do checklist são salvos automaticamente no navegador deste equipamento.</p>
        <span className="font-semibold text-[var(--color-primary)]">{`Última atualização: ${lastUpdated}`}</span>
      </div>
    </footer>
  );
}
