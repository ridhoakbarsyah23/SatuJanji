"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

// Native modal dialogs enter the browser's top layer, above transformed cards,
// sticky sidebars, and mobile drawers. The browser also contains keyboard focus.
export function ModalLayer({ children, labelledBy, onClose }: {
  children: ReactNode;
  labelledBy: string;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    dialog?.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus({ preventScroll: true });
      }
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={labelledBy}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      className="fixed inset-0 m-0 h-[100dvh] max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-transparent"
    >
      {children}
    </dialog>,
    document.body,
  );
}
