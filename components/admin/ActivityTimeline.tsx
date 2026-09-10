import { ArrowRight, ClipboardCheck, FileSearch, MessageCircleMore } from "lucide-react";
import Link from "next/link";

const steps = [
  { title: "Periksa permintaan baru", description: "Hubungi calon pasangan yang baru mengisi formulir.", href: "/admin/leads", icon: MessageCircleMore },
  { title: "Lengkapi data undangan", description: "Pastikan nama, waktu, lokasi, dan foto sudah benar.", href: "/admin/undangan", icon: ClipboardCheck },
  { title: "Periksa sebelum diterbitkan", description: "Buka pratinjau sebelum membagikan undangan ke tamu.", href: "/admin/undangan", icon: FileSearch },
];

export function ActivityTimeline() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.045)] sm:p-6">
      <h2 className="text-lg font-bold tracking-tight text-slate-950">Alur kerja singkat</h2>
      <p className="mt-1 text-sm text-slate-500">Tiga langkah agar pekerjaan tetap teratur.</p>
      <div className="mt-5 grid gap-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Link key={step.title} href={step.href} className="focus-ring group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-slate-50">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-slate-900 group-hover:text-white">
                <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-slate-900"><span className="mr-2 text-slate-300">0{index + 1}</span>{step.title}</span>
                <span className="mt-0.5 block text-xs leading-5 text-slate-500">{step.description}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-slate-700" aria-hidden="true" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
