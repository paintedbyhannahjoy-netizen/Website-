import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/portfolio", destination: "/work", permanent: true },
      { source: "/case-studies", destination: "/work", permanent: true },
      { source: "/brands", destination: "/work-with-me", permanent: true },
      { source: "/contact", destination: "/work-with-me", permanent: true },
    ];
  },
};

export default nextConfig;
