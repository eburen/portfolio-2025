import type { NextConfig } from "next";
import { fileURLToPath } from 'url';
import path from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // For development simplicity, can be removed in production
  },

  // Add webpack config to ensure proper handling of JSON imports
  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });
    return config;
  },
};

export default nextConfig;
