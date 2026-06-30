"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const groups = [
  {
    label: "Hari Ini",
    items: ["Template Elegance dibuat", "Paket Premium diperbarui"],
  },
  {
    label: "Kemarin",
    items: ["FAQ baru ditambahkan", "Leads baru masuk"],
  },
];

export function ActivityTimeline() {
  return (
    <section className="rounded-[20px] border border-[#ECE8E2] bg-white p-4 shadow-[0_14px_40px_rgba(17,24,39,0.045)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[#111827]">Recent Activity</h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Ringkasan perubahan terbaru di dashboard.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-6">
        {groups.map((group, groupIndex) => (
          <div key={group.label}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">
              {group.label}
            </p>
            <div className="relative grid gap-4 pl-7">
              <span className="absolute bottom-2 left-[9px] top-2 w-px bg-[#ECE8E2]" />
              {group.items.map((item, itemIndex) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.25,
                    delay: groupIndex * 0.08 + itemIndex * 0.04,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  <span className="absolute -left-7 top-0 grid size-5 place-items-center rounded-full bg-green-50 text-[#22C55E] ring-4 ring-white">
                    <CheckCircle2 className="size-3.5" aria-hidden="true" />
                  </span>
                  <p className="break-words text-sm font-medium text-[#111827]">
                    {item}
                  </p>
                  <p className="mt-1 text-xs text-[#6B7280]">Sinkron otomatis</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
