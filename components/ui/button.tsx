import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-gold text-white shadow-glow hover:-translate-y-0.5 hover:bg-[#a87f36]",
  secondary:
    "border border-gray-200 bg-white text-gray-900 shadow-soft hover:-translate-y-0.5 hover:border-gold/40",
  ghost: "text-gray-700 hover:bg-cream hover:text-gray-950",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
