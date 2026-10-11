import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leetcard.jacoblin.cool',
        pathname: '/rpmakki',
      },
    ],
  },
};

export default nextConfig;
