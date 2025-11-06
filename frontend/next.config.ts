import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://dach-selber-decken.de/**')],
  },
};

export default nextConfig;
