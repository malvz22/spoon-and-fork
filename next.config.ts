import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.spoonacular.com",
      },
      {
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
