"use client";

import { BookHeart, LayoutTemplate, Send, UsersRound } from "lucide-react";
import { motion } from "framer-motion";

export type StatCardItem = {
  label: string;
  value: number;
  helper: string;
  icon: "invitation" | "published" | "template" | "requests";
};

const styles = {
  invitation: { icon: BookHeart, color: "bg-violet-50 text-violet-600", glow: "bg-violet-400" },
  published: { icon: Send, color: "bg-emerald-50 text-emerald-600", glow: "bg-emerald-400" },
  requests: { icon: UsersRound, color: "bg-amber-50 text-amber-700", glow: "bg-amber-400" },
  template: { icon: LayoutTemplate, color: "bg-sky-50 text-sky-600", glow: "bg-sky-400" },
};

export function StatCard({ item, index }: { item: StatCardItem; index: number }) {
  const style = styles[item.icon];
  const Icon = style.icon;
  return (
    <motion.article initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.04 }} whileHover={{ y: -3 }} className="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition-shadow hover:shadow-[0_20px_55px_rgba(15,23,42,0.1)]">
      <span className={`absolute -right-8 -top-8 size-24 rounded-full opacity-[0.08] blur-2xl ${style.glow}`} />
      <div className="relative flex items-start justify-between gap-4">
        <div><p className="text-sm font-semibold text-slate-500">{item.label}</p><p className="mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-950">{item.value}</p><p className="mt-2 text-xs leading-5 text-slate-400">{item.helper}</p></div>
        <span className={`grid size-11 place-items-center rounded-2xl ${style.color}`}><Icon className="size-5" strokeWidth={1.8} aria-hidden="true" /></span>
      </div>
    </motion.article>
  );
}

export function StatsGrid({ items }: { items: StatCardItem[] }) {
  return <section aria-label="Ringkasan pengelolaan" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{items.map((item, index) => <StatCard key={item.label} item={item} index={index} />)}</section>;
}
