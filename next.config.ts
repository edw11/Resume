import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects/0",
        destination: "/projects/nasagram",
        permanent: true,
      },
      {
        source: "/projects/1",
        destination: "/projects/nike-clone",
        permanent: true,
      },
      {
        source: "/projects/2",
        destination: "/projects/speech-emotion-recognition",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
