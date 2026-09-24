import Image from "next/image";

type LogoProps = {
  tone?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
};

/**
 * Servy wordmark + app mark. `tone="light"` renders for dark backgrounds.
 * Uses the cropped brand logo so it fits the navbar icon slot.
 */
const Logo = ({
  tone = "dark",
  showWordmark = true,
  className = "",
}: LogoProps) => {
  const isLight = tone === "light";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-white shadow-[0_2px_10px_-4px_rgba(32,33,36,0.35)]"
        aria-hidden="true"
      >
        <Image
          src="/brand/servy-logo.png"
          alt=""
          width={64}
          height={64}
          priority
          className="h-9 w-9 object-contain"
        />
      </span>
      {showWordmark ? (
        <span
          className={`text-xl font-bold tracking-tight ${
            isLight ? "text-white" : "text-ink"
          }`}
        >
          Servy
        </span>
      ) : null}
    </span>
  );
};

export default Logo;
