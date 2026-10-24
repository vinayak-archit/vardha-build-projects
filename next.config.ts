
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vardha-build-projects",

  images: {
    unoptimized: true,
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
