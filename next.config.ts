import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  basePath: "/personal-web",
  assetPrefix: "/personal-web",
};

export default nextConfig;