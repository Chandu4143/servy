"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/content";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const handleToggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-3xl">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Questions, answered."
          description="How Servy employment records, invoices and salary slips work."
        />

        <dl className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-card"
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-ink sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-brand transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.dd
                      id={`faq-panel-${index}`}
                      key="panel"
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { height: "auto", opacity: 1 }
                      }
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden px-6 text-sm leading-relaxed text-ink-soft sm:text-base"
                    >
                      <p className="pb-5">{item.answer}</p>
                    </motion.dd>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default Faq;