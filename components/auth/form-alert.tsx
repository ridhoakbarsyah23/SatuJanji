"use client";

import { AlertCircle, CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";

type FormAlertProps = {
  type: "success" | "error";
  title: string;
  message: string;
};

export function FormAlert({ type, title, message }: FormAlertProps) {
  const [visible, setVisible] = useState(true);
  const Icon = type === "success" ? CheckCircle2 : AlertCircle;
  const tone =
    type === "success"
      ? "border-green-100 bg-green-50 text-green-700"
      : "border-red-100 bg-red-50 text-red-700";

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 5200);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={`mt-6 flex items-start gap-3 rounded-lg border p-4 ${tone}`}
    >
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-sm leading-6">{message}</p>
      </div>
      <button
        type="button"
        className="focus-ring grid size-7 shrink-0 place-items-center rounded-full hover:bg-white/70"
        aria-label="Tutup alert"
        onClick={() => setVisible(false)}
      >
        <X className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}
