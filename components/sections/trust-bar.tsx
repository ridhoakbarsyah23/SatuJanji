import { Reveal } from "@/components/ui/reveal";
import { IconBadge } from "@/components/ui/icon-badge";
import { trustItems } from "@/lib/site-content";

export function TrustBar() {
  return (
    <section className="relative bg-white pb-20 pt-2 sm:pb-24">
      <div className="section-shell">
        <Reveal>
          <div className="grid gap-2 rounded-[28px] border border-gray-100 bg-white p-2.5 shadow-[0_24px_80px_rgba(23,23,23,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 rounded-[20px] bg-cream/70 px-4 py-4 transition hover:bg-cream sm:px-5"
                >
                  <IconBadge icon={Icon} className="size-11 rounded-2xl transition group-hover:-translate-y-0.5" />
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
