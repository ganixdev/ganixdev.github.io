import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remove basePath for root deployment - uncomment and set if deploying to a subfolder
  // basePath: '/linksan-landing',
  // assetPrefix: '/linksan-landing/',
};

export default nextConfig;
