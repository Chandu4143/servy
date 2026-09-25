/**
 * StoreButtons — App Store / Google Play badges (Hero, AppShowcase, CTA).
 * Artwork: `public/brand/app-store.png`, `google-play.png`.
 * Links (`appStoreUrl` / `playStoreUrl` in siteConfig) are `#download`
 * placeholders — swap in real store URLs when the app ships. The `tone`
 * prop is currently unused and kept for future dark/light badge variants.
 */
import Image from "next/image";
import { siteConfig } from "@/data/site";

type StoreButtonsProps = {
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Official store badges — artwork lives in `public/brand/`.
 * The URLs live in `siteConfig` and are placeholders until the
 * published App Store / Play Store listings are available.
 */
const StoreButtons = ({ className = "" }: StoreButtonsProps) => (
  <div className={`flex flex-wrap items-center gap-4 ${className}`}>
    <a
      href={siteConfig.appStoreUrl}
      aria-label="Download Servy on the App Store (link coming soon)"
      className="inline-block rounded-xl transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
    >
      <Image
        src="/brand/app-store.png"
        alt="Download on the App Store"
        width={1571}
        height={468}
        className="block h-14 w-auto sm:h-16"
      />
    </a>
    <a
      href={siteConfig.playStoreUrl}
      aria-label="Get Servy on Google Play (link coming soon)"
      className="inline-block rounded-xl transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
    >
      <Image
        src="/brand/google-play.png"
        alt="Get it on Google Play"
        width={568}
        height={172}
        className="block h-14 w-auto sm:h-16"
      />
    </a>
  </div>
);

export default StoreButtons;
