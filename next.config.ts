import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, 
  },
  basePath: "/personal-web", // <-- TAMBAHKAN BARIS INI
};

export default nextConfig;