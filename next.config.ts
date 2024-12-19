import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.prod.website-files.com"], // Add the allowed domain here
  },
};

export default nextConfig;
