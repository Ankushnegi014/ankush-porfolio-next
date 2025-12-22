import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/ankush-porfolio-next/',
  basePath: '/ankush-porfolio-next',
  output: 'export'
};

export default nextConfig;
