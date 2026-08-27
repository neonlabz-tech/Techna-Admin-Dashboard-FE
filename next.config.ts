import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
       {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',

      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
        {
        protocol: 'https',
        hostname: 'placehold.net',
        pathname: '/**',
      },

      {
          protocol: 'https',
          hostname: 'pub-99e17fed1d7345978ebaceb328549b8f.r2.dev',
          pathname: '/**',
        }
    ],
  },
  
  // Optimize production build
  swcMinify: true,
  
  // Enable production source maps for debugging (optional, disable for smaller builds)
  productionBrowserSourceMaps: false,
  
  // Optimize JavaScript and CSS
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'recharts', 'date-fns'],
  },

};

export default nextConfig;