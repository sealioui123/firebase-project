/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React StrictMode for development
  reactStrictMode: true,
  
  // Static export for Firebase hosting
  output: 'export',
  
  // Add build output options
  poweredByHeader: false,
  
  // Images optimalization config for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
