import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // or '20mb' if you expect big uploads
    },
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false, // 👈 disable 'fs' polyfill
      path: false,
    };
    return config;
  },
};

export default nextConfig;
