"use client";

import {
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
  icon: "template" | "package" | "faq" | "leads";
};

const actionIcons = {
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
        className="focus-ring group flex h-full items-start gap-4 rounded-[20px] border border-[#ECE8E2] bg-white p-5 shadow-[0_14px_40px_rgba(17,24,39,0.045)] transition duration-300 hover:border-[#C79A4A]/35 hover:shadow-[0_24px_70px_rgba(17,24,39,0.08)]"
      >
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#F7F3EE] text-[#C79A4A] transition group-hover:bg-[#C79A4A] group-hover:text-white">
          <Icon className="size-[22px]" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-base font-semibold text-[#111827]">
            {action.title}
          </span>
          <span className="mt-2 block text-sm leading-6 text-[#6B7280]">
            {action.description}
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
