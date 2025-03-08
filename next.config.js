/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows Next.js to use standard <img> instead of the Next.js optimization loader
  },
};

module.exports = nextConfig;
