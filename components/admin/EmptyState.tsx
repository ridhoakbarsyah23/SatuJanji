import Link from "next/link";
import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="grid place-items-center rounded-[20px] border border-dashed border-[#ECE8E2] bg-[#FAFAF8] px-6 py-10 text-center">
      <span className="grid size-14 place-items-center rounded-2xl bg-white text-[#C79A4A] shadow-sm">
        <Inbox className="size-7" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-base font-semibold text-[#111827]">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-[#6B7280]">{description}</p>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className="focus-ring mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#C79A4A] px-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(199,154,74,0.22)] transition hover:bg-[#ad833b]"
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
