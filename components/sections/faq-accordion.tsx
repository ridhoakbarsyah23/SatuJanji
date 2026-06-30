"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

export type FAQAccordionItem = {
  id: string;
  title: string;
  meta: string;
};

type FAQAccordionProps = {
  items: FAQAccordionItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  return (
    <div className="mx-auto mt-14 grid max-w-4xl gap-4">
      {items.map((faq, index) => {
        const isActive = activeId === faq.id;
        const answerId = `faq-answer-${faq.id}`;

        return (
          <Reveal key={faq.id} delay={index * 0.04}>
            <article
              className={`overflow-hidden rounded-lg border bg-white shadow-soft transition-colors duration-300 ${
                isActive ? "border-gold/30" : "border-gray-100"
              }`}
            >
              <button
                type="button"
                className="focus-ring flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-gray-950"
                aria-expanded={isActive}
                aria-controls={answerId}
                onClick={() => setActiveId(isActive ? "" : faq.id)}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <HelpCircle
                    className="size-5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span>{faq.title}</span>
                </span>
                <motion.span
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-cream text-gold"
                >
                  <ChevronDown className="size-4" aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.div
                    id={answerId}
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pl-14 text-sm leading-7 text-gray-600">
                      {faq.meta}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
