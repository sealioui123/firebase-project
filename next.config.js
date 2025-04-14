/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React StrictMode for development
  reactStrictMode: true,
  
  // Keep the server alive - prevent idle timeout
  experimental: {
    keepAlive: 1000 * 60 * 5, // 5 minutes keepalive
  },
  
  // Add build output options
  poweredByHeader: false,
}

module.exports = nextConfig
