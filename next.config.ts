import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['hip-robin-active.ngrok-free.app'], // Domain ohne "https://" hier
    },
    output: 'export',
    distDir: 'build' // <--- Hier setzt du dein eigenes Build-Verzeichnis!
};

export default nextConfig;
