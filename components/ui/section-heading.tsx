import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full border border-gold/15 bg-gold/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance-safe font-serif text-3xl font-semibold leading-[1.12] tracking-[-0.025em] text-gray-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
