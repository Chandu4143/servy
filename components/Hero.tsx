"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import DotGrid from "@/components/ui/DotGrid";
import StoreButtons from "@/components/ui/StoreButtons";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="home"
      className="relative isolate scroll-mt-24 overflow-hidden bg-brand pb-28 pt-28 text-white sm:pt-32 lg:pb-52 lg:pt-36"
    >
      <span
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand via-brand to-brand-dark"
        aria-hidden="true"
      />
      <span
        className="absolute -left-24 top-1/3 -z-10 size-72 rounded-full bg-brand-mid/40 blur-3xl"
        aria-hidden="true"
      />
      <span
        className="absolute -right-16 bottom-0 -z-10 size-80 rounded-full bg-mint/20 blur-3xl"
        aria-hidden="true"
      />
      <DotGrid
        className="absolute right-5 top-24 -z-10 hidden text-white/45 sm:grid lg:right-10"
        columns={7}
        rows={8}
      />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <motion.h1
            {...fadeUp(0)}
            className="text-[2.75rem] font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Trusted help,{" "}
            <span className="text-mint">right around the corner.</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0"
          >
            Book reliable professionals for cleaning, cooking, washing, ironing
            and everyday services — whenever you need them.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Find a Service
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#for-professionals"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Become a Professional
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.32)}
            className="mt-9 flex flex-col items-center gap-4 lg:items-start"
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              <ShieldCheck className="size-4" aria-hidden="true" />
              Download the app
            </p>
            <StoreButtons tone="light" className="justify-center lg:justify-start" />
          </motion.div>
        </div>
        <motion.div
          className="relative mx-auto w-full max-w-[380px] sm:max-w-[405px] lg:max-w-[425px]"
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 42, scale: 0.96 }
          }
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="absolute inset-x-6 top-14 -z-10 h-64 rounded-[3rem] bg-brand-mid/45 blur-2xl"
            aria-hidden="true"
          />
          <Image
            src="/app-screens/servy-app-home.webp"
            alt="Servy app home screen listing cleaning, cooking, washing and ironing services"
            width={941}
            height={1672}
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 425px, 80vw"
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      {/* Curvy divider into the next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 leading-none"
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-[70px] w-full sm:h-[110px] lg:h-[170px]"
        >
          <path
            d="M0,70 C240,112 480,120 720,90 C960,60 1200,14 1440,54 L1440,120 L0,120 Z"
            fill="#f8f7f9"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
