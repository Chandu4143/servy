import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
};

const SectionHeading = ({
  id,
  title,
  description,
  eyebrow,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) => {
  const isCentered = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={`${isCentered ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            isLight ? "text-white/70" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl ${
          isLight ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            isCentered ? "mx-auto" : ""
          } ${isLight ? "text-white/80" : "text-ink-soft"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
