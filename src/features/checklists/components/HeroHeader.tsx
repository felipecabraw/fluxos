type HeroHeaderProps = {
  title: string;
  highlight: string;
  description: string;
  highlights: string[];
};

export function HeroHeader({ title, highlight, description, highlights }: HeroHeaderProps) {
  return (
    <section className="border-b border-[#314e72] bg-[linear-gradient(180deg,#2c4c71,#25415f)] px-5 py-4 text-white md:px-9">
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
        <div className="flex flex-col gap-2.5">
          <span className="inline-flex w-fit rounded-full border border-white/14 bg-white/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/78">
            SEAP FLUXOGRAMAS
          </span>
          <h1 className="max-w-3xl text-[1.45rem] leading-tight font-bold tracking-[-0.03em] md:text-[1.85rem]">
            {title} <span className="text-[var(--color-accent)]">{highlight}</span>
          </h1>
          <p className="max-w-3xl text-[0.93rem] leading-6 text-white/82">{description}</p>
          <span className="inline-flex w-fit rounded-full border border-[#d88c8c] bg-[#8f2f2f] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white">
            Sistema em desenvolvimento
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3.5">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/68">
            Visão geral
          </h2>
          <div className="mt-2 space-y-2 text-[0.82rem] leading-5 text-white/80">
            <p>{highlights[0]}</p>
            <p>{highlights[1]}</p>
            <p className="text-[var(--color-accent)]">{highlights[2]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
