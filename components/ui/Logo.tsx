type LogoProps = {
  tone?: "dark" | "light";
  showWordmark?: boolean;
  className?: string;
};

/**
 * Servy wordmark + app mark. `tone="light"` renders for dark backgrounds.
 */
const Logo = ({
  tone = "dark",
  showWordmark = true,
  className = "",
}: LogoProps) => {
  const isLight = tone === "light";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-2xl ${
          isLight ? "bg-white" : "bg-brand"
        }`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 64 64" className="size-6" role="presentation">
          <path
            d="M32 12l4.4 10 10 4.4-10 4.4L32 41l-4.4-10.2-10-4.4 10-4.4z"
            fill={isLight ? "#283593" : "#ffffff"}
          />
          <circle cx="32" cy="50" r="4" fill="#4caf7a" />
        </svg>
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
