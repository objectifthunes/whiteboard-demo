import type { NextConfig } from "next";

const isCI = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isCI ? "/whiteboard-demo" : undefined,
  assetPrefix: isCI ? "/whiteboard-demo/" : undefined,
  trailingSlash: true,
};

export default nextConfig;
