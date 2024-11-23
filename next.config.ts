import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Add this option to ignore linting errors during the build
  },
  /* other config options here */
};

export default nextConfig;
