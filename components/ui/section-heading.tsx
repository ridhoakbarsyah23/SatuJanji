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
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-semibold leading-tight text-gray-950 sm:text-4xl lg:text-5xl">
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
