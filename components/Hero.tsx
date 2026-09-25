"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeIndianRupee,
  FileText,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
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
            Making domestic work{" "}
            <span className="text-mint">financially visible.</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:mx-0"
          >
            Servy connects households and domestic workers through organized
            employment, salary payments, invoices and financial records.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start"
          >
            <a
              href="#for-households"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              I&apos;m a Household
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#for-workers"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-mint px-7 py-3.5 text-base font-semibold text-brand-dark transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              I&apos;m a Domestic Worker
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </motion.div>
          <motion.p
            {...fadeUp(0.3)}
            className="mt-5 text-sm font-medium tracking-wide text-white/70"
          >
            One platform. Two sides. Better records.
          </motion.p>

          <motion.div
            {...fadeUp(0.33)}
            className="mt-8 flex flex-col items-center gap-3 lg:items-start"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Download the app
            </p>
            <StoreButtons
              tone="light"
              className="justify-center lg:justify-start"
            />
          </motion.div>

          <motion.ul
            {...fadeUp(0.36)}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium text-white/75 lg:justify-start"
          >
            {[
              { icon: ShieldCheck, label: "Verified Users" },
              { icon: BadgeIndianRupee, label: "Secure Payments" },
              { icon: ReceiptText, label: "Official Records" },
              { icon: FileText, label: "Financial Identity" },
            ].map((item) => (
              <li key={item.label} className="inline-flex items-center gap-2">
                <item.icon className="size-4 text-mint" aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Desktop: full-bleed photo filling the right half, melting into the indigo */}
        <motion.div
          className="absolute inset-y-0 right-0 hidden w-[54%] lg:block"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          aria-hidden="true"
        >
          <Image
            src="/images/hero-family-living.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="54vw"
            className="object-cover object-center [mask-image:linear-gradient(to_right,transparent,black_22%,black_88%,transparent_100%)]"
          />
        </motion.div>

        {/* Desktop: phone standing over the photo */}
        <motion.div
          className="absolute right-10 top-1/2 hidden w-48 -translate-y-1/2 xl:right-16 xl:w-56"
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 42, scale: 0.96 }
          }
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/app-screens/servy-app-home.webp"
            alt="Servy app showing household workers, salary payments and records"
            width={941}
            height={1672}
            sizes="224px"
            className="h-auto w-full drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Mobile / tablet: full-bleed photo band below the text */}
      <motion.div
        className="relative mt-12 lg:hidden"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero-family-living.webp"
          alt="Indian household smiling together with their domestic worker"
          width={1448}
          height={1086}
          sizes="100vw"
          className="h-72 w-full object-cover object-center [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] sm:h-96"
        />
      </motion.div>

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
