import { Headphones, MonitorSmartphone, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const trustItems = [
  {
    value: "100+",
    label: "Undangan dibuat",
    icon: Rocket,
  },
  {
    value: "24 Jam",
    label: "Siap dibagikan",
    icon: ShieldCheck,
  },
  {
    value: "Mobile",
    label: "Responsif di semua perangkat",
    icon: MonitorSmartphone,
  },
  {
    value: "Admin",
    label: "Dibantu sampai publish",
    icon: Headphones,
  },
];

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
                  key={item.label}
                  className="flex items-center gap-4 rounded-lg bg-cream/70 px-5 py-4"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-white text-gold shadow-sm">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-lg font-bold text-gray-950">{item.value}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
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
