import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    staleTimes: {
      dynamic: 30, // 30 seconds
      static: 180, // 30 minutes
    },
  },
};

export default nextConfig;
