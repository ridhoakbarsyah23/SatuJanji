"use client";

import {
  ArrowUpRight,
  BookHeart,
  LayoutTemplate,
  PackageCheck,
  PlusCircle,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export type QuickAction = {
  title: string;
  description: string;
  href: string;
  icon: "invitation" | "template" | "package" | "faq" | "leads";
};

const actionTones = {
  invitation: "bg-violet-50 text-violet-600 group-hover:bg-violet-600",
  template: "bg-sky-50 text-sky-600 group-hover:bg-sky-600",
  package: "bg-amber-50 text-amber-600 group-hover:bg-amber-500",
  faq: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600",
  leads: "bg-rose-50 text-rose-600 group-hover:bg-rose-600",
};

const actionIcons = {
  invitation: BookHeart,
  template: LayoutTemplate,
  package: PackageCheck,
  faq: PlusCircle,
  leads: UsersRound,
};

export function QuickActionCard({
  action,
  index,
}: {
  action: QuickAction;
  index: number;
}) {
  const Icon = actionIcons[action.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -3, scale: 1.005 }}
    >
      <Link
        href={action.href}
        className="focus-ring group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_35px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]"
      >
        <span className={`grid size-12 shrink-0 place-items-center rounded-2xl transition duration-300 group-hover:text-white ${actionTones[action.icon]}`}>
          <Icon className="size-[22px]" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block pr-7 text-base font-bold text-slate-950">
            {action.title}
          </span>
          <span className="mt-1.5 block break-words text-sm leading-6 text-slate-500">
            {action.description}
          </span>
        </span>
        <ArrowUpRight className="absolute right-5 top-5 size-4 text-slate-300 transition group-hover:text-slate-700" strokeWidth={1.8} aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
