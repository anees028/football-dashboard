import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // <--- This fixes the error
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Good security practice
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
  },
};

export default nextConfig;