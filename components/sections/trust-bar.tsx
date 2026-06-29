import { Reveal } from "@/components/ui/reveal";
import { trustItems } from "@/lib/site-content";

export function TrustBar() {
  return (
    <section className="bg-white pb-20">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-lg bg-cream/70 px-5 py-4"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white text-gold shadow-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-gray-950">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
