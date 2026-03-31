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
    <div className="min-h-screen bg-[linear-gradient(180deg,#edf3f8_0%,#e7eef6_100%)] px-3 py-4 text-slate-900 sm:px-4 sm:py-5 md:px-6 md:py-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 flex flex-col gap-3 rounded-2xl border border-[#bcc9d8] bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(31,47,74,0.05)] sm:mb-4 sm:px-5 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-5">
          <div className="flex min-w-0 items-center gap-3 lg:flex-1 lg:gap-4">
            <img
              src={logoSrc}
              alt="Logo da Polícia Penal do Rio Grande do Norte"
              className="h-[62px] w-[62px] shrink-0 object-contain object-center drop-shadow-[0_6px_14px_rgba(20,33,61,0.12)] sm:h-[72px] sm:w-[72px] md:h-[92px] md:w-[92px]"
            />
            <div className="flex flex-col justify-center gap-1">
              <span className="text-center text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {bannerLabel}
              </span>
              <p className="text-[0.95rem] leading-5 font-semibold text-[var(--color-primary)] sm:text-[1rem] md:text-[1.02rem]">
                {bannerTitle}
              </p>
            </div>
          </div>

          <div className="min-w-0 lg:max-w-[720px]">
            <div className="mb-1 px-1 text-center lg:px-0">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                Escolha o Fluxo:
              </span>
            </div>
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:mx-0 md:grid md:grid-cols-2 md:gap-2 md:overflow-visible md:px-0 md:pb-0 lg:justify-items-stretch">
              {flowTabs.map((tab) => {
                const isActive = tab === activeFlow;

                return (
                  <button
                    key={tab}
                    type="button"
                    aria-pressed={isActive}
                    className={[
                      'shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[0.77rem] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/30 sm:px-3 sm:text-[0.8rem] md:w-full lg:text-[0.84rem]',
                      isActive
                        ? 'bg-[var(--color-success-soft)] text-[var(--color-success)] ring-1 ring-[#b9d9c9] shadow-[inset_0_0_0_1px_rgba(47,143,91,0.08)]'
                        : 'border border-[#d4deea] bg-[#fbfcfe] text-[var(--color-text-muted)] hover:border-[#b7c8da] hover:bg-white hover:text-[var(--color-primary-strong)]',
                    ].join(' ')}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
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
