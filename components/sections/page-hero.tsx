import { ArrowDown, Sparkles } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  targetId?: string;
};

export function PageHero({ eyebrow, title, description, targetId }: PageHeroProps) {
  return (
    <section className="site-page-hero py-16 sm:py-24 lg:py-28">
      <div className="section-shell relative z-10">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-gold shadow-sm backdrop-blur">
            <Sparkles className="size-4" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="text-balance-safe mt-6 font-serif text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.035em] text-gray-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            {description}
          </p>
          {targetId ? (
            <a
              href={`#${targetId}`}
              className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/30"
            >
              Jelajahi selengkapnya
              <ArrowDown className="size-4 text-gold" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
