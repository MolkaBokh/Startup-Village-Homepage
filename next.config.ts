import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
  async redirects() {
    return [
      // The page lives at "/"; keep the old path working.
      { source: "/startup-village-menzah", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
