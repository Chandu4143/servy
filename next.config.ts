/**
 * Next.js config.
 * - `images.formats`: serve AVIF first, WebP fallback for smaller assets.
 * - `optimizePackageImports`: tree-shake lucide-react + framer-motion.
 * No custom domains, redirects, or backend rewrites — this is static.
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats first — AVIF where supported, WebP otherwise.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Tree-shake the icon + animation libraries to shrink the JS bundle.
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
