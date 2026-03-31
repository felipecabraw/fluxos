import type { PropsWithChildren, ReactNode } from 'react';

type AppShellProps = PropsWithChildren<{
  bannerLabel: string;
  bannerTitle: string;
  flowTabs: string[];
  activeFlow: string;
  logoSrc: string;
  footer: ReactNode;
}>;

export function AppShell({
  bannerLabel,
  bannerTitle,
  flowTabs,
  activeFlow,
  logoSrc,
  footer,
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#edf3f8_0%,#e7eef6_100%)] px-4 py-6 text-slate-900 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-[#bcc9d8] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(31,47,74,0.05)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3.5 md:gap-4">
            <img
              src={logoSrc}
              alt="Logo da Polícia Penal do Rio Grande do Norte"
              className="h-[84px] w-[84px] shrink-0 object-contain object-center drop-shadow-[0_6px_14px_rgba(20,33,61,0.12)] md:h-[92px] md:w-[92px]"
            />
            <div className="flex flex-col justify-center gap-1">
              <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {bannerLabel}
              </span>
              <p className="text-[1rem] leading-6 font-semibold text-[var(--color-primary)] md:text-[1.02rem]">
                {bannerTitle}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-2 md:max-w-[470px] md:justify-end">
            <span className="mr-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              Fluxos
            </span>
            {flowTabs.map((tab) => {
              const isActive = tab === activeFlow;

              return (
                <button
                  key={tab}
                  type="button"
                  aria-pressed={isActive}
                  className={[
                    'rounded-full px-3 py-2 text-sm font-semibold transition',
                    isActive
                      ? 'bg-[var(--color-success-soft)] text-[var(--color-success)] ring-1 ring-[#b9d9c9]'
                      : 'border border-[#cfdae8] bg-white text-[var(--color-text-muted)] hover:border-[#adc0d6] hover:text-[var(--color-primary-strong)]',
                  ].join(' ')}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <main className="overflow-hidden rounded-[20px] border border-[#c8d3e0] bg-white shadow-[0_14px_30px_rgba(20,33,61,0.08)]">
          {children}
          {footer}
        </main>
      </div>
    </div>
  );
}
