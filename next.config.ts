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
