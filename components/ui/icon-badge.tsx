import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  variant?: "light" | "dark";
  className?: string;
};

export function IconBadge({
  icon: Icon,
  variant = "light",
  className = "",
}: IconBadgeProps) {
  const palette =
    variant === "dark"
      ? "border-white/10 bg-white/[0.08] text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
      : "border-gold/15 bg-gradient-to-br from-white to-cream text-gold shadow-[0_10px_30px_rgba(181,137,64,0.12)]";

  return (
    <span
      className={`relative grid size-12 shrink-0 place-items-center rounded-[18px] border ${palette} ${className}`}
      aria-hidden="true"
    >
      <span className="absolute right-2 top-2 size-1.5 rounded-full bg-gold/35" />
      <Icon className="size-[22px]" strokeWidth={1.75} />
    </span>
  );
}
