import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/index.htm',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
