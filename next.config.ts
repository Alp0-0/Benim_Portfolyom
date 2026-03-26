import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Vercel'in TypeScript hatalarını görmezden gelmesini sağlar
    ignoreBuildErrors: true,
  },
  eslint: {
    // Vercel'in ESLint uyarılarını görmezden gelmesini sağlar
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;