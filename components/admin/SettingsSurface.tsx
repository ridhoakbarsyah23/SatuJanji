import type { LucideIcon } from "lucide-react";

type SettingCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type SettingsSurfaceProps = {
  eyebrow: string;
  title: string;
  description: string;
  cards: SettingCard[];
};

export function SettingsSurface({
  eyebrow,
  title,
  description,
  cards,
}: SettingsSurfaceProps) {
  return (
    <div className="grid gap-5 sm:gap-6">
      <section className="rounded-[20px] border border-[#ECE8E2] bg-white p-5 shadow-[0_14px_40px_rgba(17,24,39,0.045)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C79A4A]">
          {eyebrow}
        </p>
        <h2
          className="mt-3 break-words text-3xl font-semibold leading-tight text-[#111827] sm:text-4xl"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6B7280]">
          {description}
        </p>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className="rounded-[20px] border border-[#ECE8E2] bg-white p-5 shadow-[0_14px_40px_rgba(17,24,39,0.045)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(17,24,39,0.08)]"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-[#F7F3EE] text-[#C79A4A]">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 break-words text-base font-semibold text-[#111827]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                {card.description}
              </p>
            </article>
          );
        })}
      </section>
    </div>
  );
}
