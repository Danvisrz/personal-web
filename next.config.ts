import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Wajib untuk GitHub Pages
  },
};

export default nextConfig;