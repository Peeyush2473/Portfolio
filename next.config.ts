import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
      "*.svg": {
        condition: {
          query: /[?&]react(?:&|$)/,
        },
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;