type HeroHeaderProps = {
  title: string;
  highlight: string;
  description: string;
  highlights: string[];
};

const summaryItems = ['Fluxo guiado', 'Registro contínuo', 'Exportação em PDF'];

export function HeroHeader({
  title,
  highlight,
  description,
  highlights,
}: HeroHeaderProps) {
  return (
    <section className="border-b border-[#314e72] bg-[linear-gradient(180deg,#2c4c71,#25415f)] px-4 py-4 text-white sm:px-5 md:px-9">
      <div className="grid gap-4 md:gap-5 lg:grid-cols-[minmax(0,1.75fr)_260px] lg:items-start">
        <div className="flex min-w-0 flex-col gap-2.5">
          <span className="inline-flex w-fit rounded-full border border-white/14 bg-white/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/78">
            SEAP FLUXOGRAMAS
          </span>

          <h1 className="max-w-none text-[1.02rem] leading-[1.18] font-bold tracking-[0.01em] uppercase sm:text-[1.14rem] md:text-[1.35rem] lg:text-[1.48rem]">
            <span className="text-white">{title} </span>
            <span className="text-[var(--color-accent)]">{highlight}</span>
          </h1>

          <p className="max-w-[62ch] text-[0.9rem] leading-6 text-white/84 md:text-justify md:text-[0.95rem]">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {summaryItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/14 bg-white/8 px-3 py-1.5 text-[11px] font-semibold text-white/82 sm:text-xs"
              >
                {item}
              </span>
            ))}
          </div>

          <span className="mt-1 inline-flex w-fit rounded-full border border-[#d88c8c] bg-[#8f2f2f] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[0_6px_14px_rgba(95,24,24,0.18)]">
            Sistema em desenvolvimento
          </span>
        </div>

        <aside className="w-full max-w-none rounded-2xl border border-white/10 bg-white/7 px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:max-w-[380px] lg:max-w-[260px] lg:justify-self-end">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/68">
            Visão geral
          </h2>
          <div className="mt-3 space-y-2.5 text-justify text-[0.82rem] leading-6 text-white/82 sm:text-[0.84rem]">
            <p>{highlights[0]}</p>
            <p>{highlights[1]}</p>
            <p className="font-semibold text-[var(--color-accent)]">{highlights[2]}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
