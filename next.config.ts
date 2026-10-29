import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["framer-motion", "motion-dom", "tailwind-merge"]
};

export default nextConfig;
