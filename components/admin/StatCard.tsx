"use client";

import { HelpCircle, LayoutTemplate, PackageCheck, UsersRound } from "lucide-react";
import { motion } from "framer-motion";

export type StatCardItem = {
  label: string;
  value: number;
  trend: string;
  icon: "template" | "package" | "faq" | "leads";
};

const statIcons = {
  template: LayoutTemplate,
  package: PackageCheck,
  faq: HelpCircle,
  leads: UsersRound,
};

export function StatCard({ item, index }: { item: StatCardItem; index: number }) {
  const Icon = statIcons[item.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="rounded-[20px] border border-[#ECE8E2] bg-white p-5 shadow-[0_14px_40px_rgba(17,24,39,0.045)] transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(17,24,39,0.09)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-[#F7F3EE] text-[#C79A4A]">
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-[#22C55E]">
          {item.trend}
        </span>
      </div>
      <p className="mt-5 text-sm font-medium text-[#6B7280]">{item.label}</p>
      <p className="mt-2 text-4xl font-semibold tracking-normal text-[#111827]">
        {item.value}
      </p>
    </motion.article>
  );
}

export function StatsGrid({ items }: { items: StatCardItem[] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <StatCard key={item.label} item={item} index={index} />
      ))}
    </section>
  );
}
