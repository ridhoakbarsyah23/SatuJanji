"use client";

import { useEffect } from "react";
import { ErrorFallback } from "@/components/ui/error-fallback";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error("Application root error", error);
  }, [error]);

  return (
    <html lang="id">
      <body>
        <ErrorFallback />
      </body>
    </html>
  );
}
