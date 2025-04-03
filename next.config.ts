import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here 
  ### COMMENT THESE OUT IF RUNNING 'NPM RUN DEV' ###
  */
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  output: "export"  // <=== enables static exports

};

export default nextConfig;
