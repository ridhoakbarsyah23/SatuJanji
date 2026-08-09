"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  X,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useState, type ReactNode } from "react";
import {
  ToastContext,
  useToast,
  type Toast,
  type ToastType,
} from "@/lib/toast-store";

const iconMap: Record<ToastType, LucideIcon> = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

const styleMap: Record<ToastType, { iconBg: string; iconColor: string; border: string }> = {
  success: {
    border: "border-green-100",
    iconBg: "bg-green-50",
    iconColor: "text-[#22C55E]",
  },
  error: {
    border: "border-red-100",
    iconBg: "bg-red-50",
    iconColor: "text-[#EF4444]",
  },
  info: {
    border: "border-blue-100",
    iconBg: "bg-blue-50",
    iconColor: "text-[#3B82F6]",
  },
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<Toast, "id">) => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { ...toast, id }]);
      const duration = toast.duration ?? 5000;
      setTimeout(() => removeToast(id), duration);
    },
    [removeToast],
  );

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute right-0 top-0 z-[200] flex items-start justify-end p-4 sm:p-6"
      aria-live="polite"
    >
      <div className="pointer-events-auto flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => {
            const Icon = iconMap[toast.type];
            const style = styleMap[toast.type];

            return (
              <motion.div
                key={toast.id}
                layout
                initial={{ opacity: 0, x: 80, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 80, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`flex w-[calc(100vw-2rem)] max-w-sm items-start gap-3 rounded-2xl border bg-white p-4 shadow-[0_24px_70px_rgba(17,24,39,0.12)] sm:w-auto ${style.border}`}
                role="status"
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-xl ${style.iconBg} ${style.iconColor}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#111827]">
                    {toast.message}
                  </p>
                  {toast.description ? (
                    <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                      {toast.description}
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  className="focus-ring grid size-7 shrink-0 place-items-center rounded-full text-[#9CA3AF] transition hover:bg-[#F7F3EE] hover:text-[#111827]"
                  aria-label="Tutup notifikasi"
                  onClick={() => removeToast(toast.id)}
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
