import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  output: "export"  // <=== enables static exports

};

export default nextConfig;
